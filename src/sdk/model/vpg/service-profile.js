"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Service Profile
 */
var ServiceProfile = (function () {
    function ServiceProfile(_json) {
        this._json = _json;
    }
    Object.defineProperty(ServiceProfile.prototype, "uuid", {
        /**
         * Get uuid for Service Profile
         * @returns {string} uuid
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "location", {
        /**
         * Get location for Service Profile
         * @returns {string} location
         */
        get: function () {
            return this._json.location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "serviceProfileIdentifier", {
        /**
         * Get identifier for Service Profile
         * @returns {string} identifier
         */
        get: function () {
            return this._json.service_profile_identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "serviceProfileName", {
        /**
         * Get name for Service Profile
         * @returns {string} name
         */
        get: function () {
            return this._json.service_profile_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "description", {
        /**
         * Get description for Service Profile
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "history", {
        /**
         * Get history for Service Profile
         * @returns {number} history
         */
        get: function () {
            return this._json.history;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "maxJournalSizeInPercent", {
        /**
         * Get max journal size in percent for Service Profile
         * @returns {number}  max journal size in percent
         */
        get: function () {
            return this._json.max_journal_size_in_percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "rpo", {
        /**
         * Get rpo for Service Profile
         * @returns {number} rpo
         */
        get: function () {
            return this._json.rpo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceProfile.prototype, "testInterval", {
        /**
         * Get test interval for Service Profile
         * @returns {number} test interval
         */
        get: function () {
            return this._json.test_interval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    ServiceProfile.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(ServiceProfile.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {ServiceProfileJson} the API object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return ServiceProfile;
}());
exports.ServiceProfile = ServiceProfile;
