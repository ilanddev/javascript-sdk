import { VdcBackupStorageMetric } from './vdc-backup-storage-metric';
import { SampleJson } from './sample-json';

/**
 * vDC backup storage sample series JSON.
 */
export interface VdcBackupStorageSampleSeriesJson {
  metric: VdcBackupStorageMetric;
  location_id: string;
  company_id: string;
  org_uuid: string;
  vdc_uuid: string;
  samples: Array<SampleJson>;
  backup_cluster_id: string;
}
