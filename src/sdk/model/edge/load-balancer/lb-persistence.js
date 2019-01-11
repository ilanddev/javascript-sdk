"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LbPersistence class
 */
var LbPersistence = (function () {
    function LbPersistence(_json) {
        this._json = _json;
    }
    Object.defineProperty(LbPersistence.prototype, "method", {
        /**
         * Get method
         * @returns {string | null}
         */
        get: function () {
            return this._json.method;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPersistence.prototype, "cookieName", {
        /**
         * Get cookie name
         * @returns {string | null}
         */
        get: function () {
            return this._json.cookie_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPersistence.prototype, "cookieMode", {
        /**
         * Get cookie mode
         * @returns {string | null}
         */
        get: function () {
            return this._json.cookie_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPersistence.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LbPersistenceJson}
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
    LbPersistence.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LbPersistence;
}());
exports.LbPersistence = LbPersistence;
