"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wan_accelerator_1 = require("../wan-accelerator/wan-accelerator");
/**
 * Cloud Repository.
 */
var CloudRepository = (function () {
    function CloudRepository(_json) {
        this._json = _json;
    }
    Object.defineProperty(CloudRepository.prototype, "displayName", {
        /**
         * Gets the display name for the Cloud Repository
         * @returns {string} display name
         */
        get: function () {
            return this._json.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudRepository.prototype, "quota", {
        /**
         * Gets the quota for the Cloud Repository
         * @returns {number} quota
         */
        get: function () {
            return this._json.quota;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudRepository.prototype, "usedQuota", {
        /**
         * Gets the used quota for the Cloud Repository
         * @returns {number} used quota
         */
        get: function () {
            return this._json.used_quota;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudRepository.prototype, "wanAcceleratorUuid", {
        /**
         * Gets the Wan Accelerator uuid for the Cloud Repository
         * @returns {string} wan accelerator uuid
         */
        get: function () {
            return this._json.wan_accelerator_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudRepository.prototype, "wanAccelerator", {
        /**
         * Gets the Wan Accelerator object for the Cloud Repository
         * @returns {WanAccelerator} wan accelerator
         */
        get: function () {
            return (this._json.wan_accelerator ? new wan_accelerator_1.WanAccelerator(this._json.wan_accelerator) : null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    CloudRepository.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(CloudRepository.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {CloudRepositoryJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return CloudRepository;
}());
exports.CloudRepository = CloudRepository;
