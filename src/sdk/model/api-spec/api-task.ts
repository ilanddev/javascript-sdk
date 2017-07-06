/**
 * Api Task representation.
 */
export interface ApiTask {
  active: boolean;
  synchronized: boolean;
  uuid: string;
  status: TaskStatus;
  location_id: string;
  operation: TaskOperation;
  end_time: number|null;
  entity_uuid: string;
  initiated_from_ecs: boolean;
  initiation_time: number;
  message: string|null;
  operation_description: string;
  org_uuid: string;
  other_attributes: Map<string, any>;
  parent_task_uuid: string|null;
  progress: number;
  start_time: number|null;
  sub_tasks: Array<string>;
  task_id: string;
  task_type: TaskType;
  user_full_name: string;
  username: string;
}

/**
 * Enumeration of possible task types.
 */
export enum TaskType {
  VCD = 'vcd',
  VEEAM = 'veeam',
  VI = 'vi',
  ZERTO = 'zerto',
  REPORTING = 'reporting',
  ILAND = 'iland'
}

/**
 * Enumeration of possible task status values.
 */
export enum TaskStatus {
  SUCCESS = 'success',
  RUNNING = 'running',
  ERROR = 'error',
  CANCELLED = 'cancelled',
  QUEUED = 'queued',
  WAITING_ON_USER_INPUT = 'waiting-on-user-input',
  UNKNOWN = 'unknown'
}

/**
 * Enumeration of possible task operation values.
 */
export enum TaskOperation {
  POWER_ON = 'power on',
  POWER_OFF = 'power off',
  SUSPEND = 'suspend',
  SHUTDOWN = 'shutdown',
  RESET = 'reset',
  REBOOT = 'reboot',
  UPDATE_MEMORY_SIZE = 'update memory size',
  RESET_MAC_ADDRESS = 'reset mac address',
  RECONFIGURE_VM = 'reconfigure vm',
  RENAME_VM = 'rename vm',
  RENAME_VAPP = 'rename vapp',
  UPDATE_CPU_COUNT = 'update cpu count',
  UPDATE_DISK_SIZE = 'update disk size',
  ADD_VIRTUAL_DISK = 'add virtual disk',
  UPDATE_DISKS = 'update vm disks',
  DELETE_VIRTUAL_DISK = 'delete virtual disk',
  INSTALL_VMWARE_TOOLS = 'install VMWare tools',
  UPDATE_VIRTUAL_NETWORK_CARD =
      'update virtual network card',
  VAPP_TEMPLATE_VCLOUD_ENABLE_DOWNLOAD =
      'vapp template enable download from vCloud',
  VAPP_TEMPLATE_DOWNLOAD_ENABLED =
      'vapp template enable download',
  MEDIA_ENABLE_DOWNLOAD = 'media enable download',
  VAPP_VCLOUD_ENABLE_DOWNLOAD =
      'vapp enable download from vCloud',
  VAPP_DOWNLOAD_ENABLED = 'vapp enable download',
  DELETE_VIRTUAL_NETWORK_CARD =
      'delete virtual network card',
  UPDATE_FIREWALL = 'update firewall',
  UPDATE_NAT_SERVICE = 'update nat service',
  CREATE_SNAPSHOT = 'create snapshot',
  RESTORE_SNAPSHOT = 'restore snapshot',
  REMOVE_SNAPSHOT = 'remove snapshot',
  DELETE_ENTITY = 'delete entity',
  UPDATE_STORAGE_LEASE = 'update storage lease',
  UPDATE_RUNTIME_LEASE = 'update runtime lease',
  ADD_VAPP = 'add vapp',
  ADD_VMS = 'add vms',
  UPDATE_DESCRIPTION = 'update description',
  UPDATE_STATIC_ROUTING = 'update static routing',
  UPDATE_DHCP_SERVICE = 'update dhcp service',
  UPDATE_LOAD_BALANCER_SERVICE =
      'update load balancer service',
  UPDATE_METADATA = 'update metadata',
  DELETE_METADATA = 'delete metadata',
  UPGRADE_VIRTUAL_HARDWARE =
      'upgrade virtual hardware',
  UPDATE_STARTUP_SECTION = 'update startup section',
  EJECT_MEDIA = 'eject media',
  INSERT_MEDIA = 'insert media',
  RELOCATE_VM = 'relocate vm',
  CREATE_EDGE_GATEWAY = 'create edge gateway',
  DELETE_EDGE_GATEWAY = 'delete edge gateway',
  UPDATE_VAPP_TEMPLATE = 'update vapp template',
  UPDATE_MEDIA = 'update media',
  CAPTURE_VAPP_AS_VAPP_TEMPLATE =
      'capture vapp as vapp template',
  UPDATE_VCD_EDGE_IPSEC_VPN =
      'update ipsec vpn service',
  CLONE_VM = 'clone vm',
  CLONE_VAPP = 'clone vapp',
  CLONE_MEDIA = 'clone media',
  REMOVE_NETWORK_FROM_VAPP =
      'remove network from vapp',
  ADD_ORG_VDC_NETWORK_TO_VAPP =
      'add org vdc network to vapp',
  ADD_VAPP_NETWORK_TO_VAPP =
      'add vapp network to vapp',
  UPDATE_VAPP_NETWORK = 'update vapp network',
  UPDATE_VAPP_FIREWALL = 'update vapp firewall',
  UPDATE_VAPP_NETWORK_DHCP =
      'update vapp network dhcp',
  UPDATE_VAPP_NETWORK_STATIC_ROUTING =
      'update vapp network static routing',
  UPDATE_VAPP_NETWORK_NAT =
      'update vapp network nat',
  UPDATE_GUEST_CUSTOMIZATION_SECTION =
      'update guest customization section',
  UPDATE_VM_CAPABILITIES = 'update vm capabilities',
  UPDATE_EDGE_INTERFACE = 'update edge interface',
  EXTEND_VDC_RESOURCE_POOL =
      'extend vdc resource pool',
  CREATE_ORG_VDC_NETWORK = 'create org vdc network',
  DELETE_ORG_VDC_NETWORK = 'delete org vdc network',
  UPDATE_ORG_VDC_NETWORK = 'update org vdc network',
      // VI Operations
  VMWARE_TOOLS_UPGRADE = 'vmware tools upgrade',
  UPDATE_VM_BOOT_OPTIONS = 'update vm boot options',
  UPDATE_VM_DRS_RULES = 'update vm drs rules',
  UPDATE_VM_TOOLS_UPGRADE_POLICY =
      'update vm tools upgrade policy',
      // Veeam Operations
  RESTORE_BACKUP = 'restore backup',
      // Zerto Operations
  ZERTO_FAILOVER_TEST = 'zerto failover test',
  ZERTO_FAILOVER_TEST_INITIATION =
      'zerto failover test initiation',
  ZERTO_FAILOVER_TEST_STOP =
      'zerto failover test stop',
  ZERTO_FAILOVER_COMMIT = 'zerto failover commit',
  ZERTO_FAILOVER_ROLLBACK =
      'zerto failover rollback',
  ZERTO_LIVE_FAILOVER = 'zerto live failover',
  ZERTO_LIVE_FAILOVER_INITIATION =
      'zerto live failover initiation',
  ZERTO_BATCH_FAILOVER = 'zerto batch live failover',
  ZERTO_BATCH_TEST_FAILOVER =
      'zerto batch test failover',
  UPLOAD_VAPP_TEMPLATE_FROM_OVF =
      'upload vapp template from ovf',
  UPLOAD_MEDIA_FROM_ISO = 'upload media from iso',
      // Reporting Operations
  GENERATE_HIPAA_REPORT = 'generate hipaa report',
  GENERATE_VM_ENCRYPTION_REPORT =
      'generate vm encryption report',
  GENERATE_LOGIN_EVENT_HISTORY_REPORT =
      'generate login event history report',
  GENERATE_SUPPORT_REQUEST_REPORT =
      'generate support request report',
  GENERATE_ECS_EVENT_HISTORY_REPORT =
      'generate ecs event history report',
  GENERATE_LOG_INSPECTION_REPORT =
      'generate log inspection report',
  GENERATE_ANTI_MALWARE_REPORT =
      'generate anti malware report',
  GENERATE_VULNERABILITY_REPORT =
      'generate vulnerability report',
  GENERATE_FIREWALL_EVENT_REPORT =
      'generate firewall event report',
  GENERATE_INTEGRITY_EVENT_REPORT =
      'generate integrity event report',
  GENERATE_DPI_EVENT_REPORT =
      'generate dpi event report',
  GENERATE_WEB_REPUTATION_EVENT_REPORT =
      'generate web reputation event report',
  GENERATE_VM_INVENTORY_REPORT =
      'generate vm inventory report',
  GENERATE_DR_ADMIN_REPORT =
      'generate dr admin report',
  GENERATE_CONTINUITY_PROTECTION_REPORT =
      'generate protection summary report',
  GENERATE_BILLING_REPORT =
      'generate billing report',
  CREATE_CATALOG = 'create catalog',
  MANAGED_SHUTDOWN = 'managed vapp shutdown',
  GENERATE_FAILOVER_TEST_REPORT = 'generate failover test report',
  UPDATE_CLOUD_TENANT_REPO_SIZE =
      'update cloud tenant repository size'
}
