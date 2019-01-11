"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vpg Entities.
 */
var VpgEntities = (function () {
    function VpgEntities(_json) {
        this._json = _json;
    }
    Object.defineProperty(VpgEntities.prototype, "source", {
        /**
         * Get source for Vpg Entities
         * @returns {EnvironmentType} source
         */
        get: function () {
            return this._json.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VpgEntities.prototype, "target", {
        /**
         * Get target for Vpg Entities
         * @returns {EnvironmentType}
         */
        get: function () {
            return this._json.target;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format
     * @returns {string}
     */
    VpgEntities.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(VpgEntities.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VpgVmJson} the API object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return VpgEntities;
}());
exports.VpgEntities = VpgEntities;
