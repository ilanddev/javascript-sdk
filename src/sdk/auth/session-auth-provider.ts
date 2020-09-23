import { IlandSessionAuthConfig, IlandSessionAuthListener, SessionAuthProvider } from './auth-provider-interfaces';
import { IlandBrowserAuthProvider } from './browser-auth-provider';

/**
 * Session Authorization provider
 */
export class IlandSessionAuthProvider extends IlandBrowserAuthProvider implements SessionAuthProvider {

  private _lastUserInteraction: Date = new Date();
  private _eventListeners: Array<IlandSessionAuthListener> = []; // An array of logged EventListeners.
  private readonly _sessionTimeout: number = 600; // 10min by default. in seconds.
  // Whether or not we want to enable the click listener. Default to true.
  private readonly _enableClickListener: boolean = true;
  // If the dev want to use a specific target to bind the event listeners to. Default to document.body
  private readonly _listenerDefaultTarget: HTMLElement = document.body;

  constructor(config: IlandSessionAuthConfig) {
    super(config);
    if (config.sessionTimeout !== undefined) {
      this._sessionTimeout = config.sessionTimeout;
    }
    if (config.enableClickListener !== undefined) {
      this._enableClickListener = config.enableClickListener;
    }
    if (config.listenerDefaultTarget !== undefined) {
      this._listenerDefaultTarget = config.listenerDefaultTarget;
    }
    if (this._enableClickListener) {
      this.addEventListener('click', () => {
        this.logUserInteraction();
      }, true);
    }
  }

  /**
   * Get the token. We're checking if the user have log interactions and we will just return an automatic refreshed
   * token if he do interact. Otherwise we just logout the user.
   * @returns {Promise<string>}
   */
  async getToken(): Promise<string> {
    const now: number = (new Date()).getTime();
    // Date.getTime() is in milliseconds, so we need to convert _sessionTimeout into milliseconds as well.
    if ((this._lastUserInteraction.getTime() + (this._sessionTimeout * 1000)) < now) {
      return this.logout();
    } else {
      return super.getToken();
    }
  }

  /**
   * Log user interaction in order to update the token if needed.
   */
  logUserInteraction(): void {
    this._lastUserInteraction = new Date();
  }

  /**
   * Add an event listener.
   * @param type
   * @param listener
   * @param options
   * @param target
   */
  addEventListener(type: string, listener: EventListenerOrEventListenerObject,
                   options?: boolean | AddEventListenerOptions, target?: EventTarget | HTMLElement): void {
    const element = target || this._listenerDefaultTarget;
    if (this.getListenerIndex(type, element) === -1) {
      this._eventListeners.push({
        type: type,
        listener: listener,
        options: options,
        target: element
      });
      element.addEventListener(type, listener, options);
    }
  }

  /**
   * Remove a specific event listener.
   * @param type
   * @param target
   */
  removeEventListener(type: string, target?: EventTarget | HTMLElement): void {
    const element = target || this._listenerDefaultTarget;
    const listenerIndex = this.getListenerIndex(type, element);
    if (listenerIndex >= 0) {
      element.removeEventListener(type, this._eventListeners[listenerIndex].listener,
        this._eventListeners[listenerIndex].options);
      this._eventListeners.splice(listenerIndex, 1);
    }
  }

  /**
   * We remove all event listeners that we may have logged when we destroy the class.
   */
  destroy(): void {
    this._eventListeners.forEach(listener => {
      this.removeEventListener(listener.type, listener.target);
    });
  }

  /**
   * Get the event listener index. Return -1 if not found.
   * @param type
   * @param target
   * @private
   * @returns {number}
   */
  private getListenerIndex(type: string, target: EventTarget | HTMLElement): number {
    return this._eventListeners.findIndex(listener => {
      return listener.type === type && target === listener.target;
    });
  }
}
