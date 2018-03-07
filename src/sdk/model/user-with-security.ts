import { User } from './user';
import { Role } from './role';
import { CompanyInventory } from './company-inventory';
import { PermissionType, UserJson } from './json';
import { Iland } from '../iland';
import { IamService } from '../service/iam-service';

/**
 * UserWithSecurity
 */
export class UserWithSecurity extends User {
  private _inventory: Array<CompanyInventory> = [];
  private _rolesCompanyMap: Map<string, Role> = new Map<string, Role>();

  constructor(_apiUser: UserJson) {
    super(_apiUser);
  }

  /**
   * Set the inventory for user.
   * @param {Array<CompanyInventory> | undefined} value
   */
  set inventory(value: Array<CompanyInventory>) {
    this._inventory = value;
  }

  /**
   * Set the roles for user.
   * @param {Map<string, Role>} value
   */
  set rolesCompanyMap(value: Map<string, Role>) {
    this._rolesCompanyMap = value;
  }

  /**
   * Get a map of user Role by company ID.
   * @returns {Map<string, Role>}
   */
  get rolesCompanyMap(): Map<string, Role> {
    return this._rolesCompanyMap;
  }

  /**
   * Get the user companyInventory list.
   * @returns {Array<CompanyInventory> | undefined}
   */
  get inventory(): Array<CompanyInventory> {
    return this._inventory;
  }

  /**
   * Gets a user by username.
   * @param username the user's username
   * @returns {Promise<User>}
   */
  static async getUser(username: string): Promise<UserWithSecurity> {
    return Iland.getHttp().get(`/user/${username}`).then((response) => {
      const apiUser = response.data as UserJson;
      return new UserWithSecurity(apiUser);
    });
  }

  /**
   * Gets the currently authenticated user.
   * @returns {Promise<User>}
   */
  static async getCurrentUser(): Promise<UserWithSecurity> {
    return Iland.getAuthProvider().getAuthenticatedUsername().then(async(username: string) => {
      if (username) {
        return UserWithSecurity.getUser(username).then(async(userWithSecurity) => {
          return UserWithSecurity.setup(userWithSecurity);
        });
      } else {
        return new Promise<UserWithSecurity>(function(_, reject) {
          reject();
        });
      }
    });
  }

  /**
   * Get user with security from an existing user.
   * @param {User} user
   * @returns {Promise<UserWithSecurity>}
   */
  static async getUserWithSecurity(user: User): Promise<UserWithSecurity> {
    const userWithSecurity = new UserWithSecurity(user.json);
    return UserWithSecurity.setup(userWithSecurity);
  }

  /**
   * Setup the userWithSecurity class. That will add the needed inventory and roles to the UserWithSecurity class.
   * @param {UserWithSecurity} userWithSecurity
   * @returns {Promise<UserWithSecurity>}
   */
  static async setup(userWithSecurity: UserWithSecurity): Promise<UserWithSecurity> {
    if (userWithSecurity.userType === 'CUSTOMER') {
      const promises: [Promise<Array<CompanyInventory>>, Promise<Array<Role>>] =
        [userWithSecurity.getInventory(), userWithSecurity.getRoles()];
      return Promise.all(promises).then(async(results: any[]) => {
        userWithSecurity.inventory = results[0] as Array<CompanyInventory>;
        const roles = results[1] as Array<Role>;
        const rolesCompanyMap: Map<string, Role> = new Map<string, Role>();
        for (const role of roles) {
          rolesCompanyMap.set(role.companyId, role);
        }
        userWithSecurity.rolesCompanyMap = rolesCompanyMap;
        return userWithSecurity;
      });
    } else {
      return new Promise<UserWithSecurity>((resolve) => {
        return resolve(userWithSecurity);
      });
    }
  }

  /**
   * Get a list of all user's roles.
   * @returns {Promise<Array<Role>>}
   */
  async getRoles(): Promise<Array<Role>> {
    const self = this;
    return this.getCompanies().then(async(companies) => {
      const roles: Array<Promise<Role>> = [];
      for (const company of companies) {
        roles.push(self.getRole(company.uuid));
      }
      return Promise.all(roles);
    });
  }

  /**
   * Check whether or not a user is allowed to perform an action or not.
   * @param {PermissionType} permissionType
   * @param {string} entityUuid
   * @returns {boolean}
   */
  isPermittedTo(permissionType: PermissionType, entityUuid: string): boolean {
    return IamService.isUserPermitted(this, entityUuid, permissionType);
  }
}
