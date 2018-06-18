import {
  EdgeSslVpnAuthenticationServerUpdateRequestJson
} from './edge-ssl-vpn-authentication-server-update-request-json';

export interface EdgeSslVpnAuthenticationUpdateRequestJson {
  authentication_servers: Array<EdgeSslVpnAuthenticationServerUpdateRequestJson>;
  secondary_authentication_server: EdgeSslVpnAuthenticationServerUpdateRequestJson;
}
