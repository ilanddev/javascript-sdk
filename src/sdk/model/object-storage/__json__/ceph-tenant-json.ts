/**
 * Object Storage ceph/s3 account tenant JSON
 */
export interface CephTenantJson {
  tenant_id: string;
  company_id: string;
  region: string;
  enabled: boolean;
  quota_kib: number;
  usage_kib: number;
  num_objects: number;
  num_buckets: number;
  has_stats_and_bucket_info: boolean;
}
