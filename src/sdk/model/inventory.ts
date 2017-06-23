import {OrgEntityTree, EntityTreeNode} from "./api-spec/api-org-entity-tree";
import {EntityType} from "./entity";

/**
 * User inventory.
 */
export class Inventory {

  private _flatMap: Map<string, InventoryEntity>;

  private _typeMap: Map<EntityType, Array<InventoryEntity>>;

  constructor(private _inventory: Array<OrgEntityTree>) {
    this._flatMap = new Map();
    this._typeMap = new Map();
    Inventory.visitInventoryEntities(_inventory, [Inventory.buildFlatMap(this._flatMap), Inventory.buildTypeMap(this._typeMap)]);
  }

  private static visitInventoryEntities(inventory: Array<OrgEntityTree>,
                                        visitors: Array<Visitor>) {
    function visit(entity: EntityTreeNode) {
      for (let visitor of visitors) {
        visitor(entity);
      }
      for (let childType in entity.children) {
        for (let child of entity.children[childType]) {
          visit(child);
        }
      }
    }
    for (let locationNode of inventory) {
      visit(locationNode.tree);
    }
  }

  /**
   * Populates the map of all entities by uuid.
   */
  private static buildFlatMap(map: Map<string, InventoryEntity>): Visitor {
    return (entity: InventoryEntity) => {
      map.set(entity.uuid, entity);
    }
  }

  /**
   * Populates the map of all entities by type.
   */
  private static buildTypeMap(map: Map<EntityType, Array<InventoryEntity>>): Visitor {
    return (entity: InventoryEntity) => {
      let entityArray = map.get(entity.type);
      if (entityArray === undefined) {
        map.set(entity.type, [entity]);
      } else {
        entityArray.push(entity);
      }
    }
  }

  /**
   * Get an inventory entity by UUID.
   * @param uuid {string} UUID of the entity
   * @returns {undefined|InventoryEntity}
   */
  getEntityByUuid(uuid: string): InventoryEntity | undefined {
    return this._flatMap.get(uuid);
  }

  /**
   * Get an array of inventory entities of the specified type.
   * @param type {EntityType} the type to retrieve
   * @returns {undefined|InventoryEntity}
   */
  getEntitiesByType(type: EntityType): Array<InventoryEntity> | undefined {
    return this._typeMap.get(type);
  }
}

export interface InventoryEntity {

  uuid: string;

  type: EntityType;

}

type Visitor = (entity: InventoryEntity) => void;