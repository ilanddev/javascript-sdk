/**
 * Object Storage ceph user session JSON
 */
export interface CephUserSessionJson {
  tenant_id: string;
  access_key: string;
  secret_key: string;
  session_token: string;
  expiration_time: number;
}
