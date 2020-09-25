import { Observable } from 'rxjs';
import { BasicConfiguration } from '../config/basic-configuration';

/**
 * Authorization Provider interface.
 */
export interface AuthProvider {

  /**
   * Retrieve a token for authenticating with the iland APIs.
   * @returns {Promise<string>}
   */
  getToken(): Promise<string>;

  /**
   * Retrieve an Observer to get an up to date token over time.
   * @returns {Observable<string>}
   */
  getTokenObservable(): Observable<string>;

  /**
   * Retrieve the current access token synchronously.
   * @returns {string | undefined}
   */
  getTokenSync(): string | undefined;

  /**
   * Log out the current authentication session.
   * @returns {Promise<null>}
   */
  logout(options?: any): Promise<null>;

  /**
   * Gets the username of the currently authenticated user.
   * @returns {Promise<string>} username
   */
  getAuthenticatedUsername(): Promise<string>;

}

/**
 * Browser Authorization Provider interface.
 */
export interface BrowserAuthProvider extends AuthProvider {
  testRole(roleUuid: string): void;

  endRoleTest(): void;
}

/**
 * Session Authorization Provider interface.
 */
export interface SessionAuthProvider extends BrowserAuthProvider {
  logUserInteraction(): void;

  addEventListener(type: string, listener: EventListenerOrEventListenerObject,
                   options?: boolean | AddEventListenerOptions, target?: EventTarget | HTMLElement): void;

  removeEventListener(type: string, target?: EventTarget | HTMLElement): void;
  destroy(): void;
}

export interface IlandBrowserAuthConfig {
  clientId: string;
  url?: string;
}

export interface IlandSessionAuthConfig extends IlandBrowserAuthConfig {
  sessionTimeout?: number; // In seconds
  enableClickListener?: boolean; // Whether or not we want to enable the click listener. Default to true.
  listenerDefaultTarget?: HTMLElement; // If the dev want to use a specific target to bind the event listeners to.
  // Default to document.body
}

export interface IlandSessionAuthListener {
  type: string;
  listener: EventListenerOrEventListenerObject;
  options: boolean | AddEventListenerOptions | undefined;
  target: EventTarget | HTMLElement;
}

export interface IlandDirectGrantAuthConfig {
  username: string;
  password: string;
  clientSecret: string;
  clientId: string;
  url?: string;
}

export const DEFAULT_AUTH_URL = `${BasicConfiguration.getAuthorizationUrl()}/auth`;

export const DEFAULT_REALM = 'iland-core';

export const DEFAULT_AUTH_TOKEN_MIN_VALIDITY = 15; // value in seconds.
