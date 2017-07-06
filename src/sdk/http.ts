import axios, {AxiosResponse, AxiosInstance, AxiosRequestConfig} from 'axios';
import {Iland} from './iland';

const DEFAULT_API_VERSION = 0.8;
const ILAND_MIME_VND_PREFIX = 'vnd.ilandcloud.api';

/**
 * Iland API HTTP Client.
 */
export class Http {

  private _ilandAxios: AxiosInstance;

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
    this._ilandAxios.interceptors.response.use(async function(response: AxiosResponse) {
      let str = response.data as string;
      if (str.indexOf(")]}'\n") === 0) {
        response.data = JSON.parse(str.substring(5));
      }
      return response;
    });
  }

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

  async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.request(config) as Promise<AxiosResponse>;
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.get(url, config) as Promise<AxiosResponse>;
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.delete(url, config) as Promise<AxiosResponse>;
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.post(url, data, config) as Promise<AxiosResponse>;
  }

  async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this._ilandAxios.put(url, data, config) as Promise<AxiosResponse>;
  }

}
