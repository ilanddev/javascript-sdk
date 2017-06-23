import {AuthProvider, DEFAULT_AUTH_URL, DEFAULT_REALM} from "./auth-provider";
import Axios from "axios";
import querystring = require("querystring");
import {AxiosResponse} from "axios";
import {AxiosError} from "axios";

const TOKEN_REFRESH_THRESHOLD = 10;

export class IlandDirectGrantAuthProvider implements AuthProvider {

  private _token: Token;

  constructor(private _config: IlandDirectGrantAuthConfig) {
  }

  private static _epochSeconds(): number {
    return new Date().getTime() / 1000;
  }

  private _login(): Promise<Token> {
    let self = this;
    let url = self._config.url || DEFAULT_AUTH_URL;
    let promise = Axios.post(`${url}/realms/${DEFAULT_REALM}/protocol/openid-connect/token`, querystring.stringify({
      client_id: self._config.clientId,
      client_secret: self._config.clientSecret,
      username: self._config.username,
      password: self._config.password,
      grant_type: 'password'
    })) as Promise<AxiosResponse>;
    return promise.then(function(response) {
      self._token = response.data as Token;
      self._token.expires_at = self._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
      return self._token;
    }).catch(function(reason:AxiosError) {
      if (reason.response) {
        throw new Error(`${reason.response.status}: ${JSON.stringify(reason.response.data)}`);
      } else {
        throw new Error(reason.code);
      }
    });
  }

  _refreshToken(): Promise<Token> {
    let self = this;
    let url = self._config.url || DEFAULT_AUTH_URL;
    let promise = Axios.post(`${url}/realms/${DEFAULT_REALM}/protocol/openid-connect/token`, querystring.stringify({
      client_id: self._config.clientId,
      client_secret: self._config.clientSecret,
      refresh_token: self._token.refresh_token,
      grant_type: 'refresh_token'
    })) as Promise<AxiosResponse>;
    return promise.then(function(response) {
      self._token = response.data as Token;
      self._token.expires_at = self._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
      return self._token;
    });
  }

  getToken(): Promise<string> {
    let self = this;
    if (self._token === undefined) {
      // login required
      return self._login().then(function(token) {
        return token.access_token;
      });
    } else if (IlandDirectGrantAuthProvider._epochSeconds() >= self._token.expires_at - TOKEN_REFRESH_THRESHOLD) {
      // refresh required
      return self._refreshToken().catch(function() {
        return self._login()
      }).then(function(token: Token) {
        return token.access_token;
      });
    }
    // no refresh necessary
    return new Promise<string>(function(resolve) {
      resolve( self._token.access_token);
    });
  }

  logout(): Promise<any> {
    let self = this;
    let url = self._config.url || DEFAULT_AUTH_URL;
    let promise = Axios.post(`${url}/realms/${DEFAULT_REALM}/protocol/openid-connect/logout`, querystring.stringify({
      client_id: self._config.clientId,
      client_secret: self._config.clientSecret,
      refresh_token: self._token.refresh_token
    })) as Promise<AxiosResponse>;
    return promise.then(function() {
      self._token.expires_in = 0;
      self._token.expires_at = IlandDirectGrantAuthProvider._epochSeconds();
    }, function(reason: AxiosError) {
      if (reason.response) {
        throw new Error(`${reason.response.status}: ${JSON.stringify(reason.response.data)}`);
      } else {
        throw new Error(reason.code);
      }
    });
  }

  getAuthenticatedUsername(): Promise<string> {
    let self = this;
    return self.getToken().then(function() {
      return self._config.username;
    });
  }

}

export interface Token {

  access_token: string,
  expires_in: number,
  refresh_token: string
  expires_at: number
}

export interface IlandDirectGrantAuthConfig {

  username: string,
  password: string,
  clientSecret: string,
  clientId: string,
  url?: string

}