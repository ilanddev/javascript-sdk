/**
 * Nessus Scan Settings Update Request JSON.
 */
export interface NessusScanSettingsUpdateRequestJson {
  name: string;
  description: string;
  emails: string;
  enabled: boolean;
  launch: string;
  folder_id: string;
  policy_id: string;
  scanner_id: string;
  start_time: string;
  text_targets: string;
  file_targets: string;
  r_rules: string;
  use_dashboard: boolean;
  acls: Array<string>;
  timezone: string;
}
