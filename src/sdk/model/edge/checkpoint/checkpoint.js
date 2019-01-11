"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checkpoint class
 */
var Checkpoint = (function () {
    function Checkpoint(_json) {
        this._json = _json;
    }
    Object.defineProperty(Checkpoint.prototype, "edgeUuid", {
        /**
         * Get edge uuid
         * @returns {string}
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkpoint.prototype, "uuid", {
        /**
         * Get uuid
         * @returns {string}
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkpoint.prototype, "time", {
        /**
         * Get time
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkpoint.prototype, "export", {
        /**
         * Get export
         * @returns {string | null}
         */
        get: function () {
            return this._json.export;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Checkpoint.prototype, "json", {
        /**
         * Get the __json__ representation of this class.
         * @returns {CheckpointJson}
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
    Checkpoint.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return Checkpoint;
}());
exports.Checkpoint = Checkpoint;
