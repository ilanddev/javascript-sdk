export interface BaJobJson {
  uuid: string;
  name: string;
  status: BaJobStatus;
  type: BaJobType;
  last_run: number;
  end_time: number;
  duration: number;
  procession_rate: number;
  avg_duration: number;
  transferred_data: number;
  bottleneck: BaJobBottleneck;
  server_name: string;
  is_enabled: boolean;
  protected_vms: number;
  scheduling_type: BaJobSchedulingType;
  company_id: string;
  location_id: string;
  company_uuid: string;
}

export enum BaJobStatus {
  STARTING = 'STARTING',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  STOPPING = 'STOPPING',
  FAILED = 'FAILED',
  RUNNING = 'RUNNING',
  NO_INFO = 'NO_INFO',
  ENABLING = 'ENABLING',
  DISABLING = 'DISABLING',
  UNKNOWN = 'UNKNOWN'
}

export enum BaJobType {
  BACKUP = 'BACKUP',
  REPLICATION = 'REPLICATION',
  SURE_BACKUP = 'SURE_BACKUP',
  BACKUP_COPY = 'BACKUP_COPY',
  FILE_TO_TAPE = 'FILE_TO_TAPE',
  BACKUP_TO_TAPE = 'BACKUP_TO_TAPE',
  COPY = 'COPY',
  SQL_LOG_BACKUP_JOB = 'SQL_LOG_BACKUP_JOB',
  ORACLE_LOG_BACKUP_JOB = 'ORACLE_LOG_BACKUP_JOB',
  QUICK_MIGRATION = 'QUICK_MIGRATION',
  SAN_RESCAN = 'SAN_RESCAN',
  FAILOVER_PLAN = 'FAILOVER_PLAN',
  AGENT_BACKUP_JOB_MANAGED_BY_AGENT = 'AGENT_BACKUP_JOB_MANAGED_BY_AGENT',
  AGENT_BACKUP_JOB_MANAGED_BY_SERVER = 'AGENT_BACKUP_JOB_MANAGED_BY_BACKUP_SERVER',
  AGENT_BACKUP_POLICY = 'AGENT_BACKUP_POLICY',
  AGENT_BACKUP_JOB = 'AGENT_BACKUP_JOB',
  WINDOWS_AGENT_BACKUP_COPY = 'WINDOWS_AGENT_BACKUP_COPY',
  UNKNOWN = 'UNKNOWN'
}

export enum BaJobBottleneck {
  SOURCE = 'SOURCE',
  PROXY = 'PROXY',
  NETWORK = 'NETWORK',
  TARGET = 'TARGET',
  SOURCE_WAN_ACCELERATOR = 'SOURCE_WAN_ACCELERATOR',
  TARGET_WAN_ACCELERATOR = 'TARGET_WAN_ACCELERATOR',
  UNKNOWN = 'UNKNOWN'
}

export enum BaJobSchedulingType {
  CONTINUOUSLY = 'CONTINUOUSLY',
  PERIODICALLY = 'PERIODICALLY',
  MONTHLY = 'MONTHLY',
  DAILY = 'DAILY',
  CHAINED = 'CHAINED',
  DISABLED = 'DISABLED',
  UNKNOWN = 'UNKNOWN'
}
