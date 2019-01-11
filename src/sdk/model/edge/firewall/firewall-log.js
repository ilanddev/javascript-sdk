"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FirewallLog = (function () {
    function FirewallLog(_json) {
        this._json = _json;
    }
    Object.defineProperty(FirewallLog.prototype, "edgeUuid", {
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
    Object.defineProperty(FirewallLog.prototype, "time", {
        /**
         * Get time.
         * @returns {Date | null}
         */
        get: function () {
            return this._json.time ? new Date(this._json.time) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallLog.prototype, "destPort", {
        /**
         * Get destination port.
         * @returns {number | null}
         */
        get: function () {
            return this._json.dest_port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallLog.prototype, "count", {
        /**
         * Get count
         * @returns {number}
         */
        get: function () {
            return this._json.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallLog.prototype, "destIp", {
        /**
         * Get destination IP.
         * @returns {string | null}
         */
        get: function () {
            return this._json.dest_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallLog.prototype, "action", {
        /**
         * Get action
         * @returns {string | null}
         */
        get: function () {
            return this._json.action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallLog.prototype, "sourceIp", {
        /**
         * Get source IP.
         * @returns {string | null}
         */
        get: function () {
            return this._json.source_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallLog.prototype, "protocol", {
        /**
         * Get protocol
         * @returns {string | null}
         */
        get: function () {
            return this._json.protocol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirewallLog.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeFirewallLogJson}
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
    FirewallLog.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return FirewallLog;
}());
exports.FirewallLog = FirewallLog;
