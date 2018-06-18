import { EdgeSslVpnAuthServerType } from './edge-ssl-vpn-auth-server-type';

export interface EdgeSslVpnLocalAuthenticationServerUpdateRequestJson {
  enabled: boolean;
  pwd_min_length: number;
  pwd_max_length: number;
  pwd_min_alphabets: number;
  pwd_min_digits: number;
  pwd_min_special_characters: number;
  allow_user_id_within_pwd: boolean;
  pwd_lifetime: number;
  pwd_expiry_notification: number;
  retry_count: number;
  retry_duration: number;
  lockout_duration: number;
  type: EdgeSslVpnAuthServerType;
}
