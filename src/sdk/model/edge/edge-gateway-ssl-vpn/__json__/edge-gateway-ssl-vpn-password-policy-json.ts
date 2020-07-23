export interface EdgeGatewaySslVpnPasswordPolicyJson {
  min_length: number;
  max_length: number;
  min_alphabets: number;
  min_digits: number;
  min_special_char: number;
  allow_user_id_within_password: boolean;
  password_life_time: number;
  expiry_notification: number;
}
