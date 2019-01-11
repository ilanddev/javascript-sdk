"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Basic configurations for SDK using environment variables.
 */
var BasicConfiguration = (function () {
    function BasicConfiguration() {
    }
    /**
     * Get the default API url.
     * @returns {string}
     */
    BasicConfiguration.getApiUrl = function () {
        if (process.env.ILAND_API_URL && process.env.ILAND_API_URL !== 'undefined') {
            return process.env.ILAND_API_URL;
        }
        else {
            return 'https://api.ilandcloud.com';
        }
    };
    /**
     * Get the default authorisation url.
     * @returns {string}
     */
    BasicConfiguration.getAuthorizationUrl = function () {
        if (process.env.ILAND_AUTHORIZATION_URL && process.env.ILAND_AUTHORIZATION_URL !== 'undefined') {
            return process.env.ILAND_AUTHORIZATION_URL;
        }
        else {
            return 'https://console.ilandcloud.com';
        }
    };
    return BasicConfiguration;
}());
exports.BasicConfiguration = BasicConfiguration;
