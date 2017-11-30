import { Vm } from '../vm';
import { MockVmJson } from '../../__mocks__/responses/vm/vm';
import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { MockVirtualDisk1Json, MockVirtualDisksJson } from '../../__mocks__/responses/vm/virtual-disk';
import { VirtualDiskJson } from '../json/virtual-disk';
import { MockMetadataJson } from '../../__mocks__/responses/metadata/metadata';
import {
  MockBackupRestorePoint1Json, MockBackupRestorePoint2Json
} from '../../__mocks__/responses/vm/backup-restore-point';
import { MockSnapshotJson } from '../../__mocks__/responses/vm/snapshot';
import { MockScreenTicketJson } from '../../__mocks__/responses/vm/screen-ticket';
import { MockMksScreenTicketJson } from '../../__mocks__/responses/vm/mks-screen-ticket';
import { MockVmBillingSummaryJson, MockVmBillJson } from '../../__mocks__/responses/vm/bill';
import {
  OperatingSystem, VmCpuUpdateRequestJson, VmCreateSnapshotRequestJson, VmMemoryUpdateRequestJson,
  VmRestoreBackupRequestJson, VmStatus,
  VmUpdateNameRequestJson
} from '../json/vm';
import { VmCpuUpdateRequest } from '../vm-cpu-update-request';
import { VmCreateSnapshotRequest } from '../vm-create-snapshot-request';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Can get VM virtual disks', async() => {
  let vm = new Vm(MockVmJson);
  return vm.getVirtualDisks().then(function(disks) {
    expect(disks).toBeDefined();
    expect(disks.length).toBe(2);
    expect(disks[0].size).toBe(MockVirtualDisksJson[0].size);
    expect(disks[0].name).toBe(MockVirtualDisksJson[0].name);
    expect(disks[0].type).toBe(MockVirtualDisksJson[0].type);
    expect(disks[1].size).toBe(MockVirtualDisksJson[1].size);
    expect(disks[1].name).toBe(MockVirtualDisksJson[1].name);
    expect(disks[1].type).toBe(MockVirtualDisksJson[1].type);
  });
});

test('Properly submits request for updating VM virtual disks', async() => {
  const vm = new Vm(MockVmJson);
  const updatedDisks: Array<VirtualDiskJson> = [{
    name: 'Virtual Disk 3',
    type: 'IDE',
    size: 100
  }];
  return vm.updateVirtualDisks(updatedDisks).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/virtual-disks`, updatedDisks);
    expect(task.operation).toBe('update vm disks');
  });
});

test('Properly submits request for updating single VM virtual disk', async() => {
  const vm = new Vm(MockVmJson);
  const updatedDisk: VirtualDiskJson = Object.assign({}, MockVirtualDisk1Json);
  return vm.updateVirtualDisk(updatedDisk).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/virtual-disk`, updatedDisk);
    expect(task.operation).toBe('update vm disks');
  });
});

test('Properly submits request for creating new VM virtual disk', async() => {
  const vm = new Vm(MockVmJson);
  const newDisk: VirtualDiskJson = {
    size: 10000,
    name: 'new disk',
    type: 'BUS_LOGIC'
  };
  return vm.createVirtualDisk(newDisk).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/virtual-disk`, newDisk);
    expect(task.operation).toBe('add virtual disk');
  });
});

test('Properly submits request for deleting VM virtual disk', async() => {
  const vm = new Vm(MockVmJson);
  const diskName = 'disk to delete';
  return vm.deleteVirtualDisk(diskName).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.uuid}/disks/${diskName}`);
    expect(task.operation).toBe('delete virtual disk');
  });
});

test('Properly submits request for updating VM memory size', async() => {
  const vm = new Vm(MockVmJson);
  const newMemSize = 10000;
  const expectedSpec: VmMemoryUpdateRequestJson = {
    memory_size: newMemSize.toString()
  };
  return vm.updateMemorySize(newMemSize).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/mem`, expectedSpec);
    expect(task.operation).toBe('update memory size');
  });
});

test('Properly submits request for updating VM cpu number', async() => {
  const vm = new Vm(MockVmJson);
  const spec: VmCpuUpdateRequestJson = {
    cpus_number: 8,
    cores_per_socket: 2
  };
  return vm.updateNumberOfCpus(new VmCpuUpdateRequest(8, 2)).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/cpu`, spec);
    expect(task.operation).toBe('update cpu count');
  });
});

test('Properly handles request for retrieving a VMs metadata', async() => {
  let vm = new Vm(MockVmJson);
  return vm.getMetadata().then(function(metadata) {
    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(4);
    expect(metadata[0].key).toBe(MockMetadataJson[0].key);
    expect(metadata[0].access).toBe(MockMetadataJson[0].access);
    expect(metadata[0].type).toBe(MockMetadataJson[0].type);
    expect(metadata[0].value).toBe(MockMetadataJson[0].value);
    expect(metadata[0].json).toEqual(MockMetadataJson[0]);
    expect(metadata[0].toString().length).toBeGreaterThan(0);

    expect(metadata[1].key).toBe(MockMetadataJson[1].key);
    expect(metadata[1].access).toBe(MockMetadataJson[1].access);
    expect(metadata[1].type).toBe(MockMetadataJson[1].type);
    expect(metadata[1].value).toBe(MockMetadataJson[1].value);
    expect(metadata[1].json).toEqual(MockMetadataJson[1]);
    expect(metadata[1].toString().length).toBeGreaterThan(0);

    expect(metadata[2].key).toBe(MockMetadataJson[2].key);
    expect(metadata[2].access).toBe(MockMetadataJson[2].access);
    expect(metadata[2].type).toBe(MockMetadataJson[2].type);
    expect(metadata[2].value).toBe(MockMetadataJson[2].value);
    expect(metadata[2].json).toEqual(MockMetadataJson[2]);
    expect(metadata[2].toString().length).toBeGreaterThan(0);

    expect(metadata[3].key).toBe(MockMetadataJson[3].key);
    expect(metadata[3].access).toBe(MockMetadataJson[3].access);
    expect(metadata[3].type).toBe(MockMetadataJson[3].type);
    expect(metadata[3].value).toBe(MockMetadataJson[3].value);
    expect(metadata[3].json).toEqual(MockMetadataJson[3]);
    expect(metadata[3].toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request for updating VM metadata', async() => {
  const vm = new Vm(MockVmJson);
  return vm.updateMetadata(MockMetadataJson).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/metadata`, MockMetadataJson);
    expect(task.operation).toBe('update metadata');
  });
});

test('Properly submits request for deleting a VM metadata entry', async() => {
  const vm = new Vm(MockVmJson);
  const metadataKey = 'metadata-key';
  return vm.deleteMetadata(metadataKey).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.uuid}/metadata/${metadataKey}`);
    expect(task.operation).toBe('delete metadata');
  });
});

test('Properly submits request for deleting a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.delete().then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.uuid}`);
    expect(task.operation).toBe('delete entity');
  });
});

test('Properly submits request to power on a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOn().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/poweron`, undefined, undefined);
    expect(task.operation).toBe('power on');
  });
});

test('Properly submits request to power on a VM and force guest customization', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOn(true).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/poweron`, undefined, {
      params: {
        forceGuestCustomization: true
      }
    });
    expect(task.operation).toBe('power on');
  });
});

test('Properly submits request to power off a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOff().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/poweroff`, undefined, undefined);
    expect(task.operation).toBe('power off');
  });
});

test('Properly submits request to reboot a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.rebootGuestOs().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/reboot`, undefined, undefined);
    expect(task.operation).toBe('reboot');
  });
});

test('Properly submits request to reset a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.reset().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/reset`, undefined, undefined);
    expect(task.operation).toBe('reset');
  });
});

test('Properly submits request to suspend a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.suspend().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/suspend`, undefined, undefined);
    expect(task.operation).toBe('suspend');
  });
});

test('Properly submits request to shutdown a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.shutdownGuestOs().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/shutdown`, undefined, undefined);
    expect(task.operation).toBe('shutdown');
  });
});

test('Properly submits request to rename a VM', async() => {
  const vm = new Vm(MockVmJson);
  const newName = 'new VM name';
  const json: VmUpdateNameRequestJson = {
    name: newName
  };
  return vm.updateName(newName).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/name`, json);
    expect(task.operation).toBe('rename vm');
  });
});

test('Properly submits request to get a VMs restore points', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getBackupRestorePoints().then(function(restorePoints) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.uuid}/backups`);
    expect(restorePoints.length).toBe(2);
    expect(restorePoints[0].name).toBe(MockBackupRestorePoint1Json.name);
    expect(restorePoints[0].timestamp.getTime()).toBe(MockBackupRestorePoint1Json.timestamp);
    expect(restorePoints[0].backupServerName).toBe(MockBackupRestorePoint1Json.backup_server_name);
    expect(restorePoints[0].json).toEqual(MockBackupRestorePoint1Json);
    expect(restorePoints[0].toString().length).toBeGreaterThan(0);

    expect(restorePoints[1].name).toBe(MockBackupRestorePoint2Json.name);
    expect(restorePoints[1].timestamp.getTime()).toBe(MockBackupRestorePoint2Json.timestamp);
    expect(restorePoints[1].backupServerName).toBe(MockBackupRestorePoint2Json.backup_server_name);
    expect(restorePoints[1].json).toEqual(MockBackupRestorePoint2Json);
    expect(restorePoints[1].toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to restore a VM backup', async() => {
  const vm = new Vm(MockVmJson);
  const timestamp = new Date();
  const json: VmRestoreBackupRequestJson = {
    time: timestamp.getTime()
  };
  return vm.restoreBackup(timestamp).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/restore`, json);
    expect(task.operation).toBe('restore backup');
  });
});

test('Properly submits request to retrieve a VMs snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getSnapshot().then(function(snapshot) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.uuid}/snapshot`);
    expect(snapshot).toBeDefined();
    expect(snapshot.size).toBe(MockSnapshotJson.size);
    expect(snapshot.creationDate.getTime()).toBe(MockSnapshotJson.creation_date);
    expect(snapshot.poweredOn).toBe(MockSnapshotJson.is_powered_on);
    expect(snapshot.json).toEqual(MockSnapshotJson);
    expect(snapshot.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to create a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  let json: VmCreateSnapshotRequestJson = {
    memory: true,
    quiesce: true,
    name: 'snapshot name',
    description: 'snapshot description'
  };
  return vm.createSnapshot(new VmCreateSnapshotRequest(json.name, json.description, json.memory, json.quiesce))
           .then(function(task) {
             expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/snapshot`, json);
             expect(task.operation).toBe('create snapshot');
           });
});

test('Properly submits request to restore a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.restoreSnapshot().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/snapshot/restore`);
    expect(task.operation).toBe('restore snapshot');
  });
});

test('Properly submits request to delete a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.deleteSnapshot().then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.uuid}/snapshot`);
    expect(task.operation).toBe('remove snapshot');
  });
});

test('Properly submits request to update VMs virtual hardware', async() => {
  const vm = new Vm(MockVmJson);
  return vm.updateVirtualHardwareVersion().then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/virtual-hardware-version`);
    expect(task.operation).toBe('upgrade virtual hardware');
  });
});

test('Properly submits request to get a VM screen ticket', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getScreenTicket().then(function(screenTicket) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.uuid}/screen-ticket`);
    expect(screenTicket.vmId).toBe(MockScreenTicketJson.vm_id);
    expect(screenTicket.host).toBe(MockScreenTicketJson.host);
    expect(screenTicket.sslThumbprint).toBe(MockScreenTicketJson.ssl_thumbprint);
    expect(screenTicket.ticket).toBe(MockScreenTicketJson.ticket);
    expect(screenTicket.json).toEqual(MockScreenTicketJson);
    expect(screenTicket.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get a VM MKS screen ticket', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getMksScreenTicket().then(function(mksScreenTicket) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.uuid}/mks-screen-ticket`);
    expect(mksScreenTicket.vmx).toBe(MockMksScreenTicketJson.vmx);
    expect(mksScreenTicket.host).toBe(MockMksScreenTicketJson.host);
    expect(mksScreenTicket.port).toBe(MockMksScreenTicketJson.port);
    expect(mksScreenTicket.ticket).toBe(MockMksScreenTicketJson.ticket);
    expect(mksScreenTicket.json).toEqual(MockMksScreenTicketJson);
    expect(mksScreenTicket.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get a VM bill', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getBill(5, 2017).then(function(bill) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.uuid}/bill`, {
      params: {
        month: 5,
        year: 2017
      }
    });
    expect(bill.timestamp.getTime()).toBe(MockVmBillJson.time);
    expect(bill.entityUuid).toBe(MockVmBillJson.entity_uuid);
    expect(bill.entityType).toBe(MockVmBillJson.entity_type);
    expect(bill.archiveStorageBurstCost).toBe(MockVmBillJson.archive_burst_cost);
    expect(bill.archiveStorageBurstUsage).toBe(MockVmBillJson.archive_burst_usage);
    expect(bill.archiveStorageCost).toBe(MockVmBillJson.archive_cost);
    expect(bill.archiveStorageReservedCost).toBe(MockVmBillJson.archive_reserved_cost);
    expect(bill.archiveStorageReservedUsage).toBe(MockVmBillJson.archive_reserved_usage);
    expect(bill.archiveStorageUsage).toBe(MockVmBillJson.archive_usage);
    expect(bill.bandwidthBurstCost).toBe(MockVmBillJson.bandwidth_burst);
    expect(bill.bandwidthBurstUsage).toBe(MockVmBillJson.bandwidth_burst_usage);
    expect(bill.bandwidthCost).toBe(MockVmBillJson.bandwidth);
    expect(bill.bandwidthReservedCost).toBe(MockVmBillJson.bandwidth_reserved_cost);
    expect(bill.bandwidthReservedUsage).toBe(MockVmBillJson.bandwidth_reserved_usage);
    expect(bill.bandwidthUsage).toBe(MockVmBillJson.bandwidth_usage);
    expect(bill.cpuBurstCost).toBe(MockVmBillJson.cpu_burst);
    expect(bill.cpuBurstUsage).toBe(MockVmBillJson.cpu_burst_usage);
    expect(bill.cpuCost).toBe(MockVmBillJson.cpu);
    expect(bill.cpuReservedUsage).toBe(MockVmBillJson.cpu_res_usage);
    expect(bill.cpuUsage).toBe(MockVmBillJson.cpu_usage);
    expect(bill.currencyCode).toBe(MockVmBillJson.currency_code);
    expect(bill.discount).toBe(MockVmBillJson.discount);
    expect(bill.diskBurstCost).toBe(MockVmBillJson.disk_burst);
    expect(bill.diskBurstUsage).toBe(MockVmBillJson.disk_burst_usage);
    expect(bill.diskCost).toBe(MockVmBillJson.disk);
    expect(bill.diskUsage).toBe(MockVmBillJson.disk_usage);
    expect(bill.entityName).toBe(MockVmBillJson.entity_name);
    expect(bill.estimatedCost).toBe(MockVmBillJson.estimate);
    expect(bill.hddStorageCost).toBe(MockVmBillJson.hdd_cost);
    expect(bill.hddStorageReservedCost).toBe(MockVmBillJson.hdd_reserved_cost);
    expect(bill.hddStorageReservedUsage).toBe(MockVmBillJson.hdd_reserved_usage);
    expect(bill.hddStorageUsage).toBe(MockVmBillJson.hdd_usage);
    expect(bill.lineItems.length).toBe(MockVmBillJson.line_items.length);
    let idx = 0;
    for (const item of bill.lineItems) {
      expect(item.name).toBe(MockVmBillJson.line_items[idx].name);
      expect(item.price).toBe(MockVmBillJson.line_items[idx].price);
      expect(item.productId).toBe(MockVmBillJson.line_items[idx].product_id);
      expect(item.quantity).toBe(MockVmBillJson.line_items[idx].quantity);
      expect(item.json).toEqual(MockVmBillJson.line_items[idx]);
      expect(item.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(bill.memoryBurstCost).toBe(MockVmBillJson.mem_burst);
    expect(bill.memoryBurstUsage).toBe(MockVmBillJson.mem_burst_usage);
    expect(bill.memoryCost).toBe(MockVmBillJson.mem);
    expect(bill.memoryReservedUsage).toBe(MockVmBillJson.mem_res_usage);
    expect(bill.memoryUsage).toBe(MockVmBillJson.mem_usage);
    expect(bill.ssdStorageBurstCost).toBe(MockVmBillJson.ssd_burst_cost);
    expect(bill.ssdStorageBurstUsage).toBe(MockVmBillJson.ssd_burst_usage);
    expect(bill.ssdStorageCost).toBe(MockVmBillJson.ssd_cost);
    expect(bill.ssdStorageReservedCost).toBe(MockVmBillJson.ssd_reserved_cost);
    expect(bill.ssdStorageReservedUsage).toBe(MockVmBillJson.ssd_reserved_usage);
    expect(bill.ssdStorageUsage).toBe(MockVmBillJson.ssd_usage);
    expect(bill.totalCost).toBe(MockVmBillJson.total);
    expect(bill.zertoAdvancedStorageCost).toBe(MockVmBillJson.zerto_advanced_cost);
    expect(bill.zertoAdvancedStorageUsage).toBe(MockVmBillJson.zerto_advanced_usage);
    expect(bill.zertoArchiveStorageCost).toBe(MockVmBillJson.zerto_archive_cost);
    expect(bill.zertoArchiveStorageUsage).toBe(MockVmBillJson.zerto_archive_usage);
    expect(bill.hddStorageBurstCost).toBe(MockVmBillJson.hdd_burst_cost);
    expect(bill.testDrive).toBe(MockVmBillJson.test_drive);
    expect(bill.json).toEqual(MockVmBillJson);
    expect(bill.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get VM current billing summary ', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getCurrentBillingSummary().then(function(summary) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.uuid}/billing/current`);
    expect(summary.currentHour.json).toEqual(MockVmBillingSummaryJson.current_hour);
    expect(summary.currentMonth.json).toEqual(MockVmBillingSummaryJson.current_month);
    expect(summary.previousMonth.json).toEqual(MockVmBillingSummaryJson.previous_month);
    expect(summary.previousHour.json).toEqual(MockVmBillingSummaryJson.previous_hour);
    expect(summary.testDrive).toBe(MockVmBillingSummaryJson.test_drive);
    expect(summary.json).toEqual(MockVmBillingSummaryJson);
    expect(summary.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to insert media into VM ', async() => {
  const vm = new Vm(MockVmJson);
  let mediaUuid = 'test-media-uuid';
  return vm.insertMedia(mediaUuid).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/media/insert`, {
      media: mediaUuid
    });
    expect(task.operation).toBe('insert media');
  });
});

test('Properly submits request to eject media from VM ', async() => {
  const vm = new Vm(MockVmJson);
  return vm.ejectMedia().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.uuid}/media/eject`);
    expect(task.operation).toBe('eject media');
  });
});

test('Properly submits request to relocate VM to a different storage profile ', async() => {
  const vm = new Vm(MockVmJson);
  let storageProfileUuid = 'fake-storage-profile-uuid';
  return vm.relocate(storageProfileUuid).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.uuid}/storage-profile`, {
      storage_profile: storageProfileUuid
    });
    expect(task.operation).toBe('relocate vm');
  });
});

test('Parses power status correctly', () => {
  let apiVm = {
    name: '',
    uuid: '',
    deleted: false,
    deleted_date: 0,
    updated_date: 0,
    cores_per_socket: 2,
    cpus_number: 2,
    created_date: null,
    deployed: true,
    description: '',
    hardware_version: '',
    inserted_media_name: '',
    location_id: '',
    media_inserted: false,
    memory_size: 500,
    org_uuid: '',
    os: 'ubuntuGuest' as OperatingSystem,
    status: 'POWERED_OFF' as VmStatus,
    storage_profiles: [],
    vapp_uuid: '',
    vcenter_href: '',
    vcenter_instance_uuid: '',
    vcenter_moref: '',
    vcenter_name: '',
    vcloud_href: '',
    vdc_uuid: '',
    vim_datastore_ref: '',
    vm_local_id: ''
  };
  let vm = new Vm(apiVm);
  expect(vm.powerStatus).toBe('PARTIALLY_POWERED_OFF');
  apiVm.deployed = false;
  expect(vm.powerStatus).toBe('POWERED_OFF');
  apiVm.status = 'POWERED_ON';
  expect(vm.powerStatus).toBe('POWERED_ON');
  apiVm.status = 'WAITING_FOR_INPUT';
  expect(vm.powerStatus).toBe('WAITING_FOR_INPUT');
  apiVm.status = 'UNRESOLVED';
  expect(vm.powerStatus).toBe('UNRESOLVED');
  apiVm.status = 'UNRECOGNIZED';
  expect(vm.powerStatus).toBe('UNRECOGNIZED');
  apiVm.status = 'FAILED_CREATION';
  expect(vm.powerStatus).toBe('FAILED_CREATION');
  apiVm.status = 'UNKNOWN';
  expect(vm.powerStatus).toBe('UNKNOWN');
  apiVm.status = 'MIXED';
  expect(vm.powerStatus).toBe('MIXED');
  apiVm.status = 'SUSPENDED';
  expect(vm.powerStatus).toBe('SUSPENDED');
});
