import { BaBackupFileJson } from './__json__/ba-backup-file-json';

/**
 * BaBackupFile class
 */

/* istanbul ignore next: autogenerated */
export class BaBackupFile {

  constructor(private _json: BaBackupFileJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get size mb.
   * @returns {number}
   */
  get sizeMb(): number {
    return this._json.size_mb;
  }

  /**
   * Get modified at.
   * @returns {Date | null}
   */
  get modifiedAt(): Date | null {
    return this._json.modified_at ? new Date(this._json.modified_at) : null;
  }

  /**
   * Get the json representation of this class.
   * @returns {BaBackupFileJson}
   */
  get json(): BaBackupFileJson {
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
