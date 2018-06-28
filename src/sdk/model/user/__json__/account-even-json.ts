/**
 * Account Event JSON interface.
 */
export interface AccountEventJson {
  time: number;
  type: string;
  client_name: string;
  user_id: string;
  session_id: string;
  ip_address: string;
  error: string;
  details: { [key: string]: string };
}
