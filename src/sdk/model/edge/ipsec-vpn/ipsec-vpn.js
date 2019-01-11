"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip_sec_vpn_site_1 = require("./ip-sec-vpn-site");
/**
 * IpsecVpn class
 */
var IpsecVpn = (function () {
    function IpsecVpn(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpsecVpn.prototype, "edgeUuid", {
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
    Object.defineProperty(IpsecVpn.prototype, "enabled", {
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
    Object.defineProperty(IpsecVpn.prototype, "globalSettings", {
        /**
         * Get global settings
         * @returns {GlobalSettingsJson}
         */
        get: function () {
            return this._json.global_settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpsecVpn.prototype, "loggingSettings", {
        /**
         * Get logging settings
         * @returns {LoggingSettingsJson}
         */
        get: function () {
            return this._json.logging_settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpsecVpn.prototype, "sites", {
        /**
         * Get Ip Sec Vpn Sites
         * @returns {Array<IpSecVpnSite>}
         */
        get: function () {
            return this._json.sites
                .map(function (site) { return new ip_sec_vpn_site_1.IpSecVpnSite(site); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpsecVpn.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeIpsecVpnServiceJson}
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
    IpsecVpn.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpsecVpn;
}());
exports.IpsecVpn = IpsecVpn;
