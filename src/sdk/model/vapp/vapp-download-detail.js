"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next: autogenerated */
var VappDownloadDetails = (function () {
    function VappDownloadDetails(_json) {
        this._json = _json;
    }
    Object.defineProperty(VappDownloadDetails.prototype, "enabled", {
        /**
         * Get enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappDownloadDetails.prototype, "downloadName", {
        /**
         * Get download name.
         * @returns {string}
         */
        get: function () {
            return this._json.download_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappDownloadDetails.prototype, "downloadSizeBytes", {
        /**
         * Get download size bytes.
         * @returns {number}
         */
        get: function () {
            return this._json.download_size_bytes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappDownloadDetails.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {DownloadDetailsJson}
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
    VappDownloadDetails.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VappDownloadDetails;
}());
exports.VappDownloadDetails = VappDownloadDetails;
