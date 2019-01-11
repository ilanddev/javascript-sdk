"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip_range_1 = require("../common/ip-range/ip-range");
var network_sub_allocation_1 = require("../common/network-sub-allocation");
/**
 * Ip Scope.
 */
/* istanbul ignore next: autogenerated */
var IpScope = (function () {
    function IpScope(firstParam, enabled, gateway, netmask, primaryDns, secondaryDns, dnsSuffix, ipRanges, allocatedIpAddresses, subAllocations) {
        if (typeof firstParam === 'boolean') {
            // Parameters constructor
            this._json = {
                inherited: firstParam,
                enabled: enabled,
                gateway: gateway,
                netmask: netmask,
                primary_dns: primaryDns,
                secondary_dns: secondaryDns,
                dns_suffix: dnsSuffix,
                ip_ranges: ipRanges,
                allocated_ip_addresses: allocatedIpAddresses,
                sub_allocations: subAllocations
            };
        }
        else if (firstParam instanceof IpScope) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(IpScope.prototype, "inherited", {
        /**
         * Get inherited.
         * @returns {boolean | undefined}
         */
        get: function () {
            return this._json.inherited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "enabled", {
        /**
         * Get enabled.
         * @returns {boolean | undefined}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "gateway", {
        /**
         * Get gateway.
         * @returns {string}
         */
        get: function () {
            return this._json.gateway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "netmask", {
        /**
         * Get netmask.
         * @returns {string}
         */
        get: function () {
            return this._json.netmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "primaryDns", {
        /**
         * Get primary dns.
         * @returns {string}
         */
        get: function () {
            return this._json.primary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "secondaryDns", {
        /**
         * Get secondary dns.
         * @returns {string}
         */
        get: function () {
            return this._json.secondary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "dnsSuffix", {
        /**
         * Get dns suffix.
         * @returns {string}
         */
        get: function () {
            return this._json.dns_suffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "ipRanges", {
        /**
         * Get ip ranges.
         * @returns {Array<IpRange>}
         */
        get: function () {
            return this._json.ip_ranges.map(function (it) { return new ip_range_1.IpRange(it); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "allocatedIpAddresses", {
        /**
         * Get allocated ip addresses.
         * @returns {Array<string> | undefined}
         */
        get: function () {
            return this._json.allocated_ip_addresses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "subAllocations", {
        /**
         * Get sub allocations.
         * @returns {Array<NetworkSubAllocation> | undefined}
         */
        get: function () {
            return this._json.sub_allocations ? this._json.sub_allocations
                .map(function (it) { return new network_sub_allocation_1.NetworkSubAllocation(it); }) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpScope.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {IpScopeJson}
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
    IpScope.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpScope;
}());
exports.IpScope = IpScope;
