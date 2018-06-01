import { Http as RealHttp } from '../http';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  MockVmPerfCountersResponse,
  MockVmPerfSamplesSeriesResponse,
  MockVmResponse
} from '../../../model/vm/__mocks__/vm';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockVmVirtualDisksResponse } from '../../../model/vm/virtual-disk/__mocks__/virtual-disk';
import { MockTaskService } from '../../../model/task/__mocks__/task';
import { MockFakeMetadataResponse, MockMetadataResponse } from '../../../model/common/metadata/__mocks__/metadata';
import { MockVmBackupRestorePointsResponse }
  from '../../../model/vm/backup-restore-point/__mocks__/backup-restore-point';
import { MockVmSnapshotResponse } from '../../../model/vm/snapshot/__mocks__/snapshot';
import { MockVmScreenTicketResponse } from '../../../model/vm/screen-ticket/__mocks__/screen-ticket';
import { MockVmMksScreenTicketResponse } from '../../../model/vm/screen-ticket/__mocks__/mks-screen-ticket';
import { MockVmBillResponse, MockVmCurrentBillingSummaryResponse } from '../../../model/common/billing/__mocks__/bill';
import { MockVappVmsResponse } from '../../../model/vapp/__mocks__/vapp-vms';
import { MockVdcVappsResponse } from '../../../model/vdc/__mocks__/vdc-vapps';
import { MockVdcVmsResponse } from '../../../model/vdc/__mocks__/vdc-vms';
import {
  MockVdcPerfCountersResponse,
  MockVdcPerfSamplesSeriesResponse,
  MockVdcResponse
} from '../../../model/vdc/__mocks__/vdc';
import { MockOrgVmsResponse } from '../../../model/org/__mocks__/org-vms';
import { MockOrgVappsResponse } from '../../../model/org/__mocks__/org-vapps';
import { MockOrgResponse } from '../../../model/org/__mocks__/org';
import { MockOrgVdcsResponse } from '../../../model/org/__mocks__/org-vdcs';
import { MockInternalNetworkResponse } from '../../../model/internal-network/__mocks__/internal-network';
import { MockOrgInternalNetworksResponse } from '../../../model/org/__mocks__/internal-networks';
import { MockOrgEdgesResponse } from '../../../model/org/__mocks__/edges';
import { MockVappNetworkResponse } from '../../../model/vapp-network/__mocks__/vapp-network';
import { MockVappVappNetworksResponse } from '../../../model/vapp/__mocks__/vapp-networks';
import { MockOrgVappNetworksResponse } from '../../../model/org/__mocks__/org-vapp-networks';
import {
  MockCompanyLogoResponse,
  MockCompanyOrgsResponse,
  MockCompanyResponse,
  MockCompanyService,
  MockCompanySupportTicketsResponse,
  MockCompanyUsersResponse,
  MockCompanyVappsResponse,
  MockCompanyVdcsResponse,
  MockCompanyVmsResponse
} from '../../../model/company/__mocks__/company';
import { MockService } from '../../../config/__mocks__/util';
import {
  MockUserCompaniesResponse,
  MockUserCompanyInventoryResponse,
  MockUserRoleForCompanyResponse1,
  MockUserRoleForCompanyResponse2,
  MockUserRoleForCompanyResponse3
} from '../../../model/user/__mocks__/user';
import {
  CatalogItemDownloadsTemplateMockResponse,
  CatalogMediasMockResponse,
  CatalogVappTemplateMockResponse,
  MockCatalogResponse,
  MockPublicCatalogResponse
} from '../../../model/catalog/__mocks__/catalog';
import { MockMediaResponse } from '../../../model/media/__mocks__/media';
import {
  MockPublicVappTemplateResponse,
  MockVappTemplateResponse
} from '../../../model/vapp-template/__mocks__/vapp-template';
import {
  SupportTicketAttachmentDownloadableMockResponse,
  SupportTicketAttachmentMockResponse,
  SupportTicketAttachmentsMockResponse,
  SupportTicketCommentsMockResponse,
  SupportTicketMockResponse
} from '../../../model/company/support-ticket/__mocks__/support-ticket';
import {
  MockEdgeFirewallCheckpointResponse,
  MockEdgeFirewallCheckpointsResponse,
  MockEdgeFirewallLogsResponse,
  MockEdgeFirewallResponse
} from '../../../model/edge/firewall/__mocks__/edge-firewall';
import { MockEdgeIpsecVpnResponse } from '../../../model/edge/ipsec-vpn/__mocks__/edge-ipsec-vpn';
import { MockEdgeLoadbalancerResponse } from '../../../model/edge/load-balancer/__mocks__/edge-load-balancer';
import { MockEdgeSslVpnResponse } from '../../../model/edge/ssl-vpn/__mocks__/edge-ssl-vpn';
import { MockEdgeResponse } from '../../../model/edge/__mocks__/edge';
import { MockEdgeDhcpResponse } from '../../../model/edge/dhcp/__mocks__/dhcp';
import { MockEdgeNatJsonResponse } from '../../../model/edge/nat/__mocks__/edge-nat';
import {
  MockEdgeNatCheckpointResponse,
  MockEdgeNatCheckpointsResponse
} from '../../../model/edge/checkpoint/__mocks__/checkpoint';
import { MockEdgeStaticRoutingServiceResponse } from '../../../model/edge/static-routing/__mocks__/static-routing';
import { MockEdgeStatsResponse } from '../../../model/edge/network-perf-sample/__mocks__/network-perf-sample';
import { RoleCreationRequestJson } from '../../../model/iam/role/__json__/role-creation-request-json';
import { UserCreationRequestJson } from '../../../model/user/__json__/user-creation-request-json';
import { MockVpgAlertResponse, MockVpgReportDetailsResponse } from '../../../model/vpg/__mocks__/vpg';
import { MockVappPerfSamplesSeriesResponse } from '../../../model/vapp/__mocks__/vapp';
import { MockIpAddressSetResponse, MockOrgDnsRecordsResponse } from '../../../model/org/__mocks__/org-dns-records';
import { DnsRecordCreateRequestJson, DnsRecordUpdateRequestJson, DnsZoneCreateRequestJson } from '../../../model/org';
import { MockOrgResource } from '../../../model/org/__mocks__/org-resource';
import { MockCheckDnsZoneResponse, MockOrgDnsZonesResponse } from '../../../model/org/__mocks__/org-dns-zones';

jest.unmock('../http');

/**
 * Mock Iland API HTTP Client.
 */
export class Http {

  constructor() {
    this.request = jest.fn(this.request);
    this.get = jest.fn(this.get);
    this.delete = jest.fn(this.delete);
    this.post = jest.fn(this.post);
    this.put = jest.fn(this.put);
  }

  static versionMime(mime: string, version?: number): string {
    return RealHttp.versionMime(mime, version);
  }

  async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    const self = this;
    switch (config.method!.toLowerCase()) {
      case 'get':
        return self.get(config.url!, config);
      case 'put':
        return self.put(config.url!, config.data, config);
      case 'post':
        return self.post(config.url!, config.data, config);
      case 'delete':
        return self.delete(config.url!, config);
      default:
        return MockNotFoundResponse;
    }
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vms\/[^\/]+?$/.test(url):
        // get vm by uuid
        return MockVmResponse;
      case /\/vms\/[^\/]+?\/virtual-disks$/.test(url):
        // get virtual disks for VM
        return MockVmVirtualDisksResponse;
      case /\/task\/[^\/]+?\/([^\/]+)$/.test(url):
        // get task by uuid
        const taskUuid = /\/task\/[^\/]+?\/([^\/]+)$/.exec(url)![1];
        return MockTaskService.getExistingMockTaskResponse(taskUuid);
      case /\/vms\/[^\/]+?\/metadata$/.test(url):
      case /\/vapps\/[^\/]+?\/metadata$/.test(url):
      case /\/vdcs\/[^\/]+?\/metadata$/.test(url):
      case /\/media\/[^\/]+?\/metadata$/.test(url):
        // get metadata
        return MockMetadataResponse;
      case /\/vms\/[^\/]+?\/backups$/.test(url):
        // get vm backup restore points
        return MockVmBackupRestorePointsResponse;
      case /\/vms\/[^\/]+?\/snapshot$/.test(url):
        // get vm snapshot
        return MockVmSnapshotResponse;
      case /\/vms\/[^\/]+?\/screen-ticket$/.test(url):
        // get vm screenticket
        return MockVmScreenTicketResponse;
      case /\/vms\/[^\/]+?\/mks-screen-ticket$/.test(url):
        // get vm mks screenticket
        return MockVmMksScreenTicketResponse;
      case /\/vms\/[^\/]+?\/bill$/.test(url):
        // get vm bill
        return MockVmBillResponse;
      case /\/vms\/[^\/]+?\/billing\/current$/.test(url):
        // get vm current billing summary
        return MockVmCurrentBillingSummaryResponse;
      case /\/vms\/[^\/]+?\/performance-counters/.test(url):
        // get vm perf counters
        return MockVmPerfCountersResponse;
      case /\/vms\/[^\/]+?\/performance/.test(url):
        // get vm perf samples
        return MockVmPerfSamplesSeriesResponse;
      case /\/vapps\/[^\/]+?\/vms$/.test(url):
        // get a vapps child vms
        return MockVappVmsResponse;
      case /\/vapps\/[^\/]+?\/networks$/.test(url):
        // get a vapps child vapp networks
        return MockVappVappNetworksResponse;
      case /\/vapps\/[^\/]+?\/performance-counters/.test(url):
        // get vapp perf counters
        return MockVmPerfCountersResponse;
      case /\/vapps\/[^\/]+?\/performance/.test(url):
        // get vapp perf samples
        return MockVappPerfSamplesSeriesResponse;
      case /\/vdcs\/[^\/]+?$/.test(url):
        // get a vdc
        return MockVdcResponse;
      case /\/vdcs\/[^\/]+?\/vapps$/.test(url):
        // get a vdcs child vapps
        return MockVdcVappsResponse;
      case /\/vdcs\/[^\/]+?\/vms$/.test(url):
        // get a vdcs child vms
        return MockVdcVmsResponse;
      case /\/vdcs\/[^\/]+?\/performance-counters/.test(url):
        // get vdcs perf counters
        return MockVdcPerfCountersResponse;
      case /\/vdcs\/[^\/]+?\/performance/.test(url):
        // get vdcs perf samples
        return MockVdcPerfSamplesSeriesResponse;
      case /\/orgs\/[^\/]+?$/.test(url):
        // get a org
        return MockOrgResponse;
      case /\/orgs\/[^\/]+?\/vdcs$/.test(url):
        // get a orgs child vdcs
        return MockOrgVdcsResponse;
      case /\/orgs\/[^\/]+?\/vapps$/.test(url):
        // get a orgs child vapps
        return MockOrgVappsResponse;
      case /\/orgs\/[^\/]+?\/vms$/.test(url):
        // get a orgs child vms
        return MockOrgVmsResponse;
      case /\/vapp-networks\/[^\/]+?$/.test(url):
        // get a vapp network
        return MockVappNetworkResponse;
      case /\/internal-networks\/[^\/]+?$/.test(url):
        // get a internal network
        return MockInternalNetworkResponse;
      case /\/edges\/[^\/]+?$/.test(url):
        // get an edge
        return MockEdgeResponse;
      case /\/edges\/[^\/]+\/dhcp$/.test(url):
        // get an edge DHCP
        return MockEdgeDhcpResponse;
      case /\/edges\/[^\/]+\/firewall$/.test(url):
        // get an edge Firewall
        return MockEdgeFirewallResponse;
      case /\/edges\/[^\/]+\/firewall-logs/.test(url):
        // get an edge Firewall logs
        return MockEdgeFirewallLogsResponse;
      case /\/edges\/[^\/]+\/firewall\/checkpoints$/.test(url):
        // get an edge Firewall checkpoints
        return MockEdgeFirewallCheckpointsResponse;
      case /\/edges\/[^\/]+\/firewall\/checkpoints\/[^\/]+$/.test(url):
        // get an edge Firewall checkpoints
        return MockEdgeFirewallCheckpointResponse;
      case /\/edges\/[^\/]+\/ipsec-vpn$/.test(url):
        // get an edge ipsec-vpn service.
        return MockEdgeIpsecVpnResponse;
      case /\/edges\/[^\/]+\/load-balancer$/.test(url):
        // get an edge load balancer service.
        return MockEdgeLoadbalancerResponse;
      case /\/edges\/[^\/]+\/nat$/.test(url):
        // get an edge nat service.
        return MockEdgeNatJsonResponse;
      case /\/edges\/[^\/]+\/nat\/checkpoints$/.test(url):
        // get an edge nat checkpoints.
        return MockEdgeNatCheckpointsResponse;
      case /\/edges\/[^\/]+\/nat\/checkpoints\/[^\/]+$/.test(url):
        // get an edge nat checkpoint.
        return MockEdgeNatCheckpointResponse;
      case /\/edges\/[^\/]+\/sslvpn$/.test(url):
        // get an edge ssl vpn service.
        return MockEdgeSslVpnResponse;
      case /\/edges\/[^\/]+\/static-routing$/.test(url):
        // get an edge static routing.
        return MockEdgeStaticRoutingServiceResponse;
      case /\/edges\/[^\/]+\/stats$/.test(url):
        // get an edge stats.
        return MockEdgeStatsResponse;
      case /\/orgs\/[^\/]+?\/vdc-networks$/.test(url):
        // get an orgs internal networks
        return MockOrgInternalNetworksResponse;
      case /\/orgs\/[^\/]+?\/vapp-networks$/.test(url):
        // get an orgs vapp networks
        return MockOrgVappNetworksResponse;
      case /\/orgs\/[^\/]+?\/edges$/.test(url):
        // get an orgs edges
        return MockOrgEdgesResponse;
      case /\/orgs\/[^\/]+?\/dns-records$/.test(url):
        // get an orgs dns records
        return MockOrgDnsRecordsResponse;
      case /\/orgs\/[^\/]+?\/dns-zones$/.test(url):
        // get an orgs dns zones
        return MockOrgDnsZonesResponse;
      case /\/orgs\/[^\/]+?\/dns-zones\/[^\/]+?\/is-valid$/.test(url):
        // get an orgs dns zones check
        return MockCheckDnsZoneResponse;
      case /\/orgs\/[^\/]+?\/unmapped-dns-ptr-ip-addresses$/.test(url):
        // get an orgs unmapped ptr ips
        return MockIpAddressSetResponse;
      case /\/companies\/[^\/]+?$/.test(url):
        // get a company
        return MockCompanyResponse;
      case /\/companies\/[^\/]+\/users?$/.test(url):
        // get users for a company
        return MockCompanyUsersResponse;
      case /\/companies\/[^\/]+\/support-tickets$/.test(url):
        return MockCompanySupportTicketsResponse;
      case /\/companies\/[^\/]+\/support-tickets\/[^\/]+$/.test(url):
        return SupportTicketMockResponse;
      case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/attachments$/.test(url):
        return SupportTicketAttachmentsMockResponse;
      case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/attachments\/[^\/]+$/.test(url):
        return SupportTicketAttachmentMockResponse;
      case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/attachments\/[^\/]+\/is-downloadable$/.test(url):
        return SupportTicketAttachmentDownloadableMockResponse;
      case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/comments$/.test(url):
        return SupportTicketCommentsMockResponse;
      case /\/companies\/[^\/]+\/location\/[^\/]+\/orgs$/.test(url):
        return MockCompanyOrgsResponse;
      case /\/companies\/[^\/]+\/location\/[^\/]+\/vdcs/.test(url):
        return MockCompanyVdcsResponse;
      case /\/companies\/[^\/]+\/location\/[^\/]+\/vapps/.test(url):
        return MockCompanyVappsResponse;
      case /\/companies\/[^\/]+\/location\/[^\/]+\/vms/.test(url):
        return MockCompanyVmsResponse;
      case /\/companies\/[^\/]+\/logo?$/.test(url):
        // get company logo
        return MockCompanyLogoResponse;
      case /\/users\/[^\/]+\/companies?$/.test(url):
        // get companies for a user
        return MockUserCompaniesResponse;
      case /\/users\/[^\/]+\/iaas-inventory$/.test(url):
        return MockUserCompanyInventoryResponse;
      case /\/users\/[^\/]+\/roles\/000002$/.test(url):
        return MockUserRoleForCompanyResponse1;
      case /\/users\/[^\/]+\/roles\/000003$/.test(url):
        return MockUserRoleForCompanyResponse2;
      case /\/users\/[^\/]+\/roles\/12345$/.test(url):
        return MockUserRoleForCompanyResponse3;
      case /\/catalogs\/dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534$/.test(url):
        // get a public catalog
        return MockPublicCatalogResponse;
      case /\/catalogs\/[^\/]+?$/.test(url):
        // get a catalog
        return MockCatalogResponse;
      case /\/catalogs\/[^\/]+\/item-downloads$/.test(url):
        // get catalog item downloads
        return CatalogItemDownloadsTemplateMockResponse;
      case /\/catalogs\/[^\/]+\/medias$/.test(url):
        // get catalog medias
        return CatalogMediasMockResponse;
      case /\/catalogs\/[^\/]+\/vapp-templates$/.test(url):
        // get catalog metadata
        return CatalogVappTemplateMockResponse;
      case /\/catalogs\/dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98964f\/metadata$/
        .test(url):
      case /\/vdcs\/dev-vcd01.iland.dev:urn:vcloud:vdc:e51cc45c-8890-r331-7e7e-2934lk235ie5\/metadata$/.test(url):
        // get fake metadata
        return MockFakeMetadataResponse;
      case /\/catalogs\/[^\/]+\/metadata$/.test(url):
        // get catalog metadata
        return MockMetadataResponse;
      case /\/media\/[^\/]+?$/.test(url):
        // get a media
        return MockMediaResponse;
      case /\/vapp-templates\/dev-vcd01.iland.dev:urn:vcloud:vapptemplate:b1ffb935-f32c-4886-a7a6-2e4d3d7b1de8$/
        .test(url):
        // get a public vapp template
        return MockPublicVappTemplateResponse;
      case /\/vapp-templates\/[^\/]+?$/.test(url):
        // get a vapp template
        return MockVappTemplateResponse;
      case /\/vpgs\/[^\/]+?\/failover-report\/[^\/]+?$/.test(url):
        // remove vpg failover test alert
        return MockVpgReportDetailsResponse;
      case /\/vpgs\/[^\/]+?\/failover-test-alerts$/.test(url):
        // remove vpg failover test alert
        return MockVpgAlertResponse;
      default:
        return MockNotFoundResponse;
    }
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vms\/[^\/]+?\/disks\/[^\/]+?$/.test(url):
        // delete single virtual disk
        return MockTaskService.getNewMockTaskResponse('delete virtual disk');
      case /\/vms\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
      case /\/vdcs\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
      case /\/media\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
        // delete single metadata entry
        return MockTaskService.getNewMockTaskResponse('delete metadata');
      case /\/vms\/[^\/]+?$/.test(url):
        // delete vm
        return MockTaskService.getNewMockTaskResponse('delete entity');
      case /\/vms\/[^\/]+?\/snapshot$/.test(url):
        // delete vm snapshot
        return MockTaskService.getNewMockTaskResponse('remove snapshot');
      case /\/companies\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
        // delete a role
        return MockService.getMockNoContentResponse();
      case /\/vpgs\/[^\/]+?\/failover-test-alerts\/[^\/]+?$/.test(url):
        // remove vpg failover test alert
        return MockService.getMockVoidResponse();
      case /\/media\/[^\/]+?$/.test(url):
        // Delete media
        return MockTaskService.getNewMockTaskResponse('delete entity');
      case /\/orgs\/[^\/]+?\/dns-records\/[^\/]+?$/.test(url): {
        // delete dns record
        return MockOrgResource.deleteDnsRecord();
      }
      case /\/orgs\/[^\/]+?\/dns-zones\/[^\/]+?$/.test(url): {
        // delete dns zone
        return MockOrgResource.deleteDnsZone();
      }
      case /\/users\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
        return MockService.getMockVoidResponse();
      default:
        return MockNotFoundResponse;
    }
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/cloud-tenants\/[^\/]+?\/actions\/upgrade-contract$/.test(url):
        // update cloud tenant contract
        return MockService.getMockVoidResponse();
      case /\/vpgs\/[^\/]+?\/failover-test-alerts$/.test(url):
        // add a vpg failover test alert
        return MockVpgAlertResponse;
      case /\/vpgs\/[^\/]+?\/failover-test$/.test(url):
        // add a vpg failover test alert
        return MockTaskService.getNewMockTaskResponse('zerto failover test initiation');
      case /\/vpgs\/[^\/]+?\/failover-test-stop$/.test(url):
        // add a vpg failover test alert
        return MockTaskService.getNewMockTaskResponse('zerto failover test stop');
      case /\/vpgs\/[^\/]+?\/failover$/.test(url):
        // add a vpg failover test alert
        return MockTaskService.getNewMockTaskResponse('zerto live failover initiation');
      case /\/vpgs\/[^\/]+?\/failover-commit$/.test(url):
        // add a vpg failover test alert
        return MockTaskService.getNewMockTaskResponse('zerto failover commit');
      case /\/vpgs\/[^\/]+?\/failover-rollback$/.test(url):
        // add a vpg failover test alert
        return MockTaskService.getNewMockTaskResponse('zerto failover rollback');
      case /\/vms\/[^\/]+?\/virtual-disk$/.test(url):
        // update single virtual disk
        return MockTaskService.getNewMockTaskResponse('add virtual disk');
      case /\/vms\/[^\/]+?\/poweron$/.test(url):
        // power on VM
        return MockTaskService.getNewMockTaskResponse('power on');
      case /\/vms\/[^\/]+?\/poweroff$/.test(url):
        // power off VM
        return MockTaskService.getNewMockTaskResponse('power off');
      case /\/vms\/[^\/]+?\/suspend$/.test(url):
        // suspend VM
        return MockTaskService.getNewMockTaskResponse('suspend');
      case /\/vms\/[^\/]+?\/reboot$/.test(url):
        // reboot VM
        return MockTaskService.getNewMockTaskResponse('reboot');
      case /\/vms\/[^\/]+?\/reset$/.test(url):
        // reset VM
        return MockTaskService.getNewMockTaskResponse('reset');
      case /\/vms\/[^\/]+?\/shutdown$/.test(url):
        // shutdown VM
        return MockTaskService.getNewMockTaskResponse('shutdown');
      case /\/vms\/[^\/]+?\/restore$/.test(url):
        // restore VM backup
        return MockTaskService.getNewMockTaskResponse('restore backup');
      case /\/vms\/[^\/]+?\/snapshot$/.test(url):
        // create snapshot
        return MockTaskService.getNewMockTaskResponse('create snapshot');
      case /\/vms\/[^\/]+?\/snapshot\/restore$/.test(url):
        // restore snapshot
        return MockTaskService.getNewMockTaskResponse('restore snapshot');
      case /\/vms\/[^\/]+?\/media\/insert$/.test(url):
        // insert media into vm
        return MockTaskService.getNewMockTaskResponse('insert media');
      case /\/vms\/[^\/]+?\/media\/eject$/.test(url):
        // eject media from vm
        return MockTaskService.getNewMockTaskResponse('eject media');
      case /\/vdcs\/[^\/]+?\/build-vapp$/.test(url):
        // build vapp task
        return MockTaskService.getNewMockTaskResponse('build vapp');
      case /\/vdcs\/[^\/]+?\/vapp$/.test(url):
        // add vapp
        return MockTaskService.getNewMockTaskResponse('add vapp');
      case /\/media\/[^\/]+?\/actions\/clone$/.test(url):
        // Clone media
        return MockTaskService.getNewMockTaskResponse('clone media');
      case /\/media\/[^\/]+?\/actions\/sync/.test(url):
        // Sync media
        return MockTaskService.getNewMockTaskResponse('sync catalog item');
      case /\/companies\/[^\/]+?\/roles$/.test(url):
        // create new role
        const request = data as RoleCreationRequestJson;
        return MockCompanyService.createRole(request);
      case /\/companies\/[^\/]+?\/users$/.test(url): {
        // create new user
        const request = data as UserCreationRequestJson;
        return MockCompanyService.createUser(request);
      }
      case /\/orgs\/[^\/]+?\/dns-records$/.test(url): {
        // create new org dns record
        const request = data as DnsRecordCreateRequestJson;
        return MockOrgResource.addDnsRecord(request);
      }
      case /\/orgs\/[^\/]+?\/dns-zones$/.test(url): {
        // create new org dns zone
        const request = data as DnsZoneCreateRequestJson;
        return MockOrgResource.addDnsZone(request);
      }
      default:
        return MockNotFoundResponse;
    }
  }

  async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vms\/[^\/]+?\/virtual-disks$/.test(url):
        // update VM's virtual disks
        return MockTaskService.getNewMockTaskResponse('update vm disks');
      case /\/vms\/[^\/]+?\/virtual-disk$/.test(url):
        // update single virtual disk
        return MockTaskService.getNewMockTaskResponse('update vm disks');
      case /\/vms\/[^\/]+?\/mem$/.test(url):
        // update VMs memory size
        return MockTaskService.getNewMockTaskResponse('update memory size');
      case /\/vms\/[^\/]+?\/cpu$/.test(url):
        // update VMs CPUs
        return MockTaskService.getNewMockTaskResponse('update cpu count');
      case /\/vms\/[^\/]+?\/metadata$/.test(url):
      case /\/vdcs\/[^\/]+?\/metadata$/.test(url):
      case /\/media\/[^\/]+?\/metadata$/.test(url):
        // update metadata
        return MockTaskService.getNewMockTaskResponse('update metadata');
      case /\/vms\/[^\/]+?\/name$/.test(url):
        // rename VM
        return MockTaskService.getNewMockTaskResponse('rename vm');
      case /\/vms\/[^\/]+?\/virtual-hardware-version$/.test(url):
        // upgrade vms virtual hardware
        return MockTaskService.getNewMockTaskResponse('upgrade virtual hardware');
      case /\/vms\/[^\/]+?\/storage-profile$/.test(url):
        // move VM to a different storage profile
        return MockTaskService.getNewMockTaskResponse('relocate vm');
      case /\/companies\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
        // update a role
        const request = data as RoleCreationRequestJson;
        return MockCompanyService.createRole(request);
      case /\/users\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
        return MockService.getMockVoidResponse();
      case /\/media\/[^\/]+?$/.test(url):
        // Update media
        return MockTaskService.getNewMockTaskResponse('update media');
      case /\/orgs\/[^\/]+?\/dns-records$/.test(url): {
        // update org dns record
        const request = data as DnsRecordUpdateRequestJson;
        return MockOrgResource.updateDnsRecord(request);
      }
      default:
        return MockNotFoundResponse;
    }
  }
}
