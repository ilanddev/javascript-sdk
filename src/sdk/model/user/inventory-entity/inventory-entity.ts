import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { UserCompanyInventoryJson, UserInventoryEntityJson } from './__json__/user-inventory-json';
import { IamEntityType } from '../../common/__json__/iam-entity-type';

/**
 * Inventory Entity.
 */
export interface InventoryEntity {
  readonly uuid: string;
  readonly type: IamEntityType;
  readonly name: string;
  readonly parentUuid: string | null;
  readonly parentType: IamEntityType | null;
}

/**
 * User inventory entity implementation.
 */
export class InventoryEntityImpl implements InventoryEntity {

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
   * @returns {IamEntityType} entity type
   */
  get type(): IamEntityType {
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
   * Sets the name of the entity.
   * @param {string} val the name
   */
  set name(val: string) {
    this._json.name = val;
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
   * @returns {IamEntityType} the parent entity type
   */
  get parentType(): IamEntityType | null {
    return this._json.parent_type;
  }
}

export interface CompanyInventory {
  readonly companyId: string;
  getEntityByUuid(uuid: string): InventoryEntity | undefined;
  getAllEntitiesByType(): { [type: string]: Array<InventoryEntity> };
  getEntitiesByType(type: IamEntityType): Array<InventoryEntity>;
  getChildrenForEntity(uuid: string): { [type: string]: Array<InventoryEntity> } | undefined;
}

export class CompanyInventoryImpl implements CompanyInventory {

  private _uuidMap: { [uuid: string]: InventoryEntity } = {};
  private _childrenMap: { [uuid: string]: { [type: string]: Array<InventoryEntity> } } = {};
  private readonly _companyId: string;
  private subject = new Subject<InventoryUpdate>();

  constructor(private _inventory: UserCompanyInventoryJson) {
    this._companyId = _inventory.company_id;
    for (const type in this._inventory.entities) {
      for (const entity of this._inventory.entities[type]) {
        this.addEntity(entity, true);
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
        entities[type].push(new InventoryEntityImpl(entity));
      }
    }
    return entities;
  }

  /**
   * Get an array of inventory entities of the specified type.
   * @param {IamEntityType} type
   * @returns {Array<InventoryEntity>}
   */
  getEntitiesByType(type: IamEntityType): Array<InventoryEntity> {
    const result = this._inventory.entities[type];
    return result ? result.map((it) => new InventoryEntityImpl(it)) : [];
  }

  /**
   * Gets the map of children belonging to an entity.
   * @param {string} uuid
   * @returns {{[p: string]: Array<InventoryEntity>} | undefined}
   */
  getChildrenForEntity(uuid: string): { [type: string]: Array<InventoryEntity> } | undefined {
    return this._childrenMap[uuid];
  }

  addEntity(entity: UserInventoryEntityJson, original: boolean = false) {
    const inventoryEntity = new InventoryEntityImpl(entity);
    if (!original) {
      this._inventory.entities[entity.type].push(entity);
    }
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
    if (!original) {
      this.subject.next({
        type: 'CREATE',
        entity: inventoryEntity
      });
    }
  }

  removeEntity(entityUuid: string) {
    const entity = this._uuidMap[entityUuid];
    if (entity) {
      delete this._uuidMap[entityUuid];
      const invIdx = this._inventory.entities[entity.type].findIndex(it => it.uuid === entityUuid);
      if (invIdx >= 0) {
        this._inventory.entities[entity.type].splice(invIdx, 1);
      }
      if (entity.parentUuid) {
        const parentChildArray = this._childrenMap[entity.parentUuid][entity.type];
        const parentIdx = parentChildArray.findIndex(it => it.uuid === entityUuid);
        if (parentIdx >= 0) {
          parentChildArray.splice(parentIdx, 1);
        }
      }
      this.subject.next({
        type: 'DELETE',
        entity: entity
      });
    }
  }

  renameEntity(entityUuid: string, newName: string) {
    const entity = this.getEntityByUuid(entityUuid);
    if (entity) {
      if (entity.name !== newName) {
        (entity as InventoryEntityImpl).name = newName;
        this.subject.next({
          type: 'UPDATE',
          entity: entity
        });
      }
    }
  }

  getObservable(): Observable<InventoryUpdate> {
    return this.subject;
  }

}

export interface InventoryUpdate {
  type: InventoryUpdateType;
  entity: InventoryEntity;
}

export type InventoryUpdateType = 'CREATE' | 'DELETE' | 'UPDATE';
