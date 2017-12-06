import { AuthProvider, DEFAULT_AUTH_URL, DEFAULT_REALM } from './auth-provider';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import querystring = require('querystring');

const TOKEN_REFRESH_THRESHOLD = 10;

export class IlandDirectGrantAuthProvider implements AuthProvider {

  private _token: Token|undefined;

  constructor(private _config: IlandDirectGrantAuthConfig) {
  }

  private static _epochSeconds(): number {
    return new Date().getTime() / 1000;
  }

  async getToken(): Promise<string> {
    const token = this._token;
    if (token === undefined) {
      // login required
      return this._login().then((token) => {
        return token.access_token;
      });
    } else {
      if (IlandDirectGrantAuthProvider._epochSeconds() >= token.expires_at - TOKEN_REFRESH_THRESHOLD) {
        // refresh required
        return this._refreshToken().catch(async() => {
          return this._login();
        }).then((token: Token) => {
          return token.access_token;
        });
      } else {
        // no refresh necessary
        return new Promise<string>((resolve) => {
          resolve(token!.access_token);
        });
      }
    }
  }

  async logout(): Promise<any> {
    const url = this._config.url || DEFAULT_AUTH_URL;
    const promise = Axios.post(`${url}/realms/${DEFAULT_REALM}/protocol/openid-connect/logout`, querystring.stringify({
      client_id: this._config.clientId,
      client_secret: this._config.clientSecret,
      refresh_token: this._token!.refresh_token
    })) as Promise<AxiosResponse>;
    return promise.then(() => {
      this._token!.expires_in = 0;
      this._token!.expires_at = IlandDirectGrantAuthProvider._epochSeconds();
    }, (reason: AxiosError) => {
      if (reason.response) {
        throw new Error(`${reason.response.status}: ${JSON.stringify(reason.response.data)}`);
      } else {
        throw new Error(reason.code);
      }
    });
  }

  async getAuthenticatedUsername(): Promise<string> {
    return this.getToken().then(() => {
      return this._config.username;
    });
  }

  async _refreshToken(): Promise<Token> {
    const url = this._config.url || DEFAULT_AUTH_URL;
    const promise = Axios.post(`${url}/realms/${DEFAULT_REALM}/protocol/openid-connect/token`, querystring.stringify({
      client_id: this._config.clientId,
      client_secret: this._config.clientSecret,
      refresh_token: this._token!.refresh_token,
      grant_type: 'refresh_token'
    })) as Promise<AxiosResponse>;
    return promise.then((response) => {
      this._token = response.data as Token;
      this._token.expires_at = this._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
      return this._token;
    });
  }

  private async _login(): Promise<Token> {
    const url = this._config.url || DEFAULT_AUTH_URL;
    const promise = Axios.post(`${url}/realms/${DEFAULT_REALM}/protocol/openid-connect/token`, querystring.stringify({
      client_id: this._config.clientId,
      client_secret: this._config.clientSecret,
      username: this._config.username,
      password: this._config.password,
      grant_type: 'password'
    })) as Promise<AxiosResponse>;
    return promise.then((response) => {
      this._token = response.data as Token;
      this._token.expires_at = this._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
      return this._token;
    }).catch((reason: AxiosError) => {
      if (reason.response) {
        throw new Error(`${reason.response.status}: ${JSON.stringify(reason.response.data)}`);
      } else {
        throw new Error(reason.code);
      }
    });
  }

}

export interface Token {

  access_token: string;
  expires_in: number;
  refresh_token: string;
  expires_at: number;
}

export interface IlandDirectGrantAuthConfig {

  username: string;
  password: string;
  clientSecret: string;
  clientId: string;
  url?: string;

}
