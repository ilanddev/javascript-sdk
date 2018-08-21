import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  MockVmHasSnapshotResponse,
  MockVmPerfCountersResponse, MockVmPerfSamplesSeriesResponse, MockVmRecommendedDiskBusTypeResponse,
  MockVmResponse, MockVmToolUpgradePolicyResponse
} from '../../../model/vm/__mocks__/vm';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockVmVirtualDisksResponse } from '../../../model/vm/virtual-disk/__mocks__/virtual-disk';
import { MockMetadataResponse } from '../../../model/common/metadata/__mocks__/metadata';
import {
  MockVmBackupRestorePointsResponse
} from '../../../model/vm/backup-restore-point/__mocks__/backup-restore-point';
import { MockVmScreenTicketResponse } from '../../../model/vm/screen-ticket/__mocks__/screen-ticket';
import { MockVmSnapshotResponse } from '../../../model/common/snapshot/__mocks__/snapshot';
import { MockVmMksScreenTicketResponse } from '../../../model/vm/screen-ticket/__mocks__/mks-screen-ticket';
import { MockVmBillResponse } from '../../../model/common/billing/__mocks__/bill';
import { MockTaskService } from '../../../model/task/__mocks__/task';
import { MockVmGetBootOptionsResponse } from '../../../model/vm/boot-options/__mocks__/boot-options';
import { MockVmCapabilitiesResponse } from '../../../model/vm/capabilities/__mocks__/capabilities';
import { MockVmGuestCustomizationResponse } from '../../../model/vm/guest-customization/__mocks__/guest-customization';
import { MockVmGuestToolsResponse } from '../../../model/vm/guest-tools/__mocks__/guest-tools';
import { MockVmSummaryResponse } from '../../../model/vm/summary/__mocks__/vm-summary';
import { MockVmNetworksResponse } from '../../../model/vm/vm-network/__mocks__/vm-networks';
import { MockService } from '../../../config/__mocks__/util';

export async function MockVmGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vms\/[^\/]+?$/.test(url):
      // get vm by uuid
      return MockVmResponse;
    case /\/vms\/[^\/]+?\/backups$/.test(url):
      // get vm backup restore points
      return MockVmBackupRestorePointsResponse;
    case /\/vms\/[^\/]+?\/billing$/.test(url):
      // get vm bill
      return MockVmBillResponse;
    case /\/vms\/[^\/]+?\/boot-options$/.test(url):
      // get vm boot options
      return MockVmGetBootOptionsResponse;
    case /\/vms\/[^\/]+?\/capabilities$/.test(url):
      // get vm capabilities
      return MockVmCapabilitiesResponse;
    case /\/vms\/[^\/]+?\/recommended-disk-bus-type$/.test(url):
      // get vm recommended disk bus type
      return MockVmRecommendedDiskBusTypeResponse;
    case /\/vms\/[^\/]+?\/guest-customization$/.test(url):
      // get vm guest customization
      return MockVmGuestCustomizationResponse;
    case /\/vms\/[^\/]+?\/guest-tools$/.test(url):
      // get vm guest tools info
      return MockVmGuestToolsResponse;
    case /\/vms\/[^\/]+?\/has-snapshot$/.test(url):
      // get vm has snapshot
      return MockVmHasSnapshotResponse;
    case /\/vms\/[^\/]+?\/summary$/.test(url):
      // get vm summary
      return MockVmSummaryResponse;
    case /\/vms\/[^\/]+?\/tools-upgrade-policy$/.test(url):
      // get vm tools upgrade policy
      return MockVmToolUpgradePolicyResponse;
    case /\/vms\/[^\/]+?\/metadata$/.test(url):
      // get metadata
      return MockMetadataResponse;
    case /\/vms\/[^\/]+?\/mks-screen-ticket$/.test(url):
      // get vm mks screenticket
      return MockVmMksScreenTicketResponse;
    case /\/vms\/[^\/]+?\/networks$/.test(url):
      // get vm networks
      return MockVmNetworksResponse;
    case /\/vms\/[^\/]+?\/screen-ticket$/.test(url):
      // get vm screenticket
      return MockVmScreenTicketResponse;
    case /\/vms\/[^\/]+?\/snapshot$/.test(url):
      // get vm snapshot
      return MockVmSnapshotResponse;
    case /\/vms\/[^\/]+?\/virtual-disks$/.test(url):
      // get virtual disks for VM
      return MockVmVirtualDisksResponse;
    case /\/vms\/[^\/]+?\/performance-counters/.test(url):
      // get vm perf counters
      return MockVmPerfCountersResponse;
    case /\/vms\/[^\/]+?\/performance/.test(url):
      // get vm perf samples
      return MockVmPerfSamplesSeriesResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVmPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vms\/[^\/]+?\/actions\/add-virtual-disk$/.test(url):
      // update single virtual disk
      return MockTaskService.getNewMockTaskResponse('add virtual disk');
    case /\/vms\/[^\/]+?\/actions\/copy$/.test(url):
      // copy vm
      return MockTaskService.getNewMockTaskResponse('clone vm');
    case /\/vms\/[^\/]+?\/actions\/create-snapshot$/.test(url):
      // copy vm
      return MockTaskService.getNewMockTaskResponse('create snapshot');
    case /\/vms\/[^\/]+?\/actions\/remove-snapshot$/.test(url):
      // remove snapshot
      return MockTaskService.getNewMockTaskResponse('remove snapshot');
    case /\/vms\/[^\/]+?\/actions\/disable-nested-hypervisor$/.test(url):
      // copy vm
      return MockTaskService.getNewMockTaskResponse('disable nested hypervisor');
    case /\/vms\/[^\/]+?\/actions\/eject-media$/.test(url):
      // eject media from vm
      return MockTaskService.getNewMockTaskResponse('eject media');
    case /\/vms\/[^\/]+?\/actions\/enable-nested-hypervisor$/.test(url):
      // copy vm
      return MockTaskService.getNewMockTaskResponse('enable nested hypervisor');
    case /\/vms\/[^\/]+?\/actions\/insert-media$/.test(url):
      // insert media into vm
      return MockTaskService.getNewMockTaskResponse('insert media');
    case /\/vms\/[^\/]+?\/actions\/install-vmware-tools$/.test(url):
      // install vmware tools
      return MockTaskService.getNewMockTaskResponse('install VMWare tools');
    case /\/vms\/[^\/]+?\/actions\/poweroff$/.test(url):
      // power off VM
      return MockTaskService.getNewMockTaskResponse('power off');
    case /\/vms\/[^\/]+?\/actions\/poweron$/.test(url):
      // power on VM
      return MockTaskService.getNewMockTaskResponse('power on');
    case /\/vms\/[^\/]+?\/actions\/reboot$/.test(url):
      // reboot VM
      return MockTaskService.getNewMockTaskResponse('reboot');
    case /\/vms\/[^\/]+?\/actions\/reconfigure$/.test(url):
      // reconfigure VM
      return MockTaskService.getNewMockTaskResponse('reconfigure vm');
    case /\/vms\/[^\/]+?\/actions\/relocate$/.test(url):
      // relocate VM
      return MockTaskService.getNewMockTaskResponse('relocate vm');
    case /\/vms\/[^\/]+?\/actions\/reset$/.test(url):
      // reset VM
      return MockTaskService.getNewMockTaskResponse('reset');
    case /\/vms\/[^\/]+?\/actions\/reset-mac-addresses$/.test(url):
      // reset VM
      return MockTaskService.getNewMockTaskResponse('reset mac address');
    case /\/vms\/[^\/]+?\/actions\/restore$/.test(url):
      // restore VM backup
      return MockTaskService.getNewMockTaskResponse('restore backup');
    case /\/vms\/[^\/]+?\/actions\/restore-into-vapp$/.test(url):
      // restore VM backup into a Vapp
      return MockTaskService.getNewMockTaskResponse('restore backup');
    case /\/vms\/[^\/]+?\/actions\/restore-snapshot$/.test(url):
      // restore snapshot
      return MockTaskService.getNewMockTaskResponse('restore snapshot');
    case /\/vms\/[^\/]+?\/actions\/shutdown$/.test(url):
      // shutdown VM
      return MockTaskService.getNewMockTaskResponse('shutdown');
    case /\/vms\/[^\/]+?\/actions\/suspend$/.test(url):
      // suspend VM
      return MockTaskService.getNewMockTaskResponse('suspend');
    case /\/vms\/[^\/]+?\/actions\/update-boot-options$/.test(url):
      // update VM boot options
      return MockTaskService.getNewMockTaskResponse('update vm boot options');
    case /\/vms\/[^\/]+?\/actions\/update-capabilities$/.test(url):
      // update VM capabilities
      return MockTaskService.getNewMockTaskResponse('update vm capabilities');
    case /\/vms\/[^\/]+?\/actions\/update-cpu-count$/.test(url):
      // update VM cpu count
      return MockTaskService.getNewMockTaskResponse('update cpu count');
    case /\/vms\/[^\/]+?\/actions\/update-description$/.test(url):
      // update VM description
      return MockTaskService.getNewMockTaskResponse('update description');
    case /\/vms\/[^\/]+?\/actions\/update-guest-customization$/.test(url):
      // update VM description
      return MockTaskService.getNewMockTaskResponse('update guest customization section');
    case /\/vms\/[^\/]+?\/actions\/update-memory-size$/.test(url):
      // update VM memory size
      return MockTaskService.getNewMockTaskResponse('update memory size');
    case /\/vms\/[^\/]+?\/actions\/update-name$/.test(url):
      // update VM name
      return MockTaskService.getNewMockTaskResponse('rename vm');
    case /\/vms\/[^\/]+?\/actions\/update-tools-upgrade-policy$/.test(url):
      // update VM tools upgrade policy
      return MockTaskService.getNewMockTaskResponse('update vm tools upgrade policy');
    case /\/vms\/[^\/]+?\/actions\/update-virtual-disk$/.test(url):
      // update single virtual disk
      return MockTaskService.getNewMockTaskResponse('update disk size');
    case /\/vms\/[^\/]+?\/actions\/update-virtual-disks$/.test(url):
      // update single virtual disk
      return MockTaskService.getNewMockTaskResponse('update vm disks');
    case /\/vms\/[^\/]+?\/actions\/upgrade-guest-tools$/.test(url):
      // upgrade VM guest tools
      return MockTaskService.getNewMockTaskResponse('vmware tools upgrade');
    case /\/vms\/[^\/]+?\/actions\/update-virtual-hardware-version$/.test(url):
      // upgrade virtual hardware version
      return MockTaskService.getNewMockTaskResponse('upgrade virtual hardware');
    case /\/vms\/[^\/]+?\/actions\/email-event-history$/.test(url):
      // send a csv file with event history by email.
      return MockService.getMockVoidResponse();
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVmPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vms\/[^\/]+?\/metadata$/.test(url):
      // update metadata
      return MockTaskService.getNewMockTaskResponse('update metadata');
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVmDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
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
    case /\/vms\/[^\/]+?\/vnics\/[^\/]+?$/.test(url):
      // delete virtual network card
      return MockTaskService.getNewMockTaskResponse('delete virtual network card');
    default:
      return MockNotFoundResponse;
  }
}
