"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip_sec_vpn_endpoint_1 = require("./ip-sec-vpn-endpoint");
var ip_sec_vpn_tunnel_1 = require("./ip-sec-vpn-tunnel");
/**
 * Ipsec Vpn Configuration class.
 */
var IpsecVpnConfiguration = (function () {
    function IpsecVpnConfiguration(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpsecVpnConfiguration.prototype, "version", {
        /**
         * Get the version.
         * @returns {number}
         */
        get: function () {
            return this._json.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpsecVpnConfiguration.prototype, "edgeUuid", {
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
    Object.defineProperty(IpsecVpnConfiguration.prototype, "enabled", {
        /**
         * Check weather IpsecVpn is enabled or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpsecVpnConfiguration.prototype, "endpoints", {
        /**
         * Get list of vpn-endpoints
         * @returns {Array<IpSecVpnEndpoint>}
         */
        get: function () {
            return this._json.endpoints
                .map(function (endpoint) { return new ip_sec_vpn_endpoint_1.IpSecVpnEndpoint(endpoint); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpsecVpnConfiguration.prototype, "tunnels", {
        /**
         * Get list of tunnels
         * @returns {Array<IpSecVpnTunnel>}
         */
        get: function () {
            return this._json.tunnels.map(function (tunnel) { return new ip_sec_vpn_tunnel_1.IpSecVpnTunnel(tunnel); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpsecVpnConfiguration.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeIpsecVpnServiceConfigJson}
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
    IpsecVpnConfiguration.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpsecVpnConfiguration;
}());
exports.IpsecVpnConfiguration = IpsecVpnConfiguration;
