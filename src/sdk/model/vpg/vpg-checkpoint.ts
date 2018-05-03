import { VpgCheckpointJson } from './json/vpg-checkpoint';

/**
 * Vpg Checkpoint
 */
export class VpgCheckpoint {

  constructor(private _json: VpgCheckpointJson) {}

  /**
   * Get checkpoint identifier for Vpg Checkpoint
   * @returns {string} identifier
   */
  get checkpointIdentifier(): string {
    return this._json.checkpoint_identifier;
  }

  /**
   * Get tag for Vpg Checkpoint
   * @returns {string} tag
   */
  get tag(): string {
    return this._json.tag;
  }

  /**
   * Get timestamp for Vpg Checkpoint
   * @returns {number} timestamp
   */
  get timestamp(): number {
    return this._json.time_stamp;
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
   * @returns {VpgCheckpointJson} the API Vpg object
   */
  get json(): VpgCheckpointJson {
    return Object.assign({}, this._json);
  }
}
