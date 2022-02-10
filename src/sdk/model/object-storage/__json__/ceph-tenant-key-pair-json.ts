/**
 * Object Storage ceph tenant key pair JSON
 */
export interface CephTenantKeyPairJson {
  access_key: string;
  secret_key?: string;
  username?: string;
  created_date?: number;
  description?: string;
}
