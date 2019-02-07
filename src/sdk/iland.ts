import { noop } from 'rxjs';
import { AuthProvider } from './auth/auth-provider';
import { Logger } from './logger/logger';
import { Http } from './service/http/http';
import { BasicConfiguration } from './config/basic-configuration';

const DEFAULT_API_URL = `${BasicConfiguration.getApiUrl()}/v1`;

export abstract class Iland {

  public static baseUrl: string;

  private static _authProvider: AuthProvider | undefined;

  private static _logger: Logger;

  private static _http: Http | undefined;

  static init(_authProvider: AuthProvider, _config?: IlandSdkConfig, _logger?: Logger) {
    this._authProvider = _authProvider;
    this.baseUrl = _config !== undefined && _config.baseUrl ? _config.baseUrl : DEFAULT_API_URL;
    this._http = new Http(this.baseUrl);
    this._logger = _logger ? _logger : {
      debug: noop,
      info: noop,
      warn: noop,
      error: noop
    };
  }

  static getAuthProvider(): AuthProvider {
    if (Iland._authProvider === undefined) {
      throw new Error('The Iland SDK has not yet been initialized.');
    }
    return Iland._authProvider;
  }

  static getHttp(): Http {
    if (Iland._http === undefined) {
      throw new Error('The Iland SDK has not yet been initialized.');
    }
    return Iland._http;
  }

  /**
   * Get the configured logger.
   * @returns {Logger}
   */
  static getLogger(): Logger {
    return this._logger;
  }

}

export interface IlandSdkConfig {

  baseUrl: string;

}
