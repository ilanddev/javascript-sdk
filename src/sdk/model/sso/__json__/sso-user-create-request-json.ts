export interface SsoUserCreateRequestJson {
  email: string;
  domain: string;
  fullname: string;
  role_uuid?: string;
  send_invitation: boolean;
}
