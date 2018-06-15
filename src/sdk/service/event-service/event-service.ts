import { Event } from '../../model/event/event';
import { Observable } from 'rxjs/Observable';
import { Iland } from '../../iland';
import { Subscriber } from 'rxjs/Subscriber';
import { EventJson } from '../../model/event/__json__/event-json';
import { noop } from 'rxjs/util/noop';

/**
 * Event service.
 */
export class EventService {

  // amount of time to wait for long poll reconnect
  private static LONG_POLL_TIMEOUT = 30000;
  // reconnection attempt will happen immediately if last connection was established more than this number of ms ago
  private static LONG_POLL_THRESHOLD = 60000;

  private static _websocket: WebSocket;
  private static _generator: Subscriber<Event>;
  private static _observable: Observable<Event>;

  /**
   * Gets an observable for events. Events will be emitted for all entities that the authenticated user has access to.
   * @returns {Observable<Event>} event observable
   */
  static getObservable(): Observable<Event> {
    // connect to ws if necessary
    this._init();
    return this._observable;
  }

  /**
   * Initializes the service.
   * @private
   */
  private static _init() {
    // create the observable
    if (!this._observable) {
      this._observable = Observable.create((generator: Subscriber<Event>) => {
        this._generator = generator;
      });
      this._initWebsocket();
    }
  }

  /**
   * Initializes the websocket connection.
   * @param {boolean} force whether to force a new connection, even if there is an existing connection.
   * @param lastError the date the last error occurred, used to prevent rapid reconnection attempts
   * @private
   */
  private static _initWebsocket(force?: boolean, lastError?: Date) {
    Iland.getLogger().info('event websocket connection initializing');
    if (!this._websocket || force) {
      if (this._websocket) {
        this._websocket.onclose = noop;
        this._websocket.close();
      }
      this._websocket = new WebSocket(`${Iland.baseUrl.replace('http', 'ws')}/event-websocket`);
      this._websocket.onmessage = (msg) => {
        if (msg.data === 'AUTHORIZATION') {
          Iland.getAuthProvider().getToken().then(token => {
            this._websocket.send(`Bearer ${token}`);
          }).then(() => {
            this._websocket.onmessage = (msg) => {
              this._generator.next(new Event(JSON.parse(msg.data) as EventJson));
            };
          }).catch((err) => {
            Iland.getLogger().error(`error getting authorization token while attempting to open event websocket
              connection: ${err}.`);
            this._websocket.close();
          });
        }
      };
      this._websocket.onclose = (evt: CloseEvent) => {
        Iland.getLogger().warn(`event websocket connection closed. reason: ${evt.reason}. code: ${evt.code}.`);
        const errorTs = new Date();
        if (!lastError || errorTs.valueOf() - lastError.valueOf() > this.LONG_POLL_THRESHOLD) {
          // last error was more than 1 minute ago, try to reconnect again immediately
          this._initWebsocket(true, errorTs);
        } else {
          // last error was within one 1 minute ago, take a breather and wait 30 seconds before trying again
          setTimeout(() => {
            this._initWebsocket(true, errorTs);
          }, this.LONG_POLL_TIMEOUT);
        }
      };
    }
  }

}
