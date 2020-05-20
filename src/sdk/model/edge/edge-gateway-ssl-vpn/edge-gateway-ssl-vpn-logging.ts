import { LogLevelType } from '../../common/__json__/log-level-type';
import { EdgeGatewaySslVpnLoggingJson } from './__json__/edge-gateway-ssl-vpn-logging-json';

/* istanbul ignore next: autogenerated */
export class EdgeGatewaySslVpnLogging {

  constructor(private _json: EdgeGatewaySslVpnLoggingJson) {
  }

  /**
   * Get enable.
   * @returns {boolean}
   */
  get enable(): boolean {
    return this._json.enable;
  }

  /**
   * Get log level.
   * @returns {LogLevelType}
   */
  get logLevel(): LogLevelType {
    return this._json.log_level;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewaySslVpnLoggingJson}
   */
  get json(): EdgeGatewaySslVpnLoggingJson {
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
