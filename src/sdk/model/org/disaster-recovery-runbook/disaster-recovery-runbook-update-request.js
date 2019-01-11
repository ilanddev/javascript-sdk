"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recovery_group_descriptor_1 = require("./recovery-group-descriptor");
/**
 * Disaster recovery runbook update request.
 */
/* istanbul ignore next: autogenerated */
var DisasterRecoveryRunbookUpdateRequest = (function () {
    function DisasterRecoveryRunbookUpdateRequest(firstParam, description, recoveryGroups) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                name: firstParam,
                description: description,
                recovery_groups: recoveryGroups
            };
        }
        else if (firstParam instanceof DisasterRecoveryRunbookUpdateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(DisasterRecoveryRunbookUpdateRequest.prototype, "name", {
        /**
         * Get name.
         * @returns {string}
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisasterRecoveryRunbookUpdateRequest.prototype, "description", {
        /**
         * Get description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisasterRecoveryRunbookUpdateRequest.prototype, "recoveryGroups", {
        /**
         * Get recovery groups.
         * @returns {Array<RecoveryGroupDescriptor>}
         */
        get: function () {
            return this._json.recovery_groups.map(function (rGroup) {
                return new recovery_group_descriptor_1.RecoveryGroupDescriptor(rGroup);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisasterRecoveryRunbookUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {DisasterRecoveryRunbookUpdateRequestJson}
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
    DisasterRecoveryRunbookUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return DisasterRecoveryRunbookUpdateRequest;
}());
exports.DisasterRecoveryRunbookUpdateRequest = DisasterRecoveryRunbookUpdateRequest;
