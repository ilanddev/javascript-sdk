import { VpgFailoverTestAlertJson } from './json/vpg-failover-test-alert';

/**
 * Vpg Failover Test Alert
 */
export class VpgFailoverTestAlert {

  constructor(private _json: VpgFailoverTestAlertJson) {}

  /**
   * Get Vpg uuid for Failover Test Alert
   * @returns {string} vpg uuid
   */
  get vpgUuid(): string {
    return this._json.vpg_uuid;
  }

  /**
   * Get username for Vpg Failover Test Alert
   * @returns {string} username
   */
  get username(): string {
    return this._json.username;
  }

  /**
   * Get email for Vpg Failover Test Alert
   * @returns {string} email
   */
  get email(): string {
    return this._json.email;
  }

  /**
   * Get weeks before alert for Vpg Failover Test Alert
   * @returns {number} weeks before alert
   */
  get weeksBeforeAlert(): number {
    return this._json.weeks_before_alert;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VpgFailoverTestAlertJson} the API Vpg object
   */
  get json(): VpgFailoverTestAlertJson {
    return Object.assign({}, this._json);
  }
}
