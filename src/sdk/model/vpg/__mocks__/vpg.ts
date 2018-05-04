import { ServiceProfileJson, VpgJson, VpgVmJson } from '../__json__/vpg';
import { AxiosResponse } from 'axios';
import { VpgFailoverTestAlertJson } from '../vpg-failover/__json__/vpg-failover-test-alert';
import {
    BootOrderSettingsJson, DetailedRecoveryStepJson,
    NetworkMappingJson, VmRecoverySettingsJson, VpgFailoverReportDataJson,
    VpgFailoverReportDetailsJson
} from '../vpg-failover/__json__/vpg-failover-report-detail';

export const MockServiceProfile: ServiceProfileJson = {
  uuid: 'uuid',
  location: 'location',
  service_profile_identifier: 'id',
  service_profile_name: 'name',
  description: 'none',
  history: 1,
  max_journal_size_in_percent: 90,
  rpo: 8,
  test_interval: 1
};

export const MockVpgVm: VpgVmJson = {
  location: 'mock-vm-location',
  org_uuid: 'mock-vm-org-uuid',
  vpg_uuid: 'mock-vpg-uuid',
  uuid: 'mock-vm-uuid',
  vm_name: 'mock-vm-name',
  vm_identifier: 'mock-vm-id',
  organization_name: 'mock-org-name',
  actual_rpo: 9,
  entities: {
    source: 'VC_VPG',
    target: 'PUBLIC_CLOUD'
  },
  status: 'RECOVERED',
  sub_status: 'NONE',
  priority: 'MEDIUM',
  source_site: 'mock-source-site',
  target_site: 'mock-target-site',
  last_test: 235251,
  provisioned_storage_in_mb: 5,
  used_storage_in_mb: 3,
  iops: 3,
  throughput_in_mb: 3
};

export const MockVpgJson: VpgJson = {
  name: 'mock-vpg-name',
  uuid: 'mock-vpg-uuid',
  deleted: false,
  deleted_date: null,
  updated_date: 135235252,
  service_profile: MockServiceProfile,
  vms: [MockVpgVm],
  org_uuid: 'mock-org-uuid',
  location_id: 'mock-location-id',
  service_profile_uuid: 'mock-service-profile-uuid',
  vpg_identifier: 'mock-vpg-identifier',
  vpg_name: 'mock-vpg-name',
  organization_name: 'mock-org-name',
  actual_rpo: 9,
  entities: {
    source: 'VC_VPG',
    target: 'PUBLIC_CLOUD'
  },
  status: 'RECOVERED',
  sub_status: 'NONE',
  priority: 'MEDIUM',
  vms_count: 1,
  last_test: 1242532,
  source_site: 'mock-source-site',
  target_site: 'mock-target-site',
  provisioned_storage_in_mb: 5,
  used_storage_in_mb: 3,
  iops: 3,
  throughput_in_mb: 3,
  service_profile_identifier: 'mock-sp-id',
  backup_enabled: true,
  recovery_site_identifier: 'mock-recovery-site-id',
  protected_site_identifier: 'mock-protected-site',
  active_process_stage: 'NONE',
  recovery_journal_used_storage_gb: 5
};

export const MockAlertJson: VpgFailoverTestAlertJson = {
  vpg_uuid: 'mock-vpg-uuid',
  username: 'mock-username',
  email: 'fake@email.com',
  weeks_before_alert: 1
};

export const MockVpgAlertResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockAlertJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockNetworkMapping: NetworkMappingJson = {
  source_network: 'mock-source-network',
  failover_move_target_network: 'mock-move-target-net',
  failover_test_target_network: 'mock-test-target-net',
  reverse_configuration_failover_test_network: 'mock-config'
};

export const MockBootOrderSettings: BootOrderSettingsJson = {
  name: 'mock-boot-settings',
  vms_in_group: '1',
  startup_delay: '0'
};

export const MockVmRecoverySettings: VmRecoverySettingsJson = {
  name: 'mock-vm-recovery-settings',
  recovery_host: 'mock-recovery-host',
  recovery_networks: new Map([['mock-key1', 'mock-value1'], ['mock-key2', 'mock-value2']]),
  recovery_datastores: new Map([['mock-key1', 'mock-value1']]),
  recovery_folder: 'mock-recovery-folder'
};

export const MockDetailedRecoveryStep: DetailedRecoveryStepJson = {
  number: 'mock-detailed-name',
  description: '',
  result: 'mock-result',
  start_time: '15324622',
  end_time: '235234',
  execution_time: '2335342t6'
};

export const MockVpgReportData: VpgFailoverReportDataJson = {
  vpg_name: 'mock-vpg-name',
  report_generation_date: 'Mock-Date',
  operation_name: 'mock-org',
  point_in_time: 'mock-pit',
  start_time: '25235235',
  end_time: '5252522',
  rto: 'mock-rto',
  operation_result: 'success',
  user_notes: '',
  protected_site: 'mock-protected-site',
  recovery_site: 'mock-recovery-site',
  default_recovery_host: 'mock-host',
  default_recovery_datastore: 'mock-datastore',
  default_failover_move_network: 'mock-net',
  recovery_organization: 'mock-org',
  recovery_vdc: 'mock-vdc',
  guest_customization: 'mock-guest-custom',
  default_test_recovery_network: 'mock-test-net',
  default_recovery_folder: 'mock-recovery-folder',
  post_recovery_script: 'mock-recovery-script',
  boot_order_settings_message: 'mock-boot-order-msg',
  network_mappings: [MockNetworkMapping],
  boot_order_settings: [MockBootOrderSettings],
  vm_recovery_settings: [MockVmRecoverySettings],
  detailed_recovery_step_list: [MockDetailedRecoveryStep]
};

export const MockVpgReportDetails: VpgFailoverReportDetailsJson = {
  location_id: 'mock-location-id',
  task_uuid: 'mock-task-uuid',
  task_complete_timestamp: 12314534,
  status: 'READY',
  data: MockVpgReportData
};

export const MockVpgReportDetailsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVpgReportDetails,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
