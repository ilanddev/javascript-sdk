"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lb_virtual_server_service_profile_1 = require("./lb-virtual-server-service-profile");
/**
 * LoadBalancerVirtualServer class
 */
var LoadBalancerVirtualServer = (function () {
    function LoadBalancerVirtualServer(_json) {
        this._json = _json;
    }
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "name", {
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
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "enabled", {
        /**
         * Check weather this LoadBalancerVirtualServer is enabled or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "description", {
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
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "ipAddress", {
        /**
         * Get id address
         * @returns {string | null}
         */
        get: function () {
            return this._json.ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "logging", {
        /**
         * Check weather this LoadBalancerVirtualServer has logging enabled or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.logging;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "pool", {
        /**
         * Get pool
         * @returns {string | null}
         */
        get: function () {
            return this._json.pool;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "network", {
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
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "serviceProfiles", {
        /**
         * Get a list of virtual server service profiles
         * @returns {Array<LbVirtualServerServiceProfile>}
         */
        get: function () {
            return this._json.service_profiles
                .map(function (lbVsProfile) { return new lb_virtual_server_service_profile_1.LbVirtualServerServiceProfile(lbVsProfile); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadBalancerVirtualServer.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LoadBalancerVirtualServerJson}
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
    LoadBalancerVirtualServer.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LoadBalancerVirtualServer;
}());
exports.LoadBalancerVirtualServer = LoadBalancerVirtualServer;
