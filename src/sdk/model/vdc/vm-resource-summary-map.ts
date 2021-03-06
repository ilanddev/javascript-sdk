import { VmResourceSummaryMapJson } from './__json__/vm-resource-summary-map-json';
import { VmResourceSummary } from '../vm/vm-resource-summary';

/**
 * VM Resource Summary Map.
 */
/* istanbul ignore next: autogenerated */
export class VmResourceSummaryMap {

  constructor(private _json: VmResourceSummaryMapJson) {
  }

  /**
   * Get summaries.
   * @returns {{ [key: string]: VmResourceSummary }}
   */
  get summaries(): { [key: string]: VmResourceSummary } {
    const result: { [key: string]: VmResourceSummary } = {};
    for (const key in this._json.summaries) {
      result[key] = new VmResourceSummary(this._json.summaries[key]);
    }
    return result;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmResourceSummaryMapJson}
   */
  get json(): VmResourceSummaryMapJson {
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
