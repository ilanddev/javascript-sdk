import { IpSetJson } from './__json__/ip-set-json';

/**
 * IP Set
 */
/* istanbul ignore next: autogenerated */
export class IpSet {

  constructor(private _json: IpSetJson) {
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
  }

  /**
   * Get description.
   * @returns {string | undefined}
   */
  get description(): string | undefined {
    return this._json.description || undefined;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get value.
   * @returns {string}
   */
  get value(): string {
    return this._json.value;
  }

  /**
   * Get inheritance allowed.
   * @returns {boolean}
   */
  get inheritanceAllowed(): boolean {
    return this._json.inheritance_allowed;
  }

  /**
   * Get revision.
   * @returns {number}
   */
  get revision(): number {
    return this._json.revision;
  }

  /**
   * Get the json representation of this class.
   * @returns {IpSetJson}
   */
  get json(): IpSetJson {
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
