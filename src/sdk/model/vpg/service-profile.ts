import { ServiceProfileJson } from './json/vpg';

/**
 * Service Profile
 */
export class ServiceProfile {

  constructor(private _json: ServiceProfileJson) {}

  /**
   * Get uuid for Service Profile
   * @returns {string} uuid
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get location for Service Profile
   * @returns {string} location
   */
  get location(): string {
    return this._json.location;
  }

  /**
   * Get identifier for Service Profile
   * @returns {string} identifier
   */
  get serviceProfileIdentifier(): string {
    return this._json.service_profile_identifier;
  }

  /**
   * Get name for Service Profile
   * @returns {string} name
   */
  get serviceProfileName(): string {
    return this._json.service_profile_name;
  }

  /**
   * Get description for Service Profile
   * @returns {string} description
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get history for Service Profile
   * @returns {number} history
   */
  get history(): number {
    return this._json.history;
  }

  /**
   * Get max journal size in percent for Service Profile
   * @returns {number}  max journal size in percent
   */
  get maxJournalSizeInPercent(): number {
    return this._json.max_journal_size_in_percent;
  }

  /**
   * Get rpo for Service Profile
   * @returns {number} rpo
   */
  get rpo(): number {
    return this._json.rpo;
  }

  /**
   * Get test interval for Service Profile
   * @returns {number} test interval
   */
  get testInterval(): number {
    return this._json.test_interval;
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
   * @returns {ServiceProfileJson} the API object
   */
  get json(): ServiceProfileJson {
    return Object.assign({}, this._json);
  }
}
