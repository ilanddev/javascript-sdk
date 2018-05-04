import { EdgeIpSecVpnPeerJson } from './__json__/edge-ipsec-vpn-json';

/**
 * IpSecVpnPeer class
 */
export class IpSecVpnPeer {

  constructor(private _json: EdgeIpSecVpnPeerJson) {
  }

  /**
   * Get type.
   * @returns {string | null}
   */
  get type(): string | null {
    return this._json.type;
  }

  /**
   * Get ID
   * @returns {string | null}
   */
  get id(): string | null {
    return this._json.id;
  }

  /**
   * Get name
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Get vdc URL
   * @returns {string | null}
   */
  get vcdUrl(): string | null {
    return this._json.vcd_url;
  }

  /**
   * Get vdc Org
   * @returns {string | null}
   */
  get vcdOrg(): string | null {
    return this._json.vcd_org;
  }

  /**
   * Get vdc username
   * @returns {string | null}
   */
  get vcdUsername(): string | null {
    return this._json.vcd_username;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeIpSecVpnPeerJson}
   */
  get json(): EdgeIpSecVpnPeerJson {
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
