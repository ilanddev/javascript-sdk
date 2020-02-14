import { EdgeGatewayIPsecJson } from './__json__/edge-gateway-ipsec-json';
import { EdgeGatewayIpsecGlobal } from './edge-gateway-ipsec-global';
import { EdgeGatewayIpsecLogging } from './edge-gateway-ipsec-logging';
import { EdgeGatewayIpsecSite } from './edge-gateway-ipsec-site';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayIPsec {

  constructor(private _json: EdgeGatewayIPsecJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get logging.
   * @returns {EdgeGatewayIpsecLogging}
   */
  get logging(): EdgeGatewayIpsecLogging {
    return new EdgeGatewayIpsecLogging(this._json.logging);
  }

  /**
   * Get sites.
   * @returns {Array<EdgeGatewayIpsecSite>}
   */
  get sites(): Array<EdgeGatewayIpsecSite> {
    return this._json.sites.map(it => new EdgeGatewayIpsecSite(it));
  }

  /**
   * Get global.
   * @returns {EdgeGatewayIpsecGlobal}
   */
  get global(): EdgeGatewayIpsecGlobal {
    return new EdgeGatewayIpsecGlobal(this._json.global);
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayIPsecJson}
   */
  get json(): EdgeGatewayIPsecJson {
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
