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
  get creationDate(): Date {
    return new Date(this._json.creation_date);
  }

  /**
   * Gets the size of the snapshot.
   * @returns {number} size
   */
  get size(): number {
    return this._json.size;
  }

  /**
   * Indicates whether the snapshot is powered on.
   * @returns {boolean} value
   */
  get poweredOn(): boolean {
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
  get json(): SnapshotJson {
    return Object.assign({}, this._json);
  }

}
