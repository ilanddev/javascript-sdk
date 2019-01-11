"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firewall_rule_1 = require("./firewall-rule");
/**
 * Firewall class
 */
var Firewall = (function () {
    function Firewall(_json) {
        this._json = _json;
    }
    Object.defineProperty(Firewall.prototype, "edgeUuid", {
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
    Object.defineProperty(Firewall.prototype, "log", {
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
    Object.defineProperty(Firewall.prototype, "enabled", {
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
    Object.defineProperty(Firewall.prototype, "defaultAction", {
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
    Object.defineProperty(Firewall.prototype, "rules", {
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
    Object.defineProperty(Firewall.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeFirewallJson}
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
    Firewall.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return Firewall;
}());
exports.Firewall = Firewall;
