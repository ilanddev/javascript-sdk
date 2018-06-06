/**
 * Nessus Scan API JSON interface.
 */
export interface NessusScanJson {
  id: number;
  uuid: string;
  name: string;
  owner: string;
  enabled: boolean;
  folder_id: number;
  read: boolean;
  status: string;
  shared: boolean;
  user_permissions: number;
  creation_date: number;
  last_modification_date: number;
  control: boolean;
  start_time: string;
  timezone: string;
  rrules: string;
  use_dashboard: boolean;
}
