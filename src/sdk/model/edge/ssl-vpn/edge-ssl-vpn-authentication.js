"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var edge_ssl_vpn_ldap_authentication_server_1 = require("./edge-ssl-vpn-ldap-authentication-server");
var edge_ssl_vpn_ad_authentication_server_1 = require("./edge-ssl-vpn-ad-authentication-server");
var edge_ssl_vpn_local_authentication_server_1 = require("./edge-ssl-vpn-local-authentication-server");
var edge_ssl_vpn_radius_authentication_server_1 = require("./edge-ssl-vpn-radius-authentication-server");
var edge_ssl_vpn_rsa_authentication_server_1 = require("./edge-ssl-vpn-rsa-authentication-server");
/**
 * EdgeSslVpnAuthentication class
 */
var EdgeSslVpnAuthentication = (function () {
    function EdgeSslVpnAuthentication(_json) {
        this._json = _json;
    }
    Object.defineProperty(EdgeSslVpnAuthentication.prototype, "authenticationServers", {
        /**
         * Get a list of authentication servers
         * @returns {Array<EdgeSslVpnAuthenticationServer>}
         */
        get: function () {
            var authServers = [];
            for (var _i = 0, _a = this._json.authentication_servers; _i < _a.length; _i++) {
                var authServer = _a[_i];
                switch (authServer.type) {
                    case 'LOCAL':
                        authServers
                            .push(new edge_ssl_vpn_local_authentication_server_1.EdgeSslVpnLocalAuthenticationServer(authServer));
                        break;
                    case 'LDAP':
                        authServers
                            .push(new edge_ssl_vpn_ldap_authentication_server_1.EdgeSslVpnLdapAuthenticationServer(authServer));
                        break;
                    case 'AD':
                        authServers
                            .push(new edge_ssl_vpn_ad_authentication_server_1.EdgeSslVpnAdAuthenticationServer(authServer));
                        break;
                    case 'RADIUS':
                        authServers
                            .push(new edge_ssl_vpn_radius_authentication_server_1.EdgeSslVpnRadiusAuthenticationServer(authServer));
                        break;
                    case 'RSA':
                        authServers
                            .push(new edge_ssl_vpn_rsa_authentication_server_1.EdgeSslVpnRsaAuthenticationServer(authServer));
                        break;
                }
            }
            return authServers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnAuthentication.prototype, "secondaryAuthenticationServer", {
        /**
         * Get secondary authentication server
         * @returns {EdgeSslVpnAuthenticationServer | null}
         */
        get: function () {
            var authServer = this._json.secondary_authentication_server;
            if (authServer) {
                switch (authServer.type) {
                    case 'LOCAL':
                        return new edge_ssl_vpn_local_authentication_server_1.EdgeSslVpnLocalAuthenticationServer(authServer);
                    case 'LDAP':
                        return new edge_ssl_vpn_ldap_authentication_server_1.EdgeSslVpnLdapAuthenticationServer(authServer);
                    case 'AD':
                        return new edge_ssl_vpn_ad_authentication_server_1.EdgeSslVpnAdAuthenticationServer(authServer);
                    case 'RADIUS':
                        return new edge_ssl_vpn_radius_authentication_server_1.EdgeSslVpnRadiusAuthenticationServer(authServer);
                    case 'RSA':
                        return new edge_ssl_vpn_rsa_authentication_server_1.EdgeSslVpnRsaAuthenticationServer(authServer);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnAuthentication.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {EdgeSslVpnAuthenticationJson}
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
    EdgeSslVpnAuthentication.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return EdgeSslVpnAuthentication;
}());
exports.EdgeSslVpnAuthentication = EdgeSslVpnAuthentication;
