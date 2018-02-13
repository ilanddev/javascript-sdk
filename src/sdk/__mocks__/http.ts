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
import { MockCompanyResponse, MockCompanyService, MockCompanyUsersResponse } from './responses/company/company';
import { RoleCreationRequestJson } from '../model/json/role-creation-request';
import { MockService } from './responses/util';
import { UserCreationRequestJson } from '../model/json/user-creation-request';
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
      case /\/vm\/[^\/]+?$/.test(url):
        // get vm by uuid
        return MockVmResponse;
      case /\/vm\/[^\/]+?\/virtual-disks$/.test(url):
        // get virtual disks for VM
        return MockVmVirtualDisksResponse;
      case /\/task\/[^\/]+?\/([^\/]+)$/.test(url):
        // get task by uuid
        const taskUuid = /\/task\/[^\/]+?\/([^\/]+)$/.exec(url)![1];
        return MockTaskService.getExistingMockTaskResponse(taskUuid);
      case /\/vm\/[^\/]+?\/metadata$/.test(url):
      case /\/vapp\/[^\/]+?\/metadata$/.test(url):
      case /\/vdc\/[^\/]+?\/metadata$/.test(url):
        // get metadata
        return MockMetadataResponse;
      case /\/vm\/[^\/]+?\/backups$/.test(url):
        // get vm backup restore points
        return MockVmBackupRestorePointsResponse;
      case /\/vm\/[^\/]+?\/snapshot$/.test(url):
        // get vm snapshot
        return MockVmSnapshotResponse;
      case /\/vm\/[^\/]+?\/screen-ticket$/.test(url):
        // get vm screenticket
        return MockVmScreenTicketResponse;
      case /\/vm\/[^\/]+?\/mks-screen-ticket$/.test(url):
        // get vm mks screenticket
        return MockVmMksScreenTicketResponse;
      case /\/vm\/[^\/]+?\/bill$/.test(url):
        // get vm bill
        return MockVmBillResponse;
      case /\/vm\/[^\/]+?\/billing\/current$/.test(url):
        // get vm current billing summary
        return MockVmCurrentBillingSummaryResponse;
      case /\/vapp\/[^\/]+?\/vms$/.test(url):
        // get a vapps child vms
        return MockVappVmsResponse;
      case /\/vapp\/[^\/]+?\/networks$/.test(url):
        // get a vapps child vapp networks
        return MockVappVappNetworksResponse;
      case /\/vdc\/[^\/]+?$/.test(url):
        // get a vdc
        return MockVdcResponse;
      case /\/vdc\/[^\/]+?\/vapps$/.test(url):
        // get a vdcs child vapps
        return MockVdcVappsResponse;
      case /\/vdc\/[^\/]+?\/vms$/.test(url):
        // get a vdcs child vms
        return MockVdcVmsResponse;
      case /\/org\/[^\/]+?$/.test(url):
        // get a org
        return MockOrgResponse;
      case /\/org\/[^\/]+?\/vdcs$/.test(url):
        // get a orgs child vdcs
        return MockOrgVdcsResponse;
      case /\/org\/[^\/]+?\/vapps$/.test(url):
        // get a orgs child vapps
        return MockOrgVappsResponse;
      case /\/org\/[^\/]+?\/vms$/.test(url):
        // get a orgs child vms
        return MockOrgVmsResponse;
      case /\/network\/[^\/]+?$/.test(url):
        // get a network
        const netUuid = /\/network\/([^\/]+)$/.exec(url)![1];
        if (netUuid.indexOf('vapp-network') > 0) {
          return MockVappNetworkResponse;
        } else {
          return MockInternalNetworkResponse;
        }
      case /\/edge\/[^\/]+?$/.test(url):
        // get an edge
        return MockEdgeResponse;
      case /\/org\/[^\/]+?\/vdc-networks$/.test(url):
        // get an orgs internal networks
        return MockOrgInternalNetworksResponse;
      case /\/org\/[^\/]+?\/vapp-networks$/.test(url):
        // get an orgs vapp networks
        return MockOrgVappNetworksResponse;
      case /\/org\/[^\/]+?\/edges$/.test(url):
        // get an orgs edges
        return MockOrgEdgesResponse;
      case /\/companies\/[^\/]+?$/.test(url):
        // get a company
        return MockCompanyResponse;
      case /\/companies\/[^\/]+\/users?$/.test(url):
        // get users for a company
        return MockCompanyUsersResponse;
      case /\/user\/[^\/]+\/companies?$/.test(url):
        // get companies for a user
        return MockUserCompaniesResponse;
      case /\/user\/[^\/]+\/inventory$/.test(url):
        return MockUserCompanyInventoryResponse;
      case /\/user\/[^\/]+\/roles\/000002$/.test(url):
        return MockUserRoleForCompanyResponse1;
      case /\/user\/[^\/]+\/roles\/000003$/.test(url):
        return MockUserRoleForCompanyResponse2;
      case /\/user\/[^\/]+\/roles\/12345$/.test(url):
        return MockUserRoleForCompanyResponse3;
      case /\/catalog\/dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534$/.test(url):
        // get a public catalog
        return MockPublicCatalogResponse;
      case /\/catalog\/[^\/]+?$/.test(url):
        // get a catalog
        return MockCatalogResponse;
      case /\/media\/[^\/]+?$/.test(url):
        // get a media
        return MockMediaResponse;
      case /\/vapp-template\/dev-vcd01.iland.dev:urn:vcloud:vapptemplate:b1ffb935-f32c-4886-a7a6-2e4d3d7b1de8$/
        .test(url):
        // get a public vapp template
        return MockPublicVappTemplateResponse;
      case /\/vapp-template\/[^\/]+?$/.test(url):
        // get a vapp template
        return MockVappTemplateResponse;
      default:
        return MockNotFoundResponse;
    }
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vm\/[^\/]+?\/disks\/[^\/]+?$/.test(url):
        // delete single virtual disk
        return MockTaskService.getNewMockTaskResponse('delete virtual disk');
      case /\/vm\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
        // delete single metadata entry
        return MockTaskService.getNewMockTaskResponse('delete metadata');
      case /\/vm\/[^\/]+?$/.test(url):
        // delete vm
        return MockTaskService.getNewMockTaskResponse('delete entity');
      case /\/vm\/[^\/]+?\/snapshot$/.test(url):
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
      case /\/vm\/[^\/]+?\/virtual-disk$/.test(url):
        // update single virtual disk
        return MockTaskService.getNewMockTaskResponse('add virtual disk');
      case /\/vm\/[^\/]+?\/poweron$/.test(url):
        // power on VM
        return MockTaskService.getNewMockTaskResponse('power on');
      case /\/vm\/[^\/]+?\/poweroff$/.test(url):
        // power off VM
        return MockTaskService.getNewMockTaskResponse('power off');
      case /\/vm\/[^\/]+?\/suspend$/.test(url):
        // suspend VM
        return MockTaskService.getNewMockTaskResponse('suspend');
      case /\/vm\/[^\/]+?\/reboot$/.test(url):
        // reboot VM
        return MockTaskService.getNewMockTaskResponse('reboot');
      case /\/vm\/[^\/]+?\/reset$/.test(url):
        // reset VM
        return MockTaskService.getNewMockTaskResponse('reset');
      case /\/vm\/[^\/]+?\/shutdown$/.test(url):
        // shutdown VM
        return MockTaskService.getNewMockTaskResponse('shutdown');
      case /\/vm\/[^\/]+?\/restore$/.test(url):
        // restore VM backup
        return MockTaskService.getNewMockTaskResponse('restore backup');
      case /\/vm\/[^\/]+?\/snapshot$/.test(url):
        // create snapshot
        return MockTaskService.getNewMockTaskResponse('create snapshot');
      case /\/vm\/[^\/]+?\/snapshot\/restore$/.test(url):
        // restore snapshot
        return MockTaskService.getNewMockTaskResponse('restore snapshot');
      case /\/vm\/[^\/]+?\/media\/insert$/.test(url):
        // insert media into vm
        return MockTaskService.getNewMockTaskResponse('insert media');
      case /\/vm\/[^\/]+?\/media\/eject$/.test(url):
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
      case /\/vm\/[^\/]+?\/virtual-disks$/.test(url):
        // update VM's virtual disks
        return MockTaskService.getNewMockTaskResponse('update vm disks');
      case /\/vm\/[^\/]+?\/virtual-disk$/.test(url):
        // update single virtual disk
        return MockTaskService.getNewMockTaskResponse('update vm disks');
      case /\/vm\/[^\/]+?\/mem$/.test(url):
        // update VMs memory size
        return MockTaskService.getNewMockTaskResponse('update memory size');
      case /\/vm\/[^\/]+?\/cpu$/.test(url):
        // update VMs CPUs
        return MockTaskService.getNewMockTaskResponse('update cpu count');
      case /\/vm\/[^\/]+?\/metadata$/.test(url):
        // update VMs metadata
        return MockTaskService.getNewMockTaskResponse('update metadata');
      case /\/vm\/[^\/]+?\/name$/.test(url):
        // rename VM
        return MockTaskService.getNewMockTaskResponse('rename vm');
      case /\/vm\/[^\/]+?\/virtual-hardware-version$/.test(url):
        // upgrade vms virtual hardware
        return MockTaskService.getNewMockTaskResponse('upgrade virtual hardware');
      case /\/vm\/[^\/]+?\/storage-profile$/.test(url):
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
