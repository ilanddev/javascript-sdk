"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DhcpPool class
 */
var DhcpPool = (function () {
    function DhcpPool(_json) {
        this._json = _json;
    }
    Object.defineProperty(DhcpPool.prototype, "edgeUuid", {
        /**
         * Get edge uuid
         * @returns {string | null}
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DhcpPool.prototype, "enabled", {
        /**
         * Check weather or not this Dhcp Pool is enabled or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DhcpPool.prototype, "network", {
        /**
         * Get network
         * @returns {string | null}
         */
        get: function () {
            return this._json.network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DhcpPool.prototype, "maxLeaseTime", {
        /**
         * Get max lease time.
         * @returns {number | null}
         */
        get: function () {
            return this._json.max_lease_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DhcpPool.prototype, "defaultLeaseTime", {
        /**
         * Get default lease time.
         * @returns {number | null}
         */
        get: function () {
            return this._json.default_lease_time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DhcpPool.prototype, "lowIp", {
        /**
         * Get low IP.
         * @returns {string | null}
         */
        get: function () {
            return this._json.low_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DhcpPool.prototype, "highIp", {
        /**
         * Get high IP.
         * @returns {string | null}
         */
        get: function () {
            return this._json.high_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DhcpPool.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {DhcpJson}
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
    DhcpPool.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return DhcpPool;
}());
exports.DhcpPool = DhcpPool;
