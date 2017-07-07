import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Iland } from './iland';
import { ApiError, ApiErrorJson } from './api-error';

const DEFAULT_API_VERSION = 0.8;
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
    let defaultMime = Http.versionMime('application/json');
    this._ilandAxios = axios.create({
      baseURL: baseUrl,
      headers: {
        'Accept': defaultMime,
        'Content-Type': defaultMime
      }
    });
    this._ilandAxios.interceptors.request.use(async function(config: AxiosRequestConfig) {
      return Iland.getAuthProvider().getToken().then(function(token) {
        config.headers['Authorization'] = 'Bearer ' + token;
        return config;
      });
    });
    this._ilandAxios.interceptors.response.use(async(response: AxiosResponse) => {
      let str = response.data as string;
      if (str.indexOf(")]}'\n") === 0) {
        response.data = JSON.parse(str.substring(5));
      }
      return response;
    }, async(reason: AxiosError) => {
      if (reason.response) {
        let str = reason.response.data as string;
        if (str.indexOf(")]}'\n") === 0) {
          str = str.substring(5);
        }
        const error = JSON.parse(str) as ApiErrorJson;
        throw new ApiError(error);
      }
      throw new Error(reason.message);
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
    version = version ? version : DEFAULT_API_VERSION;
    let parts = mime.split('/');
    if (parts.length === 2) {
      let prefix = parts[0];
      let suffix = parts[1];
      return `${prefix}/${ILAND_MIME_VND_PREFIX}.v${version}+${suffix}`;
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
