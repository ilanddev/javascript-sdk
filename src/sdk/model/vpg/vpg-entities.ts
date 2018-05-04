import { VpgEntitiesJson } from './__json__/vpg';
import { EnvironmentType } from './__json__/vpg-environment-type';

/**
 * Vpg Entities.
 */
export class VpgEntities {

  constructor(private _json: VpgEntitiesJson) {
  }

  /**
   * Get source for Vpg Entities
   * @returns {EnvironmentType} source
   */
  get source(): EnvironmentType {
    return this._json.source;
  }

  /**
   * Get target for Vpg Entities
   * @returns {EnvironmentType}
   */
  get target(): EnvironmentType {
    return this._json.target;
  }

  /**
   * JSON format
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VpgVmJson} the API object
   */
  get json(): VpgEntitiesJson {
    return Object.assign({}, this._json);
  }
}
