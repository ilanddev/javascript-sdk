"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ip_range_1 = require("../common/ip-range/ip-range");
var entity_1 = require("../common/entity");
/**
 * Abstract Network.
 */
var AbstractNetwork = (function (_super) {
    __extends(AbstractNetwork, _super);
    function AbstractNetwork(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    Object.defineProperty(AbstractNetwork.prototype, "description", {
        /**
         * Gets the description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier.
         * @returns {string} location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "orgUuid", {
        /**
         * Gets the UUID of the Org that the network is associated with.
         * @returns {string} Org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the vDC that the network is associated with.
         * @returns {string} vDC UUID
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "primaryDns", {
        /**
         * Gets the primary DNS host.
         * @returns {string} primary DNS host
         */
        get: function () {
            return this._json.primary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "secondaryDns", {
        /**
         * Gets the secondary DSN host.
         * @returns {string} secondary DNS host
         */
        get: function () {
            return this._json.secondary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "dnsSuffix", {
        /**
         * Gets the DNS suffix.
         * @returns {string} DNS suffix
         */
        get: function () {
            return this._json.dns_suffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "fenceMode", {
        /**
         * Gets the networks fence mode.
         * @returns {FenceModeType} fence mode
         */
        get: function () {
            return this._json.fence_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "gatewayAddress", {
        /**
         * Gets the gateway address of the network.
         * @returns {string} gateway address
         */
        get: function () {
            return this._json.gateway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "netmask", {
        /**
         * Gets the netmask of the network.
         * @returns {string} netmask
         */
        get: function () {
            return this._json.netmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "ipRanges", {
        /**
         * Gets the static IP Ranges for the newtork.
         * @returns {[IpRange]} static IP ranges
         */
        get: function () {
            return this._json.ip_ranges.map(function (ipRangeJson) { return new ip_range_1.IpRange(ipRangeJson); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "inherited", {
        /**
         * Indicates whether this network is inherited.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.inherited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "parentNetworkUuid", {
        /**
         * Gets the UUID of the parent external network if this is a bridged network, otherwise null.
         * @returns {string|null} parent external network UUID
         */
        get: function () {
            return this._json.parent_network_uuid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    AbstractNetwork.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return AbstractNetwork;
}(entity_1.Entity));
exports.AbstractNetwork = AbstractNetwork;
