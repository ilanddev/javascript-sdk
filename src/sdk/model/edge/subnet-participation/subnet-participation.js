"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip_range_1 = require("../../common/ip-range/ip-range");
/**
 * Edge Gateway Subnet Participation.
 */
var SubnetParticipation = (function () {
    function SubnetParticipation(_json) {
        this._json = _json;
    }
    Object.defineProperty(SubnetParticipation.prototype, "gatewayAddress", {
        /**
         * Gets the gateway address on the network.
         * @returns {string | null} gateway address
         */
        get: function () {
            return this._json.gateway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubnetParticipation.prototype, "netmask", {
        /**
         * Gets the networks netmask.
         * @returns {string | null} netmask
         */
        get: function () {
            return this._json.netmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubnetParticipation.prototype, "ipAddress", {
        /**
         * Gets the IP address.
         * @returns {string | null} IP address
         */
        get: function () {
            return this._json.ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubnetParticipation.prototype, "ipRanges", {
        /**
         * Gets the assigned IP ranges.
         * @returns {[IpRange]} IP address ranges
         */
        get: function () {
            var ipRanges = (this._json.ip_ranges || []);
            return ipRanges.map(function (rangeJson) { return new ip_range_1.IpRange(rangeJson); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    SubnetParticipation.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(SubnetParticipation.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {EdgeSubnetParticipationJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return SubnetParticipation;
}());
exports.SubnetParticipation = SubnetParticipation;
