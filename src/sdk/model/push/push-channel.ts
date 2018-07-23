import { Event } from '../event/event';
import { Observable } from 'rxjs/Observable';
import { Iland } from '../../iland';
import { Subscriber } from 'rxjs/Subscriber';
import { EventJson } from '../event/__json__/event-json';
import { noop } from 'rxjs/util/noop';
import { TaskJson } from '../task/__json__/task-json';
import { Task } from '../task/task';

/**
 * PushChannel is an abstraction over a websocket connection that provides an easy way to observe updates for events and
 * tasks within the authenticated user's environment. Channels can be scoped to a single company or to all companies
 * that the authenticated user has access to. You must close the channel when you've finished using it in order to close
 * and clean up the underlying websocket.
 */
export class PushChannel {

  // amount of time to wait for long poll reconnect
  private static LONG_POLL_TIMEOUT = 30000;
  // reconnection attempt will happen immediately if last connection was established more than this number of ms ago
  private static LONG_POLL_THRESHOLD = 60000;

  private _websocket: WebSocket;
  private _generator: Subscriber<Event | Task>;
  private _observable: Observable<Event | Task>;

  private constructor(private companyId?: string) {
  }

  static open(companyId?: string): PushChannel {
    return new PushChannel(companyId);
  }

  /**
   * Gets an observable for push updates. Updates will be emitted for all entities that the authenticated user has
   * access to.
   * @returns {Observable<Event | Task>} push update observable
   */
  getObservable(): Observable<Event | Task> {
    // connect to ws if necessary
    this._init();
    return this._observable;
  }

  /**
   * Closes the underlying websocket connection. This method should always be called when the channel is no longer in
   * use.
   */
  close() {
    if (this._websocket) {
      this._websocket.onclose = noop;
      this._websocket.close();
      this._generator.complete();
    }
  }

  /**
   * Initializes the service.
   * @private
   */
  private _init() {
    // create the observable
    if (!this._observable) {
      this._observable = Observable.create((generator: Subscriber<Event | Task>) => {
        this._generator = generator;
        this._initWebsocket();
      });
    }
  }

  /**
   * Initializes the websocket connection.
   * @param {boolean} force whether to force a new connection, even if there is an existing connection.
   * @param lastError the date the last error occurred, used to prevent rapid reconnection attempts
   * @private
   */
  private _initWebsocket(force?: boolean, lastError?: Date) {
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
            if (this.companyId) {
              this._websocket.send(`companyId=${this.companyId},Bearer ${token}`);
            } else {
              this._websocket.send(`Bearer ${token}`);
            }
          }).then(() => {
            this._websocket.onmessage = (msg) => {
              const update = JSON.parse(msg.data) as PushUpdate;
              if (update.type === 'EVENT') {
                this._generator.next(new Event(update.data as EventJson));
              } else if (update.type === 'TASK') {
                this._generator.next(new Task(update.data as TaskJson));
              }
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
        if (!lastError || errorTs.valueOf() - lastError.valueOf() > PushChannel.LONG_POLL_THRESHOLD) {
          // last error was more than 1 minute ago, try to reconnect again immediately
          this._initWebsocket(true, errorTs);
        } else {
          // last error was within one 1 minute ago, take a breather and wait 30 seconds before trying again
          setTimeout(() => {
            this._initWebsocket(true, errorTs);
          }, PushChannel.LONG_POLL_TIMEOUT);
        }
      };
    }
  }

}

interface PushUpdate {
  type: PushUpdatetype;
  data: EventJson | TaskJson;
}

type PushUpdatetype = 'EVENT' | 'TASK';
