"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Static Route Update Request.
 */
/* istanbul ignore next: autogenerated */
var StaticRouteUpdateRequest = (function () {
    function StaticRouteUpdateRequest(firstParam, idx, name, network, nextHopIP, interfaceType, _interface) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                edge_uuid: firstParam,
                idx: idx,
                name: name,
                network: network,
                next_hop_ip: nextHopIP,
                interface_type: interfaceType,
                interface: _interface
            };
        }
        else if (firstParam instanceof StaticRouteUpdateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "edgeUuid", {
        /**
         * Get edge uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "idx", {
        /**
         * Get idx.
         * @returns {number}
         */
        get: function () {
            return this._json.idx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "name", {
        /**
         * Get name.
         * @returns {string}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "network", {
        /**
         * Get network.
         * @returns {string}
         */
        get: function () {
            return this._json.network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "nextHopIP", {
        /**
         * Get next hop ip.
         * @returns {string}
         */
        get: function () {
            return this._json.next_hop_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "interfaceType", {
        /**
         * Get interface type.
         * @returns {string}
         */
        get: function () {
            return this._json.interface_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "interface", {
        /**
         * Get interface.
         * @returns {string}
         */
        get: function () {
            return this._json.interface;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StaticRouteUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {StaticRouteUpdateRequestJson}
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
    StaticRouteUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return StaticRouteUpdateRequest;
}());
exports.StaticRouteUpdateRequest = StaticRouteUpdateRequest;
