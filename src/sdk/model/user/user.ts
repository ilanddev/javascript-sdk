import { Iland } from '../../iland';
import { JpegImage } from '../common/jpeg-image';
import { CompanyInventory, CompanyInventoryImpl } from './inventory-entity/inventory-entity';
import { Company } from '../company/company';
import { Role } from '../iam/role/role';
import { UserJson } from './__json__/user-json';
import { UserType } from './__json__/user-type';
import { UserInventoryJson } from './inventory-entity/__json__/user-inventory-json';
import { RoleJson } from '../iam/role/__json__/role-json';
import { CompanyJson } from '../company/__json__/company-json';
import { UserDomainJson } from './__json__/user-domain-json';
import { UserUpdateRequest } from './user-update-request';
import { UserSessionJson } from './__json__/user-session-json';
import { UserSession } from './user-session';
import { InboxMessage } from './inbox-message';
import { MoveMessageRequest } from './move-message-request';
import { InboxMessageJson } from './__json__/inbox-message-json';
import { MessageFolder } from './__json__/message-folder';
import { MessageCount } from './message-count';
import { MessageCountJson } from './__json__/message-count-json';
import { BatchInboxUpdateRequest } from './batch-inbox-update-request';
import { InboxMarkAllAsReadRequest } from './inbox-mark-all-as-read-request';
import { InboxMessageFilterParams } from './inbox-message-filter-params';
import { InboxMessageList } from './inbox-message-list';
import { InboxMessageListJson } from './__json__/inbox-message-list-json';
import { AccountEvent } from './account-even';
import { AccountEventJson } from './__json__/account-even-json';
import { Org } from '../org/org';
import { OrgJson } from '../org/__json__/org-json';
import { Vdc } from '../vdc/vdc';
import { VdcJson } from '../vdc/__json__/vdc-json';
import { Vapp } from '../vapp/vapp';
import { VappJson } from '../vapp/__json__/vapp-json';
import { VmJson } from '../vm/__json__/vm-json';
import { Vm } from '../vm/vm';
import { Media } from '../media/media';
import { MediaJson } from '../media/__json__/media-json';
import { VappTemplate } from '../vapp-template/vapp-template';
import { VappTemplateJson } from '../vapp-template/__json__/vapp-template-json';
import { Edge } from '../edge/edge';
import { EdgeJson } from '../edge/__json__/edge-json';
import { VpgSubEntityRequest } from '../vpg/__json__/vpg-sub-entity-request';
import { ExpandedVpg } from '../vpg/expanded-vpg';
import { ExpandedVpgJson } from '../vpg/__json__/expanded-vpg-json';
import { CloudTenant } from '../vcc/cloud-tenant';
import { CloudTenantJson } from '../vcc/__json__/cloud-tenant-json';
import { VappNetwork } from '../vapp-network/vapp-network';
import { VappNetworkJson } from '../vapp-network/__json__/vapp-network-json';
import { Catalog } from '../catalog/catalog';
import { CatalogJson } from '../catalog/__json__/catalog-json';
import { InternalNetwork } from '../internal-network/internal-network';
import { InternalNetworkJson } from '../internal-network/__json__/internal-network-json';
import { VCCFailoverPlan } from '../vcc/failover-plan';
import { VCCFailoverPlanJson } from '../vcc/__json__/failover-plan-json';

/**
 * User.
 */
export class User {

  constructor(private _apiUser: UserJson) {
  }

  /**
   * Gets a user by username.
   * @param username the user's username
   * @returns {Promise<User>}
   */
  static async getUser(username: string): Promise<User> {
    return Iland.getHttp().get(`/users/${username}`).then((response) => {
      const apiUser = response.data as UserJson;
      return new User(apiUser);
    });
  }

  /**
   * Gets the currently authenticated user.
   * @returns {Promise<User>}
   */
  static async getCurrentUser(): Promise<User> {
    return Iland.getAuthProvider().getAuthenticatedUsername().then(async(username: string) => {
      if (username) {
        return User.getUser(username);
      } else {
        return new Promise<User>(function(_, reject) {
          reject();
        });
      }
    });
  }

  /**
   * Gets the user's username.
   * @returns {string} username
   */
  get username(): string {
    return this._apiUser.name;
  }

  /**
   * Gets the user's address.
   * @returns {string} address
   */
  get address(): string {
    return this._apiUser.address;
  }

  /**
   * Gets the user's city.
   * @returns {string} city
   */
  get city(): string {
    return this._apiUser.city;
  }

  /**
   * Gets the user's company.
   * @returns {string} company
   */
  get company(): string {
    return this._apiUser.company;
  }

  /**
   * Gets the user's country.
   * @returns {string} country
   */
  get country(): string {
    return this._apiUser.country;
  }

  /**
   * Gets the user's created date.
   * @returns {Date} created date
   */
  get createdDate(): Date {
    return new Date(this._apiUser.created_date);
  }

  /**
   * Gets the user's domain.
   * @returns {string | UserDomainJson}
   */
  get domain(): string | UserDomainJson {
    return this._apiUser.domain;
  }

  /**
   * Indicates whether the user is deleted.
   * @returns {boolean} value
   */
  get deleted(): boolean {
    return this._apiUser.deleted;
  }

  /**
   * Gets the deleted date of the user.
   * @returns {Date} deleted date or null if the user is not deleted
   */
  get deletedDate(): Date | null {
    return this._apiUser.deleted_date ? new Date(this._apiUser.deleted_date) : null;
  }

  /**
   * Gets the user's email address.
   * @returns {string} email address
   */
  get email(): string {
    return this._apiUser.email;
  }

  /**
   * Gets the user's full name.
   * @returns {string} full name
   */
  get fullName(): string {
    return this._apiUser.fullname;
  }

  /**
   * Indicates whether the user is locked out of their account.
   * @returns {boolean} value
   */
  get locked(): boolean {
    return this._apiUser.locked;
  }

  /**
   * Gets the phone number of the user.
   * @returns {string} phone number
   */
  get phoneNumber(): string {
    return this._apiUser.phone;
  }

  /**
   * Gets the user's state.
   * @returns {string} state
   */
  get state(): string {
    return this._apiUser.state;
  }

  /**
   * Gets the user type.
   * @returns {UserType} user type
   */
  get userType(): UserType {
    return this._apiUser.user_type;
  }

  /**
   * Gets the user's zip code.
   * @returns {string} zip code.
   */
  get zip(): string {
    return this._apiUser.zip;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiUser, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {UserJson} the API User object
   */
  get json(): UserJson {
    return Object.assign({}, this._apiUser);
  }

  /**
   * Retrieves a new representation of the user from the API.
   * @returns {Promise<User>} promise that resolves with updated user
   */
  async refresh(): Promise<User> {
    return Iland.getHttp().get(`/users/${this.username}`).then((response) => {
      this._apiUser = response.data as UserJson;
      return this;
    });
  }

  /**
   * Update the user.
   * @param {UserUpdateRequest} request
   * @returns {Promise<User>}
   */
  async update(request: UserUpdateRequest): Promise<User> {
    return Iland.getHttp().put(`/users/${this.username}`, request.json).then((response) => {
      const json = response.data as UserJson;
      return new User(json);
    });
  }

  /**
   * Delete the current user.
   * @returns {Promise<void>}
   * @throws Error
   */
  async delete(): Promise<any> {
    return Iland.getHttp().delete(`/users/${this.username}`);
  }

  /**
   * Gets the user's inventory within the specified company..
   * @param {string} companyId the ID of the company to retrieve inventory for
   * @returns {Promise<CompanyInventory>}  entity inventory
   * @throws Error
   */
  async getInventoryInCompany(companyId: string): Promise<CompanyInventory> {
    return Iland.getHttp().get(`/users/${this.username}/inventory`, {
      params: {
        company: companyId
      }
    }).then((response) => {
      const userInventory = response.data as UserInventoryJson;
      return new CompanyInventoryImpl(userInventory.inventory[0]);
    }, () => {
      throw new Error(`No inventory found for company with id=${companyId}.`);
    });
  }

  /**
   * Gets the user's entity inventory.
   * @returns {Promise<Array<CompanyInventory>>} user's entity inventory
   */
  async getInventory(): Promise<Array<CompanyInventory>> {
    return Iland.getHttp().get(`/users/${this.username}/inventory`).then((response) => {
      const userInventory = response.data as UserInventoryJson;
      return userInventory.inventory.map((it) => new CompanyInventoryImpl(it));
    });
  }

  /**
   * Gets the user's list of companies.
   * @returns {Promise<Array<Company>>} user's list of companies
   */
  async getCompanies(): Promise<Array<Company>> {
    return Iland.getHttp().get(`/users/${this.username}/companies`).then((response) => {
      const companiesList = response.data.data as Array<CompanyJson>;
      return companiesList.map((it) => new Company(it));
    });
  }

  /**
   * Gets the user's role for a company
   * @param {string} companyUuid
   * @returns {Promise<Role>}
   */
  async getRole(companyUuid: string): Promise<Role> {
    return Iland.getHttp().get(`/users/${this.username}/roles/${companyUuid}`).then((response) => {
      const role = response.data as RoleJson;
      return new Role(role);
    });
  }

  /**
   * Assign a role to a user.
   * @param {string} companyUuid
   * @param {string} roleUuid
   * @returns {Promise<any>}
   */
  async assignRole(companyUuid: string, roleUuid: string): Promise<any> {
    return Iland.getHttp().put(`/users/${this.username}/roles/${companyUuid}`, {
      role_uuid: roleUuid
    });
  }

  /**
   * Un-assign a role from a user.
   * @param {string} companyUuid
   * @returns {Promise<any>}
   */
  async unassignRole(companyUuid: string): Promise<any> {
    return Iland.getHttp().delete(`/users/${this.username}/roles/${companyUuid}`);
  }

  /**
   * Get active sessions for a user.
   * @returns {Promise<Array<UserSession>>} a promise that resolves to a list of active user sessions.
   */
  /* istanbul ignore next: autogenerated */
  async getActiveSessions(): Promise<Array<UserSession>> {
    return Iland.getHttp().get(`/users/${this.username}/sessions`).then((response) => {
      const json = response.data.data as Array<UserSessionJson>;
      return json.map((it) => new UserSession(it));
    });
  }

  /**
   * End all active user sessions.
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async endAllActiveSessions(): Promise<any> {
    return Iland.getHttp().delete(`/users/${this.username}/sessions`);
  }

  /**
   * Updates the user's profile picture.
   * @param {JpegImage} pictureBytes
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async updatePicture(picture: JpegImage): Promise<any> {
    return Iland.getHttp().put(`/users/${this.username}/picture`, picture.toUint8Array(), {
      headers: {
        'Content-Type': 'image/jpeg'
      }
    });
  }

  /**
   * Get the user picture.
   * @returns {Promise<JpegImage>}
   */
  /* istanbul ignore next: autogenerated */
  async getPicture(): Promise<JpegImage> {
    return Iland.getHttp().get(`/users/${this.username}/picture`, {
      headers: {
        'Accept': 'image/jpeg'
      },
      responseType: 'arraybuffer'
    }).then(response => {
      return new JpegImage(response.data);
    });
  }

  /**
   * Move a user message to a specified folder.
   * @param {string} uuid
   * @param {MoveMessageRequest} spec
   */
  /* istanbul ignore next: autogenerated */
  async moveMessage(uuid: string, spec: MoveMessageRequest): Promise<InboxMessage> {
    return Iland.getHttp().post(`/users/${this.username}/messages/${uuid}/actions/move`, spec.json).then((response) => {
      const json = response.data as InboxMessageJson;
      return new InboxMessage(json);
    });
  }

  /**
   * Get a inbox message.
   * @param {string} uuid
   */
  /* istanbul ignore next: autogenerated */
  async getMessage(uuid: string): Promise<InboxMessage> {
    return Iland.getHttp().get(`/users/${this.username}/messages/${uuid}`).then((response) => {
      const json = response.data as InboxMessageJson;
      return new InboxMessage(json);
    });
  }

  /**
   * Mark message as read.
   * @param {string} uuid
   */
  /* istanbul ignore next: autogenerated */
  async markMessageAsRead(uuid: string): Promise<InboxMessage> {
    return Iland.getHttp().post(`/users/${this.username}/messages/${uuid}/actions/mark-as-read`).then((response) => {
      const json = response.data as InboxMessageJson;
      return new InboxMessage(json);
    });
  }

  /**
   * Updates a batch of inbox messages.
   * @param {BatchInboxUpdateRequest} batchUpdate
   */
  /* istanbul ignore next: autogenerated */
  async batchInboxUpdate(batchUpdate: BatchInboxUpdateRequest): Promise<any> {
    return Iland.getHttp().post(`/users/${this.username}/messages/actions/batch-update`, batchUpdate.json);
  }

  /**
   * Mark all messages in a folder as read.
   * @param {InboxMarkAllAsReadRequest} request
   */
  /* istanbul ignore next: autogenerated */
  async markAllMessagesAsRead(request: InboxMarkAllAsReadRequest): Promise<any> {
    return Iland.getHttp().post(`/users/${this.username}/messages/actions/mark-all-as-read`, request.json);
  }

  /**
   * Deletes inbox message.
   * @param {string} uuid
   */
  /* istanbul ignore next: autogenerated */
  async deleteMessage(uuid: string): Promise<InboxMessage> {
    return Iland.getHttp().delete(`/users/${this.username}/messages/${uuid}`).then((response) => {
      const json = response.data as InboxMessageJson;
      return new InboxMessage(json);
    });
  }

  /**
   * Get unread message count.
   * @param {MessageFolder} folder
   */
  /* istanbul ignore next: autogenerated */
  async getUnreadMessageCount(folder?: MessageFolder): Promise<MessageCount> {
    return Iland.getHttp().get(`/users/${this.username}/unread-message-count`, {
      params: {
        folder: folder
      }
    }).then((response) => {
      const json = response.data as MessageCountJson;
      return new MessageCount(json);
    });
  }

  /**
   * Get the message headers.
   * @param {InboxMessageFilterParams} filters
   * @returns {Promise<InboxMessageList>>}
   */
  /* istanbul ignore next: autogenerated */
  async getMessageHeaders(filters: InboxMessageFilterParams): Promise<InboxMessageList> {
    return Iland.getHttp().get(`/users/${this.username}/messages`, {
      params: filters.json
    }).then((response) => {
      const json = response.data as InboxMessageListJson;
      return new InboxMessageList(json);
    });
  }

  /**
   * Get the user account events.
   * @param {number} offset
   * @param {number} limit
   * @param {number} dateFrom
   * @param {number} dateTo
   * @returns {Promise<Array<AccountEvent>>}
   */
  /* istanbul ignore next: autogenerated */
  async getAccountEvents(offset?: number, limit?: number, dateFrom?: number, dateTo?: number):
      Promise<Array<AccountEvent>> {
    return Iland.getHttp().get(`/users/${this.username}/account-events`, {
      params: {
        offset: offset,
        limit: limit,
        dateFrom: dateFrom,
        dateTo: dateTo
      }
    }).then((response) => {
      const json = response.data.data as Array<AccountEventJson>;
      return json.map((it) => new AccountEvent(it));
    });
  }

  /**
   * Get the orgs for a company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<Org>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgs(companyId: string, location?: string): Promise<Array<Org>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/orgs`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<OrgJson>;
      return json.map((it) => new Org(it));
    });
  }

  /**
   * Get the vDCS for a company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<Vdc>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVdcs(companyId: string, location?: string): Promise<Array<Vdc>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vdcs`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<VdcJson>;
      return json.map((it) => new Vdc(it));
    });
  }

  /**
   * Get the vApps for a company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<Vapp>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVapps(companyId: string, location?: string): Promise<Array<Vapp>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vapps`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<VappJson>;
      return json.map((it) => new Vapp(it));
    });
  }

  /**
   * Get the VMs for a company and a user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<Vm>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVms(companyId: string, location?: string): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vms`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<VmJson>;
      return json.map((it) => new Vm(it));
    });
  }

  /**
   * Get the media for a company and a user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<Media>>}
   */
  /* istanbul ignore next: autogenerated */
  async getMedia(companyId: string, location?: string): Promise<Array<Media>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/media`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<MediaJson>;
      return json.map((it) => new Media(it));
    });
  }

  /**
   * Get the vApp templates for a company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<VappTemplate>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVappTemplates(companyId: string, location?: string): Promise<Array<VappTemplate>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vapp-templates`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<VappTemplateJson>;
      return json.map((it) => new VappTemplate(it));
    });
  }

  /**
   * Get the edges for a company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<Edge>>}
   */
  /* istanbul ignore next: autogenerated */
  async getEdges(companyId: string, location?: string): Promise<Array<Edge>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/edges`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<EdgeJson>;
      return json.map((it) => new Edge(it));
    });
  }

  /**
   * Get the VPGs for the company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<VpgSubEntityRequest>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVpgs(companyId: string, location?: string, expand?: Array<VpgSubEntityRequest>):
      Promise<Array<ExpandedVpg>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vpgs`, {
      params: {
        location: location,
        expand: expand
      }
    }).then((response) => {
      const json = response.data.data as Array<ExpandedVpgJson>;
      return json.map((it) => new ExpandedVpg(it));
    });
  }

  /**
   * Get the cloud tenants for a company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<CloudTenant>>}
   */
  /* istanbul ignore next: autogenerated */
  async getCloudTenants(companyId: string, location?: string): Promise<Array<CloudTenant>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vcc-backup-tenants`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<CloudTenantJson>;
      return json.map((it) => new CloudTenant(it));
    });
  }

  /**
   * Get the org vdc networks for company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<OrgVdcNetwork>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgVdcNetworks(companyId: string, location?: string): Promise<Array<InternalNetwork>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/org-vdc-networks`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<InternalNetworkJson>;
      return json.map((it) => new InternalNetwork(it));
    });
  }

  /**
   * Get the vApp networks for company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<VappNetwork>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVappNetworks(companyId: string, location?: string): Promise<Array<VappNetwork>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vapp-networks`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<VappNetworkJson>;
      return json.map((it) => new VappNetwork(it));
    });
  }

  /**
   * Get the catalogs for company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<Catalog>>}
   */
  /* istanbul ignore next: autogenerated */
  async getCatalogs(companyId: string, location?: string): Promise<Array<Catalog>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/catalogs`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<CatalogJson>;
      return json.map((it) => new Catalog(it));
    });
  }

  /**
   * Get the VCC failover plans for a company and user.
   * @param {string} companyId
   * @param {string} location
   * @returns {Promise<Array<VCCFailoverPlan>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVccFailoverPlans(companyId: string, location?: string): Promise<Array<VCCFailoverPlan>> {
    return Iland.getHttp().get(`/users/${this.username}/companies/${companyId}/vcc-failover-plans`, {
      params: {
        location: location
      }
    }).then((response) => {
      const json = response.data.data as Array<VCCFailoverPlanJson>;
      return json.map((it) => new VCCFailoverPlan(it));
    });
  }
}
