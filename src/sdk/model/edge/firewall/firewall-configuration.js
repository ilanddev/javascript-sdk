"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firewall_rule_1 = require("./firewall-rule");
/**
 * Firewall Configuration class.
 */
var FirewallConfiguration = (function () {
    function FirewallConfiguration(_json) {
        this._json = _json;
    }
    Object.defineProperty(FirewallConfiguration.prototype, "version", {
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
    Object.defineProperty(FirewallConfiguration.prototype, "edgeUuid", {
        /**
         * Get edge uuid.
         * @returns {string | null}
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallConfiguration.prototype, "log", {
        /**
         * Check weather the Firewall has logging enabled or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.log;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallConfiguration.prototype, "enabled", {
        /**
         * Check weather the Firewall is enabled or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallConfiguration.prototype, "defaultAction", {
        /**
         * Get default action.
         * @returns {string | null}
         */
        get: function () {
            return this._json.default_action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallConfiguration.prototype, "rules", {
        /**
         * Get a list of firewall rules.
         * @returns {Array<FirewallRule>}
         */
        get: function () {
            var rules = (this._json.rules || []);
            return rules.map(function (rule) { return new firewall_rule_1.FirewallRule(rule); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallConfiguration.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeFirewallConfigJson}
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
    FirewallConfiguration.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return FirewallConfiguration;
}());
exports.FirewallConfiguration = FirewallConfiguration;
