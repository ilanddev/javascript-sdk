"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
/**
 * User inventory entity implementation.
 */
var InventoryEntityImpl = (function () {
    function InventoryEntityImpl(_json) {
        this._json = _json;
    }
    Object.defineProperty(InventoryEntityImpl.prototype, "uuid", {
        /**
         * Gets the UUID of the entity.
         * @returns {string} UUID
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntityImpl.prototype, "type", {
        /**
         * Gets the type of the entity.
         * @returns {IamEntityType} entity type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntityImpl.prototype, "name", {
        /**
         * Gets the name of the entity.
         * @returns {string} entity name
         */
        get: function () {
            return this._json.name;
        },
        /**
         * Sets the name of the entity.
         * @param {string} val the name
         */
        set: function (val) {
            this._json.name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntityImpl.prototype, "parentUuid", {
        /**
         * Gets the UUID of the parent entity.
         * @returns {string} the parent entity UUID
         */
        get: function () {
            return this._json.parent_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntityImpl.prototype, "parentType", {
        /**
         * Gets the type of the parent entity.
         * @returns {IamEntityType} the parent entity type
         */
        get: function () {
            return this._json.parent_type;
        },
        enumerable: true,
        configurable: true
    });
    return InventoryEntityImpl;
}());
exports.InventoryEntityImpl = InventoryEntityImpl;
var CompanyInventoryImpl = (function () {
    function CompanyInventoryImpl(_inventory) {
        this._inventory = _inventory;
        this._uuidMap = {};
        this._childrenMap = {};
        this.subject = new Subject_1.Subject();
        this._companyId = _inventory.company_id;
        for (var type in this._inventory.entities) {
            for (var _i = 0, _a = this._inventory.entities[type]; _i < _a.length; _i++) {
                var entity = _a[_i];
                this.addEntity(entity, true);
            }
        }
    }
    Object.defineProperty(CompanyInventoryImpl.prototype, "companyId", {
        get: function () {
            return this._companyId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get an inventory entity by UUID.
     * @param uuid {string} UUID of the entity
     * @returns {InventoryEntity|undefined}
     */
    CompanyInventoryImpl.prototype.getEntityByUuid = function (uuid) {
        return this._uuidMap[uuid];
    };
    /**
     * Get all entities mapped by their types.
     * @returns {{[p: string]: Array<InventoryEntity>}}
     */
    CompanyInventoryImpl.prototype.getAllEntitiesByType = function () {
        var entities = {};
        for (var type in this._inventory.entities) {
            entities[type] = [];
            for (var _i = 0, _a = this._inventory.entities[type]; _i < _a.length; _i++) {
                var entity = _a[_i];
                entities[type].push(new InventoryEntityImpl(entity));
            }
        }
        return entities;
    };
    /**
     * Get an array of inventory entities of the specified type.
     * @param {IamEntityType} type
     * @returns {Array<InventoryEntity>}
     */
    CompanyInventoryImpl.prototype.getEntitiesByType = function (type) {
        var result = this._inventory.entities[type];
        return result ? result.map(function (it) { return new InventoryEntityImpl(it); }) : [];
    };
    /**
     * Gets the map of children belonging to an entity.
     * @param {string} uuid
     * @returns {{[p: string]: Array<InventoryEntity>} | undefined}
     */
    CompanyInventoryImpl.prototype.getChildrenForEntity = function (uuid) {
        return this._childrenMap[uuid];
    };
    CompanyInventoryImpl.prototype.addEntity = function (entity, original) {
        if (original === void 0) { original = false; }
        var inventoryEntity = new InventoryEntityImpl(entity);
        if (!original) {
            this._inventory.entities[entity.type].push(entity);
        }
        this._uuidMap[entity.uuid] = inventoryEntity;
        var parentUuid = 'root';
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
    };
    CompanyInventoryImpl.prototype.removeEntity = function (entityUuid) {
        var entity = this._uuidMap[entityUuid];
        if (entity) {
            delete this._uuidMap[entityUuid];
            var invIdx = this._inventory.entities[entity.type].findIndex(function (it) { return it.uuid === entityUuid; });
            if (invIdx >= 0) {
                this._inventory.entities[entity.type].splice(invIdx, 1);
            }
            if (entity.parentUuid) {
                var parentChildArray = this._childrenMap[entity.parentUuid][entity.type];
                var parentIdx = parentChildArray.findIndex(function (it) { return it.uuid === entityUuid; });
                if (parentIdx >= 0) {
                    parentChildArray.splice(parentIdx, 1);
                }
            }
            this.subject.next({
                type: 'DELETE',
                entity: entity
            });
        }
    };
    CompanyInventoryImpl.prototype.renameEntity = function (entityUuid, newName) {
        var entity = this.getEntityByUuid(entityUuid);
        if (entity) {
            if (entity.name !== newName) {
                entity.name = newName;
                this.subject.next({
                    type: 'UPDATE',
                    entity: entity
                });
            }
        }
    };
    CompanyInventoryImpl.prototype.getObservable = function () {
        return this.subject;
    };
    return CompanyInventoryImpl;
}());
exports.CompanyInventoryImpl = CompanyInventoryImpl;
