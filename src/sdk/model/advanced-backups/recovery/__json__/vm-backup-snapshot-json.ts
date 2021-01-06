import { SnapshotVersionJson } from './snapshot-version-json';

/**
 * VM Backup Snapshots JSON.
 */
export interface VmBackupSnapshotJson {
  backup_group_uid: string;
  vm_uuid: string;
  company_id: string;
  versions: Array<SnapshotVersionJson>;
  os_type: string;
  backup_group_name: string;
  vapp_uuid: string;
  org_uuid: string;
  vdc_uuid: string;
  location_id: string;
  vm_name: string;
}
