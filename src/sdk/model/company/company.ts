import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Role } from '../iam/role/role';
import { RoleCreationRequest } from '../iam/role/role-creation-request';
import { User } from '../user/user';
import { SearchResultJson } from './__json__/search-result-json';
import { SearchResult } from './search-result';
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
import { SupportTicketCreateRequest } from './support-ticket/support-ticket-create-request';
import { SupportTicketUpdateRequest } from './support-ticket/support-ticket-update-request';
import { SupportRegardingOptionJson } from './support-ticket/__json__/support-regarding-option-json';
import { SupportRegardingOption } from './support-ticket/support-regarding-option';
import { CloudTenant } from '../vcc/cloud-tenant';
import { CloudTenantJson } from '../vcc/__json__/cloud-tenant-json';
import { CloudTenantBillHistory } from './cloud-tenant-bill-history';
import { CloudTenantBillHistoryJson } from './__json__/cloud-tenant-billing-history-json';
import { CompanyUser } from './company-user';
import { CompanyUserJson } from './__json__/company-user';
import { UserCreateRequest } from './user-create-request';
import { EdgeJson } from '../edge/__json__/edge-json';
import { Edge } from '../edge/edge';
import { Media } from '../media/media';
import { MediaJson } from '../media/__json__/media-json';
import { VappTemplate } from '../vapp-template/vapp-template';
import { VappTemplateJson } from '../vapp-template/__json__/vapp-template-json';
import { VpgSubEntityRequest } from '../vpg/__json__/vpg-sub-entity-request';
import { ExpandedVpg } from '../vpg/expanded-vpg';
import { ExpandedVpgJson } from '../vpg/__json__/expanded-vpg-json';
import { InternalNetwork } from '../internal-network/internal-network';
import { InternalNetworkJson } from '../internal-network/__json__/internal-network-json';
import { VappNetworkJson } from '../vapp-network/__json__/vapp-network-json';
import { VappNetwork } from '../vapp-network/vapp-network';
import { CatalogJson } from '../catalog/__json__/catalog-json';
import { Catalog } from '../catalog/catalog';
import { Task } from '../task/task';
import { TaskList } from '../task/task-list';
import { TaskFilterParams } from '../task/task-filter-params';
import { CompanyTaskFilterParams } from './company-task-filter-params';
import { BaCompany } from '../vac/ba-company';
import { BaCompanyJson } from '../vac/__json__/ba-company';
import { UserTwoFactorAuthRecord } from './user-two-factor-auth-record';
import { UserTwoFactorAuthRecordJson } from './__json__/user-two-factor-auth-record-json';
import { VacCompanyQuotaStatus } from './vac-company-quota-status';
import { VacCompanyQuotaStatusJson } from './__json__/vac-company-quota-status';
import { BillingCurrencyCode } from '../common/billing/billing-currency-code';
import { BillingCurrencyCodeJson } from '../common/billing/__json__/billing-currency-code-json';
import { BaCompanyContractUpgradeRequest } from '../vac/upgrade-tenant-contract-request';
import { BaCompanyCreateRequest } from './ba-company-create-request';
import { VacContract } from './vac-contract';
import { VacContractJson } from './__json__/vac-contract-json';
import { O365Organization } from '../o365/o365-organization';
import { O365OrganizationJson } from '../o365/__json__/o365-organization-json';
import { O365BillJson } from './__json__/o365-bill-json';
import { O365Bill } from './o365-bill';
import { O365OrgCreateRequest } from './o365-org-create-request';
import { O365AuditLogJson } from './__json__/o365-audit-log-json';
import { O365AuditLog } from './o365-audit-log';
import { O365BackupRepositoryJson } from './__json__/o365-backup-repository-json';
import { O365BackupRepository } from './o365-backup-repository';
import { Http } from '../../service/http/http';
import {
  CompanyLocationIntegratedBackupStatusJson
} from '../integrated-backups/integrated-backup-status/__json__/company-location-integrated-backup-status-json';
import {
  CompanyLocationIntegratedBackupStatus
} from '../integrated-backups/integrated-backup-status/company-location-integrated-backup-status';
import { BackupGroup } from '../advanced-backups/backup-group/backup-group';
import { BackupGroupJson } from '../advanced-backups/backup-group/__json__/backup-group-json';
import { CompanyLocationBackupStatus } from '../advanced-backups/backup-status/company-location-backup-status';
import { CompanyLocationBackupStatusJson } from '../advanced-backups/backup-status/__json__/company-location-backup-status-json';

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
   * Indicates whether the company has the iland Object Storage product
   * @returns {boolean}
   */
  get hasIlandObjectStorage(): boolean {
    return this._json.has_object_storage;
  }

  /**
   * Indicates whether the company has iland Veeam Cloud Connection Replication add-on product
   * @returns {boolean}
   */
  get hasIlandVccr(): boolean {
    return this._json.has_vccr;
  }

  /**
   * Indicates whether the company has iland Office 365 product
   * @returns {boolean}
   */
  get hasIlandO365(): boolean {
    return this._json.has_o365;
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
   * @returns {Promise<Array<CompanyUser>>} a promise with the list of the company users
   */
  async getUsers(): Promise<Array<CompanyUser>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/users`).then((response) => {
      const json = response.data.data as Array<CompanyUserJson>;
      return json.map((it) => new CompanyUser(it));
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
  async createUser(request: UserCreateRequest): Promise<User> {
    return Iland.getHttp().post(`/companies/${this.uuid}/users`, request.json).then((response) => {
      const json = response.data as UserJson;
      return new User(json);
    });
  }

  /**
   * Get all support tickets
   * @param {number} offset
   * @param {number} limit
   * @returns {Promise<Array<SupportTicket>>}
   */
  async getSupportTickets(offset?: number, limit?: number): Promise<Array<SupportTicket>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/support-tickets`, {
      params: {
        offset: offset || 0,
        limit: limit || 10
      }
    }).then((response) => {
      const supportTickets = response.data.data as Array<SupportTicketJson>;
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
      const orgs = response.data.data as Array<OrgJson>;
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
      const vapps = response.data.data as Array<VappJson>;
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
      const vdcs = response.data.data as Array<VdcJson>;
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
      const vms = response.data.data as Array<VmJson>;
      return vms.map(it => new Vm(it));
    });
  }

  /**
   * Get all edges in the company location.
   * @param {string} locationId
   * @returns {Promise<Array<Edge>>}
   */
  /* istanbul ignore next: autogenerated */
  async getEdges(locationId: string): Promise<Array<Edge>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/edges`).then((response) => {
      const json = response.data.data as Array<EdgeJson>;
      return json.map((it) => new Edge(it));
    });
  }

  /**
   * Get all media in the company location.
   * @param {string} locationId
   * @returns {Promise<Array<Media>>}
   */
  /* istanbul ignore next: autogenerated */
  async getMedia(locationId: string): Promise<Array<Media>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/media`).then((response) => {
      const json = response.data.data as Array<MediaJson>;
      return json.map((it) => new Media(it));
    });
  }

  /**
   * Get all vApp templates in the company location.
   * @param {string} locationId
   * @returns {Promise<Array<VappTemplate>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVappTemplates(locationId: string): Promise<Array<VappTemplate>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/vapp-templates`).then((response) => {
      const json = response.data.data as Array<VappTemplateJson>;
      return json.map((it) => new VappTemplate(it));
    });
  }

  /**
   * Gets all VPGs in the company location.
   * @param {string} locationId
   * @param {Array<VpgSubEntityRequest>} expand
   * @returns {Promise<Array<ExpandedVpg>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVpgs(locationId: string, expand?: Array<VpgSubEntityRequest>): Promise<Array<ExpandedVpg>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/vpgs`, {
      params: {
        expand: expand
      }
    }).then((response) => {
      const json = response.data.data as Array<ExpandedVpgJson>;
      return json.map((it) => new ExpandedVpg(it));
    });
  }

  /**
   * Gets all catalogs in the company location.
   * @param {string} locationId
   * @returns {Promise<Array<Catalog>>}
   */
  /* istanbul ignore next: autogenerated */
  async getCatalogs(locationId: string): Promise<Array<Catalog>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/catalogs`).then((response) => {
      const json = response.data.data as Array<CatalogJson>;
      return json.map((it) => new Catalog(it));
    });
  }

  /**
   * Gets all internal networks in the company location.
   * @param {string} locationId
   * @returns {Promise<Array<InternalNetwork>>}
   */
  /* istanbul ignore next: autogenerated */
  async getOrgVdcNetworks(locationId: string): Promise<Array<InternalNetwork>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/org-vdc-networks`).then((response) => {
      const json = response.data.data as Array<InternalNetworkJson>;
      return json.map((it) => new InternalNetwork(it));
    });
  }

  /**
   * Gets all the vApp networks in the company location.
   * @param {string} locationId
   * @returns {Promise<Array<VappNetwork>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVappNetworks(locationId: string): Promise<Array<VappNetwork>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/vapp-networks`).then((response) => {
      const json = response.data.data as Array<VappNetworkJson>;
      return json.map((it) => new VappNetwork(it));
    });
  }

  /**
   * Gets all the O365 Organizations in the company location.
   * @param {string} locationId
   * @return {Promise<Array<O365Organization>>}
   */
  /* istanbul ignore next: autogenerated */
  async getO365Organizations(locationId: string): Promise<Array<O365Organization>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/o365-organizations`)
        .then((response) => {
          const json = response.data.data as Array<O365OrganizationJson>;
          return json.map((it) => new O365Organization(it));
        });
  }

  /**
   * Get O365 bill for Company
   * If no dates passed in, API gets the previous 6 months
   * @param locationId
   * @param startYear - the year to start
   * @param startMonth - startMonth the month to start (1-12)
   * @param endYear - the year to end with
   * @param endMonth -the month to end (1-12)
   */
  /* istanbul ignore next: autogenerated */
  async getO365billing(locationId: string, startYear?: number, startMonth?: number,
                       endYear?: number, endMonth?: number): Promise<Array<O365Bill>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/o365-billing`, {
      params: {
        startYear: startYear,
        startMonth: startMonth,
        endYear: endYear,
        endMonth: endMonth
      }
    }).then((response) => {
      const json = response.data.data as Array<O365BillJson>;
      return json.map(it => new O365Bill(it));
    });
  }

  /**
   * Get the O365 Audit log for the company
   * @param locationId
   * @param page
   * @param pageSize
   * @returns {Promise<Array<O365AuditLog>>}
   */
  /* istanbul ignore next: autogenerated */
  async getO365AuditLog(locationId: string, page?: number, pageSize?: number): Promise<Array<O365AuditLog>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/o365-audit-log`, {
      params: {
        page: page || 0,
        pageSize: pageSize || 50
      }
    }).then((response) => {
      const json = response.data.data as Array<O365AuditLogJson>;
      return json.map(it => new O365AuditLog(it));
    });
  }

  /**
   * Get the O365 Backup Repositories for the company
   * @param locationId {string}
   * @returns {Promise<Array<O365BackupRepository>>}
   */
  /* istanbul ignore next: autogenerated */
  async getO365BackupRepositories(locationId: string): Promise<Array<O365BackupRepository>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/o365-backup-repositories`)
        .then((response) => {
          const json = response.data.data as Array<O365BackupRepositoryJson>;
          return json.map(it => new O365BackupRepository(it));
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
        'Accept': Http.versionMime('image/jpeg')
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

  /**
   *  Creates a new support ticket.
   *  @param {SupportTicketCreateRequest} newSupportTicket
   *  @returns {Promise<SupportTicket>}
   */
    /* istanbul ignore next: autogenerated */
  async createSupportTicket(newSupportTicket: SupportTicketCreateRequest): Promise<SupportTicket> {
    return Iland.getHttp().post(`/companies/${this.uuid}/support-tickets`, newSupportTicket.json).then((response) => {
      const json = response.data as SupportTicketJson;
      return new SupportTicket(json);
    });
  }

  /**
   * Updates a support ticket.
   * @param {number} ticketId
   * @param {SupportTicketUpdateRequest} supportTicket
   * @returns {Promise<SupportTicket>}
   */
    /* istanbul ignore next: autogenerated */
  async updateSupportTicket(ticketId: number, supportTicket: SupportTicketUpdateRequest): Promise<SupportTicket> {
    return Iland.getHttp().put(`/companies/${this.uuid}/support-tickets/${ticketId}`, supportTicket.json)
        .then((response) => {
          const json = response.data as SupportTicketJson;
          return new SupportTicket(json);
        });
  }

  /**
   * Get all cloud tenants in company location.
   * @param {string} location
   * @returns {Array<Promise<CloudTenant>>}
   */
  /* istanbul ignore next: autogenerated */
  async getCloudTenants(location?: string): Promise<Array<CloudTenant>> {
    let url;
    if (location && location.length > 0) {
      url = `/companies/${this.uuid}/location/${location}/vcc-backup-tenants`;
    } else {
      url = `/companies/${this.uuid}/vcc-backup-tenants`;
    }
    return Iland.getHttp().get(url).then((response) => {
      const json = response.data.data as Array<CloudTenantJson>;
      return json.map((it) => new CloudTenant(it));
    });
  }

  /**
   * Get all vac companies in company. You can also get all vac-companies for a specific company and location.
   * @param {string} locationId (Optional) the location ID.
   * @returns {Array<Promise<BaCompany>>}
   */
  /* istanbul ignore next: autogenerated */
  async getVacCompanies(locationId?: string): Promise<Array<BaCompany>> {
    if (locationId) {
      return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationId}/vac-companies`).then((response) => {
        const json = response.data.data as Array<BaCompanyJson>;
        return json.map((it) => new BaCompany(it));
      });
    } else {
      return Iland.getHttp().get(`/companies/${this.uuid}/vac-companies`).then((response) => {
        const json = response.data.data as Array<BaCompanyJson>;
        return json.map((it) => new BaCompany(it));
      });
    }
  }

  /**
   * Get vac quota status in company location.
   * @param {string} locationUuid
   * @returns {Promise<VacCompanyQuotaStatus>}
   */
  /* istanbul ignore next: autogenerated */
  async getVacQuotaStatus(locationUuid: string): Promise<VacCompanyQuotaStatus> {
    return Iland.getHttp().get(`/locations/${locationUuid}/${this.uuid}/vac-storage-status`).then((response) => {
      const json = response.data as VacCompanyQuotaStatusJson;
      return new VacCompanyQuotaStatus(json);
    });
  }

  /**
   * Request VAC contract upgrade.
   * @param {string} locationUuid
   * @param {BaCompanyContractUpgradeRequest} upgradeRequest
   * @returns {Promise}
   */
  /* istanbul ignore next: autogenerated */
  async requestVacContractUpgrade(locationUuid: string,
                                  upgradeRequest: BaCompanyContractUpgradeRequest): Promise<unknown> {
    return Iland.getHttp()
      .post(`/locations/${locationUuid}/${this.uuid}/request-upgrade-contract`, upgradeRequest.json);
  }

  /**
   * Create a new VAC company.
   * @param {string} locationUuid
   * @param {BaCompanyCreateRequest} creationRequest
   * @returns {Promise}
   */
  /* istanbul ignore next: autogenerated */
  async createBaCompany(locationUuid: string, creationRequest: BaCompanyCreateRequest): Promise<unknown> {
    return Iland.getHttp().post(`/companies/${this.uuid}/location/${locationUuid}/actions/create-vac-company`,
      creationRequest.json);
  }

  /**
   * Create a new O365 Organization.
   * @param {string} locationUuid
   * @param {O365OrgCreateRequest} creationRequest
   * @returns {Promise<O365Organization>}
   */
  /* istanbul ignore next: autogenerated */
  async createO365Organization(locationUuid: string, creationRequest: O365OrgCreateRequest): Promise<O365Organization> {
    return Iland.getHttp().post(`/companies/${this.uuid}/location/${locationUuid}/actions/create-o365-org`,
      creationRequest.json)
        .then((response) => {
          const json = response.data as O365OrganizationJson;
          return new O365Organization(json);
        });
  }

  /**
   * Get support ticket regarding options.
   * @returns {Array<SupportRegardingOption>}
   */
  /* istanbul ignore next: autogenerated */
  async getSupportTicketRegardingOptions(): Promise<Array<SupportRegardingOption>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/support-tickets/regarding-options`).then((response) => {
      const json = response.data.data as Array<SupportRegardingOptionJson>;
      return json.map((it) => new SupportRegardingOption(it));
    });
  }

  /**
   * Get the billing history for the cloud tenants.
   * @returns {Promise<CloudTenantBillHistory>} promise resolving to the cloud tenant billing history
   */
  /* istanbul ignore next: autogenerated */
  async getCloudTenantBillingHistory(location?: string, startYear?: number, startMonth?: number, endYear?: number,
                                     endMonth?: number): Promise<CloudTenantBillHistory> {
    return Iland.getHttp().get(`/companies/${this.uuid}/vcc-backup-tenants-billing`, {
      params: {
        location: location,
        startYear: startYear,
        startMonth: startMonth,
        endYear: endYear,
        endMonth: endMonth
      }
    }).then((response) => {
      const json = response.data as CloudTenantBillHistoryJson;
      return new CloudTenantBillHistory(json);
    });
  }

  /**
   * Get the vac billing currency code for the company location.
   * @returns {Promise<BillingCurrencyCode>} promise resolving to the billing currency code
   */
  /* istanbul ignore next: autogenerated */
  async getVacBillingCurrencyCode(location: string): Promise<BillingCurrencyCode> {
    return Iland.getHttp().get(`/locations/${location}/${this.uuid}/vac-currency-code`)
      .then((response) => {
        const json = response.data as BillingCurrencyCodeJson;
        return new BillingCurrencyCode(json);
      });
  }

  /**
   * Get company tasks.
   * @param {CompanyTaskFilterParams} filters used to get tasks matching specific criteria
   * @returns {Promise<TaskList>} a promise that resolves with a task list
   */
  async getTasks(filters?: CompanyTaskFilterParams): Promise<TaskList> {
    if (filters) {
      return Task.getTasks(new TaskFilterParams(this.uuid, 'COMPANY', filters.includeDescendantTasks,
          filters.synced, filters.username, filters.timestampAfter, filters.timestampBefore, filters.queryTimestamp,
          filters.offset, filters.limit, filters.order));
    } else {
      return Task.getTasks(new TaskFilterParams(this.uuid, 'COMPANY'));
    }
  }

  /**
   * Perform a full-text search of entities pertaining to this company.
   * @param {string} query Query string
   * @param {number} pageOffset Page offset for return documents
   * @param {number} pageSize Number of hits per page (default value is 10 and maximum is 50)
   * @returns {Promise<SearchResult>} a promise that resolves with a SearchResult
   */
  /* istanbul ignore next: autogenerated */
  async search(query?: string, pageOffset?: number, pageSize?: number): Promise<SearchResult> {
    return Iland.getHttp().get(`/companies/${this.uuid}/search`, {
      params: {
        query: query,
        pageOffset: pageOffset,
        pageSize: pageSize
      }
    }).then((response) => {
      const json = response.data as SearchResultJson;
      return new SearchResult(json);
    });
  }

  /**
   * Gets a report of two-factor auth configuration state for company users.
   * @returns {Promise<Array<UserTwoFactorAuthRecord>>} a promise that resolves with an array of two factor auth records
   */
  /* istanbul ignore next: autogenerated */
  async getUserTwoFactorAuthReport(): Promise<Array<UserTwoFactorAuthRecord>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/user-two-factor-auth-report`).then((response) => {
      const json = response.data.data as Array<UserTwoFactorAuthRecordJson>;
      return json.map((it) => new UserTwoFactorAuthRecord(it));
    });
  }

  /**
   * Gets the VAC contract list for a given company location.
   * @returns {Promise<Array<VacContract>>} a promise that resolves with an array of VacContract
   */
  /* istanbul ignore next: autogenerated */
  async getVacContractsForCompany(locationUuid: string): Promise<Array<VacContract>> {
    return Iland.getHttp().get(`/locations/${locationUuid}/${this.uuid}/vac-contracts`).then((response) => {
      const json = response.data.data as Array<VacContractJson>;
      return json.map(contract => new VacContract(contract));
    });
  }

  /**
   * Gets the integrated backup status of entities within the company-location.
   * @param {string} locationUuid
   * @returns {Promise<CompanyLocationIntegratedBackupStatus>} backup status details
   */
  /* istanbul ignore next: autogenerated */
  async getIntegratedBackupStatus(locationUuid: string): Promise<CompanyLocationIntegratedBackupStatus> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationUuid}/iaas-integrated-backup-status`)
      .then((response) => {
        const json = response.data as CompanyLocationIntegratedBackupStatusJson;
        return new CompanyLocationIntegratedBackupStatus(json);
      });
  }

  /**
   * List the existing backup groups that are configured in a specified
   * company-location.
   *
   * @param {string} locationUuid
   * @param {boolean} includeDeleted Default is false. (Optional)
   * @param {boolean} includeSummaryStats Default is false. (Optional)
   * @param {boolean} includeLastRun Default is false. (Optional)
   * @param {boolean} includeBackupPolicy Default is false. (Optional)
   * @returns {Promise<Array<BackupGroup>>}
   */
   /* istanbul ignore next: autogenerated */
  async listBackupGroups(locationUuid: string,
                         includeDeleted?: boolean,
                         includeSummaryStats?: boolean,
                         includeLastRun?: boolean,
                         includeBackupPolicy?: boolean): Promise<Array<BackupGroup>> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationUuid}/backup-groups`, {
      params: {
        includeDeleted: includeDeleted ?? false,
        includeSummaryStats: includeSummaryStats ?? false,
        includeLastRun: includeLastRun ?? false,
        includeBackupPolicy: includeBackupPolicy ?? false
      }
    }).then((response) => {
      const json = response.data.data as Array<BackupGroupJson>;
      return json.map((it) => new BackupGroup(it));
    });
  }

  /**
   * Gets the backup status of entities within the company-location.
   *
   * @param {string} locationUuid
   * @return {Promise<CompanyLocationBackupStatus>}
   */
  /* istanbul ignore next: autogenerated */
  async getBackupStatus(locationUuid: string): Promise<CompanyLocationBackupStatus> {
    return Iland.getHttp().get(`/companies/${this.uuid}/location/${locationUuid}/iaas-backup-status`)
      .then((response) => {
        const json = response.data as CompanyLocationBackupStatusJson;
        return new CompanyLocationBackupStatus(json);
      });
  }
}
