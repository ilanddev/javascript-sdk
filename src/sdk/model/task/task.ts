import { Observable, Subject } from 'rxjs';
import { Iland } from '../../iland';
import { TaskJson } from './__json__/task-json';
import { TaskStatus } from './__json__/task-status-type';
import { TaskOperation } from './__json__/task-operation-type';
import { TaskType } from './__json__/task-type';
import { TaskFilterParams } from './task-filter-params';
import { TaskListJson } from './__json__/task-page-json';
import { TaskList } from './task-list';
import { PushChannel } from '../push/push-channel';
import { finalize } from 'rxjs/operators';

/**
 * Task.
 */
export class Task {

  private static _pushChannelProvider: PushChannelProvider;

  private _subject: Subject<Task> | undefined;

  constructor(private _apiTask: TaskJson) {
  }

  /**
   * Gets a Task by UUID.
   * @param taskUuid the task uuid
   * @returns {Promise<Task>} promise that resolves with the Task
   */
  static async getTask(taskUuid: string): Promise<Task> {
    return Iland.getHttp().get(`/tasks/${taskUuid}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets a list of tasks filtered by specified query parameters.
   * @param params the query params
   * @returns {Promise<TaskList>} promise that resolves with the TaskList
   */
  static async getTasks(params: TaskFilterParams): Promise<TaskList> {
    return Iland.getHttp().get(`/tasks`, {
      params: params.getQueryParams()
    }).then((response) => {
      const list = response.data as TaskListJson;
      return new TaskList(list);
    });
  }

  /**
   * Sets a push channel provider to use for task updates. If not explicitly set,
   * the getPromise() and getObservable() methods will simply poll for updates at 1 second intervals.
   *
   * @param provider {PushChannelProvider}
   */
  static setPushChannelProvider(provider: PushChannelProvider) {
    this._pushChannelProvider = provider;
  }

  /**
   * Gets the UUID of the task.
   * @returns {string} UUID
   */
  get uuid(): string {
    return this._apiTask.uuid;
  }

  /**
   * Get company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._apiTask.company_id;
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
    return this._apiTask.synced;
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
  get endTime(): Date | null {
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
  get message(): string | null {
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
   * @returns {{ [key: string]: string }} map of other task attributes
   */
  get otherAttributes(): { [key: string]: string } {
    return this._apiTask.other_attributes;
  }

  /**
   * If this is a sub-task, returns the UUID of the parent task, otherwise null.
   * @returns {string|null} returns the UUID of the parent task
   */
  get parentTaskUuid(): string | null {
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
  get startTime(): Date | null {
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
   * Gets the tasks entity name
   * @returns {string} entity name
   */
  get entityName(): string {
    return this._apiTask.entity_name;
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
    return Iland.getHttp().get(`/tasks/${this.uuid}`).then((response) => {
      this._apiTask = response.data as TaskJson;
      return this;
    });
  }

  /**
   * Cancels a task. Only supported for active, top-level catalog upload tasks.
   */
  /* istanbul ignore next: autogenerated */
  async cancelTask(): Promise<any> {
    return Iland.getHttp().post(`/tasks/${this.uuid}/actions/cancel`);
  }

  /**
   * Gets a promise that resolves or rejects when the task is complete. An error status will cause rejection.
   * @returns {Promise<Task>} completion promise
   */
  async getPromise(): Promise<Task> {
    return new Promise<Task>((resolve, reject) => {
      if (this.complete) {
        if (self.status === 'error') {
          reject(this);
        } else {
          resolve(this);
        }
      } else {
        this.getObservable().subscribe((task: Task) => {
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
    // tslint:disable-next-line:no-floating-promises
    this._updateUntilComplete();
    return this._subject!.asObservable();
  }

  private async _updateUntilComplete(forcePoll?: boolean): Promise<Task> {
    if (this._subject === undefined) {
      this._subject = new Subject<Task>();
    }
    const subject = this._subject as Subject<Task>;
    if (!forcePoll && Task._pushChannelProvider) {
      const chan = Task._pushChannelProvider(this.companyId);
      if (chan !== null) {
        return new Promise(resolve => {
          const pcSub = chan.getObservable()
              .pipe(finalize(() => {
                // if the push channel is closed, we try to re-call this method and force a poll on the next invocation
                pcSub.unsubscribe();
                resolve(this._updateUntilComplete(true));
              })).subscribe(t => {
                if (t instanceof Task && t.uuid === this.uuid) {
                  this._apiTask = t.json;
                  subject.next(t);
                  if (t.complete) {
                    subject.complete();
                    pcSub.unsubscribe();
                    resolve(this);
                  }
                }
              });
        });
      }
    }
    return this.refresh().then((task) => {
      subject.next(task);
      if (task.complete) {
        subject.complete();
        return this;
      } else {
        return new Promise<Task>((resolve) => {
          setTimeout(() => {
            resolve(this._updateUntilComplete());
          }, 1000);
        });
      }
    });
  }

}

/**
 * Push Channel Provider.
 */
export type PushChannelProvider = (companyId: string) => PushChannel | null;
