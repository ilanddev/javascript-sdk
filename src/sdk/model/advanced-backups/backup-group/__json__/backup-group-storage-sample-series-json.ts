import { BackupGroupStorageMetric } from './backup-group-storage-metric';
import { SampleJson } from './sample-json';

/**
 * Backup group storage sample series JSON.
 */
export interface BackupGroupStorageSampleSeriesJson {
  metric: BackupGroupStorageMetric;
  location_id: string;
  company_id: string;
  org_uuid: string;
  vdc_uuid: string;
  backup_group_uid: string;
  samples: Array<SampleJson>;
  backup_cluster_uid: string;
}
