import { IpSecVpnEndpoint } from './ip-sec-vpn-endpoint';
import { IpSecVpnTunnel } from './ip-sec-vpn-tunnel';
import { EdgeIpSecVpnEndpointJson } from './__json__/edge-ipsec-vpn-endpoint-json';
import { EdgeIpSecVpnTunnelJson } from './__json__/edge-ipsec-vpn-tunnel-json';
import { EdgeIpsecVpnServiceConfigJson } from './__json__/edge-ipsec-vpn-configuration-json';

/**
 * Ipsec Vpn Configuration class.
 */
export class IpsecVpnConfiguration {

  constructor(private _json: EdgeIpsecVpnServiceConfigJson) {
  }

  /**
   * Get the version.
   * @returns {number}
   */
  get version(): number {
    return this._json.version;
  }

  /**
   * Get edge uuid
   * @returns {string | null}
   */
  get edgeUuid(): string | null {
    return this._json.edge_uuid;
  }

  /**
   * Check weather IpsecVpn is enabled or not.
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get list of vpn-endpoints
   * @returns {Array<IpSecVpnEndpoint>}
   */
  get endpoints(): Array<IpSecVpnEndpoint> {
    return (this._json.endpoints as Array<EdgeIpSecVpnEndpointJson>)
        .map(endpoint => new IpSecVpnEndpoint(endpoint));
  }

  /**
   * Get list of tunnels
   * @returns {Array<IpSecVpnTunnel>}
   */
  get tunnels(): Array<IpSecVpnTunnel> {
    return (this._json.tunnels as Array<EdgeIpSecVpnTunnelJson>).map(tunnel => new IpSecVpnTunnel(tunnel));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeIpsecVpnServiceConfigJson}
   */
  get json(): EdgeIpsecVpnServiceConfigJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
