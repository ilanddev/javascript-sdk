import { RedistributionJson } from './__json__/redistribution-json';
import { Rule } from './rule';

/**
 * Redistribution
 */
/* istanbul ignore next: autogenerated */
export class Redistribution {

  constructor(private _json: RedistributionJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get rules.
   * @returns {Array<Rule>}
   */
  get rules(): Array<Rule> {
    return this._json.rules.map(it => new Rule(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {RedistributionJson}
   */
  get json(): RedistributionJson {
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
