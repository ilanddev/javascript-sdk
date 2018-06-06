import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { Vm } from '../vm/vm';
import { Vapp } from '../vapp/vapp';
import { Vdc } from '../vdc/vdc';
import { Edge } from '../edge/edge';
import { EdgeJson } from '../edge/__json__/edge-json';
import { InternalNetwork } from '../internal-network/internal-network';
import { InternalNetworkJson } from '../internal-network/__json__/internal-network-json';
import { VappNetwork } from '../vapp-network/vapp-network';
import { OrgJson } from './__json__/org-json';
import { EntityType } from '../common/__json__/entity-type';
import { VdcJson } from '../vdc/__json__/vdc-json';
import { VappJson } from '../vapp/__json__/vapp-json';
import { VmJson } from '../vm/__json__/vm-json';
import { VappNetworkJson } from '../vapp-network/__json__/vapp-network-json';
import { OrgVappTemplateLeaseUpdateRequest } from './org-vapp-template-lease-update-request';
import { OrgVappLeaseUpdateRequest } from './org-vapp-lease-update-request';
import { OrgVdcBillsJson } from '../common/billing/__json__/org-vdc-bills-json';
import { OrgVdcBills } from '../common/billing/org-vdc-bills';
import { DnsRecordJson } from './__json__/dns-record-json';
import { DnsRecord } from './dns-record';
import { DnsZone } from './dns-zone';
import { DnsZoneJson } from './__json__/dns-zone-json';
import { DnsRecordCreateRequest } from './dns-record-create-request';
import { DnsRecordUpdateRequest } from './dns-record-update-request';
import { DnsZoneCreateRequest } from './dns-zone-create-request';
import { CheckDnsZone } from './check-dns-zone';
import { CheckDnsZoneJson } from './__json__/check-dns-zone-json';
import { IpAddressSetJson } from './__json__/ip-address-set-json';
import { IpAddressSet } from './ip-address-set';
import { CatalogJson } from '../catalog/__json__';
import { Catalog } from '../catalog';
import { Task, TaskJson } from '../task';
import { Bill, BillJson, BillingSummary, BillingSummaryJson } from '../common/billing';
import { BillingReportRequest } from './reports/billing-report-request';
import { ComplianceReport } from './reports/compliance-report';
import {
  AntimalwareOverTimeJson,
  ComplianceOverTimeJson,
  ComplianceReportJson, FirewallOverTimeJson,
  SerieType,
  VulnerabilityOverTimeJson
} from './reports/__json__';
import { ComplianceOverTime } from './reports/compliance-over-time';
import { VulnerabilityOverTime } from './reports/vulnerability-over-time';
import { AntimalwareOverTime } from './reports/anti-malware-over-time';
import { LogInspectionOverTime } from './reports/log-inspection-over-time';
import { LogInspectionOverTimeJson } from './reports/__json__/log-inspection-over-time-json';
import { FirewallOverTime } from './reports/firewall-over-time';
import { DisasterRecoveryRunbookCreateRequest } from './disaster-recovery-runbook-create-request';
import { DisasterRecoveryRunbookJson } from './__json__/disaster-recovery-runbook-json';
import { DisasterRecoveryRunbook } from './disaster-recovery-runbook';

/**
 * IaaS Organization.
 */
export class Org extends Entity {

  constructor(private _json: OrgJson) {
    super(_json);
  }

  /**
   * Gets an Org by UUID.
   * @param uuid Org UUID
   * @returns {Promise<Org>} promise that resolves with the Org
   */
  static async getOrg(uuid: string): Promise<Org> {
    return Iland.getHttp().get(`/orgs/${uuid}`).then((response) => {
      const json = response.data as OrgJson;
      return new Org(json);
    });
  }

  get entityType(): EntityType {
    return 'IAAS_ORGANIZATION';
  }

  /**
   * Indicates whether the Org is enabled.
   * @returns {boolean} value
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Gets the description.
   * @returns {string} description
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Gets the vCloud HREF
   * @returns {string} vCloud HREF
   */
  get vcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Gets the datacenter location identifier.
   * @returns {string} location ID
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the Orgs max vApp runtime lease setting.
   * @returns {number} vApp max runtime lease
   */
  get vappMaxRuntimeLease(): number {
    return this._json.vapp_max_runtime_lease;
  }

  /**
   * Gets the vApps max storage lease setting.
   * @returns {number} vApp max storage lease
   */
  get vappMaxStorageLease(): number {
    return this._json.vapp_max_storage_lease;
  }

  /**
   * Gets the Orgs vApp template max storage lease setting.
   * @returns {number} vApp template max storage lease
   */
  get vappTemplateMaxStorageLease(): number {
    return this._json.vapp_template_max_storage_lease;
  }

  /**
   * Indicates whether the Org is configured such that vApps are deleted upon storage lease expiration vs. being marked
   * as an expired item.
   * @returns {boolean} value
   */
  get vappDeletedOnStorageLeaseExpiration(): boolean {
    return this._json.vapp_delete_on_storage_expire;
  }

  /**
   * Indicates whether the Org is configured such that vApp templates are deleted upon storage lease expiration vs.
   * being marked as an expired item.
   * @returns {boolean} value
   */
  get vappTemplateDeletedOnStorageLeaseExpiration(): boolean {
    return this._json.vapp_template_delete_on_storage_expire;
  }

  /**
   * Indicates whether the Org is a Zerto continuity target.
   * @returns {boolean} value
   */
  get zertoTarget(): boolean {
    return this._json.zerto_target;
  }

  /**
   * Gets the full name of the organization.
   * @returns {string} full name
   */
  get fullName(): string {
    return this._json.fullname;
  }

  /**
   * Gets the company ID (CRM).
   * @returns {string} company ID
   */
  get companyId(): string {
    return this._json.crm;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {OrgJson} the API __json__ object
   */
  get json(): OrgJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Org data by retrieving it from the API again.
   * @returns {Promise<Org>} promise that resolves with this object
   */
  async refresh(): Promise<Org> {
    return Iland.getHttp().get(`/orgs/${this.uuid}`).then((response) => {
      this._json = response.data as OrgJson;
      return this;
    });
  }

  /**
   * Gets a list of historical bills for the organization. All bills with timestamps between the start and end
   * parameters are returned.
   * @param {Date} start the begin timestamp of the query range
   * @param {Date} end the end timestamp of the query range
   * @returns {Promise<Array<Bill>>} promise that resolves with the list of historical bills
   */
  async getHistoricalBilling(start: Date, end: Date): Promise<Array<Bill>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/historical-billing`, {
      params: {
        start: start.valueOf(),
        end: end.valueOf()
      }
    }).then((response) => {
      const json = response.data.data as Array<BillJson>;
      return json.map((it) => new Bill(it));
    });
  }

  /**
   * Gets the organization's current billing summary.
   * @returns {Promise<BillingSummary>} promise that resolves with the current billing summary
   */
  async getBillingSummary(): Promise<BillingSummary> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/billing-summary`).then((response) => {
      const json = response.data as BillingSummaryJson;
      return new BillingSummary(json);
    });
  }

  /**
   * Gets the list of bills for each vDC within the org, for the specified range of billing periods.
   * @param {number} startMonth the begin range month specified as an integer in the range 1-12
   * @param {number} startYear the begin range year
   * @param {number} endMonth the end range month specified as an integer in the range 1-12
   * @param {number} endYear the end range month
   * @returns {Promise<Array<OrgVdcBills>>} a promise that resolves with the list of org vdc bill objects
   */
  async getBillingByVdcInRange(startMonth?: number, startYear?: number, endMonth?: number, endYear?: number):
      Promise<Array<OrgVdcBills>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/historical-billing-by-vdc`, {
      params: {
        startMonth: startMonth,
        startYear: startYear,
        endMonth: endMonth,
        endYear: endYear
      }
    }).then((response) => {
      const json = response.data.data as Array<OrgVdcBillsJson>;
      return json.map(it => new OrgVdcBills(it));
    });
  }

  /**
   * Gets the list of bills for each vDC within the org, for the specified billing month/year.
   * @param {number} month the month to get vDC bills for in the range 1-12
   * @param {number} year the year to get vDC bills for
   * @returns {Promise<Array<OrgVdcBills|null>>} a promise that resolves with the org vdc bill object or null if none
   * exists for the specified month
   */
  async getBillingByVdc(month?: number, year?: number): Promise<OrgVdcBills|null> {
    return this.getBillingByVdcInRange(month, year, month, year).then((bills) => {
      return bills.length === 1 ? bills[0] : null;
    });
  }

  /**
   * Gets the organization's bill for the specified month/year.
   * @param {number} month a month specified as an integer in the range 1-12
   * @param {number} year a year
   * @returns {Promise<Bill>} a promise that resolves with the bill
   */
  async getBill(month?: number, year?: number): Promise<Bill> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/billing`, {
      params: {
        month: month,
        year: year
      }
    }).then((response) => {
      const json = response.data as BillJson;
      return new Bill(json);
    });
  }

  /**
   * Gets the Orgs child vDCs.
   * @returns {Promise<Vdc[]>} promise that resolves with an array of child vDCs
   */
  async getVdcs(): Promise<Array<Vdc>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vdcs`).then((response) => {
      const json = response.data.data as Array<VdcJson>;
      return json.map((vdcJson) => new Vdc(vdcJson));
    });
  }

  /**
   * Gets the Orgs child vApps.
   * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
   */
  async getVapps(): Promise<Array<Vapp>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vapps`).then((response) => {
      const json = response.data.data as Array<VappJson>;
      return json.map((vappJson) => new Vapp(vappJson));
    });
  }

  /**
   * Gets the Orgs child VMs.
   * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
   */
  async getVms(): Promise<Array<Vm>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vms`).then((response) => {
      const json = response.data.data as Array<VmJson>;
      return json.map((vmJson) => new Vm(vmJson));
    });
  }

  /**
   * Gets the Orgs child Edges.
   * @returns {Promise<Edge[]>} promise that resolves with an array of child Edges
   */
  async getEdges(): Promise<Array<Edge>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/edges`).then((response) => {
      const json = response.data.data as Array<EdgeJson>;
      return json.map((edgeJson) => new Edge(edgeJson));
    });
  }

  /**
   * Gets the Orgs child internal networks.
   * @returns {Promise<InternalNetwork[]>} promise that resolves with an array of child Internal networks
   */
  async getInternalNetworks(): Promise<Array<InternalNetwork>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vdc-networks`).then((response) => {
      const json = response.data.data as Array<InternalNetworkJson>;
      return json.map((netJson) => new InternalNetwork(netJson));
    });
  }

  /**
   * Gets the Orgs child vApp networks.
   * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp networks
   */
  async getVappNetworks(): Promise<Array<VappNetwork>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vapp-networks`).then((response) => {
      const json = response.data.data as Array<VappNetworkJson>;
      return json.map((netJson) => new VappNetwork(netJson));
    });
  }

  /**
   * Updates the organizations vapp template lease settings.
   * @param {OrgVappTemplateLeaseUpdateRequest} spec the new lease settings
   * @returns {Promise<Org>} a promise that resolves with the updated org
   */
  /* istanbul ignore next: autogenerated */
  async updateVappTemplateLeaseSettings(spec: OrgVappTemplateLeaseUpdateRequest): Promise<Org> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/update-vapp-template-lease-settings`, spec.json)
        .then((response) => {
          this._json = response.data as OrgJson;
          return this;
        });
  }

  /**
   * Updates the organization's vApp lease settings.
   * @param {OrgVappLeaseUpdateRequest} spec the new lease settings
   * @returns {Promise<Org>} a promise that resolves with the updated org
   */
  /* istanbul ignore next: autogenerated */
  async updateOrgVappLeaseSettings(spec: OrgVappLeaseUpdateRequest): Promise<Org> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/update-vapp-lease-settings`, spec.json)
        .then((response) => {
          this._json = response.data as OrgJson;
          return this;
        });
  }

  /**
   * Gets all DNS records for the organization.
   * @returns {Promise<Array<DnsRecord>>} a promise that resolves with a list of DNS records.
   */
  async getDnsRecords(): Promise<Array<DnsRecord>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/dns-records`).then((response) => {
      const json = response.data.data as Array<DnsRecordJson>;
      return json.map((it) => new DnsRecord(it));
    });
  }

  /**
   * Adds a new DNS record for the org.
   * @param {DnsRecordCreateRequest} record the new record
   * @returns {Promise<DnsRecord>} a promise that resolves with the new record
   */
  async addDnsRecord(record: DnsRecordCreateRequest): Promise<DnsRecord> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/dns-records`, record.json).then((response) => {
      const json = response.data as DnsRecordJson;
      return new DnsRecord(json);
    });
  }

  /**
   * Updates a DNS record within the org.
   * @param {DnsRecordUpdateRequest} record the updated record
   * @returns {Promise<DnsRecord>} a promise that resolves with the updated record
   */
  async updateDnsRecord(record: DnsRecordUpdateRequest): Promise<DnsRecord> {
    return Iland.getHttp().put(`/orgs/${this.uuid}/dns-records`, record.json).then((response) => {
      const json = response.data as DnsRecordJson;
      return new DnsRecord(json);
    });
  }

  /**
   * Deletes a DNS record within the org.
   * @param {number} recordId the record ID
   * @returns {Promise<any>} a promise that resolves when the operation completes
   */
  async deleteDnsRecord(recordId: number): Promise<any> {
    return Iland.getHttp().delete(`/orgs/${this.uuid}/dns-records/${recordId}`);
  }

  /**
   * Gets all DNS zones that exist within the org.
   * @returns {Promise<Array<DnsZone>>} a promise that resolves with the list of DNS zones
   */
  async getDnsZones(): Promise<Array<DnsZone>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/dns-zones`).then((response) => {
      const json = response.data.data as Array<DnsZoneJson>;
      return json.map((it) => new DnsZone(it));
    });
  }

  /**
   * Adds a new DNS zone within the org.
   * @param {DnsZoneCreateRequest} zoneSpec the new DNS zone details
   * @returns {Promise<DnsZone>} a promise that resolves with the newly created DNS zone
   */
  async addDnsZone(zoneSpec: DnsZoneCreateRequest): Promise<DnsZone> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/dns-zones`, zoneSpec.json).then((response) => {
      const json = response.data as DnsZoneJson;
      return new DnsZone(json);
    });
  }

  /**
   * Deletes a DNS zone from the org.
   * @param {number} zoneId the ID of the zone
   * @returns {Promise<any>} a promise that resolves when the operation completes
   */
  async deleteDnsZone(zoneId: number): Promise<any> {
    return Iland.getHttp().delete(`/orgs/${this.uuid}/dns-zones/${zoneId}`);
  }

  /**
   * Checks the status of a DNS zone within the org.
   * @param {number} zoneId the ID of the zone
   * @returns {Promise<CheckDnsZone>} a promise that resolves with the zone check results
   */
  async checkDnsZone(zoneId: number): Promise<CheckDnsZone> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/dns-zones/${zoneId}/is-valid`).then((response) => {
      const json = response.data as CheckDnsZoneJson;
      return new CheckDnsZone(json);
    });
  }

  /**
   * Gets all IP addresses available for assignment in PTR records.
   * @returns {Promise<IpAddressSet>} a promise that resolves with the set of available IP addresses
   */
  async getAvailableIpsForPtrRecords(): Promise<IpAddressSet> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/unmapped-dns-ptr-ip-addresses`).then((response) => {
      const json = response.data as IpAddressSetJson;
      return new IpAddressSet(json);
    });
  }

  /**
   * Gets all catalogs within the organization.
   * @returns {Promise<Array<Catalog>>} returns a promise that resolves with the list of organization catalogs
   */
  /* istanbul ignore next: autogenerated */
  async getOrgCatalogs(): Promise<Array<Catalog>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/catalogs`).then((response) => {
      const json = response.data.data as Array<CatalogJson>;
      return json.map((it) => new Catalog(it));
    });
  }

  /**
   * Get the reports available for download for the given organization.
   * @param {string} type Type of report to filter on
   * @param {string} format
   * @returns {Promise<Array<ComplianceReport>>} promise Promise that resolves with a list of ComplianceReport
   */
  /* istanbul ignore next: autogenerated */
  async getAvailableReports(type?: string, format?: string): Promise<Array<ComplianceReport>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/available-reports`, {
      params: {
        type: type,
        format: format
      }
    }).then((response) => {
      const json = response.data.data as Array<ComplianceReportJson>;
      return json.map((it) => new ComplianceReport(it));
    });
  }

  /**
   * Get the antimalware over time serie for the given organization and date range.
   * @param {number} start Start date (defaults to one month prior to end param)
   * @param {number} end End date (defaults to current time if not provided)
   * @param {number} limit Limit on number of samples to return (defaults to 730)
   * @returns {Promise<AntimalwareOverTime>} promise Promise that resolves with a AntimalwareOverTime serie
   */
  /* istanbul ignore next: autogenerated */
  async getAntimalwareOverTimeSerie(start?: number, end?: number, limit?: number): Promise<AntimalwareOverTime> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/anti-malware-over-time`, {
      params: {
        start: start,
        end: end,
        limit: limit
      }
    }).then((response) => {
      const json = response.data as AntimalwareOverTimeJson;
      return new AntimalwareOverTime(json);
    });
  }

  /**
   * Get the compliance over time serie for the given organization and serie name.
   * @param {SerieType} type Type of the series (ANTI_MALWARE, VULNERABILITY, LOG_INSPECTION, FIREWALL)
   * @param {number} start Start date (defaults to one month prior to end param)
   * @param {number} end End date (defaults to current time if not provided)
   * @param {number} limit Limit on number of samples to return (defaults to 60)
   * @returns {Promise<ComplianceOverTime>} promise Promise that resolves with a ComplianceOverTime serie
   */
  /* istanbul ignore next: autogenerated */
  async getComplianceOverTimeSerie(type?: SerieType, start?: number, end?: number,
                                   limit?: number): Promise<ComplianceOverTime> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/compliance-over-time`, {
      params: {
        type: type,
        start: start,
        end: end,
        limit: limit
      }
    }).then((response) => {
      const json = response.data as ComplianceOverTimeJson;
      return new ComplianceOverTime(json);
    });
  }

  /**
   * Get the firewall over time serie for the given organization and date range.
   * @param {number} start Start date (defaults to Jan 1, 1970)
   * @param {number} end End date (defaults to current time if not provided)
   * @param {number} limit Limit on number of samples to return (defaults to 730)
   * @returns {Promise<FirewallOverTime>} promise Promise that resolves with a FirewallOverTime serie
   */
  /* istanbul ignore next: autogenerated */
  async getFirewallOverTimeSerie(start?: number, end?: number, limit?: number): Promise<FirewallOverTime> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/firewall-over-time`, {
      params: {
        start: start,
        end: end,
        limit: limit
      }
    }).then((response) => {
      const json = response.data as FirewallOverTimeJson;
      return new FirewallOverTime(json);
    });
  }

  /**
   * Get the log inspection over time serie for the given organization and date range.
   * @param {number} start Start date (defaults to Jan 1, 1970)
   * @param {number} end End date (defaults to current time if not provided)
   * @param {number} limit Limit on number of samples to return (defaults to 730)
   * @returns {Promise<LogInspectionOverTime>} promise Promise that resolves with a LogInspectionOverTime serie
   */
  /* istanbul ignore next: autogenerated */
  async getLogInspectionOverTimeSerie(start?: number, end?: number, limit?: number): Promise<LogInspectionOverTime> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/log-inspection-over-time`, {
      params: {
        start: start,
        end: end,
        limit: limit
      }
    }).then((response) => {
      const json = response.data as LogInspectionOverTimeJson;
      return new LogInspectionOverTime(json);
    });
  }

  /**
   * Get the vulnerability over time serie for the given organization and date range.
   * @param {number} start Start date (defaults to Jan 1, 1970)
   * @param {number} end End date (defaults to current time if not provided)
   * @param {number} limit Limit on number of samples to return (defaults to 730)
   * @returns {Promise<VulnerabilityOverTime>} promise Promise that resolves with a ComplianceOverTime serie
   */
  /* istanbul ignore next: autogenerated */
  async getVulnerabilityOverTimeSerie(start?: number, end?: number, limit?: number): Promise<VulnerabilityOverTime> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/vulnerability-over-time`, {
      params: {
        start: start,
        end: end,
        limit: limit
      }
    }).then((response) => {
      const json = response.data as VulnerabilityOverTimeJson;
      return new VulnerabilityOverTime(json);
    });
  }

  /**
   * Get the latest available (newest) reports for download for the given organization.
   * @param {string} type Type of report to filter on ( vulnerability, anti_malware...)
   * @param {string} format Report formats available to filter on include (pdf, html, csv)
   * @returns {Promise<Array<ComplianceReport>>} promise Promise that resolves with a list of ComplianceReport
   */
  /* istanbul ignore next: autogenerated */
  async getLatestReportsFor(type?: string, format?: string): Promise<Array<ComplianceReport>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/latest-reports`, {
      params: {
        type: type,
        format: format
      }
    }).then((response) => {
      const json = response.data.data as Array<ComplianceReportJson>;
      return json.map((it) => new ComplianceReport(it));
    });
  }

  /**
   * Get a compliance report by its uuid including its JSON content.
   * @param {string} reportUuid Report UUID
   * @returns {Promise<ComplianceReport>} promise Promise that resolves with a ComplianceReport
   */
  /* istanbul ignore next: autogenerated */
  async getComplianceReportWithContent(reportUuid: string): Promise<ComplianceReport> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/reports/${reportUuid}`).then((response) => {
      const json = response.data as ComplianceReportJson;
      return new ComplianceReport(json);
    });
  }

  /**
   * Get a compliance report by its uuid including its JSON summary.
   * @param {string} reportUuid Report UUID
   * @returns {Promise<ComplianceReport>} promise Promise that resolves with a ComplianceReport
   */
  /* istanbul ignore next: autogenerated */
  async getComplianceReportWithSummary(reportUuid: string): Promise<ComplianceReport> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/reports/${reportUuid}/summary`).then((response) => {
      const json = response.data as ComplianceReportJson;
      return new ComplianceReport(json);
    });
  }

  /**
   * Generate the anti-malware report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateAntiMalwareReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
                                  email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-anti-malware-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the billing report for a given organization.
   * @param {BillingReportRequest} billingReportSpec Billing report
   * ({@link http://doc.10.api.iland.test/1.0/apidocs/#!/org-reporting/generateBillingReport|Doc})
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateBillingReport(billingReportSpec: BillingReportRequest, emailOnCompletion?: boolean,
                              email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-billing-report`, billingReportSpec.json, {
      params: {
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate a continuity protection summary report for the given organization.
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateContinuityProtectionSummaryReport(format?: string, emailOnCompletion?: boolean,
                                                  email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-continuity-protection-report`, {
      params: {
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the DPI event history report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateDPIEventHistoryReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
      email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-dpi-event-history-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the dr admin report for the given organization.
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateDRAdminReport(format?: string, emailOnCompletion?: boolean, email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-dr-admin-report`, {
      params: {
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the ecs event history report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateEcsEventHistoryReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
      email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-ecs-event-history-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the firewall event history report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateFirewallEventHistoryReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
                                           email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-firewall-event-history-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the HIPAA report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateHipaaReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
                            email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-hipaa-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the integrity event history report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateIntegrityEventHistoryReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
      email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-integrity-event-history-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the log inspection report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateLogInspectionReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
                                    email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-log-inspection-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the login event history report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateLoginEventHistoryReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
                                        email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-login-event-history-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the support request history report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateSupportRequestReport(start?: number, end?: number, format?: string, emailOnCompletion?: boolean,
                                     email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-support-request-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the VM encryption report for the given organization.
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email 3mail address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateVmEncryptionReport(format?: string, emailOnCompletion?: boolean, email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-vm-encryption-report`, {
      params: {
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the vm inventory report for a given organization.
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email 3mail address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateVmInventoryReport(emailOnCompletion?: boolean, email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-vm-inventory-report`, {
      params: {
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the vulnerability report for the given organization.
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email 3mail address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateVulnerabilityReport(format?: string, emailOnCompletion?: boolean, email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-vulnerability-report`, {
      params: {
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Generate the web reputation event history report for the given organization and time range.
   * @param {number} start Start date as timestamp
   * @param {number} end End date as timestamp
   * @param {string} format Report format ('pdf' or 'html')
   * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
   * @param {string} email Email address to send the report to if emailOnCompletion is true,
   * defaults to the user's profile email if not specified
   * @returns {Promise<Task>} promise Promise that resolves with a Task
   */
  /* istanbul ignore next: autogenerated */
  async generateWebReputationEventHistoryReport(start?: number, end?: number, format?: string,
                                                emailOnCompletion?: boolean, email?: string): Promise<Task> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/actions/generate-web-reputation-event-history-report`, {
      params: {
        start: start,
        end: end,
        format: format,
        emailOnCompletion: emailOnCompletion,
        email: email
      }
    }).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Get the number of events for the given organization, date range, and report type.
   * @param {string} report Type Type of report to filter on
   * @param {number} start Start date (defaults to yesterday)
   * @param {number} end End date (defaults to today)
   * @returns {Promise<number>} promise Promise that resolves with the reports count
   */
  /* istanbul ignore next: autogenerated */
  async getReportsCount(reportType?: string, start?: number, end?: number): Promise<number> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/report-count`, {
      params: {
        reportType: reportType,
        start: start,
        end: end
      }
    }).then((response) => {
      return response.data.count;
    });
  }

  /**
   * Gets all disaster recovery runbooks in the org.
   * @returns {Promise<Array<DisasterRecoveryRunbook>>} a promise that resolves with all runbooks in the org
   */
  /* istanbul ignore next: autogenerated */
  async getRecoveryRunbooks(): Promise<Array<DisasterRecoveryRunbook>> {
    return Iland.getHttp().get(`/orgs/${this.uuid}/disaster-recovery-runbooks`).then((response) => {
      const json = response.data.data as Array<DisasterRecoveryRunbookJson>;
      return json.map((it) => new DisasterRecoveryRunbook(it));
    });
  }

  /**
   * Creates a new disaster recovery runbook.
   * @param {DisasterRecoveryRunbookCreateRequest} spec the new runbook specification
   * @returns {Promise<DisasterRecoveryRunbook>} a promise that resolves with the new runbook
   */
  /* istanbul ignore next: autogenerated */
  async createRecoveryRunbook(spec: DisasterRecoveryRunbookCreateRequest): Promise<DisasterRecoveryRunbook> {
    return Iland.getHttp().post(`/orgs/${this.uuid}/disaster-recovery-runbooks`, spec.json).then((response) => {
      const json = response.data as DisasterRecoveryRunbookJson;
      return new DisasterRecoveryRunbook(json);
    });
  }

}
