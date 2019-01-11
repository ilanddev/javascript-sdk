"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Metadata.
 */
var Metadata = (function () {
    function Metadata(_json) {
        this._json = _json;
    }
    Object.defineProperty(Metadata.prototype, "key", {
        /**
         * Gets the metadata key.
         * @returns {string} the key
         */
        get: function () {
            return this._json.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "access", {
        /**
         * Gets the metadata's access restriction type.
         * @returns {MetadataAccessMode} the type of access restriction
         */
        get: function () {
            return this._json.access;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "type", {
        /**
         * Gets the type of the metadata.
         * @returns {VirtualDiskType} the type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "value", {
        /**
         * Gets the metadata value.
         * @returns {} the type
         */
        get: function () {
            return this._json.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Metadata.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Metadata.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {MetadataJson} the API JSON representation of the metadata
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Metadata;
}());
exports.Metadata = Metadata;
