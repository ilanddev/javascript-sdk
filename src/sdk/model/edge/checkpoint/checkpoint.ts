import { CheckpointJson } from './__json__/checkpoint-json';

/**
 * Checkpoint class
 */
export class Checkpoint {

  constructor(private _json: CheckpointJson) {
  }

  /**
   * Get edge uuid
   * @returns {string}
   */
  get edgeUuid(): string {
    return this._json.edge_uuid;
  }

  /**
   * Get uuid
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get time
   * @returns {Date}
   */
  get time(): Date {
    return new Date(this._json.time);
  }

  /**
   * Get export
   * @returns {string | null}
   */
  get export(): string | null {
    return this._json.export;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {CheckpointJson}
   */
  get json(): CheckpointJson {
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
