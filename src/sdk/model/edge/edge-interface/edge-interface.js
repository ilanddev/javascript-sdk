"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subnet_participation_1 = require("../subnet-participation/subnet-participation");
/**
 * Edge Gateway Interface.
 */
var EdgeInterface = (function () {
    function EdgeInterface(_json) {
        this._json = _json;
    }
    Object.defineProperty(EdgeInterface.prototype, "name", {
        /**
         * Gets the interface name.
         * @returns {string} interface name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "displayName", {
        /**
         * Gets the display name.
         * @returns {string | null} display name
         */
        get: function () {
            return this._json.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "inRateLimit", {
        /**
         * Gets the incoming rate limit setting.
         * @returns {number} incoming rate limit
         */
        get: function () {
            return this._json.in_rate_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "outRateLimit", {
        /**
         * Gets the outgoing rate limit setting.
         * @returns {number} outgoing rate limit
         */
        get: function () {
            return this._json.out_rate_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "type", {
        /**
         * Gets the interface type.
         * @returns {EdgeInterfaceType | null} interface type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "rateLimitEnabled", {
        /**
         * Indicates whether rate limiting is enabled on this edge.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.apply_rate_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "defaultRoute", {
        /**
         * Indicates whether this edge is used as the default DNS relay route.
         * @returns {boolean | null} value
         */
        get: function () {
            return this._json.default_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "networkName", {
        /**
         * Gets the name of the network that is attached to this interface.
         * @returns {string | null} network name
         */
        get: function () {
            return this._json.network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "networkUuid", {
        /**
         * Gets the UUID of the network that is attached to this interface.
         * @returns {string | null} network UUID
         */
        get: function () {
            return this._json.network_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "subnetParticipation", {
        /**
         * Gets the subnet participation information.
         * @returns {[SubnetParticipation]} subnet participation array
         */
        get: function () {
            var subnetParticipation = (this._json.subnet_participation || []);
            return subnetParticipation.map(function (spJson) { return new subnet_participation_1.SubnetParticipation(spJson); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    EdgeInterface.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(EdgeInterface.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {EdgeInterfaceJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return EdgeInterface;
}());
exports.EdgeInterface = EdgeInterface;
