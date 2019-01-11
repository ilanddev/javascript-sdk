"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gateway_nat_rule_1 = require("../gateway-nat-rule/gateway-nat-rule");
/**
 * Nat Service Configuration class.
 */
var NatServiceConfiguration = (function () {
    function NatServiceConfiguration(_json) {
        this._json = _json;
    }
    Object.defineProperty(NatServiceConfiguration.prototype, "version", {
        /**
         * Get the version.
         * @returns {number}
         */
        get: function () {
            return this._json.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NatServiceConfiguration.prototype, "externalIp", {
        /**
         * Get external ip
         * @returns {string | null}
         */
        get: function () {
            return this._json.external_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NatServiceConfiguration.prototype, "type", {
        /**
         * Get type
         * @returns {string | null}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NatServiceConfiguration.prototype, "policy", {
        /**
         * Get policy
         * @returns {string | null}
         */
        get: function () {
            return this._json.policy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NatServiceConfiguration.prototype, "enabled", {
        /**
         * Check weather nat service is enabled or not
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NatServiceConfiguration.prototype, "rules", {
        /**
         * Get a list of gateway nat rules.
         * @returns {Array<GatewayNatRule>}
         */
        get: function () {
            var rules = (this._json.rules || []);
            return rules.map(function (rule) { return new gateway_nat_rule_1.GatewayNatRule(rule); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NatServiceConfiguration.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {NatServiceConfigJson}
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
    NatServiceConfiguration.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return NatServiceConfiguration;
}());
exports.NatServiceConfiguration = NatServiceConfiguration;
