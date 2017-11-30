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
  get key(): string {
    return this._json.key;
  }

  /**
   * Gets the metadata's access restriction type.
   * @returns {MetadataAccessMode} the type of access restriction
   */
  get access(): MetadataAccessMode {
    return this._json.access;
  }

  /**
   * Gets the type of the metadata.
   * @returns {VirtualDiskType} the type
   */
  get type(): MetadataTypeKey {
    return this._json.type;
  }

  /**
   * Gets the metadata value.
   * @returns {} the type
   */
  get value(): T {
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
  get json(): MetadataJson<T> {
    return Object.assign({}, this._json);
  }

}
