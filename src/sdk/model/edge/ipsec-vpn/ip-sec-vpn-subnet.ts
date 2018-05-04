import { EdgeIpSecVpnSubnetJson } from './__json__/edge-ipsec-vpn-json';

/**
 * IpSecVpnSubnet class
 */
export class IpSecVpnSubnet {

  constructor(private _json: EdgeIpSecVpnSubnetJson) {
  }

  /**
   * Get name
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Get gateway
   * @returns {string | null}
   */
  get gateway(): string | null {
    return this._json.gateway;
  }

  /**
   * Get netmask
   * @returns {string | null}
   */
  get netmask(): string | null {
    return this._json.netmask;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeIpSecVpnSubnetJson}
   */
  get json(): EdgeIpSecVpnSubnetJson {
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
