"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var edge_ssl_vpn_authentication_1 = require("./edge-ssl-vpn-authentication");
var edge_ssl_vpn_client_install_package_1 = require("./edge-ssl-vpn-client-install-package");
var edge_ssl_vpn_ip_pool_1 = require("./edge-ssl-vpn-ip-pool");
var edge_ssl_vpn_local_authentication_server_1 = require("./edge-ssl-vpn-local-authentication-server");
var edge_ssl_vpn_private_network_1 = require("./edge-ssl-vpn-private-network");
var edge_ssl_vpn_user_1 = require("./edge-ssl-vpn-user");
/**
 * EdgeSslVpnService class
 */
/* istanbul ignore next: autogenerated */
var EdgeSslVpnService = (function () {
    function EdgeSslVpnService(_json) {
        this._json = _json;
    }
    Object.defineProperty(EdgeSslVpnService.prototype, "edgeUuid", {
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
    Object.defineProperty(EdgeSslVpnService.prototype, "enabled", {
        /**
         * Get enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "logEnabled", {
        /**
         * Get log enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.log_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "logLevel", {
        /**
         * Get log level.
         * @returns {string}
         */
        get: function () {
            return this._json.log_level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "ip", {
        /**
         * Get ip.
         * @returns {string}
         */
        get: function () {
            return this._json.ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "port", {
        /**
         * Get port.
         * @returns {number}
         */
        get: function () {
            return this._json.port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "cipherList", {
        /**
         * Get cipher list.
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.cipher_list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "privateNetworks", {
        /**
         * Get private networks.
         * @returns {Array<EdgeSslVpnPrivateNetwork>}
         */
        get: function () {
            return this._json.private_networks.map(function (network) { return new edge_ssl_vpn_private_network_1.EdgeSslVpnPrivateNetwork(network); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "users", {
        /**
         * Get users.
         * @returns {Array<EdgeSslVpnUser>}
         */
        get: function () {
            return this._json.users.map(function (user) { return new edge_ssl_vpn_user_1.EdgeSslVpnUser(user); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "ipPools", {
        /**
         * Get ip pools.
         * @returns {Array<EdgeSslVpnIpPool>}
         */
        get: function () {
            return this._json.ip_pools.map(function (pool) { return new edge_ssl_vpn_ip_pool_1.EdgeSslVpnIpPool(pool); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "clientInstallPackages", {
        /**
         * Get client install packages.
         * @returns {Array<EdgeSslVpnClientInstallPackage>}
         */
        get: function () {
            return this._json.client_install_packages.map(function (data) { return new edge_ssl_vpn_client_install_package_1.EdgeSslVpnClientInstallPackage(data); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "authenticationConfig", {
        /**
         * Get authentication config.
         * @returns {EdgeSslVpnLocalAuthenticationServerJson}
         */
        get: function () {
            return new edge_ssl_vpn_local_authentication_server_1.EdgeSslVpnLocalAuthenticationServer(this._json.authentication_config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "authentication", {
        /**
         * Get authentication.
         * @returns {EdgeSslVpnAuthentication}
         */
        get: function () {
            return new edge_ssl_vpn_authentication_1.EdgeSslVpnAuthentication(this._json.authentication);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnService.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {EdgeSslVpnServiceJson}
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
    EdgeSslVpnService.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return EdgeSslVpnService;
}());
exports.EdgeSslVpnService = EdgeSslVpnService;
