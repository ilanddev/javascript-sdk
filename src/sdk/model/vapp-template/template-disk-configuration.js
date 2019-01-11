"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Template Disk Configuration.
 */
/* istanbul ignore next: autogenerated */
var TemplateDiskConfiguration = (function () {
    function TemplateDiskConfiguration(_json) {
        this._json = _json;
    }
    Object.defineProperty(TemplateDiskConfiguration.prototype, "name", {
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
    Object.defineProperty(TemplateDiskConfiguration.prototype, "sizeInBytes", {
        /**
         * Get size in bytes.
         * @returns {number}
         */
        get: function () {
            return this._json.size_in_bytes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemplateDiskConfiguration.prototype, "diskType", {
        /**
         * Get disk type.
         * @returns {DiskType}
         */
        get: function () {
            return this._json.disk_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemplateDiskConfiguration.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {TemplateDiskConfigurationJson}
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
    TemplateDiskConfiguration.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return TemplateDiskConfiguration;
}());
exports.TemplateDiskConfiguration = TemplateDiskConfiguration;
