/**
 * Vpg Failover Report Details Json properties
 */
export interface VpgFailoverReportDetailsJson {
  location_id: string;
  task_uuid: string;
  task_complete_timestamp: number;
  status: Status;
  data: VpgFailoverReportDataJson;
}

/**
 * Vpg Failover Report Data Json properties
 */
export interface VpgFailoverReportDataJson {
  vpg_name: string;
  report_generation_date: string;
  operation_name: string;
  point_in_time: string;
  start_time: string;
  end_time: string;
  rto: string;
  operation_result: string;
  user_notes: string;
  protected_site: string;
  recovery_site: string;
  default_recovery_host: string;
  default_recovery_datastore: string;
  default_failover_move_network: string;
  recovery_organization: string;
  recovery_vdc: string;
  guest_customization: string;
  default_test_recovery_network: string;
  default_recovery_folder: string;
  post_recovery_script: string;
  boot_order_settings_message: string;
  network_mappings: Array<NetworkMappingJson>;
  boot_order_settings: Array<BootOrderSettingsJson>;
  vm_recovery_settings: Array<VmRecoverySettingsJson>;
  detailed_recovery_step_list: Array<DetailedRecoveryStepJson>;
}

/**
 * Network Mapping Json properties
 */
export interface NetworkMappingJson {
  source_network: string;
  failover_move_target_network: string;
  failover_test_target_network: string;
  reverse_configuration_failover_test_network: string;
}

/**
 * Boot Order Setting Json properties
 */
export interface BootOrderSettingsJson {
  name: string;
  vms_in_group: string;
  startup_delay: string;
}

/**
 * Vm Recovery Settings properties
 */
export interface VmRecoverySettingsJson {
  name: string;
  recovery_host: string;
  recovery_networks: Map<string, string>;
  recovery_datastores: Map<string, string>;
  recovery_folder: string;
}

/**
 * Detailed Recovery Step Json properties
 */
export interface DetailedRecoveryStepJson {
  number: string;
  description: string;
  result: string;
  start_time: string;
  end_time: string;
  execution_time: string;
}

/**
 * Enumeration for possible Status types
 */
export type Status = 'FETCHING' | 'GENERATING' | 'READY' | 'ERROR';
