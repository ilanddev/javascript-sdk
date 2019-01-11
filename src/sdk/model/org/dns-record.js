"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DNS Record.
 */
var DnsRecord = (function () {
    function DnsRecord(_json) {
        this._json = _json;
    }
    Object.defineProperty(DnsRecord.prototype, "id", {
        /**
         * Gets the ID of the DNS record.
         * @returns {number}
         */
        get: function () {
            return this._json.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "zoneId", {
        /**
         * Gets the zone ID of the record.
         * @returns {number}
         */
        get: function () {
            return this._json.zone_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "zoneName", {
        /**
         * Gets the name of the zone that the record is associated with.
         * @returns {string}
         */
        get: function () {
            return this._json.zone_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "host", {
        /**
         * Gets the host string.
         * @returns {string}
         */
        get: function () {
            return this._json.host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "description", {
        /**
         * Gets the record description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "ttl", {
        /**
         * Gets the TTL setting of the record or undefined if no TTL is set.
         * @returns {number | undefined}
         */
        get: function () {
            return this._json.ttl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "ordering", {
        /**
         * Gets the ordering string.
         * @returns {string}
         */
        get: function () {
            return this._json.ordering;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "ip", {
        /**
         * Gets the record IP address.
         * @returns {string}
         */
        get: function () {
            return this._json.ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "lastModified", {
        /**
         * Gets the last modified date.
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.last_modified);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "value", {
        /**
         * Gets the record value.
         * @returns {string}
         */
        get: function () {
            return this._json.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsRecord.prototype, "recordType", {
        /**
         * Gets the record's type.
         * @returns {DnsRecordType}
         */
        get: function () {
            return this._json.record_type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    DnsRecord.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(DnsRecord.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {DnsRecordJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return DnsRecord;
}());
exports.DnsRecord = DnsRecord;
