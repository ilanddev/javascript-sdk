import { ApplicationJson } from './__json__/application-json';
import { ElementJson } from './__json__/element-json';

/**
 * Application
 */
export class Application {

  constructor(private _json: ApplicationJson) {
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
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
   * @returns {string | undefined}
   */
  get description(): string | undefined {
    return this._json.description || undefined;
  }

  /**
   * Get scope.
   * @returns {string}
   */
  get scope(): string {
    return this._json.scope;
  }

  /**
   * Get inheritance allowed.
   * @returns {boolean}
   */
  get inheritanceAllowed(): boolean {
    return this._json.inheritance_allowed;
  }

  /**
   * Get element.
   * @returns {ElementJson}
   */
  get element(): ElementJson {
    return this._json.element;
  }

  /**
   * Get the json representation of this class.
   * @returns {ApplicationJson}
   */
  get json(): ApplicationJson {
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
