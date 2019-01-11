"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Entity.
 */
var Entity = (function () {
    function Entity(_apiEntity) {
        this._apiEntity = _apiEntity;
    }
    Object.defineProperty(Entity.prototype, "name", {
        /**
         * Gets the name.
         * @returns {string} name
         */
        get: function () {
            return this._apiEntity.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "uuid", {
        /**
         * Gets the UUID.
         * @returns {string} UUID
         */
        get: function () {
            return this._apiEntity.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "deleted", {
        /**
         * Indicates whether the entity is deleted.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiEntity.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "updatedDate", {
        /**
         * Gets the last date that the entity was updated.
         * @returns {Date} last updated date
         */
        get: function () {
            return new Date(this._apiEntity.updated_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "deletedDate", {
        /**
         * Gets the date that the entity was deleted, or null if it is not deleted.
         * @returns {Date} deleted date or null if not applicable
         */
        get: function () {
            return this._apiEntity.deleted_date ? new Date(this._apiEntity.deleted_date) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "companyId", {
        /**
         * Gets the ID of the company that the entity belongs to.
         */
        get: function () {
            return this._apiEntity.company_id;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());
exports.Entity = Entity;
