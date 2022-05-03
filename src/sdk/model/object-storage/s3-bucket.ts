import { S3BucketJson } from './__json__/s3-bucket-json';

export class S3Bucket {

  constructor(private _json: S3BucketJson) {
  }

  get name(): string {
    return this._json.name;
  }

  get usageKib(): number {
    return this._json.usage_kib;
  }

  get numOfObjects(): number {
    return this._json.num_objects;
  }

  get creationTime(): Date {
    return new Date(this._json.creation_time);
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
     * @returns {S3BucketJson} the API VM object
     */
  get json(): S3BucketJson {
    return Object.assign({}, this._json);
  }

}
