"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lb_pool_service_port_1 = require("./lb-pool-service-port");
var lb_pool_member_1 = require("./lb-pool-member");
/**
 * LoadBalancerPool class
 */
var LoadBalancerPool = (function () {
    function LoadBalancerPool(_json) {
        this._json = _json;
    }
    Object.defineProperty(LoadBalancerPool.prototype, "id", {
        /**
         * Get id
         * @returns {string | null}
         */
        get: function () {
            return this._json.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "name", {
        /**
         * Get name
         * @returns {string | null}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "description", {
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
    Object.defineProperty(LoadBalancerPool.prototype, "operational", {
        /**
         * Check weather this LoadBalancerPool is operational or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.operational;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "errorDetails", {
        /**
         * Get error details.
         * @returns {string | null}
         */
        get: function () {
            return this._json.error_details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "servicePorts", {
        /**
         * Get a list of pool service ports
         * @returns {Array<LbPoolServicePort>}
         */
        get: function () {
            return this._json.service_ports
                .map(function (lbPoolServicePort) { return new lb_pool_service_port_1.LbPoolServicePort(lbPoolServicePort); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "members", {
        /**
         * Get a list of pool members
         * @returns {Array<LbPoolMember>}
         */
        get: function () {
            return this._json.members.map(function (lbPoolMember) { return new lb_pool_member_1.LbPoolMember(lbPoolMember); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPool.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LoadBalancerPoolJson}
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
    LoadBalancerPool.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LoadBalancerPool;
}());
exports.LoadBalancerPool = LoadBalancerPool;
