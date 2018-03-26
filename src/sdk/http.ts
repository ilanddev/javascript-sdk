import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Iland } from './iland';
import { ApiError, ApiErrorJson } from './api-error';

const DEFAULT_API_VERSION = 1.0;
const ILAND_MIME_VND_PREFIX = 'vnd.ilandcloud.api';

/**
 * Iland API HTTP Client.
 */
export class Http {

  private _ilandAxios: AxiosInstance;

  /**
   * Constructs a new Http instance.
   * @param {string} baseUrl the base URL of the iland Cloud API
   */
  constructor(baseUrl: string) {
    const defaultMime = Http.versionMime('application/json');
    this._ilandAxios = axios.create({
      baseURL: baseUrl,
      headers: {
        'x-enable-json-security-chars': 'true',
        'Accept': defaultMime,
        'Content-Type': 'application/json'
      }
    });

    this._ilandAxios.interceptors.request.use(async(config: AxiosRequestConfig) => {
      return Iland.getAuthProvider().getToken().then((token) => {
        if (config.headers['x-enable-json-security-chars'] === false ||
          config.headers['x-enable-json-security-chars'] === 'false') {
          delete config.headers['x-enable-json-security-chars'];
        }
        config.headers['Authorization'] = 'Bearer ' + token;
        return config;
      });
    });

    this._ilandAxios.interceptors.response.use(async(response: AxiosResponse) => {
      if (response.data instanceof Object || response.data instanceof Array) {
        return response;
      } else {
        const str = response.data as string;
        if (str.indexOf(')]}\'\n') === 0) {
          response.data = JSON.parse(str.substring(5));
        }
        return response;
      }
    }, async(reason: AxiosError) => {
      let error: ApiErrorJson;
      const response = reason.response!!;
      if (response.data instanceof Object || response.data instanceof Array) {
        error = response.data as ApiErrorJson;
      } else {
        let str = response.data as string;
        if (str.indexOf(')]}\'\n') === 0) {
          str = str.substring(5);
        }
        try {
          error = JSON.parse(str) as ApiErrorJson;
        } catch(e) {
          error = {
            message: reason.response!!.status + " " + reason.response!!.statusText
          } as ApiErrorJson;
        }

      }
      throw new ApiError(error);
    });
  }

  /**
   * Gets a formatted Accept header from a standard MIME and optional version number.
   * @param {string} mime the standard MIME string
   * @param {number} version the targeted version (defaults to the SDK version)
   * @returns {string} the formatted MIME type
   */
  static versionMime(mime: string, version?: number): string {
    if (mime.indexOf(ILAND_MIME_VND_PREFIX) > 0) {
      return mime;
    }
    const versionStr = (version ? version : DEFAULT_API_VERSION).toFixed(1);
    const parts = mime.split('/');
    if (parts.length === 2 && parts[1].includes('json')) {
      const prefix = parts[0];
      const suffix = parts[1];
      return `${prefix}/${ILAND_MIME_VND_PREFIX}.v${versionStr}+${suffix}`;
    }
    return mime;
  }

  /**
   * Performs a request against the iland Cloud API.
   * @param {AxiosRequestConfig} config request configuration
   * @returns {Promise<AxiosResponse>} promise that resolves with the server response
   * @throws {ApiError} if the server responds with an error
   */
  async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.request(config) as Promise<AxiosResponse>;
  }

  /**
   * Perform a GET request against the iland Cloud API.
   * @param {string} url the URL path
   * @param {AxiosRequestConfig} config request configuration
   * @returns {Promise<AxiosResponse>} promise that resolves with server response
   * @throws {ApiError} if the server responds with an error
   */
  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.get(url, config) as Promise<AxiosResponse>;
  }

  /**
   * Perform a DELETE request against the iland Cloud API.
   * @param {string} url the URL path
   * @param {AxiosRequestConfig} config request configuration
   * @returns {Promise<AxiosResponse>} promise that resolves with the server response
   * @throws {ApiError} if the server responds with an error
   */
  async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.delete(url, config) as Promise<AxiosResponse>;
  }

  /**
   * Perform a POST request against the iland Cloud API.
   * @param {string} url the URL path
   * @param data the data to include in the request body
   * @param {AxiosRequestConfig} config request configuration
   * @returns {Promise<AxiosResponse>} promise that resolves with the server response
   * @throws {ApiError} if the server responds with an error
   */
  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.post(url, data, config) as Promise<AxiosResponse>;
  }

  /**
   * Perform a PUT request against the iland Cloud API.
   * @param {string} url the URL path
   * @param data the data to include in the request body
   * @param {AxiosRequestConfig} config request configuration
   * @returns {Promise<AxiosResponse>} promise that resolves with the server response
   * @throws {ApiError} if the server responds with an error
   */
  async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.put(url, data, config) as Promise<AxiosResponse>;
  }

}
