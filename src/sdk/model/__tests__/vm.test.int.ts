import { Iland } from '../../iland';
import { User } from '../user';
import { TestConfiguration } from '../../../../__tests__/configuration';
import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Vm } from '../vm';
import { Task } from '../task';
import { ApiError } from '../../api-error';
import { InventoryEntity } from '../company-inventory';
import {PerfSamplesRequestJson} from "../json/perf-samples-request";
import {Vapp} from "../vapp";

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
    return user.getInventory().then(function(inventories) {
      if (inventories.length === 0) {
        throw Error('no company inventories returned for test user, cant perform test.');
      }
      const inventory = inventories[0];
      const vms = inventory.getEntitiesByType('ILAND_CLOUD_VM');
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

test('Get a proper error when trying to retrieve non-existent VM', async() => {
  try {
    await Vm.getVm('fake-uuid');
  } catch (err) {
    const apiError = err as ApiError;
    const raw = apiError.getJson();
    expect(apiError.getType()).toBe('UnauthorizedError');
    expect(apiError.getMessage()).toBeDefined();
    expect(apiError.getDetailMessage()).toBe(raw.detail_message);
    expect(apiError.getMessage()).toBe(raw.message);
    expect(apiError.getType()).toBe(raw.type);
    expect(apiError.toString().length).toBeGreaterThan(0);
  }
});

test('Can get vm and verify required properties', async() => {
  return Vm.getVm(inventoryVm.uuid).then(function(vm) {
    const raw = vm.json;
    expect(vm.name).toBeDefined();
    expect(vm.name).toBe(raw.name);
    expect(vm.uuid).toBe(inventoryVm.uuid);
    expect(vm.uuid).toBe(raw.uuid);
    expect(vm.coresPerSocket).toBeGreaterThan(0);
    expect(vm.coresPerSocket).toBe(raw.cores_per_socket);
    expect(vm.createdDate).toBeDefined();
    if (vm.createdDate !== null) {
      expect(vm.createdDate!.getTime()).toBe(raw.created_date === null ?
          0 : raw.created_date);
    }
    expect(vm.locationId).toBeDefined();
    expect(vm.locationId).toBe(raw.location_id);
    expect(vm.vappUuid).toBeDefined();
    expect(vm.vappUuid).toBe(raw.vapp_uuid);
    expect(vm.vdcUuid).toBeDefined();
    expect(vm.vdcUuid).toBe(raw.vdc_uuid);
    expect(vm.hardwareVersion).toBeDefined();
    expect(vm.hardwareVersion).toBe(raw.hardware_version);
    expect(vm.vmLocalId).toBeDefined();
    expect(vm.vmLocalId).toBe(raw.vm_local_id);
    expect(vm.vcloudHref).toBeDefined();
    expect(vm.vcloudHref).toBe(raw.vcloud_href);
    expect(vm.storageProfiles).toBeDefined();
    expect(vm.storageProfiles.length).toBeGreaterThan(0);
    expect(vm.storageProfiles).toBe(raw.storage_profiles);
    expect(vm.vcenterInstanceUuid).toBeDefined();
    expect(vm.vcenterInstanceUuid).toBe(raw.vcenter_instance_uuid);
    expect(vm.powerStatus).toBeDefined();
    expect(vm.memorySize).toBeGreaterThan(0);
    expect(vm.memorySize).toBe(raw.memory_size);
    expect(vm.vimDatastoreRef).toBeDefined();
    expect(vm.vimDatastoreRef).toBe(raw.vim_datastore_ref);
    expect(vm.vcenterName).toBeDefined();
    expect(vm.vcenterName).toBe(raw.vcenter_name);
    expect(vm.vcenterMoRef).toBeDefined();
    expect(vm.vcenterMoRef).toBe(raw.vcenter_moref);
    expect(vm.vcenterHref).toBeDefined();
    expect(vm.vcenterHref).toBe(raw.vcenter_href);
    expect(vm.operatingSystem).toBeDefined();
    expect(vm.operatingSystem).toBe(raw.os);
    expect(vm.orgUuid).toBeDefined();
    expect(vm.orgUuid).toBe(raw.org_uuid);
    expect(vm.description).toBeDefined();
    expect(vm.description).toBe(raw.description);
    expect(vm.deployed).toBeDefined();
    expect(vm.deployed).toBe(raw.deployed);
    expect(vm.mediaInserted).toBeDefined();
    expect(vm.mediaInserted).toBe(raw.media_inserted);
    if (vm.mediaInserted) {
      expect(vm.insertedMediaName).toBeDefined();
      expect(vm.insertedMediaName).toBe(raw.inserted_media_name);
    } else {
      expect(vm.insertedMediaName).toBeNull();
    }
    expect(vm.numberOfCpus).toBeDefined();
    expect(vm.numberOfCpus).toBe(raw.cpus_number);
    expect(vm.toString().length).toBeGreaterThan(0);
    expect(vm.deleted).toBe(false);
    expect(vm.updatedDate).toBeDefined();
    expect(vm.updatedDate.getTime()).toBeLessThan(new Date().getTime());
    expect(vm.deletedDate).toBeNull();
    expect(vm.entityType).toBe('VM');
    return vm;
  });
});

test('Can get vm vnics', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async function(vm) {
    return vm.getVnics().then(function(vnics) {
      expect(vnics).toBeDefined();
      expect(vnics.length).toBeDefined();
      if (vnics.length > 0) {
        const vnic = vnics[0];
        const raw = vnic.json;
        expect(vnic.adapterType).toBeDefined();
        expect(vnic.adapterType).toBe(raw.adapter_type);
        expect(vnic.addressMode).toBeDefined();
        expect(vnic.addressMode).toBe(raw.address_mode);
        expect(vnic.connectedNetworkName).toBeDefined();
        expect(vnic.connectedNetworkName).toBe(raw.net_name);
        expect(vnic.ipAddress).toBeDefined();
        expect(vnic.ipAddress).toBe(raw.ip_addr);
        expect(vnic.vnicId).toBeDefined();
        expect(vnic.vnicId).toBe(raw.vnic_id);
        expect(vnic.macAddress).toBeDefined();
        expect(vnic.macAddress).toBe(raw.mac_addr);
        expect(vnic.primaryConnection).toBeDefined();
        expect(vnic.primaryConnection).toBe(raw.primary_cnx);
        expect(vnic.deleted).toBe(false);
        expect(vnic.connected).toBeDefined();
        expect(vnic.connected).toBe(raw.connected);
        expect(vnic.toString().length).toBeGreaterThan(0);
      }
    });
  });
});

test('Can get vm virtual disks', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async function(vm) {
    return vm.getVirtualDisks().then(function(disks) {
      expect(disks).toBeDefined();
      if (disks.length > 0) {
        const disk = disks[0];
        const raw = disk.json;
        expect(disk.name).toBeDefined();
        expect(disk.name).toBe(raw.name);
        expect(disk.size).toBeDefined();
        expect(disk.size).toBe(raw.size);
        expect(disk.type).toBeDefined();
        expect(disk.type).toBe(raw.type);
        expect(disk.toString().length).toBeGreaterThan(0);
      }
    });
  });
});

test('Can update VM description', async() => {
  const vm = await Vm.getVm(inventoryVm.uuid);
  expect.hasAssertions();
  const task = await vm.updateDescription('test description');
  const rawTask = task.json;
  expect(task.complete).toBe(false);
  expect(task.uuid).toBeDefined();
  expect(task.uuid).toBe(rawTask.uuid);
  expect(task.locationId).toBeDefined();
  expect(task.locationId).toBe(rawTask.location_id);
  expect(task.operation).toBeDefined();
  expect(task.operation).toBe(rawTask.operation);
  if (rawTask.end_time !== null) {
    expect(task.endTime).toBeDefined();
    expect(task.endTime!.getTime()).toBe(rawTask.end_time);
  } else {
    expect(task.endTime).toBeNull();
  }
  expect(task.entityUuid).toBeDefined();
  expect(task.entityUuid).toBe(rawTask.entity_uuid);
  expect(task.initiatedFromIlandApi).toBeDefined();
  expect(task.initiatedFromIlandApi).toBe(rawTask.initiated_from_ecs);
  expect(task.initiationTime).toBeDefined();
  expect(task.initiationTime.getTime()).toBe(rawTask.initiation_time);
  expect(task.message).toBe(rawTask.message);
  expect(task.operationDescription).toBe(rawTask.operation_description);
  expect(task.orgUuid).toBeDefined();
  expect(task.orgUuid).toBe(rawTask.org_uuid);
  expect(task.otherAttributes).toBeDefined();
  expect(task.otherAttributes.size).toBe(rawTask.other_attributes.size);
  expect(task.parentTaskUuid).toBeNull();
  expect(task.progress).toBeDefined();
  expect(task.progress).toBeGreaterThanOrEqual(0);
  expect(task.progress).toBeLessThanOrEqual(100);
  expect(task.progress).toBe(rawTask.progress);
  if (rawTask.start_time === null) {
    expect(task.startTime).toBeNull();
  } else {
    expect(task.startTime!.getTime()).toBe(rawTask.start_time);
  }
  expect(task.subTasks).toBeDefined();
  expect(task.subTasks.length).toBe(0);
  expect(task.taskId).toBeDefined();
  expect(task.taskId).toBe(rawTask.task_id);
  expect(task.taskType).toBeDefined();
  expect(task.taskType).toBe(rawTask.task_type);
  expect(task.userFullName).toBeDefined();
  expect(task.userFullName).toBe(rawTask.user_full_name);
  expect(task.username).toBeDefined();
  expect(task.username).toBe(rawTask.username);
  const promises = [];
  promises.push(new Promise(function(resolve) {
    task.getObservable().subscribe(function() {
      expect(task.uuid).toBeDefined();
      expect(task.locationId).toBeDefined();
      expect(task.toString().length).toBeGreaterThan(0);
      if (task.complete) {
        resolve(task.getPromise());
      }
    });
  }));
  promises.push(task.getPromise());
  promises.push(Task.getTask(task.locationId, task.uuid).then(function(taskCopy) {
    expect(taskCopy.uuid).toBe(task.uuid);
    expect(taskCopy.locationId).toBe(task.locationId);
    expect(taskCopy.entityUuid).toBe(task.entityUuid);
    expect(taskCopy.orgUuid).toBe(task.orgUuid);
    return taskCopy;
  }));
  return Promise.all(promises);
});

test('Can refresh VM', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async function(vm) {
    expect(vm.uuid).toBe(inventoryVm.uuid);
    return vm.refresh().then(function(refreshed) {
      expect(refreshed.uuid).toBe(inventoryVm.uuid);
    });
  });
});

test('Can get perf counters', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async (vm) => {
    expect(vm.uuid).toBe(inventoryVm.uuid);
    return vm.getPerfCounters().then((counters) => {
      expect(counters).toBeDefined();
      expect(counters.length).toBeGreaterThan(0);
    });
  });
});

test('Can get perf samples', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async (vm) => {
    expect(vm.uuid).toBe(vm.uuid);
    return vm.getPerfCounters().then((counters) => {
      expect(counters).toBeDefined();
      expect(counters.length).toBeGreaterThan(0);
      const request = { counter: counters[0] } as PerfSamplesRequestJson;
      return vm.getPerfSamples(request).then((perfSamplesSerie) => {
        expect(perfSamplesSerie).toBeDefined();
      })
    });
  });
});
