"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DIsaster recovery runbook abort request.
 */
/* istanbul ignore next: autogenerated */
var DisasterRecoveryRunbookAbortRequest = (function () {
    function DisasterRecoveryRunbookAbortRequest(firstParam) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                task_uuid: firstParam
            };
        }
        else if (firstParam instanceof DisasterRecoveryRunbookAbortRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(DisasterRecoveryRunbookAbortRequest.prototype, "taskUuid", {
        /**
         * Get task uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.task_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DisasterRecoveryRunbookAbortRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {DisasterRecoveryRunbookAbortRequestJson}
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
    DisasterRecoveryRunbookAbortRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return DisasterRecoveryRunbookAbortRequest;
}());
exports.DisasterRecoveryRunbookAbortRequest = DisasterRecoveryRunbookAbortRequest;
