/**
 * Object Storage ceph tenant key create request JSON
 */
export interface CephTenantKeyCreateRequestJson {
  access_key?: string;
  secret_key?: string;
  username?: string;
  description?: string;
}
