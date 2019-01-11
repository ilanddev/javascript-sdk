"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IpSecVpnEndpoint class
 */
var IpSecVpnEndpoint = (function () {
    function IpSecVpnEndpoint(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpSecVpnEndpoint.prototype, "publicIp", {
        /**
         * Get public IP
         * @returns {string | null}
         */
        get: function () {
            return this._json.public_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnEndpoint.prototype, "network", {
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
    Object.defineProperty(IpSecVpnEndpoint.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeIpSecVpnEndpointJson}
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
    IpSecVpnEndpoint.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpSecVpnEndpoint;
}());
exports.IpSecVpnEndpoint = IpSecVpnEndpoint;
