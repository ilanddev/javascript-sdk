"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Role Creation Request Implementation.
 */
var MediaUpdateRequest = (function () {
    function MediaUpdateRequest(firstParam, description, storageProfileUuid) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                name: firstParam,
                description: description,
                storage_profile_uuid: storageProfileUuid
            };
        }
        else if (firstParam instanceof MediaUpdateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(MediaUpdateRequest.prototype, "name", {
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
    Object.defineProperty(MediaUpdateRequest.prototype, "description", {
        /**
         * Get description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaUpdateRequest.prototype, "storageProfileUuid", {
        /**
         * Get storage profile ID.
         * @returns {string}
         */
        get: function () {
            return this._json.storage_profile_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaUpdateRequest.prototype, "json", {
        /**
         * Gets the raw JSON object.
         * @returns {MediaUpdateRequestJson} the JSON representation
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
    MediaUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return MediaUpdateRequest;
}());
exports.MediaUpdateRequest = MediaUpdateRequest;
