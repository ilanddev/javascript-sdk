/**
 * Storage Profile Bill API JSON.
 */
export interface StorageProfileBillJson {
  storage_profile_uuid: string;
  total_usage: number;
  total_cost: number;
  res_usage: number;
  res_cost: number;
  burst_usage: number;
  burst_cost: number;
  vm_usage: number;
  catalog_usage: number;
}
