"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IpSecVpnSubnet class
 */
var IpSecVpnSubnet = (function () {
    function IpSecVpnSubnet(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpSecVpnSubnet.prototype, "name", {
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
    Object.defineProperty(IpSecVpnSubnet.prototype, "gateway", {
        /**
         * Get gateway
         * @returns {string | null}
         */
        get: function () {
            return this._json.gateway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSubnet.prototype, "netmask", {
        /**
         * Get netmask
         * @returns {string | null}
         */
        get: function () {
            return this._json.netmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSubnet.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeIpSecVpnSubnetJson}
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
    IpSecVpnSubnet.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpSecVpnSubnet;
}());
exports.IpSecVpnSubnet = IpSecVpnSubnet;
