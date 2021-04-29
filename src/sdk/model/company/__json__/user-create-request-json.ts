export interface UserCreateRequestJson {
  password?: string;
  domain: string;
  fullname: string;
  email: string;
  username: string;
  role_uuid?: string;
  send_invitation?: boolean;
}
