import {Iland} from "../iland";
import {User} from "./user";
import {TestConfiguration} from "../../../tests/configuration";
import {IlandDirectGrantAuthProvider} from "../auth/direct-grant-auth-provider";
import {Vm} from "./vm";
import {InventoryEntity} from "./inventory";

let auth: IlandDirectGrantAuthProvider, inventoryVm: InventoryEntity;

beforeAll(() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
  return User.getCurrentUser().then(function(user) {
    return user.getInventory().then(function(inventory) {
      let vms = inventory.getEntitiesByType("VM");
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

test('Can get vm and verify required properties', () => {
  return Vm.getVm(inventoryVm.uuid).then(function(vm) {
    expect(vm.getName()).toBeDefined();
    expect(vm.getUuid()).toBe(inventoryVm.uuid);
    expect(vm.getCoresPerSocket()).toBeGreaterThan(0);
    expect(vm.getCreatedDate()).toBeDefined();
    expect(vm.getLocationId()).toBeDefined();
    expect(vm.getVappUuid()).toBeDefined();
    expect(vm.getVdcUuid()).toBeDefined();
    expect(vm.getHardwareVersion()).toBeDefined();
    expect(vm.getVmLocalId()).toBeDefined();
    expect(vm.getVcloudHref()).toBeDefined();
    expect(vm.getStorageProfiles()).toBeDefined();
    expect(vm.getStorageProfiles().length).toBeGreaterThan(0);
    expect(vm.getVcenterInstanceUuid()).toBeDefined();
    expect(vm.getPowerStatus()).toBeDefined();
    expect(vm.getMemorySize()).toBeGreaterThan(0);
    expect(vm.getVimDatastoreRef()).toBeDefined();
    expect(vm.getVcenterName()).toBeDefined();
    expect(vm.getVcenterMoRef()).toBeDefined();
    expect(vm.getVcenterHref()).toBeDefined();
    expect(vm.getOperatingSystem()).toBeDefined();
    expect(vm.getOrgUuid()).toBeDefined();
    expect(vm.getDescription()).toBeDefined();
    expect(vm.isDeployed()).toBeDefined();
    expect(vm.isMediaInserted()).toBeDefined();
    if (vm.isMediaInserted()) {
      expect(vm.getInsertedMediaName()).toBeDefined();
    } else {
      expect(vm.getInsertedMediaName()).toBeNull();
    }
    expect(vm.getNumberOfCpus()).toBeDefined();
    expect(vm.toString().length).toBeGreaterThan(0);
    expect(vm.isDeleted()).toBe(false);
    expect(vm.getUpdatedDate()).toBeDefined();
    expect(vm.getUpdatedDate().getTime()).toBeLessThan(new Date().getTime());
    expect(vm.getDeletedDate()).toBeNull();
    return vm;
  });
});

test('Can get vm vnics', () => {
  return Vm.getVm(inventoryVm.uuid).then(function(vm) {
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

test('Can update VM description', (done) => {
  return Vm.getVm(inventoryVm.uuid).then(function(vm) {
    expect.hasAssertions();
    return vm.updateDescription('test description').then(function(task) {
      expect(task.isComplete()).toBe(false);
      expect(task.getUuid()).toBeDefined();
      expect(task.getLocationId()).toBeDefined();
      task.getObservable().subscribe(function(update) {
        expect(task.getUuid()).toBeDefined();
        expect(task.getLocationId()).toBeDefined();
        if (task.isComplete()) {
          done();
        }
      });
    });
  });
});
