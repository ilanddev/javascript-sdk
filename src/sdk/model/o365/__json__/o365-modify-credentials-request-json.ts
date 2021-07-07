/**
 * O365 modify org credentials request JSON properties
 */
export interface O365ModifyCredentialsRequestJson {
  user: string;
  password: string;
  use_modern_auth: boolean;
  application_id: string | null;
  application_secret: string | null;
  is_share_point_online: boolean;
  is_exchange_online: boolean;
}
