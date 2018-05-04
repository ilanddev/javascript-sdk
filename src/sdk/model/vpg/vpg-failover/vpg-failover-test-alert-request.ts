import { VpgFailoverTestAlertRequestJson } from './__json__/vpg-failover-test-alert-request';

/**
 * Vpg Failover Test Alert Request.
 */
export class VpgFailoverTestAlertRequest {

  private email: string;
  private weeksBeforeAlert: number;

  /**
   * Creates a new Vpg Failover Test Alert Request
   * @param {string} email
   * @param {number} weeksBeforeAlert
   */
  constructor(email: string, weeksBeforeAlert: number) {
    this.email = email;
    this.weeksBeforeAlert = weeksBeforeAlert;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VpgFailoverTestAlertRequestJson} the JSON representation
   */
  get json(): VpgFailoverTestAlertRequestJson {
    return {
      email: this.email,
      weeks_before_alert: this.weeksBeforeAlert
    };
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this.json, undefined, 2);
  }
}
