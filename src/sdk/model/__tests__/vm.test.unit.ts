import {
  Vm, VmCpuUpdateJson, VmCreateSnapshotJson, VmMemoryUpdateJson, VmRestoreBackupJson, VmUpdateNameJson
} from '../vm';
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
    expect(disks[0].getSize()).toBe(MockVirtualDisksJson[0].size);
    expect(disks[0].getName()).toBe(MockVirtualDisksJson[0].name);
    expect(disks[0].getType()).toBe(MockVirtualDisksJson[0].type);
    expect(disks[1].getSize()).toBe(MockVirtualDisksJson[1].size);
    expect(disks[1].getName()).toBe(MockVirtualDisksJson[1].name);
    expect(disks[1].getType()).toBe(MockVirtualDisksJson[1].type);
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
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/virtual-disks`, updatedDisks);
    expect(task.getOperation()).toBe('update vm disks');
  });
});

test('Properly submits request for updating single VM virtual disk', async() => {
  const vm = new Vm(MockVmJson);
  const updatedDisk: VirtualDiskJson = Object.assign({}, MockVirtualDisk1Json);
  return vm.updateVirtualDisk(updatedDisk).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/virtual-disk`, updatedDisk);
    expect(task.getOperation()).toBe('update vm disks');
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
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/virtual-disk`, newDisk);
    expect(task.getOperation()).toBe('add virtual disk');
  });
});

test('Properly submits request for deleting VM virtual disk', async() => {
  const vm = new Vm(MockVmJson);
  const diskName = 'disk to delete';
  return vm.deleteVirtualDisk(diskName).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.getUuid()}/disks/${diskName}`);
    expect(task.getOperation()).toBe('delete virtual disk');
  });
});

test('Properly submits request for updating VM memory size', async() => {
  const vm = new Vm(MockVmJson);
  const newMemSize = 10000;
  const expectedSpec: VmMemoryUpdateJson = {
    memory_size: newMemSize.toString()
  };
  return vm.updateMemorySize(newMemSize).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/mem`, expectedSpec);
    expect(task.getOperation()).toBe('update memory size');
  });
});

test('Properly submits request for updating VM cpu number', async() => {
  const vm = new Vm(MockVmJson);
  const spec: VmCpuUpdateJson = {
    cpus_number: 8,
    cores_per_socket: 2
  };
  return vm.updateNumberOfCpus(spec).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/cpu`, spec);
    expect(task.getOperation()).toBe('update cpu count');
  });
});

test('Properly handles request for retrieving a VMs metadata', async() => {
  let vm = new Vm(MockVmJson);
  return vm.getMetadata().then(function(metadata) {
    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(4);
    expect(metadata[0].getKey()).toBe(MockMetadataJson[0].key);
    expect(metadata[0].getAccess()).toBe(MockMetadataJson[0].access);
    expect(metadata[0].getType()).toBe(MockMetadataJson[0].type);
    expect(metadata[0].getValue()).toBe(MockMetadataJson[0].value);
    expect(metadata[0].getJson()).toEqual(MockMetadataJson[0]);
    expect(metadata[0].toString().length).toBeGreaterThan(0);

    expect(metadata[1].getKey()).toBe(MockMetadataJson[1].key);
    expect(metadata[1].getAccess()).toBe(MockMetadataJson[1].access);
    expect(metadata[1].getType()).toBe(MockMetadataJson[1].type);
    expect(metadata[1].getValue()).toBe(MockMetadataJson[1].value);
    expect(metadata[1].getJson()).toEqual(MockMetadataJson[1]);
    expect(metadata[1].toString().length).toBeGreaterThan(0);

    expect(metadata[2].getKey()).toBe(MockMetadataJson[2].key);
    expect(metadata[2].getAccess()).toBe(MockMetadataJson[2].access);
    expect(metadata[2].getType()).toBe(MockMetadataJson[2].type);
    expect(metadata[2].getValue()).toBe(MockMetadataJson[2].value);
    expect(metadata[2].getJson()).toEqual(MockMetadataJson[2]);
    expect(metadata[2].toString().length).toBeGreaterThan(0);

    expect(metadata[3].getKey()).toBe(MockMetadataJson[3].key);
    expect(metadata[3].getAccess()).toBe(MockMetadataJson[3].access);
    expect(metadata[3].getType()).toBe(MockMetadataJson[3].type);
    expect(metadata[3].getValue()).toBe(MockMetadataJson[3].value);
    expect(metadata[3].getJson()).toEqual(MockMetadataJson[3]);
    expect(metadata[3].toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request for updating VM metadata', async() => {
  const vm = new Vm(MockVmJson);
  return vm.updateMetadata(MockMetadataJson).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/metadata`, MockMetadataJson);
    expect(task.getOperation()).toBe('update metadata');
  });
});

test('Properly submits request for deleting a VM metadata entry', async() => {
  const vm = new Vm(MockVmJson);
  const metadataKey = 'metadata-key';
  return vm.deleteMetadata(metadataKey).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.getUuid()}/metadata/${metadataKey}`);
    expect(task.getOperation()).toBe('delete metadata');
  });
});

test('Properly submits request for deleting a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.delete().then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.getUuid()}`);
    expect(task.getOperation()).toBe('delete entity');
  });
});

test('Properly submits request to power on a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOn().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/poweron`, undefined, undefined);
    expect(task.getOperation()).toBe('power on');
  });
});

test('Properly submits request to power on a VM and force guest customization', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOn(true).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/poweron`, undefined, {
      params: {
        forceGuestCustomization: true
      }
    });
    expect(task.getOperation()).toBe('power on');
  });
});

test('Properly submits request to power off a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOff().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/poweroff`, undefined, undefined);
    expect(task.getOperation()).toBe('power off');
  });
});

test('Properly submits request to reboot a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.rebootGuestOs().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/reboot`, undefined, undefined);
    expect(task.getOperation()).toBe('reboot');
  });
});

test('Properly submits request to reset a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.reset().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/reset`, undefined, undefined);
    expect(task.getOperation()).toBe('reset');
  });
});

test('Properly submits request to suspend a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.suspend().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/suspend`, undefined, undefined);
    expect(task.getOperation()).toBe('suspend');
  });
});

test('Properly submits request to shutdown a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.shutdownGuestOs().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/shutdown`, undefined, undefined);
    expect(task.getOperation()).toBe('shutdown');
  });
});

test('Properly submits request to rename a VM', async() => {
  const vm = new Vm(MockVmJson);
  const newName = 'new VM name';
  const json: VmUpdateNameJson = {
    name: newName
  };
  return vm.updateName(newName).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/name`, json);
    expect(task.getOperation()).toBe('rename vm');
  });
});

test('Properly submits request to get a VMs restore points', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getBackupRestorePoints().then(function(restorePoints) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.getUuid()}/backups`);
    expect(restorePoints.length).toBe(2);
    expect(restorePoints[0].getName()).toBe(MockBackupRestorePoint1Json.name);
    expect(restorePoints[0].getTimestamp().getTime()).toBe(MockBackupRestorePoint1Json.timestamp);
    expect(restorePoints[0].getBackupServerName()).toBe(MockBackupRestorePoint1Json.backup_server_name);
    expect(restorePoints[0].getJson()).toEqual(MockBackupRestorePoint1Json);
    expect(restorePoints[0].toString().length).toBeGreaterThan(0);

    expect(restorePoints[1].getName()).toBe(MockBackupRestorePoint2Json.name);
    expect(restorePoints[1].getTimestamp().getTime()).toBe(MockBackupRestorePoint2Json.timestamp);
    expect(restorePoints[1].getBackupServerName()).toBe(MockBackupRestorePoint2Json.backup_server_name);
    expect(restorePoints[1].getJson()).toEqual(MockBackupRestorePoint2Json);
    expect(restorePoints[1].toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to restore a VM backup', async() => {
  const vm = new Vm(MockVmJson);
  const timestamp = new Date();
  const json: VmRestoreBackupJson = {
    time: timestamp.getTime()
  };
  return vm.restoreBackup(timestamp).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/restore`, json);
    expect(task.getOperation()).toBe('restore backup');
  });
});

test('Properly submits request to retrieve a VMs snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getSnapshot().then(function(snapshot) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.getUuid()}/snapshot`);
    expect(snapshot).toBeDefined();
    expect(snapshot.getSize()).toBe(MockSnapshotJson.size);
    expect(snapshot.getCreationDate().getTime()).toBe(MockSnapshotJson.creation_date);
    expect(snapshot.isPoweredOn()).toBe(MockSnapshotJson.is_powered_on);
    expect(snapshot.getJson()).toEqual(MockSnapshotJson);
    expect(snapshot.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to create a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  let json: VmCreateSnapshotJson = {
    memory: true,
    quiesce: true,
    name: 'snapshot name',
    description: 'snapshot description'
  };
  return vm.createSnapshot(json).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/snapshot`, json);
    expect(task.getOperation()).toBe('create snapshot');
  });
});

test('Properly submits request to restore a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.restoreSnapshot().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/snapshot/restore`);
    expect(task.getOperation()).toBe('restore snapshot');
  });
});

test('Properly submits request to delete a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.deleteSnapshot().then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.getUuid()}/snapshot`);
    expect(task.getOperation()).toBe('remove snapshot');
  });
});

test('Properly submits request to update VMs virtual hardware', async() => {
  const vm = new Vm(MockVmJson);
  return vm.updateVirtualHardwareVersion().then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/virtual-hardware-version`);
    expect(task.getOperation()).toBe('upgrade virtual hardware');
  });
});

test('Properly submits request to get a VM screen ticket', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getScreenTicket().then(function(screenTicket) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.getUuid()}/screen-ticket`);
    expect(screenTicket.getVmId()).toBe(MockScreenTicketJson.vm_id);
    expect(screenTicket.getHost()).toBe(MockScreenTicketJson.host);
    expect(screenTicket.getSslThumbprint()).toBe(MockScreenTicketJson.ssl_thumbprint);
    expect(screenTicket.getTicket()).toBe(MockScreenTicketJson.ticket);
    expect(screenTicket.getJson()).toEqual(MockScreenTicketJson);
    expect(screenTicket.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get a VM MKS screen ticket', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getMksScreenTicket().then(function(mksScreenTicket) {
    expect(Iland.getHttp().get).lastCalledWith(`/vm/${vm.getUuid()}/mks-screen-ticket`);
    expect(mksScreenTicket.getVmx()).toBe(MockMksScreenTicketJson.vmx);
    expect(mksScreenTicket.getHost()).toBe(MockMksScreenTicketJson.host);
    expect(mksScreenTicket.getPort()).toBe(MockMksScreenTicketJson.port);
    expect(mksScreenTicket.getTicket()).toBe(MockMksScreenTicketJson.ticket);
    expect(mksScreenTicket.getJson()).toEqual(MockMksScreenTicketJson);
    expect(mksScreenTicket.toString().length).toBeGreaterThan(0);
  });
});
