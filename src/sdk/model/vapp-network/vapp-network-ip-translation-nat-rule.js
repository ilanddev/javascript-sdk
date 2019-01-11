"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next: autogenerated */
var VappNetworkIpTranslationNATRule = (function () {
    function VappNetworkIpTranslationNATRule(_json) {
        this._json = _json;
    }
    Object.defineProperty(VappNetworkIpTranslationNATRule.prototype, "mappingMode", {
        /**
         * Get mapping mode.
         * @returns {string}
         */
        get: function () {
            return this._json.mapping_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkIpTranslationNATRule.prototype, "vmInterface", {
        /**
         * Get vm interface.
         * @returns {string}
         */
        get: function () {
            return this._json.vm_interface;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkIpTranslationNATRule.prototype, "externalIp", {
        /**
         * Get external ip.
         * @returns {string}
         */
        get: function () {
            return this._json.external_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkIpTranslationNATRule.prototype, "vmLocalId", {
        /**
         * Get vm local id.
         * @returns {string}
         */
        get: function () {
            return this._json.vm_local_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkIpTranslationNATRule.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VappNetworkIpTranslationNATRuleJson}
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
    VappNetworkIpTranslationNATRule.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VappNetworkIpTranslationNATRule;
}());
exports.VappNetworkIpTranslationNATRule = VappNetworkIpTranslationNATRule;
