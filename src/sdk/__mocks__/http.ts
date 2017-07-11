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
    let self = this;
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
      default:
        return MockNotFoundResponse;
    }
  }

}
