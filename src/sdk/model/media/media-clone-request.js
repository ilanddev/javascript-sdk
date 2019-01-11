"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Role Creation Request Implementation.
 */
var MediaCloneRequest = (function () {
    function MediaCloneRequest(firstParam, storageProfileUuid, catalogUuid, mediaName) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                vdc_uuid: firstParam,
                storage_profile_uuid: storageProfileUuid,
                catalog_uuid: catalogUuid,
                media_name: mediaName
            };
        }
        else if (firstParam instanceof MediaCloneRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(MediaCloneRequest.prototype, "vdcUuid", {
        /**
         * Get vDC uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCloneRequest.prototype, "storageProfileUuid", {
        /**
         * Get Storage Profile uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.storage_profile_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCloneRequest.prototype, "catalogUuid", {
        /**
         * Get Catalog uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.catalog_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCloneRequest.prototype, "mediaName", {
        /**
         * Get Media name.
         * @returns {string}
         */
        get: function () {
            return this._json.media_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaCloneRequest.prototype, "json", {
        /**
         * Gets the raw JSON object.
         * @returns {MediaCloneRequestJson} the JSON representation
         */
        get: function () {
            return this._json;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    MediaCloneRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return MediaCloneRequest;
}());
exports.MediaCloneRequest = MediaCloneRequest;
