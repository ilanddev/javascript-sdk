"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip_sec_vpn_subnet_1 = require("./ip-sec-vpn-subnet");
var ip_sec_vpn_peer_1 = require("./ip-sec-vpn-peer");
/**
 * IpSecVpnTunnel class
 */
var IpSecVpnTunnel = (function () {
    function IpSecVpnTunnel(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpSecVpnTunnel.prototype, "name", {
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
    Object.defineProperty(IpSecVpnTunnel.prototype, "description", {
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
    Object.defineProperty(IpSecVpnTunnel.prototype, "peerIpAddress", {
        /**
         * Get peer IP address
         * @returns {string | null}
         */
        get: function () {
            return this._json.peer_ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "peerId", {
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
    Object.defineProperty(IpSecVpnTunnel.prototype, "localId", {
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
    Object.defineProperty(IpSecVpnTunnel.prototype, "localIpAddress", {
        /**
         * Get local IP address
         * @returns {string | null}
         */
        get: function () {
            return this._json.local_ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "sharedSecret", {
        /**
         * Get shared secret
         * @returns {string | null}
         */
        get: function () {
            return this._json.shared_secret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "sharedSecretEncrypted", {
        /**
         * Check weather IpSecVpnTunnel shared secret is encrypted or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.shared_secret_encrypted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "encryptionProtocol", {
        /**
         * Get encryption protocol
         * @returns {string | null}
         */
        get: function () {
            return this._json.encryption_protocol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "mtu", {
        /**
         * Get mtu
         * @returns {number | null}
         */
        get: function () {
            return this._json.mtu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "enabled", {
        /**
         * Check weather IpSecVpnTunnel is enabled or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "operational", {
        /**
         * Check weather IpSecVpnTunnel is operational or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.operational;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "errorDetails", {
        /**
         * Get error details
         * @returns {string | null}
         */
        get: function () {
            return this._json.error_details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "localSubnets", {
        /**
         * Get list of localSubnet
         * @returns {Array<IpSecVpnSubnet>}
         */
        get: function () {
            return this._json.local_subnets.map(function (subnet) { return new ip_sec_vpn_subnet_1.IpSecVpnSubnet(subnet); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "peerSubnets", {
        /**
         * Get list of peerSubnet
         * @returns {Array<IpSecVpnSubnet>}
         */
        get: function () {
            return this._json.peer_subnets.map(function (subnet) { return new ip_sec_vpn_subnet_1.IpSecVpnSubnet(subnet); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "vpnPeer", {
        /**
         * Get vpn peer
         * @returns {IpSecVpnPeer | null}
         */
        get: function () {
            return this._json.vpn_peer ? new ip_sec_vpn_peer_1.IpSecVpnPeer(this._json.vpn_peer) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpSecVpnTunnel.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeIpSecVpnTunnelJson}
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
    IpSecVpnTunnel.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IpSecVpnTunnel;
}());
exports.IpSecVpnTunnel = IpSecVpnTunnel;
