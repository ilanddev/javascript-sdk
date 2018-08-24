import { EdgeIpsecVpnServiceJson } from './__json__/edge-ipsec-vpn-json';
import { GlobalSettingsJson } from './__json__/global-settings-json';
import { LoggingSettingsJson } from './__json__/logging-settings-json';
import { IpSecVpnSiteJson } from './__json__/ip-sec-vpn-site-json';
import { IpSecVpnSite } from './ip-sec-vpn-site';

/**
 * IpsecVpn class
 */
export class IpsecVpn {

  constructor(private _json: EdgeIpsecVpnServiceJson) {
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
   * Get global settings
   * @returns {GlobalSettingsJson}
   */
  get globalSettings(): GlobalSettingsJson {
    return this._json.global_settings;
  }

  /**
   * Get logging settings
   * @returns {LoggingSettingsJson}
   */
  get loggingSettings(): LoggingSettingsJson {
    return this._json.logging_settings;
  }

  /**
   * Get Ip Sec Vpn Sites
   * @returns {Array<IpSecVpnSite>}
   */
  get sites(): Array<IpSecVpnSite> {
    return (this._json.sites as Array<IpSecVpnSiteJson>)
        .map(site => new IpSecVpnSite(site));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeIpsecVpnServiceJson}
   */
  get json(): EdgeIpsecVpnServiceJson {
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
