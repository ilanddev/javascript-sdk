"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FirewallRule = (function () {
    function FirewallRule(_json) {
        this._json = _json;
    }
    Object.defineProperty(FirewallRule.prototype, "description", {
        /**
         * Get description
         * @returns {string | null}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "destinationIp", {
        /**
         * Get destination IPq
         * @returns {string | null}
         */
        get: function () {
            return this._json.destination_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "destinationPortRange", {
        /**
         * Get destination port range.
         * @returns {string | null}
         */
        get: function () {
            return this._json.destination_port_range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "direction", {
        /**
         * Get direction.
         * @returns {string | null}
         */
        get: function () {
            return this._json.direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "icmpSubType", {
        /**
         * Get ICMP sub type.
         * @returns {string | null}
         */
        get: function () {
            return this._json.icmp_sub_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "id", {
        /**
         * Get ID.
         * @returns {string | null}
         */
        get: function () {
            return this._json.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "policy", {
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
    Object.defineProperty(FirewallRule.prototype, "port", {
        /**
         * Get port
         * @returns {number}
         */
        get: function () {
            return this._json.port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "protocol", {
        /**
         * Get Protocol.
         * @returns {Array<string>}
         */
        get: function () {
            return (this._json.protocol || []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "sourceIp", {
        /**
         * Get source IP
         * @returns {string | null}
         */
        get: function () {
            return this._json.source_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "sourcePort", {
        /**
         * Get source port.
         * @returns {number}
         */
        get: function () {
            return this._json.source_port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "sourcePortRange", {
        /**
         * Get source port range
         * @returns {string | null}
         */
        get: function () {
            return this._json.source_port_range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "logging", {
        /**
         * Check weather this FirewallRule has logging activated or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.logging;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "enabled", {
        /**
         * Check weather this FirewallRule is enabled or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "matchOnTranslate", {
        /**
         * Check weather this FirewallRule match on translate or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.match_on_translate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "idx", {
        /**
         * Get index
         * @returns {number}
         */
        get: function () {
            return this._json.idx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallRule.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {FirewallRuleJson}
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
    FirewallRule.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return FirewallRule;
}());
exports.FirewallRule = FirewallRule;
