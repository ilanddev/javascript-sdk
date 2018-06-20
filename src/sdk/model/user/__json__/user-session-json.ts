export interface UserSessionJson {
  session_id: string;
  ip_address: string;
  username: string;
  start: number;
  last_access: number;
  clients: { [key: string]: string };
}
