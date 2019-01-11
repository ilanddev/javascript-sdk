"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Message Count.
 */
/* istanbul ignore next: autogenerated */
var MessageCount = (function () {
    function MessageCount(_json) {
        this._json = _json;
    }
    Object.defineProperty(MessageCount.prototype, "count", {
        /**
         * Get count.
         * @returns {number}
         */
        get: function () {
            return this._json.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageCount.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {MessageCountJson}
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
    MessageCount.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return MessageCount;
}());
exports.MessageCount = MessageCount;
