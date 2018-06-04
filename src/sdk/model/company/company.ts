import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Role } from '../iam/role/role';
import { RoleCreationRequest } from '../iam/role/role-creation-request';
import { User } from '../user/user';
import { UserCreationRequest } from '../user/user-creation-request';
import { SupportTicket } from './support-ticket/support-ticket';
import { Org } from '../org/org';
import { Vapp } from '../vapp/vapp';
import { Vm } from '../vm/vm';
import { Vdc } from '../vdc/vdc';
import { CompanyJson } from './__json__/company-json';
import { EntityType } from '../common/__json__/entity-type';
import { RoleJson } from '../iam/role/__json__/role-json';
import { UserJson } from '../user/__json__/user-json';
import { SupportTicketJson } from './support-ticket/__json__/support-ticket-json';
import { OrgJson } from '../org/__json__/org-json';
import { VappJson } from '../vapp/__json__/vapp-json';
import { VdcJson } from '../vdc/__json__/vdc-json';
import { VmJson } from '../vm/__json__/vm-json';

/**
 * Company.
 */
export class Company extends Entity {

  constructor(private _json: CompanyJson) {
    super(_json);
  }

  /**
   * Gets an Company by ID.
   * @param id Company ID
   * @returns {Promise<Company>} promise that resolves with the Company
   */
  static async getCompany(id: string): Promise<Company> {
    return Iland.getHttp().get(`/companies/${id}`).then((response) => {
      const json = response.data as CompanyJson;
      return new Company(json);
    });
  }

  get entityType(): EntityType {
    return 'COMPANY';
  }

  /**
   * Indicates whether the company has the iland cloud product.
   * @returns {boolean} value
   */
  get hasIlandCloud(): boolean {
    return this._json.has_iaas;
  }

  /**
   * Indicates whether the company has the iland backup product.
   * @returns {boolean} value
   */
  get hasIlandBackup(): boolean {
    return this._json.has_vcc;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CompanyJson} the JSON representation
   */
  get json(): CompanyJson {
    return Object.assign({}, this._json);
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Refreshes the Company data by retrieving it from the API again.
   * @returns {Promise<Company>} promise that resolves with this object
   */
  async refresh(): Promise<Company> {
    return Iland.getHttp().get(`/companies/${this.uuid}`).then((response) => {
      this._json = response.data as CompanyJson;
      return this;
    });
  }

  /**
   * Get company roles.
   * @returns {Promise<Array<Role>>} task promise
   */
  async getRoles(): Promise<Array<Role>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/roles`).then((response) => {
      const json = response.data.data as Array<RoleJson>;
      return json.map((it) => new Role(it));
    });
  }

  /**
   * Get a company role.
   * @returns {Promise<Role>} a promise with the queried role
   */
  async getRole(uuid: string): Promise<Role> {
    return Iland.getHttp().get(`/companies/${this.uuid}/roles/${uuid}`).then((response) => {
      const json = response.data as RoleJson;
      return new Role(json);
    });
  }

  /**
   * Creates a new company role.
   * @returns {Promise<Role>} a promise with the newly created role
   */
  async createRole(request: RoleCreationRequest): Promise<Role> {
    return Iland.getHttp().post(`/companies/${this.uuid}/roles`, request.json).then((response) => {
      const json = response.data as RoleJson;
      return new Role(json);
    });
  }

  /**
   * Updates a company role.
   * @returns {Promise<Role>} a promise with the newly created role that has replaced the original
   */
  async updateRole(uuid: string, request: RoleCreationRequest): Promise<Role> {
    return Iland.getHttp().put(`/companies/${this.uuid}/roles/${uuid}`, request.json).then((response) => {
      const json = response.data as RoleJson;
      return new Role(json);
    });
  }

  /**
   * Deletes a new company role.
   * @returns {Promise<void>} a promise that indicates success or failure
   */
  async deleteRole(uuid: string): Promise<void> {
    return Iland.getHttp().delete(`/companies/${this.uuid}/roles/${uuid}`).then(() => undefined);
  }

  /**
   * Gets all company users.
   * @returns {Promise<Array<User>>} a promise with the list of the company users
   */
  async getUsers(): Promise<Array<User>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/users`).then((response) => {
      const json = response.data.data as Array<UserJson>;
      return json.map((it) => new User(it));
    });
  }

  /**
   * Gets all company users that are assigned to a specified role.
   * @returns {Promise<Array<User>>} a promise with the list of the company users that are assigned to the role
   */
  async getUsersWithRole(roleUuid: string): Promise<Array<User>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/users`, {
      params: {
        role: roleUuid
      }
    }).then((response) => {
      const json = response.data.data as Array<UserJson>;
      return json.map((it) => new User(it));
    });
  }

  /**
   * A company may have multiple user domains if they have users that are shared with other companies. This method
   * returns the identifiers for all domains that are associated with this company.
   * @returns {Promise<Array<string>>} a promise with the list of the company user domains
   */
  async getUserDomains(): Promise<Array<string>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/user-domains`).then((response) => {
      return response.data.data as Array<string>;
    });
  }

  /**
   * Creates a new company user.
   * @returns {Promise<User>} a promise with the newly created user
   */
  async createUser(request: UserCreationRequest): Promise<User> {
    return Iland.getHttp().post(`/companies/${this.uuid}/users`, request.json).then((response) => {
      const json = response.data as UserJson;
      return new User(json);
    });
  }

  /**
   * Get all support tickets
   * @param {number} offset
   * @param {number} limit
   * @param {string} search
   * @returns {Promise<Array<SupportTicket>>}
   */
  async getSupportTickets(offset?: number, limit?: number, search?: string): Promise<Array<SupportTicket>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/support-tickets`, {
      params: {
        offset: offset || 0,
        limit: limit || 10,
        search: search || ''
      }
    }).then((response) => {
      const supportTickets = response.data as Array<SupportTicketJson>;
      return supportTickets.map(it => new SupportTicket(it));
    });
  }

  /**
   * Get a specified support ticket.
   * @param {number} ticketId
   * @returns {Promise<SupportTicket>}
   */
  async getSupportTicket(ticketId: number): Promise<SupportTicket> {
    return Iland.getHttp().get(`/companies/${this.uuid}/support-tickets/${ticketId}`).then((response) => {
      const supportTicket = response.data as SupportTicketJson;
      return new SupportTicket(supportTicket);
    });
  }

  /**
   * Get all organizations in the company location
   * @param {string} locationId
   * @returns {Promise<Array<Org>>}
   */
  async getOrganizations(locationId: string): Promise<Array<Org>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/orgs`).then((response) => {
      const orgs = response.data as Array<OrgJson>;
      return orgs.map(it => new Org(it));
    });
  }

  /**
   * Get all vApps in the company location
   * @param {string} locationId
   * @returns {Promise<Array<Vapp>>}
   */
  async getVapps(locationId: string): Promise<Array<Vapp>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/vapps`).then((response) => {
      const vapps = response.data as Array<VappJson>;
      return vapps.map(it => new Vapp(it));
    });
  }

  /**
   * Get all vDCs in the company location
   * @param {string} locationId
   * @returns {Promise<Array<Vdc>>}
   */
  async getVdcs(locationId: string): Promise<Array<Vdc>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/vdcs`).then((response) => {
      const vdcs = response.data as Array<VdcJson>;
      return vdcs.map(it => new Vdc(it));
    });
  }

  /**
   * Get all VMs in the company location
   * @param {string} locationId
   * @returns {Promise<Array<Vm>>}
   */
  async getVms(locationId: string): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/vms`).then((response) => {
      const vms = response.data as Array<VmJson>;
      return vms.map(it => new Vm(it));
    });
  }

  /**
   * Change the company logo
   * @param {Uint8Array} logo
   * @returns {Promise<any>}
   */
  async setLogo(logo: Uint8Array): Promise<any> {
    return Iland.getHttp().post(`/companies/${this.uuid}/logo`, logo, {
      headers: {
        'Content-Type': 'image/jpeg'
      }
    });
  }

  /**
   * Get a company logo
   * @returns {Promise<Uint8Array | null>}
   */
  async getLogo(): Promise<Uint8Array | null> {
    return Iland.getHttp().get(`/companies/${this.uuid}/logo`, {
      headers: {
        'Accept': 'image/jpeg'
      },
      responseType: 'arraybuffer'
    }).then((response) => {
      return new Uint8Array(response.data);
    }, () => {
      return null;
    });
  }

  /**
   * Delete a company logo
   * @returns {Promise<any>}
   */
  async deleteLogo(): Promise<any> {
    return Iland.getHttp().delete(`/companies/${this.uuid}/logo`);
  }
}
