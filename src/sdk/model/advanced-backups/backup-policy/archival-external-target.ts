import { ArchivalExternalTargetJson } from './__json__/archival-external-target-json';
import { VaultType } from './__json__/vault-type';

/**
 * Archival External Target.
 */
/* istanbul ignore next: autogenerated */
export class ArchivalExternalTarget {

  constructor(private _json: ArchivalExternalTargetJson) {
  }

  /**
   * Get vault id.
   * @returns {number}
   */
  get vaultId(): number {
    return this._json.vault_id;
  }

  /**
   * Get vault name.
   * @returns {string}
   */
  get vaultName(): string {
    return this._json.vault_name;
  }

  /**
   * Get vault type.
   * @returns {VaultType}
   */
  get vaultType(): VaultType {
    return this._json.vault_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {ArchivalExternalTargetJson}
   */
  get json(): ArchivalExternalTargetJson {
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
