import { EdgeGatewaySslVpnAuthServerType } from '../edge-gateway-ssl-vpn-auth-server-type';

export interface EdgeGatewaySslVpnAuthServerJson {
  object_id: string;
  auth_server_type: EdgeGatewaySslVpnAuthServerType;
  enabled: boolean;
  secondary_auth_server: boolean;
  terminate_session_on_auth_fails: boolean;
}
