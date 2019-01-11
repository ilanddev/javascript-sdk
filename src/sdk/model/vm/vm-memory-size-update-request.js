"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VmMemorySizeUpdateRequest = (function () {
    function VmMemorySizeUpdateRequest(firstParam) {
        if (typeof firstParam === 'number') {
            // Parameters constructor
            this._json = {
                memory_size: firstParam
            };
        }
        else if (firstParam instanceof VmMemorySizeUpdateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(VmMemorySizeUpdateRequest.prototype, "memorySize", {
        /**
         * Get memory size.
         * @returns {string}
         */
        get: function () {
            return Number(this._json.memory_size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmMemorySizeUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VmMemorySizeUpdateRequestJson}
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
    VmMemorySizeUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VmMemorySizeUpdateRequest;
}());
exports.VmMemorySizeUpdateRequest = VmMemorySizeUpdateRequest;
