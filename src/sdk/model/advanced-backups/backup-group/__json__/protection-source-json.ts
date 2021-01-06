import { VCloudProtectionSourceType } from './vcloud-protection-source-type';

/**
 * Protection Source JSON.
 */
export interface ProtectionSourceJson {
  entity_uuid?: string;
  entity_type: VCloudProtectionSourceType;
  entity_name: string;
  native_uid: string;
}
