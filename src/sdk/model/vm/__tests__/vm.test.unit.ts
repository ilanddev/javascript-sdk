import { Vm } from '../vm';
import {
  MockVmJson,
  MockVmPerfCountersJson,
  MockVmPerfSamplesSeriesJson,
  MockVmRecommendedDiskBusTypeJson,
  MockVmToolUpgradePolicyJson
} from '../__mocks__/vm';
import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { MockVirtualDisk1Json, MockVirtualDisksJson } from '../virtual-disk/__mocks__/virtual-disk';
import { MockMetadataJson } from '../../common/metadata/__mocks__/metadata';
import {
  MockBackupRestorePoint1Json,
  MockBackupRestorePoint2Json
} from '../backup-restore-point/__mocks__/backup-restore-point';
import { MockSnapshotJson } from '../../common/snapshot/__mocks__/snapshot';
import { MockScreenTicketJson } from '../screen-ticket/__mocks__/screen-ticket';
import { MockMksScreenTicketJson } from '../screen-ticket/__mocks__/mks-screen-ticket';
import { SnapshotCreateRequest } from '../../common/snapshot/snapshot-create-request';
import { VirtualDiskJson } from '../virtual-disk/__json__/virtual-disk-json';
import {
  VmCpuCountUpdateRequestJson,
  VmCreateSnapshotRequestJson,
  VmMemorySizeUpdateRequestJson,
  VmReconfigureRequestJson,
  VmRestoreBackupRequestJson,
  VmUpdateNameRequestJson
} from '../__json__/vm-json';
import { OperatingSystem } from '../__json__/operating-system-type';
import { VmStatus } from '../__json__/vm-status-type';
import { PerfCounter } from '../../mixins/perf-samples/perf-counter';
import { PerfSamplesRequest } from '../../mixins/perf-samples/perf-samples-request';
import { PerfSamplesRequestJson } from '../../mixins/perf-samples/__json__/perf-samples-request';
import { PerfSamplesSeries } from '../../mixins/perf-samples/perf-samples-series';
import { PerfSample } from '../../mixins/perf-samples/perf-sample';
import { MockBootOptionsJson } from '../boot-options/__mocks__/boot-options';
import { MockVmCapabilitiesJson } from '../capabilities/__mocks__/capabilities';
import { MockVmGuestCustomizationJson } from '../guest-customization/__mocks__/guest-customization';
import { MockVmGuestToolsJson } from '../guest-tools/__mocks__/guest-tools';
import { MockVmSummaryJson } from '../summary/__mocks__/vm-summary';
import { ToolsUpgradePolicy } from '../__json__/tools-upgrade-policy';
import { GuestCustomizationUpdateRequest } from '../guest-customization/guest-customization-update-request';
import { MockVmNetworkJson } from '../vm-network/__mocks__/vm-networks';
import { VmCapabilityUpdateRequest } from '../capabilities/capabilities-update-request';
import { VmReconfigureRequest } from '../vm-reconfigure-request';
import { VmCpuCountUpdateRequest } from '../vm-cpu-count-update-request';
import { VmMemorySizeUpdateRequest } from '../vm-memory-size-update-request';
import { GuestCustomizationUpdateRequestJson }
  from '../guest-customization/__json__/guest-customization-update-request-json';
import { Metadata } from '../../common/metadata/metadata';
import { GuestCustomizationJson } from '../guest-customization/__json__/guest-customization-json';
import { VmCapabilityUpdateRequestJson } from '../capabilities/__json__/capabilities-update-request-json';
import { VdcAllocationModel } from '../../vdc/__json__/vdc-allocation-model-type';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Can get VM virtual disks', async() => {
  const vm = new Vm(MockVmJson);
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
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-virtual-disks`, updatedDisks);
    expect(task.operation).toBe('update vm disks');
  });
});

test('Properly submits request for updating single VM virtual disk', async() => {
  const vm = new Vm(MockVmJson);
  const updatedDisk: VirtualDiskJson = Object.assign({}, MockVirtualDisk1Json);
  return vm.updateVirtualDisk(updatedDisk).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-virtual-disk`, updatedDisk);
    expect(task.operation).toBe('update disk size');
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
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/add-virtual-disk`, newDisk);
    expect(task.operation).toBe('add virtual disk');
  });
});

test('Properly submits request for deleting VM virtual disk', async() => {
  const vm = new Vm(MockVmJson);
  const diskName = 'disk to delete';
  return vm.deleteVirtualDisk(diskName).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vms/${vm.uuid}/disks/${diskName}`);
    expect(task.operation).toBe('delete virtual disk');
  });
});

test('Properly submits request for updating VM memory size', async() => {
  const vm = new Vm(MockVmJson);
  const newMemSize = 10000;
  const expectedSpec: VmMemorySizeUpdateRequestJson = {
    memory_size: newMemSize
  };

  const request = new VmMemorySizeUpdateRequest({ memory_size: newMemSize });
  expect(request.memorySize).toBe(newMemSize);
  expect(request.json).toEqual(expectedSpec);
  expect(request.toString().length).toBeGreaterThan(0);
  return vm.updateMemorySize(newMemSize).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-memory-size`, expectedSpec);
    expect(task.operation).toBe('update memory size');
  });
});

test('Properly submits request for updating VM cpu number', async() => {
  const vm = new Vm(MockVmJson);
  const spec: VmCpuCountUpdateRequestJson = {
    cpus_number: 8,
    cores_per_socket: 2
  };

  const request = new VmCpuCountUpdateRequest({ cpus_number: 6, cores_per_socket: 1 });
  expect(request.numberOfCpus).toBe(6);
  expect(request.coresPerSocket).toBe(1);

  request.numberOfCpus = spec.cpus_number;
  request.coresPerSocket = spec.cores_per_socket;
  expect(request.numberOfCpus).toBe(spec.cpus_number);
  expect(request.coresPerSocket).toBe(spec.cores_per_socket);
  expect(request.json).toEqual(spec);
  expect(request.toString().length).toBeGreaterThan(0);

  return vm.updateCpuCount(request).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-cpu-count`, spec);
    expect(task.operation).toBe('update cpu count');
  });
});

test('Properly handles request for retrieving a VMs metadata', async() => {
  const vm = new Vm(MockVmJson);
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
  const metadata = MockMetadataJson.map(m => {
    return new Metadata(m);
  });
  return vm.updateMetadata(metadata).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vms/${vm.uuid}/metadata`, MockMetadataJson);
    expect(task.operation).toBe('update metadata');
  });
});

test('Properly submits request for deleting a VM metadata entry', async() => {
  const vm = new Vm(MockVmJson);
  const metadataKey = 'metadata-key';
  return vm.deleteMetadata(metadataKey).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vms/${vm.uuid}/metadata/${metadataKey}`);
    expect(task.operation).toBe('delete metadata');
  });
});

test('Properly submits request for deleting a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.delete().then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vms/${vm.uuid}`);
    expect(task.operation).toBe('delete entity');
  });
});

test('Properly submits request to power on a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOn().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/poweron`, undefined, undefined);
    expect(task.operation).toBe('power on');
  });
});

test('Properly submits request to power on a VM and force guest customization', async() => {
  const vm = new Vm(MockVmJson);
  return vm.powerOn(true).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/poweron`, undefined, {
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
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/poweroff`, undefined, undefined);
    expect(task.operation).toBe('power off');
  });
});

test('Properly submits request to reboot a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.rebootGuestOs().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/reboot`, undefined, undefined);
    expect(task.operation).toBe('reboot');
  });
});

test('Properly submits request to reset a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.reset().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/reset`, undefined, undefined);
    expect(task.operation).toBe('reset');
  });
});

test('Properly submits request to suspend a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.suspend().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/suspend`, undefined, undefined);
    expect(task.operation).toBe('suspend');
  });
});

test('Properly submits request to shutdown a VM', async() => {
  const vm = new Vm(MockVmJson);
  return vm.shutdownGuestOs().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/shutdown`, undefined, undefined);
    expect(task.operation).toBe('shutdown');
  });
});

test('Properly submits request to reconfigure a VM', async() => {
  const vm = new Vm(MockVmJson);
  const json = {
    name: 'test name',
    description: 'test description',
    cpu_spec: { cpus_number: 2, cores_per_socket: 1 },
    memory_spec: { memory_size: 1000 },
    guest_customization_section: MockVmGuestCustomizationJson,
    disk_spec: undefined,
    nested_hypervisor_enabled: false
  } as VmReconfigureRequestJson;
  const request = new VmReconfigureRequest({} as VmReconfigureRequestJson);
  request.name = json.name;
  request.description = json.description;
  request.cpuSpec = new VmCpuCountUpdateRequest(json.cpu_spec as VmCpuCountUpdateRequestJson);
  request.memorySpec = new VmMemorySizeUpdateRequest(json.memory_spec as VmMemorySizeUpdateRequestJson);
  request.guestCustomizationSection =
    new GuestCustomizationUpdateRequest(json.guest_customization_section as GuestCustomizationUpdateRequestJson);
  request.diskSpec = json.disk_spec;
  request.nestedHypervisorEnabled = json.nested_hypervisor_enabled;

  expect(request.name).toBe(json.name);
  expect(request.description).toBe(json.description);
  expect(request.cpuSpec ? request.cpuSpec.json : request.cpuSpec).toEqual(json.cpu_spec);
  expect(request.memorySpec ? request.memorySpec.json : request.memorySpec).toEqual(json.memory_spec);
  expect(request.guestCustomizationSection ?
    request.guestCustomizationSection.json :
    request.guestCustomizationSection).toEqual(json.guest_customization_section);
  expect(request.diskSpec).toBe(json.disk_spec);
  expect(request.nestedHypervisorEnabled).toBe(json.nested_hypervisor_enabled);

  return vm.reconfigure(request).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/reconfigure`, json);
    expect(task.operation).toBe('reconfigure vm');
  });
});

test('Properly submits request to update VM guest customization', async() => {
  const vm = new Vm(MockVmJson);
  const raw: GuestCustomizationJson = {
    enabled: true,
    change_sid: true,
    virtual_machine_id: 'fake-vm-id',
    join_domain: true,
    use_org_settings: true,
    domain_name: 'fake-domain-name',
    domain_user_name: 'fake-domain-user-name',
    domain_user_password: 'fake-domain-user-pwd',
    machine_object_ou: 'fake-machine-obj',
    admin_password_enabled: true,
    admin_password_auto: true,
    admin_password: 'fake-admin-pwd',
    admin_auto_logon_enabled: true,
    admin_auto_logon_count: 0,
    reset_password_required: true,
    computer_name: 'fake-computer-name',
    required: true
  };
  const json: GuestCustomizationJson = {} as GuestCustomizationJson;
  const request = new GuestCustomizationUpdateRequest(json);
  request.enabled = raw.enabled;
  request.changeSid = raw.change_sid;
  request.virtualMachineId = raw.virtual_machine_id;
  request.joinDomain = raw.join_domain;
  request.useOrgSettings = raw.use_org_settings;
  request.domainName = raw.domain_name;
  request.domainUserName = raw.domain_user_name;
  request.domainUserPassword = raw.domain_user_password;
  request.machineObjectOu = raw.machine_object_ou;
  request.adminPasswordEnabled = raw.admin_password_enabled;
  request.adminPasswordAuto = raw.admin_password_auto;
  request.adminPassword = raw.admin_password;
  request.adminAutoLogonEnabled = raw.admin_auto_logon_enabled;
  request.adminAutoLogonCount = raw.admin_auto_logon_count;
  request.resetPasswordRequired = raw.reset_password_required;
  request.computerName = raw.computer_name;
  request.required = raw.required;

  expect(request.enabled).toBe(raw.enabled);
  expect(request.changeSid).toBe(raw.change_sid);
  expect(request.virtualMachineId).toBe(raw.virtual_machine_id);
  expect(request.joinDomain).toBe(raw.join_domain);
  expect(request.useOrgSettings).toBe(raw.use_org_settings);
  expect(request.domainName).toBe(raw.domain_name);
  expect(request.domainUserName).toBe(raw.domain_user_name);
  expect(request.domainUserPassword).toBe(raw.domain_user_password);
  expect(request.machineObjectOu).toBe(raw.machine_object_ou);
  expect(request.adminPasswordEnabled).toBe(raw.admin_password_enabled);
  expect(request.adminPasswordAuto).toBe(raw.admin_password_auto);
  expect(request.adminPassword).toBe(raw.admin_password);
  expect(request.adminAutoLogonEnabled).toBe(raw.admin_auto_logon_enabled);
  expect(request.adminAutoLogonCount).toBe(raw.admin_auto_logon_count);
  expect(request.resetPasswordRequired).toBe(raw.reset_password_required);
  expect(request.computerName).toBe(raw.computer_name);
  expect(request.required).toBe(raw.required);
  expect(request.json).toBeDefined();
  expect(request.toString().length).toBeGreaterThan(0);

  return vm.updateGuestCustomization(request).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-guest-customization`, json);
    expect(task.operation).toBe('update guest customization section');
  });
});

test('Properly submits request to rename a VM', async() => {
  const vm = new Vm(MockVmJson);
  const newName = 'new VM name';
  const json: VmUpdateNameRequestJson = {
    name: newName
  };
  return vm.updateName(newName).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-name`, json);
    expect(task.operation).toBe('rename vm');
  });
});

test('Properly submits request to update VM tools upgrade policy', async() => {
  const vm = new Vm(MockVmJson);
  const newPolicy: ToolsUpgradePolicy = 'MANUAL';
  const json = {
    upgrade_policy: newPolicy
  };
  return vm.updateToolsUpgradePolicy(newPolicy).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-tools-upgrade-policy`, json);
    expect(task.operation).toBe('update vm tools upgrade policy');
  });
});

test('Properly submits request to get a VMs restore points', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getBackupRestorePoints().then(function(restorePoints) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/backups`);
    expect(restorePoints.length).toBe(2);
    expect(restorePoints[0].name).toBe(MockBackupRestorePoint1Json.name);
    expect(restorePoints[0].timestamp.getTime()).toBe(MockBackupRestorePoint1Json.time);
    expect(restorePoints[0].backupServerName).toBe(MockBackupRestorePoint1Json.backup_server_name);
    expect(restorePoints[0].json).toEqual(MockBackupRestorePoint1Json);
    expect(restorePoints[0].toString().length).toBeGreaterThan(0);

    expect(restorePoints[1].name).toBe(MockBackupRestorePoint2Json.name);
    expect(restorePoints[1].timestamp.getTime()).toBe(MockBackupRestorePoint2Json.time);
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
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/restore`, json);
    expect(task.operation).toBe('restore backup');
  });
});

test('Properly submits request to retrieve a VMs snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getSnapshot().then(function(snapshot) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/snapshot`);
    expect(snapshot).toBeDefined();
    expect(snapshot.size).toBe(MockSnapshotJson.size);
    expect(snapshot.creationDate.getTime()).toBe(MockSnapshotJson.creation_date);
    expect(snapshot.poweredOn).toBe(MockSnapshotJson.powered_on);
    expect(snapshot.json).toEqual(MockSnapshotJson);
    expect(snapshot.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to create a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  const json: VmCreateSnapshotRequestJson = {
    memory: true,
    quiesce: true,
    name: 'snapshot name',
    description: 'snapshot description'
  };
  return vm.createSnapshot(new SnapshotCreateRequest(json.memory, json.quiesce, json.name, json.description))
    .then(function(task) {
      expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/create-snapshot`, json);
      expect(task.operation).toBe('create snapshot');
    });
});

test('Properly submits request to restore a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.restoreSnapshot().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/restore-snapshot`);
    expect(task.operation).toBe('restore snapshot');
  });
});

test('Properly submits request to delete a VM snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.deleteSnapshot().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/remove-snapshot`);
    expect(task.operation).toBe('remove snapshot');
  });
});

test('Properly submits request to update VMs virtual hardware', async() => {
  const vm = new Vm(MockVmJson);
  return vm.updateVirtualHardwareVersion().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-virtual-hardware-version`);
    expect(task.operation).toBe('upgrade virtual hardware');
  });
});

test('Properly submits request to get a VM screen ticket', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getScreenTicket().then(function(screenTicket) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/screen-ticket`);
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
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/mks-screen-ticket`);
    expect(mksScreenTicket.vmx).toBe(MockMksScreenTicketJson.vmx);
    expect(mksScreenTicket.host).toBe(MockMksScreenTicketJson.host);
    expect(mksScreenTicket.port).toBe(MockMksScreenTicketJson.port);
    expect(mksScreenTicket.ticket).toBe(MockMksScreenTicketJson.ticket);
    expect(mksScreenTicket.json).toEqual(MockMksScreenTicketJson);
    expect(mksScreenTicket.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get VM networks', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getNetworks().then(function(networks) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/networks`);
    expect(networks.length).toBeGreaterThan(0);
    const network = networks[0];
    expect(network.uuid).toBe(MockVmNetworkJson.uuid);
    expect(network.name).toBe(MockVmNetworkJson.name);
    expect(network.description).toBe(MockVmNetworkJson.description);
    expect(network.vappNetwork).toBe(MockVmNetworkJson.vapp_network);
    expect(network.fenceMode).toBe(MockVmNetworkJson.fence_mode);
    expect(network.deleted).toBe(MockVmNetworkJson.deleted);
    expect(network.gateway).toBe(MockVmNetworkJson.gateway);
    expect(network.netmask).toBe(MockVmNetworkJson.netmask);
    expect(network.dns1).toBe(MockVmNetworkJson.dns1);
    expect(network.dns2).toBe(MockVmNetworkJson.dns2);
    expect(network.dnsSuffix).toBe(MockVmNetworkJson.dns_suffix);
    expect(network.enabled).toBe(MockVmNetworkJson.enabled);
    expect(network.inherited).toBe(MockVmNetworkJson.inherited);
    expect(network.parentNetworkName).toBe(MockVmNetworkJson.parent_network_name);
    expect(network.parentNetworkUuid).toBe(MockVmNetworkJson.parent_network_uuid);
    expect(network.parentEntityUuid).toBe(MockVmNetworkJson.parent_entity_uuid);
    expect(network.shared).toBe(MockVmNetworkJson.shared);
    expect(network.edgeUuid).toBe(MockVmNetworkJson.edge_uuid);
    expect(network.routerExternalIp).toBe(MockVmNetworkJson.router_external_ip);
    expect(network.ipRanges).toBeDefined();
    expect(network.ipRanges.length).toBeGreaterThan(0);
    expect(network.json).toEqual(MockVmNetworkJson);
    expect(network.toString().length).toBeGreaterThan(0);

    const ipRange = network.ipRanges[0];
    expect(ipRange.start).toBe(MockVmNetworkJson.ip_ranges[0].start);
    expect(ipRange.end).toBe(MockVmNetworkJson.ip_ranges[0].end);
  });
});

test('Properly submits request to get a VM bill', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getBill(5, 2017).then(function(bill) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/billing`, {
      params: {
        month: 5,
        year: 2017
      }
    });
  });
});

test('Properly submits request to get VM boot options', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getBootOptions().then(function(bootOptions) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/boot-options`);
    expect(bootOptions.bootDelay).toBe(MockBootOptionsJson.boot_delay);
    expect(bootOptions.isEnterBios).toBe(MockBootOptionsJson.is_enter_bios);
    expect(bootOptions.json).toBeDefined();
    expect(bootOptions.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get VM capabilities', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getCapabilities().then(function(capabilities) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/capabilities`);
    expect(capabilities.cpuHotAddEnabled).toBe(MockVmCapabilitiesJson.cpu_hot_add_enabled);
    expect(capabilities.memoryHotAddEnabled).toBe(MockVmCapabilitiesJson.memory_hot_add_enabled);
    expect(capabilities.json).toBeDefined();
    expect(capabilities.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to update VM capabilities', async() => {
  const vm = new Vm(MockVmJson);
  const request = new VmCapabilityUpdateRequest({
    cpu_hot_add_enabled: false,
    memory_hot_add_enabled: false
  } as VmCapabilityUpdateRequestJson);
  expect(request).toBeDefined();
  expect(request.cpuHotAddEnabled).toBeFalsy();
  expect(request.memoryHotAddEnabled).toBeFalsy();
  expect(request.json).toBeDefined();
  expect(request.toString().length).toBeGreaterThan(0);
  request.cpuHotAddEnabled = true;
  request.memoryHotAddEnabled = true;
  expect(request.memoryHotAddEnabled).toBeTruthy();
  expect(request.cpuHotAddEnabled).toBeTruthy();

  return vm.updateCapabilities(request).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/update-capabilities`, request.json);
    expect(task.operation).toBe('update vm capabilities');
  });
});

test('Properly submits request to get the VM recommended disk bus type', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getRecommendedDiskBusType().then(function(diskBusType) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/recommended-disk-bus-type`);
    expect(diskBusType).toBeDefined();
    expect(diskBusType).toBe(MockVmRecommendedDiskBusTypeJson.bus_type);
  });
});

test('Properly submits request to get the VM guest customization', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getGuestCustomization().then(function(guestCustomization) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/guest-customization`);
    expect(guestCustomization).toBeDefined();
    expect(guestCustomization.enabled).toBe(MockVmGuestCustomizationJson.enabled);
    expect(guestCustomization.changeSid).toBe(MockVmGuestCustomizationJson.change_sid);
    expect(guestCustomization.virtualMachineId).toBe(MockVmGuestCustomizationJson.virtual_machine_id);
    expect(guestCustomization.joinDomain).toBe(MockVmGuestCustomizationJson.join_domain);
    expect(guestCustomization.useOrgSettings).toBe(MockVmGuestCustomizationJson.use_org_settings);
    expect(guestCustomization.domainName).toBe(MockVmGuestCustomizationJson.domain_name);
    expect(guestCustomization.domainUserName).toBe(MockVmGuestCustomizationJson.domain_user_name);
    expect(guestCustomization.domainUserPassword).toBe(MockVmGuestCustomizationJson.domain_user_password);
    expect(guestCustomization.machineObjectOu).toBe(MockVmGuestCustomizationJson.machine_object_ou);
    expect(guestCustomization.adminPasswordEnabled).toBe(MockVmGuestCustomizationJson.admin_password_enabled);
    expect(guestCustomization.adminPasswordAuto).toBe(MockVmGuestCustomizationJson.admin_password_auto);
    expect(guestCustomization.adminPassword).toBe(MockVmGuestCustomizationJson.admin_password);
    expect(guestCustomization.adminAutoLogonEnabled).toBe(MockVmGuestCustomizationJson.admin_auto_logon_enabled);
    expect(guestCustomization.adminAutoLogonCount).toBe(MockVmGuestCustomizationJson.admin_auto_logon_count);
    expect(guestCustomization.resetPasswordRequired).toBe(MockVmGuestCustomizationJson.reset_password_required);
    expect(guestCustomization.computerName).toBe(MockVmGuestCustomizationJson.computer_name);
    expect(guestCustomization.required).toBe(MockVmGuestCustomizationJson.required);
    expect(guestCustomization.json).toBeDefined();
    expect(guestCustomization.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get the VM guest tools information', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getGuestToolsInfo().then(function(guestTools) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/guest-tools`);
    expect(guestTools).toBeDefined();
    expect(guestTools.status).toBe(MockVmGuestToolsJson.status);
    expect(guestTools.runningStatus).toBe(MockVmGuestToolsJson.running_status);
    expect(guestTools.version).toBe(MockVmGuestToolsJson.version);
    expect(guestTools.json).toBeDefined();
    expect(guestTools.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to check if VM has a snapshot', async() => {
  const vm = new Vm(MockVmJson);
  return vm.hasSnapshot().then(function(hasSnapshot) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/has-snapshot`);
    expect(hasSnapshot).toBeTruthy();
  });
});

test('Properly submits request to get the VM summary', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getSummary().then(function(summary) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/summary`);
    expect(summary).toBeDefined();
    expect(summary.reservedCpu).toBe(MockVmSummaryJson.reserved_cpu);
    expect(summary.reservedMemory).toBe(MockVmSummaryJson.reserved_mem);
    expect(summary.consumedCpu).toBe(MockVmSummaryJson.consumed_cpu);
    expect(summary.consumedMemory).toBe(MockVmSummaryJson.consumed_mem);
    expect(summary.consumedDisk).toBe(MockVmSummaryJson.consumed_disk);
    expect(summary.provisionedDisk).toBe(MockVmSummaryJson.provisioned_disk);
    expect(summary.configuredDisk).toBe(MockVmSummaryJson.configured_disk);
    expect(summary.json).toBeDefined();
    expect(summary.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get VM tools upgrade policy', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getToolUpgradePolicy().then(function(policy) {
    expect(Iland.getHttp().get).lastCalledWith(`/vms/${vm.uuid}/tools-upgrade-policy`);
    expect(policy).toBe(MockVmToolUpgradePolicyJson.upgrade_policy);
  });
});

test('Properly submits request to upgrade VM guest tools', async() => {
  const vm = new Vm(MockVmJson);
  return vm.upgradeGuestTools().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/upgrade-guest-tools`);
    expect(task.operation).toBe('vmware tools upgrade');
  });
});

test('Properly submits request to insert media into VM ', async() => {
  const vm = new Vm(MockVmJson);
  const mediaUuid = 'test-media-uuid';
  return vm.insertMedia(mediaUuid).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/insert-media`, {
      media: mediaUuid
    });
    expect(task.operation).toBe('insert media');
  });
});

test('Properly submits request to eject media from VM ', async() => {
  const vm = new Vm(MockVmJson);
  return vm.ejectMedia().then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/eject-media`);
    expect(task.operation).toBe('eject media');
  });
});

test('Properly submits request to relocate VM to a different storage profile ', async() => {
  const vm = new Vm(MockVmJson);
  const storageProfileUuid = 'fake-storage-profile-uuid';
  return vm.relocate(storageProfileUuid).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/relocate`, {
      storage_profile: storageProfileUuid
    });
    expect(task.operation).toBe('relocate vm');
  });
});

test('Parses power status correctly', () => {
  const apiVm = {
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
    vm_local_id: '',
    allocation_model: 'paygo' as VdcAllocationModel
  };
  const vm = new Vm(apiVm);
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

test('Properly submits request to get VM perf counters', async() => {
  const vm = new Vm(MockVmJson);
  return vm.getPerfCounters().then(async(perfCounters) => {
    expect(Iland.getHttp().get).lastCalledWith(`${vm.apiPrefix}/${vm.uuid}/performance-counters`);

    expect(perfCounters).toBeDefined();
    expect(perfCounters.length).toBeGreaterThan(0);
    expect(perfCounters[0] instanceof PerfCounter).toBeTruthy();
    expect(perfCounters[0].name).toBe(MockVmPerfCountersJson[0].name);
    expect(perfCounters[0].group).toBe(MockVmPerfCountersJson[0].group);
    expect(perfCounters[0].type).toBe(MockVmPerfCountersJson[0].type);
    expect(perfCounters[0].json).toEqual(MockVmPerfCountersJson[0]);
    expect(perfCounters[0].toString().length).toBeGreaterThan(0);
  });
});

test('Properly send an Event History CSV file by email', () => {
  const vm = new Vm(MockVmJson);
  return vm.emailEventHistory('coke@coke.com').then(() => {
    expect(Iland.getHttp().post).lastCalledWith(`/vms/${vm.uuid}/actions/email-event-history`, {
      email: 'coke@coke.com'
    });
  });
});

test('Properly submits request to get VM perf samples', async() => {
  const vm = new Vm(MockVmJson);
  const request = new PerfSamplesRequest({
    counter: { group: 'cpu', name: 'usage', type: 'average' },
    start: 1,
    end: 2,
    interval: 3,
    limit: 4
  } as PerfSamplesRequestJson);

  return vm.getPerfSamples(request).then(async(perfSamples) => {
    expect(Iland.getHttp().get).lastCalledWith(
      `${vm.apiPrefix}/${vm.uuid}/performance/` +
      `${request.counter.group}::${request.counter.name}::${request.counter.type}`,
      { params: { start: 1, end: 2, interval: 3, limit: 4 } }
    );

    expect(perfSamples).toBeDefined();
    expect(perfSamples instanceof PerfSamplesSeries).toBeTruthy();
    expect(perfSamples.uuid).toBe(MockVmPerfSamplesSeriesJson.uuid);
    expect(perfSamples.summary).toBe(MockVmPerfSamplesSeriesJson.summary);
    expect(perfSamples.interval).toBe(MockVmPerfSamplesSeriesJson.interval);
    expect(perfSamples.group).toBe(MockVmPerfSamplesSeriesJson.group);
    expect(perfSamples.name).toBe(MockVmPerfSamplesSeriesJson.name);
    expect(perfSamples.type).toBe(MockVmPerfSamplesSeriesJson.type);
    expect(perfSamples.unit).toBe(MockVmPerfSamplesSeriesJson.unit);
    expect(perfSamples.counter).toBeDefined();
    expect(perfSamples.counter instanceof PerfCounter).toBeTruthy();
    expect(perfSamples.samples).toBeDefined();
    expect(perfSamples.samples.length).toBeGreaterThan(0);
    expect(perfSamples.json).toEqual(MockVmPerfSamplesSeriesJson);
    expect(perfSamples.toString().length).toBeGreaterThan(0);

    const perfSample = perfSamples.samples[0];
    expect(perfSample instanceof PerfSample).toBeTruthy();
    expect(perfSample.date instanceof Date).toBeTruthy();
    expect(perfSample.timestamp).toBe(MockVmPerfSamplesSeriesJson.samples[0].time);
    expect(perfSample.value).toBe(MockVmPerfSamplesSeriesJson.samples[0].value);
    expect(perfSample.json).toEqual(MockVmPerfSamplesSeriesJson.samples[0]);
    expect(perfSample.toString().length).toBeGreaterThan(0);
  });
});
