"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entity_domain_1 = require("../../common/entity-domain");
/**
 * Permission
 */
var Permission = (function () {
    function Permission(_permissionType, _domain, _accessType, _availableToCustomPolicy, _requiredForCustomPolicy, _impliedPermissions) {
        this._permissionType = _permissionType;
        this._domain = _domain;
        this._accessType = _accessType;
        this._availableToCustomPolicy = _availableToCustomPolicy;
        this._requiredForCustomPolicy = _requiredForCustomPolicy;
        this._impliedPermissions = _impliedPermissions;
        this._entityDomain = new entity_domain_1.EntityDomain(_domain);
    }
    Object.defineProperty(Permission.prototype, "domain", {
        /**
         * Get the IamEntityType for a permission.
         * @returns {IamEntityType}
         */
        get: function () {
            return this._domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "permissionType", {
        /**
         * Get the PermissionType for a permission.
         * @returns {PermissionType}
         */
        get: function () {
            return this._permissionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "accessType", {
        /**
         * Get the AccessType for a permission.
         * @returns {AccessType}
         */
        get: function () {
            return this._accessType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "availableToCustomPolicy", {
        /**
         * Check whether or not this permission is available to custom policy.
         * @returns {boolean}
         */
        get: function () {
            return this._availableToCustomPolicy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "requiredForCustomPolicy", {
        /**
         * Check whether or not a permission is required for custom policy.
         * @returns {boolean}
         */
        get: function () {
            return this._requiredForCustomPolicy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "impliedPermissions", {
        /**
         * Get the implied permissions.
         * @returns {Array<PermissionType> | null}
         */
        get: function () {
            return this._impliedPermissions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the string representation of a permission. Which is the PermissionType.
     * @returns {string}
     */
    Permission.prototype.toString = function () {
        return this._permissionType.toString();
    };
    /**
     * Get the entity domain class for this permission.
     * @returns {EntityDomain}
     */
    Permission.prototype.getDomain = function () {
        return this._entityDomain;
    };
    return Permission;
}());
exports.Permission = Permission;
