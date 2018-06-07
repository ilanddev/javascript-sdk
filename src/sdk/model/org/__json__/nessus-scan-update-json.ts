/**
 * Nessus Scan Update API JSON.
 */
export interface NessusScanUpdateJson {
  creation_date: number;
  custom_targets: string;
  default_permissions: string;
  description: string;
  emails: string;
  id: number;
  last_modification_date: number;
  name: string;
  notification_filter_type: string;
  notification_filters: string;
  owner: string;
  owner_id: number;
  policy_id: number;
  rrules: string;
  scanner_id: number;
  shared: number;
  start_time: string;
  tag_id: number;
  timezone: string;
  type: string;
  user_permissions: number;
  uuid: string;
  use_dashboard: boolean;
}
