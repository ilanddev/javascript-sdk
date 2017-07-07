import { MetadataAccessMode, MetadataJson, MetadataType, MetadataTypeKey } from './json/metadata';

/**
 * Metadata.
 */
export class Metadata<T extends MetadataType> {

  constructor(private _json: MetadataJson<T>) {
  }

  /**
   * Gets the metadata key.
   * @returns {string} the key
   */
  getKey(): string {
    return this._json.key;
  }

  /**
   * Gets the metadata's access restriction type.
   * @returns {MetadataAccessMode} the type of access restriction
   */
  getAccess(): MetadataAccessMode {
    return this._json.access;
  }

  /**
   * Gets the type of the metadata.
   * @returns {VirtualDiskType} the type
   */
  getType(): MetadataTypeKey {
    return this._json.type;
  }

  /**
   * Gets the metadata value.
   * @returns {} the type
   */
  getValue(): T {
    return this._json.value;
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
   * @returns {MetadataJson} the API JSON representation of the metadata
   */
  getJson(): MetadataJson<T> {
    return Object.assign({}, this._json);
  }

}
