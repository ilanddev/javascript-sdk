"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next: autogenerated */
var VappNetworkFirewallRuleRequest = (function () {
    function VappNetworkFirewallRuleRequest(firstParam, destinationIp, destinationPortRange, direction, icmpSubType, policy, port, protocols, sourceIp, sourcePort, sourcePortRange, loggingEnabled, enabled, matchOnTranslate) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                description: firstParam,
                destination_ip: destinationIp,
                destination_port_range: destinationPortRange,
                direction: direction,
                icmp_sub_type: icmpSubType,
                policy: policy,
                port: port,
                protocols: protocols,
                source_ip: sourceIp,
                source_port: sourcePort,
                source_port_range: sourcePortRange,
                logging_enabled: loggingEnabled,
                enabled: enabled,
                match_on_translate: matchOnTranslate
            };
        }
        else if (firstParam instanceof VappNetworkFirewallRuleRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "description", {
        /**
         * Get description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "destinationIp", {
        /**
         * Get destination ip.
         * @returns {string}
         */
        get: function () {
            return this._json.destination_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "destinationPortRange", {
        /**
         * Get destination port range.
         * @returns {string}
         */
        get: function () {
            return this._json.destination_port_range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "direction", {
        /**
         * Get direction.
         * @returns {string}
         */
        get: function () {
            return this._json.direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "icmpSubType", {
        /**
         * Get icmp sub type.
         * @returns {string}
         */
        get: function () {
            return this._json.icmp_sub_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "policy", {
        /**
         * Get policy.
         * @returns {string}
         */
        get: function () {
            return this._json.policy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "port", {
        /**
         * Get port.
         * @returns {number}
         */
        get: function () {
            return this._json.port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "protocols", {
        /**
         * Get protocols.
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.protocols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "sourceIp", {
        /**
         * Get source ip.
         * @returns {string}
         */
        get: function () {
            return this._json.source_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "sourcePort", {
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
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "sourcePortRange", {
        /**
         * Get source port range.
         * @returns {string}
         */
        get: function () {
            return this._json.source_port_range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "loggingEnabled", {
        /**
         * Get logging enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.logging_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "enabled", {
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
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "matchOnTranslate", {
        /**
         * Get match on translate.
         * @returns {boolean}
         */
        get: function () {
            return this._json.match_on_translate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkFirewallRuleRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VappNetworkFirewallRuleRequestJson}
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
    VappNetworkFirewallRuleRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VappNetworkFirewallRuleRequest;
}());
exports.VappNetworkFirewallRuleRequest = VappNetworkFirewallRuleRequest;
