"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Org vApp Lease Update Request.
 */
/* istanbul ignore next: autogenerated */
var OrgVappLeaseUpdateRequest = (function () {
    function OrgVappLeaseUpdateRequest(firstParam, vappMaxRuntimeLease, vappMaxStorageLease) {
        if (typeof firstParam === 'boolean') {
            // Parameters constructor
            this._json = {
                vapp_delete_on_storage_expire: firstParam,
                vapp_max_runtime_lease: vappMaxRuntimeLease,
                vapp_max_storage_lease: vappMaxStorageLease
            };
        }
        else if (firstParam instanceof OrgVappLeaseUpdateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(OrgVappLeaseUpdateRequest.prototype, "vappDeleteOnStorageExpire", {
        /**
         * Get vapp delete on storage expire.
         * @returns {boolean}
         */
        get: function () {
            return this._json.vapp_delete_on_storage_expire;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrgVappLeaseUpdateRequest.prototype, "vappMaxRuntimeLease", {
        /**
         * Get vapp max runtime lease.
         * @returns {number}
         */
        get: function () {
            return this._json.vapp_max_runtime_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrgVappLeaseUpdateRequest.prototype, "vappMaxStorageLease", {
        /**
         * Get vapp max storage lease.
         * @returns {number}
         */
        get: function () {
            return this._json.vapp_max_storage_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrgVappLeaseUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {OrgVappLeaseUpdateRequestJson}
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
    OrgVappLeaseUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return OrgVappLeaseUpdateRequest;
}());
exports.OrgVappLeaseUpdateRequest = OrgVappLeaseUpdateRequest;
