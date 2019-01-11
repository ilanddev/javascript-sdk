"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vm_1 = require("../vm/vm");
/**
 * VM  Affinity Rule.
 */
/* istanbul ignore next: autogenerated */
var VmAffinityRule = (function () {
    function VmAffinityRule(_json) {
        this._json = _json;
    }
    Object.defineProperty(VmAffinityRule.prototype, "vms", {
        /**
         * Get vms.
         * @returns {Array<Vm>}
         */
        get: function () {
            return this._json.vms.map(function (it) { return new vm_1.Vm(it); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "key", {
        /**
         * Get key.
         * @returns {number}
         */
        get: function () {
            return this._json.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "enabled", {
        /**
         * Get enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "name", {
        /**
         * Get name.
         * @returns {string}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "userCreated", {
        /**
         * Get user created.
         * @returns {boolean}
         */
        get: function () {
            return this._json.user_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "inCompliance", {
        /**
         * Get in compliance.
         * @returns {boolean}
         */
        get: function () {
            return this._json.in_compliance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "uuid", {
        /**
         * Get uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "type", {
        /**
         * Get type.
         * @returns {AffinityRuleType}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmAffinityRule.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VmAffinityRuleJson}
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
    VmAffinityRule.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VmAffinityRule;
}());
exports.VmAffinityRule = VmAffinityRule;
