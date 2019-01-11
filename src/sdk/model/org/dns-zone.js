"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DNS Zone.
 */
var DnsZone = (function () {
    function DnsZone(_json) {
        this._json = _json;
    }
    Object.defineProperty(DnsZone.prototype, "id", {
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
    Object.defineProperty(DnsZone.prototype, "name", {
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
    Object.defineProperty(DnsZone.prototype, "resourceId", {
        /**
         * Get resource id.
         * @returns {number}
         */
        get: function () {
            return this._json.resource_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "serial", {
        /**
         * Get serial.
         * @returns {number}
         */
        get: function () {
            return this._json.serial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "refresh", {
        /**
         * Get refresh.
         * @returns {number}
         */
        get: function () {
            return this._json.refresh;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "retry", {
        /**
         * Get retry.
         * @returns {number}
         */
        get: function () {
            return this._json.retry;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "expire", {
        /**
         * Get expire.
         * @returns {number}
         */
        get: function () {
            return this._json.expire;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "minimum", {
        /**
         * Get minimum.
         * @returns {number}
         */
        get: function () {
            return this._json.minimum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "soa", {
        /**
         * Get soa.
         * @returns {string}
         */
        get: function () {
            return this._json.soa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "tags", {
        /**
         * Get tags.
         * @returns {string}
         */
        get: function () {
            return this._json.tags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "ttl", {
        /**
         * Get ttl.
         * @returns {string}
         */
        get: function () {
            return this._json.ttl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "enableDnsSec", {
        /**
         * Get enable dns sec.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enable_dns_sec;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "autoCheck", {
        /**
         * Get auto check.
         * @returns {boolean}
         */
        get: function () {
            return this._json.auto_check;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordId", {
        /**
         * Get record id.
         * @returns {number}
         */
        get: function () {
            return this._json.record_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordHost", {
        /**
         * Get record host.
         * @returns {string}
         */
        get: function () {
            return this._json.record_host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordType", {
        /**
         * Get record type.
         * @returns {DNSRecordType}
         */
        get: function () {
            return this._json.record_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordValue", {
        /**
         * Get record value.
         * @returns {string}
         */
        get: function () {
            return this._json.record_value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordDescription", {
        /**
         * Get record description.
         * @returns {string}
         */
        get: function () {
            return this._json.record_description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordTtl", {
        /**
         * Get record ttl.
         * @returns {string}
         */
        get: function () {
            return this._json.record_ttl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordOrdering", {
        /**
         * Get record ordering.
         * @returns {number}
         */
        get: function () {
            return this._json.record_ordering;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "recordErrors", {
        /**
         * Get record errors.
         * @returns {string}
         */
        get: function () {
            return this._json.record_errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "userCanCreate", {
        /**
         * Get user can create.
         * @returns {boolean}
         */
        get: function () {
            return this._json.user_can_create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "userCanDelete", {
        /**
         * Get user can delete.
         * @returns {boolean}
         */
        get: function () {
            return this._json.user_can_delete;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "userCanUpdate", {
        /**
         * Get user can update.
         * @returns {boolean}
         */
        get: function () {
            return this._json.user_can_update;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "unpagedRows", {
        /**
         * Get unpaged rows.
         * @returns {number}
         */
        get: function () {
            return this._json.unpaged_rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnsZone.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {DnsZoneJson}
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
    DnsZone.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return DnsZone;
}());
exports.DnsZone = DnsZone;
