"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IpSecVpnSite = (function () {
    function IpSecVpnSite(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpSecVpnSite.prototype, "name", {
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
    Object.defineProperty(IpSecVpnSite.prototype, "description", {
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
    Object.defineProperty(IpSecVpnSite.prototype, "enabled", {
        /**
         * Check weather IpSecVpnTunnel is enabled or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "localId", {
        /**
         * Get local ID
         * @returns {string | null}
         */
        get: function () {
            return this._json.local_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "localIp", {
        /**
         * Get local IP address
         * @returns {string | null}
         */
        get: function () {
            return this._json.local_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "peerId", {
        /**
         * Get peer ID
         * @returns {string | null}
         */
        get: function () {
            return this._json.peer_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "peerIp", {
        /**
         * Get peer IP address
         * @returns {string | null}
         */
        get: function () {
            return this._json.peer_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "psk", {
        /**
         * Get vpn's psk
         * @returns {string}
         */
        get: function () {
            return this._json.psk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "encryptionAlgorithm", {
        /**
         * Get encryption algorithm
         * @returns {EncryptionAlgorithm}
         */
        get: function () {
            return this._json.encryption_algorithm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "authenticationMode", {
        /**
         * Get authentication mode
         * @returns {AuthenticationMode}
         */
        get: function () {
            return this._json.authentication_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "enablePfs", {
        /**
         * Get enable pfs
         * @returns {boolean}
         */
        get: function () {
            return this._json.enable_pfs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "dhGroup", {
        /**
         * Get DH Group
         * @returns {DHGroup}
         */
        get: function () {
            return this._json.dh_group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "localSubnets", {
        /**
         * Get local subnets
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.local_subnets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "peerSubnets", {
        /**
         * Get peer subnets
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.peer_subnets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnSite.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {IpSecVpnSiteJson}
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
    IpSecVpnSite.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpSecVpnSite;
}());
exports.IpSecVpnSite = IpSecVpnSite;
