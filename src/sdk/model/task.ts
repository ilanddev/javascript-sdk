import { Observable, Subject } from 'rxjs';
import { Iland } from '../iland';
import { TaskJson, TaskOperation, TaskStatus, TaskType } from './json/task';

const TASK_CONFIG = {
  baseURL: 'https://api.ilandcloud.com/ecs',
  headers: {
    'Accept': 'application/vnd.ilandcloud.api.v0.9+json',
    'Content-Type': 'application/vnd.ilandcloud.api.v0.9+json'
  }
};

/**
 * Task.
 */
export class Task {

  private _subject: Subject<Task>|undefined;

  constructor(private _apiTask: TaskJson) {
  }

  /**
   * Gets a Task by datacenter and UUID.
   * @param locationId the datacenter identifier
   * @param taskUuid the task uuid
   * @returns {Promise<Task>} promise that resolves with the Task
   */
  static async getTask(locationId: string, taskUuid: string): Promise<Task> {
    return Iland.getHttp().get(`/task/${locationId}/${taskUuid}`, TASK_CONFIG).then(function(response) {
      let apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the UUID of the task.
   * @returns {string} UUID
   */
  get uuid(): string {
    return this._apiTask.uuid;
  }

  /**
   * Gets the datacenter location ID of the task.
   * @returns {string} datacenter location ID
   */
  get locationId(): string {
    return this._apiTask.location_id;
  }

  /**
   * Indicates whether the task is complete.
   * @returns {boolean} value
   */
  get complete(): boolean {
    return this._apiTask.synchronized;
  }

  /**
   * Indicates the status of the task.
   * @returns {TaskStatus} task status
   */
  get status(): TaskStatus {
    return this._apiTask.status;
  }

  /**
   * Gets the task's operation identifier.
   */
  get operation(): TaskOperation {
    return this._apiTask.operation;
  }

  /**
   * Gets the end time of the task.
   * @returns {Date|null} end time of the task or null if the task hasn't yet completed
   */
  get endTime(): Date|null {
    return this._apiTask.end_time !== null ? new Date(this._apiTask.end_time) : null;
  }

  /**
   * Gets the UUID of the entity that is associated with the task.
   * @returns {string} the UUID of the associated entity
   */
  get entityUuid(): string {
    return this._apiTask.entity_uuid;
  }

  /**
   * Indicates whether the task was initiated from the iland API.
   * @returns {boolean} value
   */
  get initiatedFromIlandApi(): boolean {
    return this._apiTask.initiated_from_ecs;
  }

  /**
   * Gets the date/time that the task was received/queued by the API.
   * @returns {Date} the date that the task was initiated
   */
  get initiationTime(): Date {
    return new Date(this._apiTask.initiation_time);
  }

  /**
   * Gets the message associated with the task, if there is one. The message may provide extra information if the task
   * ended with an error status.
   * @returns {string|null} message string or null if no message is associated with the task
   */
  get message(): string|null {
    return this._apiTask.message;
  }

  /**
   * Returns an operation description that may provide more detail about the operation that the task is associated with.
   * @returns {string} description
   */
  get operationDescription(): string {
    return this._apiTask.operation_description;
  }

  /**
   * Returns the UUID of the organization that the task is associated with.
   */
  get orgUuid(): string {
    return this._apiTask.org_uuid;
  }

  /**
   * Gets a map of additional task details that are specific to the task operation type.
   * @returns {Map<string, any>} map of other task attributes
   */
  get otherAttributes(): Map<string, any> {
    return this._apiTask.other_attributes;
  }

  /**
   * If this is a sub-task, returns the UUID of the parent task, otherwise null.
   * @returns {string|null} returns the UUID of the parent task
   */
  get parentTaskUuid(): string|null {
    return this._apiTask.parent_task_uuid;
  }

  /**
   * Gets the task progress as a percentage.
   * @returns {number} in the range 0-100
   */
  get progress(): number {
    return this._apiTask.progress;
  }

  /**
   * Gets the start time of the task, if the task has started. If the task is still queued, returns null.
   * @returns {Date|null} the start time of the task or null
   */
  get startTime(): Date|null {
    return this._apiTask.start_time === null ? null : new Date(this._apiTask.start_time);
  }

  /**
   * Gets the task's sub-tasks, if this is a composite task.
   * @returns {Array<string>}
   */
  get subTasks(): Array<string> {
    return this._apiTask.sub_tasks;
  }

  /**
   * If this task is a wrapper for a task from another service (vCloud director, Zerto, etc), this will return the ID of
   * the task known to that service. Otherwise returns Uhe task UUID.
   * @returns {string} the ID of the task
   */
  get taskId(): string {
    return this._apiTask.task_id;
  }

  /**
   * Gets the task type.
   * @returns {TaskType} the type of the task
   */
  get taskType(): TaskType {
    return this._apiTask.task_type;
  }

  /**
   * Gets the username of the user that initiated the task.
   * @returns {string} username of the initiating user
   */
  get username(): string {
    return this._apiTask.username;
  }

  /**
   * Gets the full name of the user that initiated the task.
   * @returns {string} full name of the user that initiated the task
   */
  get userFullName(): string {
    return this._apiTask.user_full_name;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiTask, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {TaskJson} the API Task object
   */
  get json(): TaskJson {
    return Object.assign({}, this._apiTask);
  }

  /**
   * Retrieves a new representation of the task from the API.
   * @returns {Promise<Task>} promise that resolves with updated task
   */
  async refresh(): Promise<Task> {
    let self = this;
    return Iland.getHttp().get(`/task/${self.locationId}/${self.uuid}`, TASK_CONFIG).then(function(response) {
      self._apiTask = response.data as TaskJson;
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
      if (self.complete) {
        if (self.status === 'error') {
          reject(self);
        } else {
          resolve(self);
        }
      } else {
        self.getObservable().subscribe(function(task) {
          if (task.complete) {
            if (task.status === 'error') {
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
      if (task.complete) {
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
