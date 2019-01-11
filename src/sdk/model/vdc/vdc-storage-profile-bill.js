"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Storage Profile Bill.
 */
/* istanbul ignore next: autogenerated */
var StorageProfileBill = (function () {
    function StorageProfileBill(_json) {
        this._json = _json;
    }
    Object.defineProperty(StorageProfileBill.prototype, "storageProfileUuid", {
        /**
         * Get storage profile uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.storage_profile_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "totalUsage", {
        /**
         * Get total usage.
         * @returns {number}
         */
        get: function () {
            return this._json.total_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "totalCost", {
        /**
         * Get total cost.
         * @returns {number}
         */
        get: function () {
            return this._json.total_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "resUsage", {
        /**
         * Get res usage.
         * @returns {number}
         */
        get: function () {
            return this._json.res_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "resCost", {
        /**
         * Get res cost.
         * @returns {number}
         */
        get: function () {
            return this._json.res_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "burstUsage", {
        /**
         * Get burst usage.
         * @returns {number}
         */
        get: function () {
            return this._json.burst_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "burstCost", {
        /**
         * Get burst cost.
         * @returns {number}
         */
        get: function () {
            return this._json.burst_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "vmUsage", {
        /**
         * Get vm usage.
         * @returns {number}
         */
        get: function () {
            return this._json.vm_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "catalogUsage", {
        /**
         * Get catalog usage.
         * @returns {number}
         */
        get: function () {
            return this._json.catalog_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProfileBill.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {StorageProfileBillJson}
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
    StorageProfileBill.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return StorageProfileBill;
}());
exports.StorageProfileBill = StorageProfileBill;
