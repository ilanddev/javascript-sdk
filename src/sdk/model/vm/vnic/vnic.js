"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Virtual Network Interface Card.
 */
var Vnic = (function () {
    function Vnic(_apiVnic) {
        this._apiVnic = _apiVnic;
    }
    Object.defineProperty(Vnic.prototype, "adapterType", {
        /**
         * Gets the type of the adapter.
         * @returns {string} adapter type
         */
        get: function () {
            return this._apiVnic.adapter_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "addressMode", {
        /**
         * Gets the address mode of the adapter.
         * @returns {string} address mode
         */
        get: function () {
            return this._apiVnic.ip_addressing_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "isConnected", {
        /**
         * Indicates whether the VNIC is currently connected.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVnic.is_connected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "deleted", {
        /**
         * Indicates whether the VNIC is deleted.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVnic.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "ipAddress", {
        /**
         * Gets the IP address that is assigned to the VNIC.
         * @returns {string} IP Address
         */
        get: function () {
            return this._apiVnic.ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "macAddress", {
        /**
         * Gets the MAC address that is assigned to the VNIC.
         * @returns {string} MAC address
         */
        get: function () {
            return this._apiVnic.mac_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "connectedNetworkName", {
        /**
         * Gets the name of the network that the VNIC is connected to.
         * @returns {string} vApp network name
         */
        get: function () {
            return this._apiVnic.network_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "primaryConnection", {
        /**
         * Indicates whether this is the VM's primary VNIC.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVnic.is_primary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "vnicId", {
        /**
         * Gets the ID of the VNIC among other VNICs connected to the VM.
         * @returns {number} VNIC ID
         */
        get: function () {
            return this._apiVnic.vnic_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vnic.prototype.toString = function () {
        return JSON.stringify(this._apiVnic, undefined, 2);
    };
    Object.defineProperty(Vnic.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VnicJson} the API VNIC object
         */
        get: function () {
            return Object.assign({}, this._apiVnic);
        },
        enumerable: true,
        configurable: true
    });
    return Vnic;
}());
exports.Vnic = Vnic;
