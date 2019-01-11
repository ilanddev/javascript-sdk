"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var load_balancer_pool_1 = require("./load-balancer-pool");
var load_balancer_virtual_server_1 = require("./load-balancer-virtual-server");
/**
 * LoadBalancer class
 */
var LoadBalancer = (function () {
    function LoadBalancer(_json) {
        this._json = _json;
    }
    Object.defineProperty(LoadBalancer.prototype, "edgeUuid", {
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
    Object.defineProperty(LoadBalancer.prototype, "enabled", {
        /**
         * Check weather this LoadBalancer is enabled or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "virtualServers", {
        /**
         * Get a list of virtual servers
         * @returns {Array<LoadBalancerVirtualServer>}
         */
        get: function () {
            return this._json.virtual_servers
                .map(function (vs) { return new load_balancer_virtual_server_1.LoadBalancerVirtualServer(vs); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "pools", {
        /**
         * Get a list of load balancer pools
         * @returns {Array<LoadBalancerPool>}
         */
        get: function () {
            return this._json.pools.map(function (lb) { return new load_balancer_pool_1.LoadBalancerPool(lb); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancer.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LoadBalancerServiceJson}
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
    LoadBalancer.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LoadBalancer;
}());
exports.LoadBalancer = LoadBalancer;
