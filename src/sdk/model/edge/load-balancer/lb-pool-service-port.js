"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lb_pool_health_check_1 = require("./lb-pool-health-check");
/**
 * LbPoolServicePort class
 */
var LbPoolServicePort = (function () {
    function LbPoolServicePort(_json) {
        this._json = _json;
    }
    Object.defineProperty(LbPoolServicePort.prototype, "enabled", {
        /**
         * Check weather LbPoolServicePort is enabled or not.
         * @returns {boolean | null}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolServicePort.prototype, "protocol", {
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
    Object.defineProperty(LbPoolServicePort.prototype, "algorithm", {
        /**
         * Get algorithm
         * @returns {string | null}
         */
        get: function () {
            return this._json.algorithm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolServicePort.prototype, "port", {
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
    Object.defineProperty(LbPoolServicePort.prototype, "healthCheckPort", {
        /**
         * Get health check port
         * @returns {string | null}
         */
        get: function () {
            return this._json.health_check_port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolServicePort.prototype, "healthChecks", {
        /**
         * Get list of health checks.
         * @returns {Array<LbPoolHealthCheck>}
         */
        get: function () {
            return this._json.health_checks
                .map(function (lbPoolHealthCheck) { return new lb_pool_health_check_1.LbPoolHealthCheck(lbPoolHealthCheck); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LbPoolServicePort.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {LbPoolServicePortJson}
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
    LbPoolServicePort.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return LbPoolServicePort;
}());
exports.LbPoolServicePort = LbPoolServicePort;
