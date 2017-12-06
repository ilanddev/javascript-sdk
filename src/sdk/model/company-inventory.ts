/**
 * User inventory.
 */
import { UserCompanyInventoryJson, UserInventoryEntityJson } from './json/user-inventory';
import { EntityDomain } from './json/role';

/**
 * Inventory entity properties.
 */
export class InventoryEntity {

  constructor(private _json: UserInventoryEntityJson) {
  }

  /**
   * Gets the UUID of the entity.
   * @returns {string} UUID
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Gets the type of the entity.
   * @returns {EntityDomain} entity type
   */
  get type(): EntityDomain {
    return this._json.type;
  }

  /**
   * Gets the name of the entity.
   * @returns {string} entity name
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the UUID of the parent entity.
   * @returns {string} the parent entity UUID
   */
  get parentUuid(): string | null {
    return this._json.parent_uuid;
  }

  /**
   * Gets the type of the parent entity.
   * @returns {EntityDomain} the parent entity type
   */
  get parentType(): EntityDomain | null {
    return this._json.parent_type;
  }

}

export class CompanyInventory {

  private _uuidMap: {[uuid: string]: InventoryEntity} = {};
  private _childrenMap: {[uuid: string]: {[type: string]: Array<InventoryEntity>}} = {};

  constructor(private _inventory: UserCompanyInventoryJson) {
    for (const type in this._inventory.entities) {
      for (const entity of this._inventory.entities[type]) {
        const inventoryEntity = new InventoryEntity(entity);
        this._uuidMap[entity.uuid] = inventoryEntity;
        let parentUuid = 'root';
        if (entity.parent_uuid !== null) {
          parentUuid = entity.parent_uuid;
        }
        if (!this._childrenMap[parentUuid]) {
          this._childrenMap[parentUuid] = {};
        }
        if (!this._childrenMap[parentUuid][entity.type]) {
          this._childrenMap[parentUuid][entity.type] = [];
        }
        this._childrenMap[parentUuid][entity.type].push(inventoryEntity);
      }
    }
  }

  /**
   * Get an inventory entity by UUID.
   * @param uuid {string} UUID of the entity
   * @returns {undefined|InventoryEntity}
   */
  getEntityByUuid(uuid: string): InventoryEntity | undefined {
    return this._uuidMap[uuid];
  }

  /**
   * Get an array of inventory entities of the specified type.
   * @param type {EntityType} the type to retrieve
   * @returns {undefined|InventoryEntity}
   */
  getEntitiesByType(type: EntityDomain): Array<InventoryEntity> | undefined {
    const result = this._inventory.entities[type];
    return result ? result.map((it) => new InventoryEntity(it)) : undefined;
  }

  /**
   * Gets the map of children belonging to an entity.
   * @param {string} uuid the uuid of the entity
   * @returns {[type: string]: Array<InventoryEntity>} the map of children by type
   */
  getChildrenForEntity(uuid: string): {[type: string]: Array<InventoryEntity>} | undefined {
    return this._childrenMap[uuid];
  }

}
