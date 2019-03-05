import { InitiateOVFUploadRequestJson, TemplateUploadType } from './__json__/initiate-ovf-upload-request-json';

/**
 * Request to initiate an OVF upload.
 */
/* istanbul ignore next: autogenerated */
export class InitiateOVFUploadRequest {

  private readonly _json: InitiateOVFUploadRequestJson;

  constructor(initiateOVFUploadRequest: InitiateOVFUploadRequest);
  constructor(initiateOVFUploadRequestJson: InitiateOVFUploadRequestJson);
  constructor(name: string, description: string | undefined, descriptor: string,
              uploadType?: TemplateUploadType);
  constructor(firstParam: string | InitiateOVFUploadRequest | InitiateOVFUploadRequestJson, description?: string,
              descriptor?: string, uploadType?: TemplateUploadType) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        description: description,
        descriptor: descriptor,
        upload_type: uploadType
      } as InitiateOVFUploadRequestJson;
    } else if (firstParam instanceof InitiateOVFUploadRequest) {
      // Copy constructor
      this._json = (firstParam as InitiateOVFUploadRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as InitiateOVFUploadRequestJson;
    }
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
  get description(): string | undefined {
    return this._json.description;
  }

  /**
   * Get descriptor.
   * @returns {string}
   */
  get descriptor(): string {
    return this._json.descriptor;
  }

  /**
   * Get the upload type.
   * @returns {TemplateUploadType}
   */
  get uploadType(): TemplateUploadType {
    return this._json.upload_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {InitiateOVFUploadRequestJson}
   */
  get json(): InitiateOVFUploadRequestJson {
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
