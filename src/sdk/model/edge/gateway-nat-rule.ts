import { GatewayNatRuleJson } from './json/edge';

/**
 * GatewayNatRule class
 */
export class GatewayNatRule {

  constructor(private _json: GatewayNatRuleJson) {
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Get id
   * @returns {number | null}
   */
  get id(): number | null {
    return this._json.id;
  }

  /**
   *
   * @returns {string | null}
   */
  get type(): string | null {
    return this._json.type;
  }

  /**
   * Check weather nat rule is enabled or not
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get ICMP sub type
   * @returns {string | null}
   */
  get icmpSubType(): string | null {
    return this._json.icmp_sub_type;
  }

  /**
   * Get original IP
   * @returns {string | null}
   */
  get originalIp(): string | null {
    return this._json.original_ip;
  }

  /**
   * Get Original port
   * @returns {string | null}
   */
  get originalPort(): string | null {
    return this._json.original_port;
  }

  /**
   * Get protocol
   * @returns {string | null}
   */
  get protocol(): string | null {
    return this._json.protocol;
  }

  /**
   * Get translated ip
   * @returns {string | null}
   */
  get translatedIp(): string | null {
    return this._json.translated_ip;
  }

  /**
   * Get translated port
   * @returns {string | null}
   */
  get translatedPort(): string | null {
    return this._json.translated_port;
  }

  /**
   * Get interface
   * @returns {string | null}
   */
  get interface(): string | null {
    return this._json.interface;
  }

  /**
   * Get index
   * @returns {number | null}
   */
  get idx(): number | null {
    return this._json.idx;
  }

  /**
   * Get the json representation of this class.
   * @returns {GatewayNatRuleJson}
   */
  get json(): GatewayNatRuleJson {
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
