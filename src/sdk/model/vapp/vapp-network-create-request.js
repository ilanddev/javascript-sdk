"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VappNetworkCreateRequest = (function () {
    function VappNetworkCreateRequest(_json) {
        this._json = _json;
    }
    Object.defineProperty(VappNetworkCreateRequest.prototype, "name", {
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
    Object.defineProperty(VappNetworkCreateRequest.prototype, "description", {
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
    Object.defineProperty(VappNetworkCreateRequest.prototype, "deployed", {
        /**
         * Get deployed.
         * @returns {boolean}
         */
        get: function () {
            return this._json.deployed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "backwardCompatibilityMode", {
        /**
         * Get backward compatibility mode.
         * @returns {boolean}
         */
        get: function () {
            return this._json.backward_compatibility_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "retainNetInfoAcrossDeployments", {
        /**
         * Get retain net info across deployments.
         * @returns {boolean}
         */
        get: function () {
            return this._json.retain_net_info_across_deployments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "parentNetworkUuid", {
        /**
         * Get parent network uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.parent_network_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "gatewayAddress", {
        /**
         * Get gateway address.
         * @returns {string}
         */
        get: function () {
            return this._json.gateway_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "networkMask", {
        /**
         * Get network mask.
         * @returns {string}
         */
        get: function () {
            return this._json.network_mask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "primaryDns", {
        /**
         * Get primary dns.
         * @returns {string}
         */
        get: function () {
            return this._json.primary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "secondaryDns", {
        /**
         * Get secondary dns.
         * @returns {string}
         */
        get: function () {
            return this._json.secondary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "dnsSuffix", {
        /**
         * Get dns suffix.
         * @returns {string}
         */
        get: function () {
            return this._json.dns_suffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "ipRanges", {
        /**
         * Get ip ranges.
         * @returns {Array<IpRangeJson>}
         */
        get: function () {
            return this._json.ip_ranges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetworkCreateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VappNetworkCreateRequestJson}
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
    VappNetworkCreateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VappNetworkCreateRequest;
}());
exports.VappNetworkCreateRequest = VappNetworkCreateRequest;
