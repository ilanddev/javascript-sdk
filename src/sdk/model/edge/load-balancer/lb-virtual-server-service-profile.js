"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lb_persistence_1 = require("./lb-persistence");
/**
 * LbVirtualServerServiceProfile class
 */
var LbVirtualServerServiceProfile = (function () {
    function LbVirtualServerServiceProfile(_json) {
        this._json = _json;
    }
    Object.defineProperty(LbVirtualServerServiceProfile.prototype, "enabled", {
        /**
         * Check weather profile is enabled or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbVirtualServerServiceProfile.prototype, "protocol", {
        /**
         * Get protocol
         * @returns {string | null}
         */
        get: function () {
            return this._json.protocol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbVirtualServerServiceProfile.prototype, "port", {
        /**
         * Get port
         * @returns {string | null}
         */
        get: function () {
            return this._json.port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbVirtualServerServiceProfile.prototype, "persistence", {
        /**
         * Get persistence
         * @returns {LbPersistence | null}
         */
        get: function () {
            return new lb_persistence_1.LbPersistence(this._json.persistence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbVirtualServerServiceProfile.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LbVirtualServerServiceProfileJson}
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
    LbVirtualServerServiceProfile.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LbVirtualServerServiceProfile;
}());
exports.LbVirtualServerServiceProfile = LbVirtualServerServiceProfile;
