"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var static_route_1 = require("./static-route");
/**
 * StaticRouting class
 */
var StaticRouting = (function () {
    function StaticRouting(_json) {
        this._json = _json;
    }
    Object.defineProperty(StaticRouting.prototype, "edgeUuid", {
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
    Object.defineProperty(StaticRouting.prototype, "enabled", {
        /**
         * Check weather static routing is enabled or not
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouting.prototype, "routes", {
        /**
         * Get list of static routes.
         * @returns {Array<StaticRoute>}
         */
        get: function () {
            var routes = (this._json.routes || []);
            return routes.map(function (route) { return new static_route_1.StaticRoute(route); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouting.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {StaticRoutingServiceJson}
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
    StaticRouting.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return StaticRouting;
}());
exports.StaticRouting = StaticRouting;
