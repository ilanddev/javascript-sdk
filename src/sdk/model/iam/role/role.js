"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var policy_1 = require("../policy/policy");
/**
 * Role.
 */
var Role = (function () {
    function Role(_json) {
        this._json = _json;
        this._policies = this._json.policies.map(function (it) { return new policy_1.Policy(it); });
    }
    Object.defineProperty(Role.prototype, "uuid", {
        /**
         * Gets the UUID of the role.
         * @returns {string} role UUID
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "companyId", {
        /**
         * Gets the ID of the company that the role is associated with.
         * @returns {string} company ID
         */
        get: function () {
            return this._json.company_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "name", {
        /**
         * Gets the name of the role.
         * @returns {string} the role name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "description", {
        /**
         * Gets the role description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "policies", {
        /**
         * Gets the policies that define the role.
         * @returns {Array<Policy>} the array of role policies
         */
        get: function () {
            return this._policies.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "type", {
        /**
         * Gets the role type.
         * @returns {RoleType} role type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Role.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    /**
     * Return the policy for the specified uuid.
     * @param {string} entityUuid
     * @returns {Policy | null}
     */
    Role.prototype.getPolicy = function (entityUuid) {
        for (var _i = 0, _a = this._policies; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.entityUuid === entityUuid) {
                return p;
            }
        }
        return null;
    };
    Object.defineProperty(Role.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {RoleJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Role;
}());
exports.Role = Role;
