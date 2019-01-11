"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * StaticRoute class
 */
var StaticRoute = (function () {
    function StaticRoute(_json) {
        this._json = _json;
    }
    Object.defineProperty(StaticRoute.prototype, "edgeUuid", {
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
    Object.defineProperty(StaticRoute.prototype, "idx", {
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
    Object.defineProperty(StaticRoute.prototype, "name", {
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
    Object.defineProperty(StaticRoute.prototype, "network", {
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
    Object.defineProperty(StaticRoute.prototype, "nextHopIp", {
        /**
         * Get next hop IP
         * @returns {string | null}
         */
        get: function () {
            return this._json.next_hop_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRoute.prototype, "interfaceType", {
        /**
         * Get interface type
         * @returns {string | null}
         */
        get: function () {
            return this._json.interface_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRoute.prototype, "interface", {
        /**
         * Get interface
         * @returns {string | null}
         */
        get: function () {
            return this._json.interface;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRoute.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {StaticRouteJson}
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
    StaticRoute.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return StaticRoute;
}());
exports.StaticRoute = StaticRoute;
