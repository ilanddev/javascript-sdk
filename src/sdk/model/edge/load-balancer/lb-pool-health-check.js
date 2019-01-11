"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LbPoolHealthCheck class
 */
var LbPoolHealthCheck = (function () {
    function LbPoolHealthCheck(_json) {
        this._json = _json;
    }
    Object.defineProperty(LbPoolHealthCheck.prototype, "mode", {
        /**
         * Get mode
         * @returns {string | null}
         */
        get: function () {
            return this._json.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolHealthCheck.prototype, "uri", {
        /**
         * Get uri
         * @returns {string | null}
         */
        get: function () {
            return this._json.uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolHealthCheck.prototype, "healthThreshold", {
        /**
         * Get health threshold
         * @returns {string | null}
         */
        get: function () {
            return this._json.health_threshold;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolHealthCheck.prototype, "unhealthThreshold", {
        /**
         * Get unhealth threshold
         * @returns {string | null}
         */
        get: function () {
            return this._json.unhealth_threshold;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolHealthCheck.prototype, "interval", {
        /**
         * Get interval
         * @returns {string | null}
         */
        get: function () {
            return this._json.interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolHealthCheck.prototype, "timeout", {
        /**
         * Get timeout
         * @returns {string | null}
         */
        get: function () {
            return this._json.timeout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolHealthCheck.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LbPoolHealthCheckJson}
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
    LbPoolHealthCheck.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LbPoolHealthCheck;
}());
exports.LbPoolHealthCheck = LbPoolHealthCheck;
