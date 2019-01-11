"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Public IP Assignment.
 */
/* istanbul ignore next: autogenerated */
var PublicIpAssignment = (function () {
    function PublicIpAssignment(_json) {
        this._json = _json;
    }
    Object.defineProperty(PublicIpAssignment.prototype, "type", {
        /**
         * Get type.
         * @returns {PublicAssignmentType}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicIpAssignment.prototype, "ip", {
        /**
         * Get ip.
         * @returns {string}
         */
        get: function () {
            return this._json.ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicIpAssignment.prototype, "entityUuid", {
        /**
         * Get entity uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicIpAssignment.prototype, "entityName", {
        /**
         * Get entity name.
         * @returns {string}
         */
        get: function () {
            return this._json.entity_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicIpAssignment.prototype, "externalNetworkUuid", {
        /**
         * Get external network uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.external_network_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicIpAssignment.prototype, "externalNetworkName", {
        /**
         * Get external network name.
         * @returns {string}
         */
        get: function () {
            return this._json.external_network_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicIpAssignment.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {PublicIpAssignmentJson}
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the string representation of this class.
     * @returns {string}
     */
    PublicIpAssignment.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return PublicIpAssignment;
}());
exports.PublicIpAssignment = PublicIpAssignment;
