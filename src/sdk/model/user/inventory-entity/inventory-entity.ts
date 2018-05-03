import { UserCompanyInventoryJson, UserInventoryEntityJson } from './__json__/user-inventory-json';
import { EntityDomainType } from '../../common/__json__/entity-domain-type';

/**
 * User inventory.
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
   * @returns {EntityDomainType} entity type
   */
  get type(): EntityDomainType {
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
   * @returns {EntityDomainType} the parent entity type
   */
  get parentType(): EntityDomainType | null {
    return this._json.parent_type;
  }
}

export class CompanyInventory {

  private _uuidMap: { [uuid: string]: InventoryEntity } = {};
  private _childrenMap: { [uuid: string]: { [type: string]: Array<InventoryEntity> } } = {};
  private _companyId: string;

  constructor(private _inventory: UserCompanyInventoryJson) {
    this._companyId = _inventory.company_id;
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

  get companyId(): string {
    return this._companyId;
  }

  /**
   * Get an inventory entity by UUID.
   * @param uuid {string} UUID of the entity
   * @returns {InventoryEntity|undefined}
   */
  getEntityByUuid(uuid: string): InventoryEntity | undefined {
    return this._uuidMap[uuid];
  }

  /**
   * Get all entities mapped by their types.
   * @returns {{[p: string]: Array<InventoryEntity>}}
   */
  getAllEntitiesByType(): { [type: string]: Array<InventoryEntity> } {
    const entities: { [type: string]: Array<InventoryEntity> } = {};
    for (const type in this._inventory.entities) {
      entities[type] = [];
      for (const entity of this._inventory.entities[type]) {
        entities[type].push(new InventoryEntity(entity));
      }
    }
    return entities;
  }

  /**
   * Get an array of inventory entities of the specified type.
   * @param {EntityDomainType} type
   * @returns {Array<InventoryEntity> | undefined}
   */
  getEntitiesByType(type: EntityDomainType): Array<InventoryEntity> | undefined {
    const result = this._inventory.entities[type];
    return result ? result.map((it) => new InventoryEntity(it)) : undefined;
  }

  /**
   * Gets the map of children belonging to an entity.
   * @param {string} uuid
   * @returns {{[p: string]: Array<InventoryEntity>} | undefined}
   */
  getChildrenForEntity(uuid: string): { [type: string]: Array<InventoryEntity> } | undefined {
    return this._childrenMap[uuid];
  }

}
