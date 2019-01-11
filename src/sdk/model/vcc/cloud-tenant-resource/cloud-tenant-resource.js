"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloud_repository_1 = require("../cloud-repository/cloud-repository");
/**
 * Cloud Tenant Resource.
 */
var CloudTenantResource = (function () {
    function CloudTenantResource(_json) {
        this._json = _json;
    }
    Object.defineProperty(CloudTenantResource.prototype, "repository", {
        /**
         * Gets a CloudRepository object
         * @returns {CloudRepository} cloud repository object
         */
        get: function () {
            return new cloud_repository_1.CloudRepository(this._json.repository);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    CloudTenantResource.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(CloudTenantResource.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {CloudTenantResourceJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return CloudTenantResource;
}());
exports.CloudTenantResource = CloudTenantResource;
