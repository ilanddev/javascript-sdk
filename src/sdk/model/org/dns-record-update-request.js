"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dns Record Update Request.
 */
var DnsRecordUpdateRequest = (function () {
    function DnsRecordUpdateRequest(firstParam, zoneId, host, type, value, ipAddress, ttl, description, priority) {
        if (typeof firstParam === 'number') {
            // Parameters constructor
            this._json = {
                id: firstParam,
                zone_id: zoneId,
                host: host,
                type: type,
                value: value,
                ip_address: ipAddress,
                ttl: ttl,
                description: description,
                priority: priority
            };
        }
        else if (firstParam instanceof DnsRecordUpdateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "id", {
        /**
         * Get id.
         * @returns {number}
         */
        get: function () {
            return this._json.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "zoneId", {
        /**
         * Get zone id.
         * @returns {number}
         */
        get: function () {
            return this._json.zone_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "host", {
        /**
         * Get host.
         * @returns {string}
         */
        get: function () {
            return this._json.host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "type", {
        /**
         * Get type.
         * @returns {DnsRecordType}
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "value", {
        /**
         * Get value.
         * @returns {string}
         */
        get: function () {
            return this._json.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "ipAddress", {
        /**
         * Get ip address.
         * @returns {string}
         */
        get: function () {
            return this._json.ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "ttl", {
        /**
         * Get ttl.
         * @returns {number}
         */
        get: function () {
            return this._json.ttl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "description", {
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
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "priority", {
        /**
         * Get priority.
         * @returns {number}
         */
        get: function () {
            return this._json.priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecordUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {DnsRecordUpdateRequestJson}
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
    DnsRecordUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return DnsRecordUpdateRequest;
}());
exports.DnsRecordUpdateRequest = DnsRecordUpdateRequest;
