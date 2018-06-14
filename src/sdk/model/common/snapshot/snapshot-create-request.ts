import { SnapshotCreateRequestJson } from './__json__/snapshot-create-request-json';

/**
 * Request to create a snapshot.
 */
/* istanbul ignore next: autogenerated */
export class SnapshotCreateRequest {

  private readonly _json: SnapshotCreateRequestJson;

  constructor(snapshotCreateRequest: SnapshotCreateRequest);
  constructor(snapshotCreateRequestJson: SnapshotCreateRequestJson);
  constructor(memory: boolean, quiesce: boolean, name: string, description: string);
  constructor(firstParam: boolean | SnapshotCreateRequest | SnapshotCreateRequestJson, quiesce?: boolean, name?: string,
              description?: string) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        memory: firstParam,
        quiesce: quiesce,
        name: name,
        description: description
      } as SnapshotCreateRequestJson;
    } else if (firstParam instanceof SnapshotCreateRequest) {
      // Copy constructor
      this._json = (firstParam as SnapshotCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as SnapshotCreateRequestJson;
    }
  }

  /**
   * Get memory.
   * @returns {boolean}
   */
  get memory(): boolean {
    return this._json.memory;
  }

  /**
   * Get quiesce.
   * @returns {boolean}
   */
  get quiesce(): boolean {
    return this._json.quiesce;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get the json representation of this class.
   * @returns {SnapshotCreateRequestJson}
   */
  get json(): SnapshotCreateRequestJson {
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
