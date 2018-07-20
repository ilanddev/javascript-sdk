import { PagingOrder } from '../user/__json__/paging-order';
import { EntityType } from '../common/__json__/entity-type';
import { TaskFilterParamsJson } from './__json__/task-filter-params-json';
import { TaskFilterQueryParams } from './__json__/task-filter-query-params';

/**
 * Task Filter Params.
 */
/* istanbul ignore next: autogenerated */
export class TaskFilterParams implements TaskFilterQueryParams {

  private readonly _json: TaskFilterParamsJson;

  constructor(taskFilterParams: TaskFilterParams);
  constructor(taskFilterParamsJson: TaskFilterParamsJson);
  constructor(entityUuid: string, entityType: EntityType,
              includeDescendantTasks?: boolean,
              synced?: boolean,
              username?: string,
              timestampAfter?: number,
              timestampBefore?: number,
              queryTimestamp?: number,
              offset?: number,
              limit?: number,
              order?: PagingOrder);
  constructor(firstParam: string | TaskFilterParams | TaskFilterParamsJson, entityType?: EntityType,
              includeDescendantTasks?: boolean,
              synced?: boolean,
              username?: string,
              timestampAfter?: number,
              timestampBefore?: number,
              queryTimestamp?: number,
              offset?: number,
              limit?: number,
              order?: PagingOrder) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        entity_uuid: firstParam,
        entity_type: entityType,
        include_descendant_tasks: includeDescendantTasks,
        synced: synced,
        username: username,
        timestamp_after: timestampAfter,
        timestamp_before: timestampBefore,
        query_timestamp: queryTimestamp,
        offset: offset,
        limit: limit,
        order: order
      } as TaskFilterParamsJson;
    } else if (firstParam instanceof TaskFilterParams) {
      // Copy constructor
      this._json = Object.assign({}, (firstParam as TaskFilterParams).json);
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as TaskFilterParamsJson;
    }
  }

  /**
   * Get entity uuid.
   * @returns {string}
   */
  get entityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Get entity type.
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return this._json.entity_type;
  }

  /**
   * Get include descendant tasks.
   * @returns {boolean}
   */
  get includeDescendantTasks(): boolean | undefined {
    return this._json.include_descendant_tasks;
  }

  /**
   * Sets the filter property for including or excluding descendant tasks of the entity.
   * @param {boolean} val
   * @returns {TaskFilterParams}
   */
  setIncludeDescendants(val?: boolean): TaskFilterParams {
    this._json.include_descendant_tasks = val;
    return this;
  }

  /**
   * Get synced.
   * @returns {boolean}
   */
  get synced(): boolean | undefined {
    return this._json.synced;
  }

  /**
   * Sets the filter property for excluding tasks with a synced field that doesn't match the specified boolean value.
   * @param {boolean} val
   * @returns {TaskFilterParams}
   */
  setSynced(val?: boolean): TaskFilterParams {
    this._json.synced = val;
    return this;
  }

  /**
   * Get username.
   * @returns {string}
   */
  get username(): string | undefined {
    return this._json.username;
  }

  /**
   * Sets the filter property for excluding tasks that were not initiated by the user with the specified username.
   * @param {string} val
   * @returns {TaskFilterParams}
   */
  setUsername(val?: string): TaskFilterParams {
    this._json.username = val;
    return this;
  }

  /**
   * Get timestamp after.
   * @returns {number}
   */
  get timestampAfter(): number | undefined {
    return this._json.timestamp_after;
  }

  /**
   * Sets the filter property for excluding tasks that do not have a timestamp after the specified epoch timestamp.
   * @param {number} val
   * @returns {TaskFilterParams}
   */
  setTimestampAfter(val?: number): TaskFilterParams {
    this._json.timestamp_after = val;
    return this;
  }

  /**
   * Get timestamp before.
   * @returns {number}
   */
  get timestampBefore(): number | undefined {
    return this._json.timestamp_before;
  }

  /**
   * Sets the filter property for excluding tasks that do not have a timestamp before the specified epoch timestamp.
   * @param {number} val
   * @returns {TaskFilterParams}
   */
  setTimestampBefore(val?: number): TaskFilterParams {
    this._json.timestamp_before = val;
    return this;
  }

  /**
   * Get query timestamp.
   * @returns {number}
   */
  get queryTimestamp(): number | undefined {
    return this._json.query_timestamp;
  }

  /**
   * Sets the query timestamp property. This property is useful for stable pagination over a query result set.
   * @param {number} val
   * @returns {TaskFilterParams}
   */
  setQueryTimestamp(val?: number): TaskFilterParams {
    this._json.query_timestamp = val;
    return this;
  }

  /**
   * Get offset.
   * @returns {number}
   */
  get offset(): number | undefined {
    return this._json.offset;
  }

  /**
   * Sets the paging offset.
   * @param {number} val
   * @returns {TaskFilterParams}
   */
  setOffset(val?: number): TaskFilterParams {
    this._json.offset = val;
    return this;
  }

  /**
   * Get limit.
   * @returns {number}
   */
  get limit(): number | undefined {
    return this._json.limit;
  }

  /**
   * Sets the paging limit.
   * @param {number} val
   * @returns {TaskFilterParams}
   */
  setLimit(val?: number): TaskFilterParams {
    this._json.limit = val;
    return this;
  }

  /**
   * Get order.
   * @returns {PagingOrder}
   */
  get order(): PagingOrder | undefined {
    return this._json.order;
  }

  /**
   * Sets the paging order.
   * @param {PagingOrder} val
   * @returns {TaskFilterParams}
   */
  setOrder(val?: PagingOrder): TaskFilterParams {
    this._json.order = val;
    return this;
  }

  /**
   * Get the json representation of this class.
   * @returns {TaskFilterParams}
   */
  get json(): TaskFilterParamsJson {
    return Object.assign({}, this._json);
  }

  getQueryParams(): TaskFilterQueryParams {
    return {
      entityUuid: this.entityUuid,
      entityType: this.entityType,
      includeDescendantTasks: this.includeDescendantTasks,
      synced: this.synced,
      username: this.username,
      timestampAfter: this.timestampAfter,
      timestampBefore: this.timestampBefore,
      queryTimestamp: this.queryTimestamp,
      offset: this.offset,
      limit: this.limit,
      order: this.order
    };
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
