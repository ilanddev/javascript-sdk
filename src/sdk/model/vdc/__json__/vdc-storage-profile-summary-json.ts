import { StorageProfileBillJson } from './storage-profile-bill-json';

/**
 * vDC Storage Profile Summary JSON.
 */
export interface VdcStorageProfileSummaryJson {
  vdc_uuid: string;
  year: number;
  month: number;
  time: number;
  storage_profile_bills: Array<StorageProfileBillJson>;
}
