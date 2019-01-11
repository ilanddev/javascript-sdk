"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inbox Mark All As Read Request.
 */
/* istanbul ignore next: autogenerated */
var InboxMarkAllAsReadRequest = (function () {
    function InboxMarkAllAsReadRequest(firstParam) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                folder: firstParam
            };
        }
        else if (firstParam instanceof InboxMarkAllAsReadRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(InboxMarkAllAsReadRequest.prototype, "folder", {
        /**
         * Get folder.
         * @returns {MessageFolder}
         */
        get: function () {
            return this._json.folder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InboxMarkAllAsReadRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {InboxMarkAllAsReadRequestJson}
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
    InboxMarkAllAsReadRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return InboxMarkAllAsReadRequest;
}());
exports.InboxMarkAllAsReadRequest = InboxMarkAllAsReadRequest;
