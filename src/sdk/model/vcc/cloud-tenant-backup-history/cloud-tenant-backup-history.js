"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Cloud Tenant Backup History.
 */
var CloudTenantBackupHistory = (function () {
    function CloudTenantBackupHistory(_json) {
        this._json = _json;
    }
    Object.defineProperty(CloudTenantBackupHistory.prototype, "lastResult", {
        /**
         * Get last result
         * @returns {string}
         */
        get: function () {
            return this._json.last_result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenantBackupHistory.prototype, "lastActive", {
        /**
         * Get last active
         * @returns {number}
         */
        get: function () {
            return this._json.last_active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the string representation of the class.
     * @returns {string}
     */
    CloudTenantBackupHistory.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(CloudTenantBackupHistory.prototype, "json", {
        /**
         * Get the JSON representation of this class.
         * @returns {CloudTenantBackupHistoryJson}
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return CloudTenantBackupHistory;
}());
exports.CloudTenantBackupHistory = CloudTenantBackupHistory;
