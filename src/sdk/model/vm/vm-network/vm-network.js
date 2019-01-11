"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip_range_1 = require("../../common/ip-range/ip-range");
var VmNetwork = (function () {
    function VmNetwork(_json) {
        this._json = _json;
    }
    Object.defineProperty(VmNetwork.prototype, "uuid", {
        /**
         * Get uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "name", {
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
    Object.defineProperty(VmNetwork.prototype, "description", {
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
    Object.defineProperty(VmNetwork.prototype, "vappNetwork", {
        /**
         * Get vapp network.
         * @returns {boolean}
         */
        get: function () {
            return this._json.vapp_network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "fenceMode", {
        /**
         * Get fence mode.
         * @returns {string}
         */
        get: function () {
            return this._json.fence_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "deleted", {
        /**
         * Get deleted.
         * @returns {boolean}
         */
        get: function () {
            return this._json.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "ipRanges", {
        /**
         * Get ip ranges.
         * @returns {Array<IpRange>}
         */
        get: function () {
            return this._json.ip_ranges.map(function (range) {
                return new ip_range_1.IpRange(range);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "gateway", {
        /**
         * Get gateway.
         * @returns {string}
         */
        get: function () {
            return this._json.gateway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "netmask", {
        /**
         * Get netmask.
         * @returns {string}
         */
        get: function () {
            return this._json.netmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "dns1", {
        /**
         * Get dns1.
         * @returns {string}
         */
        get: function () {
            return this._json.dns1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "dns2", {
        /**
         * Get dns2.
         * @returns {string}
         */
        get: function () {
            return this._json.dns2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "dnsSuffix", {
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
    Object.defineProperty(VmNetwork.prototype, "enabled", {
        /**
         * Get enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "inherited", {
        /**
         * Get inherited.
         * @returns {boolean}
         */
        get: function () {
            return this._json.inherited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "parentNetworkName", {
        /**
         * Get parent network name.
         * @returns {string}
         */
        get: function () {
            return this._json.parent_network_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "parentNetworkUuid", {
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
    Object.defineProperty(VmNetwork.prototype, "parentEntityUuid", {
        /**
         * Get parent entity uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.parent_entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "shared", {
        /**
         * Get shared.
         * @returns {boolean}
         */
        get: function () {
            return this._json.shared;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "edgeUuid", {
        /**
         * Get edge uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "routerExternalIp", {
        /**
         * Get router external ip.
         * @returns {string}
         */
        get: function () {
            return this._json.router_external_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VmNetwork.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VmNetworkJson}
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
    VmNetwork.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VmNetwork;
}());
exports.VmNetwork = VmNetwork;
