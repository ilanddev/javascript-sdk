import { EdgeFirewallUpdateRequestJson } from './__json__/edge-firewall-update-request-json';

/**
 * Edge Firewall Update Request.
 */
/* istanbul ignore next: autogenerated */
export class EdgeFirewallUpdateRequest {

  private readonly _json: EdgeFirewallUpdateRequestJson;

  constructor(edgeFirewallUpdateRequest: EdgeFirewallUpdateRequest);
  constructor(edgeFirewallUpdateRequestJson: EdgeFirewallUpdateRequestJson);
  constructor(edgeUuid: string, log: boolean, enabled: boolean, defaultAction: string);
  constructor(firstParam: string | EdgeFirewallUpdateRequest | EdgeFirewallUpdateRequestJson, log?: boolean,
              enabled?: boolean, defaultAction?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        edge_uuid: firstParam,
        log: log,
        enabled: enabled,
        default_action: defaultAction
      } as EdgeFirewallUpdateRequestJson;
    } else if (firstParam instanceof EdgeFirewallUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as EdgeFirewallUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EdgeFirewallUpdateRequestJson;
    }
  }

  /**
   * Get edge uuid.
   * @returns {string}
   */
  get edgeUuid(): string {
    return this._json.edge_uuid;
  }

  /**
   * Get log.
   * @returns {boolean}
   */
  get log(): boolean {
    return this._json.log;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get default action.
   * @returns {string}
   */
  get defaultAction(): string {
    return this._json.default_action;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeFirewallUpdateRequestJson}
   */
  get json(): EdgeFirewallUpdateRequestJson {
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
