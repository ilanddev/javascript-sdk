import { Http as RealHttp } from '../http';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockVmResponse } from './responses/vm/vm';
import { MockNotFoundResponse } from './responses/errors';
import { MockVmVirtualDisksResponse } from './responses/vm/virtual-disk';
import { MockTaskService } from './responses/task/task';
import { MockMetadataResponse } from './responses/metadata/metadata';
import { MockVmBackupRestorePointsResponse } from './responses/vm/backup-restore-point';
import { MockVmSnapshotResponse } from './responses/vm/snapshot';
import { MockVmScreenTicketResponse } from './responses/vm/screen-ticket';
import { MockVmMksScreenTicketResponse } from './responses/vm/mks-screen-ticket';
import { MockVmBillResponse, MockVmCurrentBillingSummaryResponse } from './responses/vm/bill';
import { MockVappVmsResponse } from './responses/vapp/vms';
import { MockVdcVappsResponse } from './responses/vdc/vapps';
import { MockVdcVmsResponse } from './responses/vdc/vms';
import { MockVdcResponse } from './responses/vdc/vdc';
import { MockOrgVmsResponse } from './responses/org/vms';
import { MockOrgVappsResponse } from './responses/org/vapps';
import { MockOrgResponse } from './responses/org/org';
import { MockOrgVdcsResponse } from './responses/org/vdcs';
import { MockInternalNetworkResponse } from './responses/internal-network/internal-network';
import { MockEdgeResponse } from './responses/edge/edge';
import { MockOrgInternalNetworksResponse } from './responses/org/internal-networks';
import { MockOrgEdgesResponse } from './responses/org/edges';
import { MockVappNetworkResponse } from './responses/vapp-network/vapp-network';
import { MockVappVappNetworksResponse } from './responses/vapp/vapp-networks';
import { MockOrgVappNetworksResponse } from './responses/org/vapp-networks';
import {
    MockCompanyLogoResponse, MockCompanyResponse, MockCompanyService,
    MockCompanyUsersResponse
} from './responses/company/company';
import { MockService } from './responses/util';
import { RoleCreationRequestJson, UserCreationRequestJson } from '../model/json/';
import {
  MockUserCompaniesResponse,
  MockUserCompanyInventoryResponse,
  MockUserRoleForCompanyResponse1,
  MockUserRoleForCompanyResponse2,
  MockUserRoleForCompanyResponse3
} from './responses/user/user';
import { MockCatalogResponse, MockPublicCatalogResponse } from './responses/catalog/catalog';
import { MockMediaResponse } from './responses/media/media';
import { MockPublicVappTemplateResponse, MockVappTemplateResponse } from './responses/vapp-template/vapp-template';

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
      case /\/vapps\/[^\/]+?\/vms$/.test(url):
        // get a vapps child vms
        return MockVappVmsResponse;
      case /\/vapps\/[^\/]+?\/networks$/.test(url):
        // get a vapps child vapp networks
        return MockVappVappNetworksResponse;
      case /\/vdcs\/[^\/]+?$/.test(url):
        // get a vdc
        return MockVdcResponse;
      case /\/vdcs\/[^\/]+?\/vapps$/.test(url):
        // get a vdcs child vapps
        return MockVdcVappsResponse;
      case /\/vdcs\/[^\/]+?\/vms$/.test(url):
        // get a vdcs child vms
        return MockVdcVmsResponse;
      case /\/organizations\/[^\/]+?$/.test(url):
        // get a org
        return MockOrgResponse;
      case /\/organizations\/[^\/]+?\/vdcs$/.test(url):
        // get a orgs child vdcs
        return MockOrgVdcsResponse;
      case /\/organizations\/[^\/]+?\/vapps$/.test(url):
        // get a orgs child vapps
        return MockOrgVappsResponse;
      case /\/organizations\/[^\/]+?\/vms$/.test(url):
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
      case /\/organizations\/[^\/]+?\/vdc-networks$/.test(url):
        // get an orgs internal networks
        return MockOrgInternalNetworksResponse;
      case /\/organizations\/[^\/]+?\/vapp-networks$/.test(url):
        // get an orgs vapp networks
        return MockOrgVappNetworksResponse;
      case /\/organizations\/[^\/]+?\/edges$/.test(url):
        // get an orgs edges
        return MockOrgEdgesResponse;
      case /\/companies\/[^\/]+?$/.test(url):
        // get a company
        return MockCompanyResponse;
      case /\/companies\/[^\/]+\/users?$/.test(url):
        // get users for a company
        return MockCompanyUsersResponse;
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
      default:
        return MockNotFoundResponse;
    }
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
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
      case /\/companies\/[^\/]+?\/roles$/.test(url):
        // create new role
        const request = data as RoleCreationRequestJson;
        return MockCompanyService.createRole(request);
      case /\/companies\/[^\/]+?\/users$/.test(url): {
        // create new user
        const request = data as UserCreationRequestJson;
        return MockCompanyService.createUser(request);
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
        // update VMs metadata
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
      default:
        return MockNotFoundResponse;
    }
  }
}
