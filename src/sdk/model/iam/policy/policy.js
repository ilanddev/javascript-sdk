"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permission_service_1 = require("../../../service/permission-service/permission-service");
/**
 * Policy.
 */
var Policy = (function () {
    function Policy(_json) {
        this._json = _json;
    }
    Object.defineProperty(Policy.prototype, "entityUuid", {
        /**
         * Gets the entity UUID associated with the policy.
         * @returns {string} the entity UUID
         */
        get: function () {
            return this._json.entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "entityDomain", {
        /**
         * Gets the entity domain of the policy.
         * @returns {IamEntityType} the entity domain
         */
        get: function () {
            return this._json.domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "type", {
        /**
         * Gets the policy type.
         * @returns {PolicyType} the policy type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "permissions", {
        /**
         * Gets the permissions assigned to the policy.
         * @returns {Array<PermissionType>} the policy permissions
         */
        get: function () {
            if (this._json.permissions && this._json.permissions.length > 0) {
                return this._json.permissions.slice();
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Policy.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Policy.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {PolicyJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Indicate whether the policy has the specified permission.
     * @param {PermissionType} permissionType
     * @returns {boolean}
     */
    Policy.prototype.hasPermission = function (permissionType) {
        var permission = permission_service_1.PermissionService.getPermission(permissionType);
        if (this.permissions.length > 0) {
            return this.permissions.indexOf(permissionType) > -1;
        }
        else {
            return ((permission !== undefined && permission.domain === this.entityDomain && this.type === 'ADMIN') ||
                (permission !== undefined && permission.domain === this.entityDomain &&
                    permission.accessType === 'READ' && this.type === 'READ_ONLY'));
        }
    };
    return Policy;
}());
exports.Policy = Policy;
/**
 * Policy Builder.
 */
var PolicyBuilder = (function () {
    /**
     * Creates a new PolicyBuilder.
     * @param {string} _entityUuid the UUID of the entity that the policy will apply to
     * @param {IamEntityType} _entityDomain the EntityDomain of the entity that the policy will apply to
     * @param {PolicyType} _type the policy type
     */
    function PolicyBuilder(_entityUuid, _entityDomain, _type) {
        this._entityUuid = _entityUuid;
        this._entityDomain = _entityDomain;
        this._type = _type;
        this._permissions = [];
    }
    /**
     * Set an array of permissions.
     * @param {Array<PermissionType>} array
     * @throws Error
     */
    PolicyBuilder.prototype.setPermissions = function (array) {
        this._permissions = [];
        if (array.length > 0) {
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var permission = array_1[_i];
                try {
                    this.addPermission(permission);
                }
                catch (err) {
                    throw err;
                }
            }
        }
        return this;
    };
    /**
     * Adds a permission.
     * @param {PermissionType} permission the permission to add
     * @returns {PolicyBuilder} the builder
     * @throws Error
     */
    PolicyBuilder.prototype.addPermission = function (permission) {
        var perm = permission_service_1.PermissionService.getPermission(permission);
        if (perm) {
            var domain = perm.domain;
            if (domain !== this._entityDomain) {
                throw new Error('Attempted to add permission=' + permission + ' in domain=' + domain +
                    ' to policy in domain=' + this._entityDomain + '.');
            }
            if (this._type !== 'CUSTOM') {
                throw new Error('Attempted to add permission to policy of type=' + this._type +
                    '. Permissions may only be explicitly added to policies with type=CUSTOM');
            }
            if (perm && !perm.availableToCustomPolicy) {
                throw new Error('Permission=' + permission + ' cannot be assigned to a custom policy.');
            }
            if (!this._permissions.some(function (it) { return it === permission; })) {
                this._permissions.push(permission);
            }
        }
        else {
            throw new Error('Permission=' + permission + ' doesn\'t exist.');
        }
        return this;
    };
    /**
     * Removes a permission.
     * @param {PermissionType} permission the permission to remove
     * @returns {PolicyBuilder} the builder
     */
    PolicyBuilder.prototype.removePermission = function (permission) {
        var idx = this._permissions.findIndex(function (it) { return it === permission; });
        if (idx >= 0) {
            this._permissions.splice(idx, 1);
        }
        return this;
    };
    /**
     * Builds the policy.
     * @returns {Policy} the new policy
     */
    PolicyBuilder.prototype.build = function () {
        return new Policy({
            entity_uuid: this._entityUuid,
            domain: this._entityDomain,
            type: this._type,
            permissions: this._permissions
        });
    };
    return PolicyBuilder;
}());
exports.PolicyBuilder = PolicyBuilder;
