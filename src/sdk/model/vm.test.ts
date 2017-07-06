import {Iland} from '../iland';
import {User} from './user';
import {TestConfiguration} from '../../../tests/configuration';
import {IlandDirectGrantAuthProvider} from '../auth/direct-grant-auth-provider';
import {Vm, VmPowerStatus} from './vm';
import {InventoryEntity} from './inventory';
import {EntityType} from './api-spec/api-entity-type';
import {ApiVmStatus} from './api-spec/api-vm';
import {Task} from './task';

let auth: IlandDirectGrantAuthProvider;
let inventoryVm: InventoryEntity;

beforeAll(async() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
  return User.getCurrentUser().then(async function(user) {
    return user.getInventory().then(function(inventory) {
      let vms = inventory.getEntitiesByType(EntityType.VM);
      expect(vms).toBeDefined();
      if (vms) {
        expect(vms.length).toBeGreaterThan(0);
        inventoryVm = vms[0];
      } else {
        fail('failed to get inventory vms for vm tests');
      }
    });
  });
});

test('Can get vm and verify required properties', async() => {
  return Vm.getVm(inventoryVm.uuid).then(function(vm) {
    let raw = vm.getJson();
    expect(vm.getName()).toBeDefined();
    expect(vm.getName()).toBe(raw.name);
    expect(vm.getUuid()).toBe(inventoryVm.uuid);
    expect(vm.getUuid()).toBe(raw.uuid);
    expect(vm.getCoresPerSocket()).toBeGreaterThan(0);
    expect(vm.getCoresPerSocket()).toBe(raw.cores_per_socket);
    expect(vm.getCreatedDate()).toBeDefined();
    if (vm.getCreatedDate() !== null) {
      expect(vm.getCreatedDate()!.getTime()).toBe(raw.created_date === null ?
          0 : raw.created_date);
    }
    expect(vm.getLocationId()).toBeDefined();
    expect(vm.getLocationId()).toBe(raw.location_id);
    expect(vm.getVappUuid()).toBeDefined();
    expect(vm.getVappUuid()).toBe(raw.vapp_uuid);
    expect(vm.getVdcUuid()).toBeDefined();
    expect(vm.getVdcUuid()).toBe(raw.vdc_uuid);
    expect(vm.getHardwareVersion()).toBeDefined();
    expect(vm.getHardwareVersion()).toBe(raw.hardware_version);
    expect(vm.getVmLocalId()).toBeDefined();
    expect(vm.getVmLocalId()).toBe(raw.vm_local_id);
    expect(vm.getVcloudHref()).toBeDefined();
    expect(vm.getVcloudHref()).toBe(raw.vcloud_href);
    expect(vm.getStorageProfiles()).toBeDefined();
    expect(vm.getStorageProfiles().length).toBeGreaterThan(0);
    expect(vm.getStorageProfiles()).toBe(raw.storage_profiles);
    expect(vm.getVcenterInstanceUuid()).toBeDefined();
    expect(vm.getVcenterInstanceUuid()).toBe(raw.vcenter_instance_uuid);
    expect(vm.getPowerStatus()).toBeDefined();
    expect(vm.getPowerStatus()).toBe(raw.status);
    expect(vm.getMemorySize()).toBeGreaterThan(0);
    expect(vm.getMemorySize()).toBe(raw.memory_size);
    expect(vm.getVimDatastoreRef()).toBeDefined();
    expect(vm.getVimDatastoreRef()).toBe(raw.vim_datastore_ref);
    expect(vm.getVcenterName()).toBeDefined();
    expect(vm.getVcenterName()).toBe(raw.vcenter_name);
    expect(vm.getVcenterMoRef()).toBeDefined();
    expect(vm.getVcenterMoRef()).toBe(raw.vcenter_moref);
    expect(vm.getVcenterHref()).toBeDefined();
    expect(vm.getVcenterHref()).toBe(raw.vcenter_href);
    expect(vm.getOperatingSystem()).toBeDefined();
    expect(vm.getOperatingSystem()).toBe(raw.os);
    expect(vm.getOrgUuid()).toBeDefined();
    expect(vm.getOrgUuid()).toBe(raw.org_uuid);
    expect(vm.getDescription()).toBeDefined();
    expect(vm.getDescription()).toBe(raw.description);
    expect(vm.isDeployed()).toBeDefined();
    expect(vm.isDeployed()).toBe(raw.deployed);
    expect(vm.isMediaInserted()).toBeDefined();
    expect(vm.isMediaInserted()).toBe(raw.media_inserted);
    if (vm.isMediaInserted()) {
      expect(vm.getInsertedMediaName()).toBeDefined();
      expect(vm.getInsertedMediaName()).toBe(raw.inserted_media_name);
    } else {
      expect(vm.getInsertedMediaName()).toBeNull();
    }
    expect(vm.getNumberOfCpus()).toBeDefined();
    expect(vm.getNumberOfCpus()).toBe(raw.cpus_number);
    expect(vm.toString().length).toBeGreaterThan(0);
    expect(vm.isDeleted()).toBe(false);
    expect(vm.getUpdatedDate()).toBeDefined();
    expect(vm.getUpdatedDate().getTime()).toBeLessThan(new Date().getTime());
    expect(vm.getDeletedDate()).toBeNull();
    expect(vm.getEntityType()).toBe(EntityType.VM);
    return vm;
  });
});

test('Can get vm vnics', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async function(vm) {
    return vm.getVnics().then(function(vnics) {
      expect(vnics).toBeDefined();
      expect(vnics.length).toBeDefined();
      if (vnics.length > 0) {
        let vnic = vnics[0];
        let raw = vnic.getJson();
        expect(vnic.getAdapterType()).toBeDefined();
        expect(vnic.getAdapterType()).toBe(raw.adapter_type);
        expect(vnic.getAddressMode()).toBeDefined();
        expect(vnic.getAddressMode()).toBe(raw.address_mode);
        expect(vnic.getConnectedNetworkName()).toBeDefined();
        expect(vnic.getConnectedNetworkName()).toBe(raw.net_name);
        expect(vnic.getIpAddress()).toBeDefined();
        expect(vnic.getIpAddress()).toBe(raw.ip_addr);
        expect(vnic.getVnicId()).toBeDefined();
        expect(vnic.getVnicId()).toBe(raw.vnic_id);
        expect(vnic.getMacAddress()).toBeDefined();
        expect(vnic.getMacAddress()).toBe(raw.mac_addr);
        expect(vnic.isPrimaryConnection()).toBeDefined();
        expect(vnic.isPrimaryConnection()).toBe(raw.primary_cnx);
        expect(vnic.isDeleted()).toBe(false);
        expect(vnic.isConnected()).toBeDefined();
        expect(vnic.isConnected()).toBe(raw.connected);
        expect(vnic.toString().length).toBeGreaterThan(0);
      }
    });
  });
});

test('Can update VM description', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async function(vm) {
    expect.hasAssertions();
    return vm.updateDescription('test description').then(async function(task) {
      let rawTask = task.getJson();
      expect(task.isComplete()).toBe(false);
      expect(task.getUuid()).toBeDefined();
      expect(task.getUuid()).toBe(rawTask.uuid);
      expect(task.getLocationId()).toBeDefined();
      expect(task.getLocationId()).toBe(rawTask.location_id);
      expect(task.getOperation()).toBeDefined();
      expect(task.getOperation()).toBe(rawTask.operation);
      if (rawTask.end_time !== null) {
        expect(task.getEndTime()).toBeDefined();
        expect(task.getEndTime()!.getTime()).toBe(rawTask.end_time);
      } else {
        expect(task.getEndTime()).toBeNull();
      }
      expect(task.getEntityUuid()).toBeDefined();
      expect(task.getEntityUuid()).toBe(rawTask.entity_uuid);
      expect(task.isInitiatedFromIlandApi()).toBeDefined();
      expect(task.isInitiatedFromIlandApi()).toBe(rawTask.initiated_from_ecs);
      expect(task.getInitiationTime()).toBeDefined();
      expect(task.getInitiationTime().getTime()).toBe(rawTask.initiation_time);
      expect(task.getMessage()).toBe(rawTask.message);
      expect(task.getOperationDescription()).toBe(rawTask.operation_description);
      expect(task.getOrgUuid()).toBeDefined();
      expect(task.getOrgUuid()).toBe(rawTask.org_uuid);
      expect(task.getOtherAttributes()).toBeDefined();
      expect(task.getOtherAttributes().size).toBe(rawTask.other_attributes.size);
      expect(task.getParentTaskUuid()).toBeNull();
      expect(task.getProgress()).toBeDefined();
      expect(task.getProgress()).toBeGreaterThanOrEqual(0);
      expect(task.getProgress()).toBeLessThanOrEqual(100);
      expect(task.getProgress()).toBe(rawTask.progress);
      if (rawTask.start_time === null) {
        expect(task.getStartTime()).toBeNull();
      } else {
        expect(task.getStartTime()!.getTime()).toBe(rawTask.start_time);
      }
      expect(task.getSubTasks()).toBeDefined();
      expect(task.getSubTasks().length).toBe(0);
      expect(task.getTaskId()).toBeDefined();
      expect(task.getTaskId()).toBe(rawTask.task_id);
      expect(task.getTaskType()).toBeDefined();
      expect(task.getTaskType()).toBe(rawTask.task_type);
      expect(task.getUserFullName()).toBeDefined();
      expect(task.getUserFullName()).toBe(rawTask.user_full_name);
      expect(task.getUsername()).toBeDefined();
      expect(task.getUsername()).toBe(rawTask.username);
      let promises = [];
      promises.push(new Promise(function(resolve) {
        task.getObservable().subscribe(function() {
          expect(task.getUuid()).toBeDefined();
          expect(task.getLocationId()).toBeDefined();
          expect(task.toString().length).toBeGreaterThan(0);
          if (task.isComplete()) {
            resolve(task.getPromise());
          }
        });
      }));
      promises.push(task.getPromise());
      promises.push(Task.getTask(task.getLocationId(), task.getUuid()).then(function(taskCopy) {
        expect(taskCopy.getUuid()).toBe(task.getUuid());
        expect(taskCopy.getLocationId()).toBe(task.getLocationId());
        expect(taskCopy.getEntityUuid()).toBe(task.getEntityUuid());
        expect(taskCopy.getOrgUuid()).toBe(task.getOrgUuid());
        return taskCopy;
      }));
      return Promise.all(promises);
    });
  });
});

test('Can refresh VM', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async function(vm) {
    expect(vm.getUuid()).toBe(inventoryVm.uuid);
    return vm.refresh().then(function(refreshed) {
      expect(refreshed.getUuid()).toBe(inventoryVm.uuid);
    });
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
    os: '',
    status: ApiVmStatus.POWERED_OFF,
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
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.PARTIALLY_POWERED_OFF);
  apiVm.deployed = false;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.POWERED_OFF);
  apiVm.status = ApiVmStatus.POWERED_ON;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.POWERED_ON);
  apiVm.status = ApiVmStatus.WAITING_FOR_INPUT;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.WAITING_FOR_INPUT);
  apiVm.status = ApiVmStatus.UNRESOLVED;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.UNRESOLVED);
  apiVm.status = ApiVmStatus.UNRECOGNIZED;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.UNRECOGNIZED);
  apiVm.status = ApiVmStatus.FAILED_CREATION;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.FAILED_CREATION);
  apiVm.status = ApiVmStatus.UNKNOWN;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.UNKNOWN);
  apiVm.status = ApiVmStatus.MIXED;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.MIXED);
  apiVm.status = ApiVmStatus.SUSPENDED;
  expect(vm.getPowerStatus()).toBe(VmPowerStatus.SUSPENDED);
});
