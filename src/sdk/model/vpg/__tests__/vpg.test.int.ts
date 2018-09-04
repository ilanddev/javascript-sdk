import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { Vpg } from '../vpg';
import { VpgSubEntityRequest } from '../__json__/vpg-sub-entity-request';
import { VpgVm } from '../vpg-vm';
import { InventoryEntity } from '../../user/inventory-entity/inventory-entity';
import { User } from '../../user/user';
import { PerfSamplesSeries } from '../../mixins/perf-samples/perf-samples-series';

let auth: IlandDirectGrantAuthProvider;
let inventoryVpg: InventoryEntity;
const params: VpgSubEntityRequest[] = ['SERVICE_PROFILE'];

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
      const vpgs = inventory.getEntitiesByType('IAAS_VPG');
      expect(vpgs).toBeDefined();
      if (vpgs && vpgs.length > 0) {
        expect(vpgs.length).toBeGreaterThan(0);
        inventoryVpg = vpgs[0];
      } else {
        fail('failed to get any inventory VPGs for VPG integration tests');
      }
    });
  });
});

test('Can get Vpg by uuid', async() => {
  if (!inventoryVpg) {
    return;
  }
  return Vpg.getVpg(inventoryVpg.uuid, params).then(function(vpg) {
    expect(vpg).toBeDefined();
    expect(vpg.toString().length).toBeGreaterThan(0);
    expect(vpg.isFailingOver()).toBeDefined();
    const rawData = vpg.json;
    expect(vpg.entityType).toBe('IAAS_VPG');
    expect(vpg.serviceProfile).toBeDefined();
    expect(vpg.vms).toBeDefined();
    expect(vpg.orgUuid).toBeDefined();
    expect(vpg.entities).toBeDefined();
    expect(vpg.orgUuid).toBe(rawData.org_uuid);
    expect(vpg.locationId).toBeDefined();
    expect(vpg.locationId).toBe(rawData.location_id);
    expect(vpg.serviceProfileUuid).toBeDefined();
    expect(vpg.serviceProfileUuid).toBe(rawData.service_profile_uuid);
    expect(vpg.vpgIdentifier).toBeDefined();
    expect(vpg.vpgIdentifier).toBe(rawData.vpg_identifier);
    expect(vpg.vpgName).toBeDefined();
    expect(vpg.vpgName).toBe(rawData.vpg_name);
    expect(vpg.orgName).toBeDefined();
    expect(vpg.orgName).toBe(rawData.organization_name);
    expect(vpg.actualRpo).toBeDefined();
    expect(vpg.actualRpo).toBe(rawData.actual_rpo);
    expect(vpg.status).toBeDefined();
    expect(vpg.status).toBe(rawData.status);
    expect(vpg.subStatus).toBeDefined();
    expect(vpg.subStatus).toBe(rawData.sub_status);
    expect(vpg.priority).toBeDefined();
    expect(vpg.priority).toBe(rawData.priority);
    expect(vpg.vmsCount).toBeDefined();
    expect(vpg.vmsCount).toBe(rawData.vms_count);
    expect(vpg.lastTest).toBeDefined();
    expect(vpg.lastTest).toBe(rawData.last_test);
    expect(vpg.sourceSite).toBeDefined();
    expect(vpg.sourceSite).toBe(rawData.source_site);
    expect(vpg.targetSite).toBeDefined();
    expect(vpg.targetSite).toBe(rawData.target_site);
    expect(vpg.provisionedStorageInMb).toBeDefined();
    expect(vpg.provisionedStorageInMb).toBe(rawData.provisioned_storage_in_mb);
    expect(vpg.usedStorageInMb).toBeDefined();
    expect(vpg.usedStorageInMb).toBe(rawData.used_storage_in_mb);
    expect(vpg.iops).toBeDefined();
    expect(vpg.iops).toBe(rawData.iops);
    expect(vpg.throughputInMb).toBeDefined();
    expect(vpg.throughputInMb).toBe(rawData.throughput_in_mb);
    expect(vpg.serviceProfileIdentifier).toBeDefined();
    expect(vpg.serviceProfileIdentifier).toBe(rawData.service_profile_identifier);
    expect(vpg.isBackupEnabled).toBeDefined();
    expect(vpg.isBackupEnabled).toBe(rawData.backup_enabled);
    expect(vpg.recoverySiteIdentifier).toBeDefined();
    expect(vpg.recoverySiteIdentifier).toBe(rawData.recovery_site_identifier);
    expect(vpg.protectedSiteIdentifier).toBeDefined();
    expect(vpg.protectedSiteIdentifier).toBe(rawData.protected_site_identifier);
    expect(vpg.activeProcessStage).toBeDefined();
    expect(vpg.activeProcessStage).toBe(rawData.active_process_stage);
    expect(vpg.recoveryJournalUsedStorageGb).toBeDefined();
    expect(vpg.recoveryJournalUsedStorageGb).toBe(rawData.recovery_journal_used_storage_gb);
  });
});

test('Can get Vpg VMs', async() => {
  if (!inventoryVpg) {
    return;
  }
  return Vpg.getVpg(inventoryVpg.uuid, params).then(async function(vpg) {
    return vpg.getVmsForVpg().then((vms: Array<VpgVm>) => {
      expect(vms).toBeDefined();
      const vm = vms[0];
      const rawData = vm.json;
      expect(vm.toString().length).toBeGreaterThan(0);
      expect(vm.location).toBeDefined();
      expect(vm.location).toBe(rawData.location);
      expect(vm.orgUuid).toBeDefined();
      expect(vm.orgUuid).toBe(rawData.org_uuid);
      expect(vm.vpgUuid).toBeDefined();
      expect(vm.vpgUuid).toBe(rawData.vpg_uuid);
      expect(vm.uuid).toBeDefined();
      expect(vm.uuid).toBe(rawData.uuid);
      expect(vm.vmName).toBeDefined();
      expect(vm.vmName).toBe(rawData.vm_name);
      expect(vm.vmIdentifier).toBeDefined();
      expect(vm.vmIdentifier).toBe(rawData.vm_identifier);
      expect(vm.orgName).toBeDefined();
      expect(vm.orgName).toBe(rawData.organization_name);
      expect(vm.actualRpo).toBeDefined();
      expect(vm.actualRpo).toBe(rawData.actual_rpo);
      expect(vm.entities).toBeDefined();
      const entities = vm.entities;
      const entitiesRaw = entities.json;
      expect(entities.toString().length).toBeGreaterThan(0);
      expect(entities.source).toBeDefined();
      expect(entities.source).toBe(entitiesRaw.source);
      expect(entities.target).toBeDefined();
      expect(entities.target).toBe(entitiesRaw.target);
      expect(vm.status).toBeDefined();
      expect(vm.status).toBe(rawData.status);
      expect(vm.subStatus).toBeDefined();
      expect(vm.subStatus).toBe(rawData.sub_status);
      expect(vm.priority).toBeDefined();
      expect(vm.priority).toBe(rawData.priority);
      expect(vm.sourceSite).toBeDefined();
      expect(vm.sourceSite).toBe(rawData.source_site);
      expect(vm.targetSite).toBeDefined();
      expect(vm.targetSite).toBe(rawData.target_site);
      expect(vm.lastTest).toBeDefined();
      expect(vm.lastTest).toBe(rawData.last_test);
      expect(vm.provisionedStorageInMb).toBeDefined();
      expect(vm.provisionedStorageInMb).toBe(rawData.provisioned_storage_in_mb);
      expect(vm.usedStorageInPercent).toBeDefined();
      expect(vm.usedStorageInPercent).toBe(rawData.used_storage_in_mb);
      expect(vm.iops).toBeDefined();
      expect(vm.iops).toBe(rawData.iops);
      expect(vm.throughputInMb).toBeDefined();
      expect(vm.throughputInMb).toBe(rawData.throughput_in_mb);
    });
  });
});

test('Can get Vpg Service Profile', async() => {
  if (!inventoryVpg) {
    return;
  }
  return Vpg.getVpg(inventoryVpg.uuid, params).then(async function(vpg) {
    return vpg.getServiceProfile().then((serviceProfile) => {
      expect(serviceProfile).toBeDefined();
      const rawData = serviceProfile.json;
      expect(serviceProfile.toString().length).toBeGreaterThan(0);
      expect(serviceProfile.uuid).toBeDefined();
      expect(serviceProfile.uuid).toBe(rawData.uuid);
      expect(serviceProfile.location).toBeDefined();
      expect(serviceProfile.location).toBe(rawData.location);
      expect(serviceProfile.serviceProfileIdentifier).toBeDefined();
      expect(serviceProfile.serviceProfileIdentifier).toBe(rawData.service_profile_identifier);
      expect(serviceProfile.serviceProfileName).toBeDefined();
      expect(serviceProfile.serviceProfileName).toBe(rawData.service_profile_name);
      expect(serviceProfile.description).toBeDefined();
      expect(serviceProfile.description).toBe(rawData.description);
      expect(serviceProfile.history).toBeDefined();
      expect(serviceProfile.history).toBe(rawData.history);
      expect(serviceProfile.maxJournalSizeInPercent).toBeDefined();
      expect(serviceProfile.maxJournalSizeInPercent).toBe(rawData.max_journal_size_in_percent);
      expect(serviceProfile.rpo).toBeDefined();
      expect(serviceProfile.rpo).toBe(rawData.rpo);
      expect(serviceProfile.testInterval).toBeDefined();
      expect(serviceProfile.testInterval).toBe(rawData.test_interval);
    });
  });
});

test('Can get checkpoints for Vpg', async() => {
  if (!inventoryVpg) {
    return;
  }
  return Vpg.getVpg(inventoryVpg.uuid, params).then(async function(vpg) {
    return vpg.getCheckpoints().then((checkpoints) => {
      expect(checkpoints).toBeDefined();
      const checkpoint = checkpoints[0];
      const rawData = checkpoint.json;
      expect(checkpoint.toString().length).toBeGreaterThan(0);
      expect(checkpoint.tag).toBeDefined();
      expect(checkpoint.tag).toBe(rawData.tag);
      expect(checkpoint.timestamp).toBeDefined();
      expect(checkpoint.timestamp).toBe(rawData.time_stamp);
      expect(checkpoint.checkpointIdentifier).toBeDefined();
      expect(checkpoint.checkpointIdentifier).toBe(rawData.checkpoint_identifier);
    });
  });
});

test('Can get Vpg performance samples given a performance series info', async() => {
  if (!inventoryVpg) {
    return;
  }
  return Vpg.getVpg(inventoryVpg.uuid, params).then(async function(vpg) {
    return vpg.getVpgPerfFor('vpg', 'ThroughputInMB', 'latest')
        .then((perfSample: PerfSamplesSeries) => {
          expect(perfSample).toBeDefined();
          const rawData = perfSample.json;
          expect(perfSample.toString().length).toBeGreaterThan(0);
          expect(perfSample.uuid).toBeDefined();
          expect(perfSample.uuid).toBe(rawData.uuid);
          expect(perfSample.summary).toBeDefined();
          expect(perfSample.summary).toBe(rawData.summary);
          expect(perfSample.interval).toBeDefined();
          expect(perfSample.interval).toBe(rawData.interval);
          expect(perfSample.group).toBeDefined();
          expect(perfSample.group).toBe(rawData.group);
          expect(perfSample.name).toBeDefined();
          expect(perfSample.name).toBe(rawData.name);
          expect(perfSample.type).toBeDefined();
          expect(perfSample.type).toBe(rawData.type);
          expect(perfSample.unit).toBeDefined();
          expect(perfSample.unit).toBe(rawData.unit);
          expect(perfSample.samples).toBeDefined();
          const sample = perfSample.samples[0];
          expect(sample.toString().length).toBeGreaterThan(0);
          const sampleJson = sample.json;
          expect(sample.timestamp).toBeDefined();
          expect(sample.timestamp).toBe(sampleJson.time);
          expect(sample.value).toBeDefined();
          expect(sample.value).toBe(sampleJson.value);
        });
  });
});
