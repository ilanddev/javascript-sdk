import { EntityJson } from './json/entity';
import { EntityType } from './json/entity-type';
import {Iland} from "../iland";
import {PerfSamplesRequestJson} from "./json/perf-samples-request";
import {PerfCounter, PerfSampleSerie} from "./json/perf-samples";

/**
 * Entity.
 */
export abstract class Entity {

  constructor(private _apiEntity: EntityJson) {
  }

  /**
   * Gets the name.
   * @returns {string} name
   */
  get name(): string {
    return this._apiEntity.name;
  }

  /**
   * Gets the UUID.
   * @returns {string} UUID
   */
  get uuid(): string {
    return this._apiEntity.uuid;
  }

  /**
   * Indicates whether the entity is deleted.
   * @returns {boolean} value
   */
  get deleted(): boolean {
    return this._apiEntity.deleted;
  }

  /**
   * Gets the last date that the entity was updated.
   * @returns {Date} last updated date
   */
  get updatedDate(): Date {
    return new Date(this._apiEntity.updated_date);
  }

  /**
   * Gets the date that the entity was deleted, or null if it is not deleted.
   * @returns {Date} deleted date or null if not applicable
   */
  get deletedDate(): Date | null {
    return this._apiEntity.deleted_date ? new Date(this._apiEntity.deleted_date) : null;
  }

  /**
   * Gets the type of the entity.
   * @returns {EntityType} the type of the entity
   */
  abstract get entityType(): EntityType;

  /**
   * Returns the api prefix for current entity or null if not defined
   * @returns {string} the api prefix or null
   */
  get apiPrefix(): string | null {
    return null;
  }

  async getPerfCounters(): Promise<Array<PerfCounter>> {
    if (!this.apiPrefix) {
      return Promise.reject('The specified resource does not exist for current entity');
    }
    return Iland.getHttp().get(`${this.apiPrefix}/${this.uuid}/performance-counters`).then(async (response) => {
      return response.data as Array<PerfCounter>
    });
  }

  async getPerfSamples(request: PerfSamplesRequestJson): Promise<PerfSampleSerie> {
    if (!this.apiPrefix) {
      return Promise.reject('The specified resource does not exist for current entity');
    }
    return Iland.getHttp().get(
      `${this.apiPrefix}/${this.uuid}/performance/${request.counter.group}::${request.counter.name}::${request.counter.type}`,
      {
        params: {
          start: request.start,
          end: request.end,
          limit: request.limit,
          interval: request.interval
        }
      }
    ).then((response) => {
      return response.data as PerfSampleSerie;
    });
  }

}
