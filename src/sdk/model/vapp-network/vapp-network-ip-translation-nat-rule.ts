import { VappNetworkIpTranslationNATRuleJson } from './__json__/vapp-network-ip-translation-nat-rule-json';

/* istanbul ignore next: autogenerated */
export class VappNetworkIpTranslationNATRule {

  constructor(private _json: VappNetworkIpTranslationNATRuleJson) {
  }

  /**
   * Get mapping mode.
   * @returns {string}
   */
  get mappingMode(): string {
    return this._json.mapping_mode;
  }

  /**
   * Get vm interface.
   * @returns {string}
   */
  get vmInterface(): string {
    return this._json.vm_interface;
  }

  /**
   * Get external ip.
   * @returns {string}
   */
  get externalIp(): string {
    return this._json.external_ip;
  }

  /**
   * Get vm local id.
   * @returns {string}
   */
  get vmLocalId(): string {
    return this._json.vm_local_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkIpTranslationNATRuleJson}
   */
  get json(): VappNetworkIpTranslationNATRuleJson {
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
