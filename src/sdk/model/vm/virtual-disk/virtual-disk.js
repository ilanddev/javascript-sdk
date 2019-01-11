"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Virtual Disk.
 */
var VirtualDisk = (function () {
    function VirtualDisk(_apiDisk) {
        this._apiDisk = _apiDisk;
    }
    Object.defineProperty(VirtualDisk.prototype, "name", {
        /**
         * Gets the name of the virtual disk.
         * @returns {string} the name
         */
        get: function () {
            return this._apiDisk.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDisk.prototype, "size", {
        /**
         * Gets the size of the virtual disk in MB.
         * @returns {number} size in MB
         */
        get: function () {
            return this._apiDisk.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDisk.prototype, "type", {
        /**
         * Gets the Virtual Hard Disk type.
         * @returns {DiskType} the type
         */
        get: function () {
            return this._apiDisk.type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    VirtualDisk.prototype.toString = function () {
        return JSON.stringify(this._apiDisk, undefined, 2);
    };
    Object.defineProperty(VirtualDisk.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VirtualDiskJson} the API virtual disk object
         */
        get: function () {
            return Object.assign({}, this._apiDisk);
        },
        enumerable: true,
        configurable: true
    });
    return VirtualDisk;
}());
exports.VirtualDisk = VirtualDisk;
