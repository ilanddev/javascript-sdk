import { BackupGroupIndexingPolicyJson } from './__json__/backup-group-indexing-policy-json';

/**
 * Backup Group Disk Unit.
 */
/* istanbul ignore next: autogenerated */
export class BackupGroupIndexingPolicy {

  constructor(private _json: BackupGroupIndexingPolicyJson) {
  }

  /**
   * Gets a list of directories to index.
   * @returns {Array<string>} allow prefixes
   */
  get allowPrefixes(): Array<string> {
    return this._json.allow_prefixes;
  }

  /**
   * Gets a list of directories to exclude from indexing.
   * @returns {Array<string>} deny prefixes
   */
  get denyPrefixes(): Array<string> {
    return this._json.deny_prefixes;
  }

  /**
   * Indicates if the files found in an Object (such as a VM) should be indexed.
   * @returns {boolean} disable indexing
   */
  get disableIndexing(): boolean {
    return this._json.disable_indexing;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupGroupIndexingPolicyJson}
   */
  get json(): BackupGroupIndexingPolicyJson {
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
