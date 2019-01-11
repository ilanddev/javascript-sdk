"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DNS Record Create Request.
 */
var DnsRecordCreateRequest = (function () {
    function DnsRecordCreateRequest(firstParam, host, type, value, ipAddress, ttl, description, priority) {
        if (typeof firstParam === 'number') {
            // Parameters constructor
            this._json = {
                zone_id: firstParam,
                host: host,
                type: type,
                value: value,
                ip_address: ipAddress,
                ttl: ttl,
                description: description,
                priority: priority
            };
        }
        else if (firstParam instanceof DnsRecordCreateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(DnsRecordCreateRequest.prototype, "zoneId", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "host", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "type", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "value", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "ipAddress", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "ttl", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "description", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "priority", {
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
    Object.defineProperty(DnsRecordCreateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {DnsRecordCreateRequestJson}
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
    DnsRecordCreateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return DnsRecordCreateRequest;
}());
exports.DnsRecordCreateRequest = DnsRecordCreateRequest;
