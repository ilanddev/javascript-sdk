import {Iland} from '../iland';
import {User} from './user';
import {TestConfiguration} from '../../../tests/configuration';
import {IlandDirectGrantAuthProvider} from '../auth/direct-grant-auth-provider';
import {Vm} from './vm';
import {InventoryEntity} from './inventory';

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
      let vms = inventory.getEntitiesByType('VM');
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
    expect(vm.getCreatedDate()!.getTime()).toBe(raw.created_date === null ?
        0 : raw.created_date);
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
        expect(vnic.getAdapterType()).toBeDefined();
        expect(vnic.getAddressMode()).toBeDefined();
        expect(vnic.getConnectedNetworkName()).toBeDefined();
        expect(vnic.getIpAddress()).toBeDefined();
        expect(vnic.getVnicId()).toBeDefined();
        expect(vnic.getMacAddress()).toBeDefined();
        expect(vnic.isPrimaryConnection()).toBeDefined();
        expect(vnic.isDeleted()).toBe(false);
        expect(vnic.isConnected()).toBeDefined();
        expect(vnic.toString().length).toBeGreaterThan(0);
      }
    });
  });
});

test('Can update VM description', async() => {
  return Vm.getVm(inventoryVm.uuid).then(async function(vm) {
    expect.hasAssertions();
    return vm.updateDescription('test description').then(async function(task) {
      expect(task.isComplete()).toBe(false);
      expect(task.getUuid()).toBeDefined();
      expect(task.getLocationId()).toBeDefined();
      let promises = [];
      promises.push(new Promise(function(resolve) {
        task.getObservable().subscribe(function(update) {
          expect(task.getUuid()).toBeDefined();
          expect(task.getLocationId()).toBeDefined();
          expect(task.toString().length).toBeGreaterThan(0);
          if (task.isComplete()) {
            resolve(task.getPromise());
          }
        });
      }));
      promises.push(task.getPromise());
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
