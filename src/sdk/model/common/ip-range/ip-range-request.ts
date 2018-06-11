import { IpRangeRequestJson } from './__json__';

/* istanbul ignore next: autogenerated */
export class IpRangeRequest {

  private readonly _json: IpRangeRequestJson;

  constructor(ipRangeRequest: IpRangeRequest);
  constructor(ipRangeRequestJson: IpRangeRequestJson);
  constructor(start: string, end: string);
  constructor(firstParam: string | IpRangeRequest | IpRangeRequestJson, end?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        start: firstParam,
        end: end
      } as IpRangeRequestJson;
    } else if (firstParam instanceof IpRangeRequest) {
      // Copy constructor
      this._json = (firstParam as IpRangeRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as IpRangeRequestJson;
    }
  }

  /**
   * Get start.
   * @returns {string}
   */
  get start(): string {
    return this._json.start;
  }

  /**
   * Get end.
   * @returns {string}
   */
  get end(): string {
    return this._json.end;
  }

  /**
   * Get the json representation of this class.
   * @returns {IpRangeRequestJson}
   */
  get json(): IpRangeRequestJson {
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