import {Observable, Subject} from 'rxjs';
import {Iland} from '../iland';
import {ApiTask} from './api-spec/api-task';

/**
 * Task.
 */
export class Task {

  private _subject: Subject<Task>|undefined;

  constructor(private _apiTask: ApiTask) {
  }

  /**
   * Gets the UUID of the task.
   * @returns {string} UUID
   */
  getUuid(): string {
    return this._apiTask.uuid;
  }

  /**
   * Gets the datacenter location ID of the task.
   * @returns {string} datacenter location ID
   */
  getLocationId(): string {
    return this._apiTask.location_id;
  }

  /**
   * Indicates whether the task is complete.
   * @returns {boolean} value
   */
  isComplete(): boolean {
    return this._apiTask.synchronized;
  }

  /**
   * Indicates the status of the task.
   * @returns {string} task status
   */
  getStatus(): string {
    return this._apiTask.status;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiTask, undefined, 2);
  }

  /**
   * Retrieves a new representation of the task from the API.
   * @returns {Promise<Task>} promise that resolves with updated task
   */
  async refresh(): Promise<Task> {
    let self = this;
    return Iland.getHttp().get(`/task/${self.getLocationId()}/${self.getUuid()}`).then(function(response) {
      self._apiTask = response.data as ApiTask;
      return self;
    });
  }

  /**
   * Gets a promise that resolves or rejects when the task is complete. An error status will cause rejection.
   * @returns {Promise<T>} completion promise
   */
  async getPromise(): Promise<Task> {
    let self = this;
    return new Promise<Task>(function(resolve, reject) {
      if (self.isComplete()) {
        if (self.getStatus() === 'error') {
          reject(self);
        } else {
          resolve(self);
        }
      } else {
        self.getObservable().subscribe(function(task) {
          if (task.isComplete()) {
            if (task.getStatus() === 'error') {
              reject(task);
            } else {
              resolve(task);
            }
          }
        });
      }
    });
  }

  /**
   * Gets an observable that is updated as the progress or status of the task changes.
   * @returns {Observable<Task>} task observable
   */
  getObservable(): Observable<Task> {
    let self = this;
    // tslint:disable-next-line:no-floating-promises
    self._updateUntilComplete();
    return self._subject!.asObservable();
  }

  private async _updateUntilComplete(): Promise<Task> {
    let self = this;
    if (self._subject === undefined) {
      self._subject = new Subject<Task>();
    }
    let subject = self._subject as Subject<Task>;
    return self.refresh().then(function(task) {
      subject.next(task);
      if (task.isComplete()) {
        subject.complete();
        return self;
      } else {
        return new Promise<Task>(function(resolve) {
          setTimeout(function() {
            resolve(self._updateUntilComplete());
          }, 1000);
        });
      }
    });
  }

}
