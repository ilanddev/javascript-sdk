import { EdgeIpSecVpnEndpointJson } from './json/edge-ipsec-vpn';

/**
 * IpSecVpnEndpoint class
 */
export class IpSecVpnEndpoint {

  constructor(private _json: EdgeIpSecVpnEndpointJson) {
  }

  /**
   * Get public IP
   * @returns {string | null}
   */
  get publicIp(): string | null {
    return this._json.public_ip;
  }

  /**
   * Get network
   * @returns {string | null}
   */
  get network(): string | null {
    return this._json.network;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeIpSecVpnEndpointJson}
   */
  get json(): EdgeIpSecVpnEndpointJson {
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
