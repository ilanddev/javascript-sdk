export interface EdgeSslVpnUserUpdateRequestJson {
  user_id: string;
  object_id: string;
  first_name: string;
  last_name: string;
  description: string;
  disable_account: boolean;
  password: string;
  password_never_expires: boolean;
  change_pwd_on_next_login: boolean;
}
