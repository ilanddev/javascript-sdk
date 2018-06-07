/**
 * Nessus Scan Info API JSON interface.
 */
export interface NessusScanInfoJson {
  uuid: string;
  edit_allowed: boolean;
  status: string;
  policy: string;
  pci_can_upload: boolean;
  has_audit_trail: boolean;
  scan_start: number;
  folder_id: number;
  targets: string;
  timestamp: number;
  object_id: number;
  scanner_name: string;
  haskb: boolean;
  host_count: number;
  scan_end: number;
  name: string;
  user_permissions: number;
  control: boolean;
}
