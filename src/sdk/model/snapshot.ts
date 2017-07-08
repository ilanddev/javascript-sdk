import { SnapshotJson } from './json/snapshot';

/**
 * Snapshot.
 */
export class Snapshot {

  constructor(private _json: SnapshotJson) {
  }

  /**
   * Gets the date that the snapshot was created.
   * @returns {Date} the creation date
   */
  getCreationDate(): Date {
    return new Date(this._json.creation_date);
  }

  /**
   * Gets the size of the snapshot.
   * @returns {number} size
   */
  getSize(): number {
    return this._json.size;
  }

  /**
   * Indicates whether the snapshot is powered on.
   * @returns {boolean} value
   */
  isPoweredOn(): boolean {
    return this._json.is_powered_on;
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
   * @returns {SnapshotJson} the JSON representation
   */
  getJson(): SnapshotJson {
    return Object.assign({}, this._json);
  }

}
