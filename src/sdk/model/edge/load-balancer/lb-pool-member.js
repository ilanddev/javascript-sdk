"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lb_pool_service_port_1 = require("./lb-pool-service-port");
/**
 * LbPoolMember class
 */
var LbPoolMember = (function () {
    function LbPoolMember(_json) {
        this._json = _json;
    }
    Object.defineProperty(LbPoolMember.prototype, "ipAddress", {
        /**
         * Get ip address
         * @returns {string | null}
         */
        get: function () {
            return this._json.ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolMember.prototype, "weight", {
        /**
         * Get weight
         * @returns {string | null}
         */
        get: function () {
            return this._json.weight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolMember.prototype, "servicePorts", {
        /**
         * Get list of service ports.
         * @returns {Array<LbPoolServicePort>}
         */
        get: function () {
            return this._json.service_ports.map(function (port) { return new lb_pool_service_port_1.LbPoolServicePort(port); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolMember.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LbPoolMemberJson}
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
    LbPoolMember.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LbPoolMember;
}());
exports.LbPoolMember = LbPoolMember;
