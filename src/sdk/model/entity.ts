import { ApiEntity } from './api-spec/api-entity';
import { EntityType } from './api-spec/api-entity-type';

/**
 * Entity.
 */
export abstract class Entity {

  constructor(private _apiEntity: ApiEntity) {
  }

  /**
   * Gets the name.
   * @returns {string} name
   */
  getName(): string {
    return this._apiEntity.name;
  }

  /**
   * Gets the UUID.
   * @returns {string} UUID
   */
  getUuid(): string {
    return this._apiEntity.uuid;
  }

  /**
   * Indicates whether the entity is deleted.
   * @returns {boolean} value
   */
  isDeleted(): boolean {
    return this._apiEntity.deleted;
  }

  /**
   * Gets the last date that the entity was updated.
   * @returns {Date} last updated date
   */
  getUpdatedDate(): Date {
    return new Date(this._apiEntity.updated_date);
  }

  /**
   * Gets the date that the entity was deleted, or null if it is not deleted.
   * @returns {Date} deleted date or null if not applicable
   */
  getDeletedDate(): Date | null {
    return this._apiEntity.deleted_date ? new Date(this._apiEntity.deleted_date) : null;
  }

  /**
   * Gets the type of the entity.
   * @returns {EntityType} the type of the entity
   */
  abstract getEntityType(): EntityType;

}
