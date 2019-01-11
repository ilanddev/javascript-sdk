"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wan Accelerator.
 */
var WanAccelerator = (function () {
    function WanAccelerator(_json) {
        this._json = _json;
    }
    Object.defineProperty(WanAccelerator.prototype, "name", {
        /**
         * Gets the name of the Wan Accelerator
         * @returns {string} name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WanAccelerator.prototype, "description", {
        /**
         * Gets the description of the Wan Accelerator
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WanAccelerator.prototype, "outOfDate", {
        /**
         * Gets the is ouf of date of the Wan Accelerator
         * @returns {boolean} is out of date
         */
        get: function () {
            return this._json.out_of_date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WanAccelerator.prototype, "version", {
        /**
         * Gets the version of the Wan Accelerator
         * @returns {string} version
         */
        get: function () {
            return this._json.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WanAccelerator.prototype, "capacity", {
        /**
         * Gets the capacity of the Wan Accelerator
         * @returns {number} capacity
         */
        get: function () {
            return this._json.capacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WanAccelerator.prototype, "trafficPort", {
        /**
         * Gets the traffic port of the Wan Accelerator
         * @returns {number} port
         */
        get: function () {
            return this._json.traffic_port;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WanAccelerator.prototype, "connectionCount", {
        /**
         * Gets the connection count of the Wan Accelerator
         * @returns {number} count
         */
        get: function () {
            return this._json.connection_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WanAccelerator.prototype, "cachePath", {
        /**
         * Gets the cache path of the Wan Accelerator
         * @returns {string} cache path
         */
        get: function () {
            return this._json.cache_path;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    WanAccelerator.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(WanAccelerator.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {WanAcceleratorJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return WanAccelerator;
}());
exports.WanAccelerator = WanAccelerator;
