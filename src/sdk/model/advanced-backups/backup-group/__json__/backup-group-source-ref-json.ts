import { VCloudProtectionSourceType } from './vcloud-protection-source-type';

/**
 * Backup Group Source Ref JSON.
 */
export interface BackupGroupSourceRefJson {
  entity_uuid: string;
  entity_type: VCloudProtectionSourceType;
}
