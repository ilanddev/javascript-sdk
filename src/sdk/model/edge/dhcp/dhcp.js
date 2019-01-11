"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dhcp_pool_1 = require("./dhcp-pool");
/**
 * Dhcp class
 */
var Dhcp = (function () {
    function Dhcp(_json) {
        this._json = _json;
    }
    Object.defineProperty(Dhcp.prototype, "edgeUuid", {
        /**
         * Get the edge UUID.
         * @returns {string | null}
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dhcp.prototype, "enabled", {
        /**
         * Check weather or not a dhcp service is enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dhcp.prototype, "dhcpPools", {
        /**
         * Get a list of Dhcp pools.
         * @returns {Array<DhcpPool>}
         */
        get: function () {
            var dhcpPools = (this._json.dhcp_pools || []);
            return dhcpPools.map(function (pool) { return new dhcp_pool_1.DhcpPool(pool); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dhcp.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeDhcpJson}
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
    Dhcp.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return Dhcp;
}());
exports.Dhcp = Dhcp;
