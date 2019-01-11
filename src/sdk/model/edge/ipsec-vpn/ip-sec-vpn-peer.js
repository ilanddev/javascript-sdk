"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IpSecVpnPeer class
 */
var IpSecVpnPeer = (function () {
    function IpSecVpnPeer(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpSecVpnPeer.prototype, "type", {
        /**
         * Get type.
         * @returns {string | null}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnPeer.prototype, "id", {
        /**
         * Get ID
         * @returns {string | null}
         */
        get: function () {
            return this._json.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnPeer.prototype, "name", {
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
    Object.defineProperty(IpSecVpnPeer.prototype, "vcdUrl", {
        /**
         * Get vdc URL
         * @returns {string | null}
         */
        get: function () {
            return this._json.vcd_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnPeer.prototype, "vcdOrg", {
        /**
         * Get vdc Org
         * @returns {string | null}
         */
        get: function () {
            return this._json.vcd_org;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnPeer.prototype, "vcdUsername", {
        /**
         * Get vdc username
         * @returns {string | null}
         */
        get: function () {
            return this._json.vcd_username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnPeer.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeIpSecVpnPeerJson}
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
    IpSecVpnPeer.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpSecVpnPeer;
}());
exports.IpSecVpnPeer = IpSecVpnPeer;
