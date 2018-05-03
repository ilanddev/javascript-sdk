import { EntityType } from './__json__/entity-type';
import { EntityJson } from './__json__/entity-json';

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

}
