"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Screen Ticket.
 */
var ScreenTicket = (function () {
    function ScreenTicket(_json) {
        this._json = _json;
    }
    Object.defineProperty(ScreenTicket.prototype, "vmId", {
        /**
         * Gets the VM ID attribute.
         * @returns {string} VM ID
         */
        get: function () {
            return this._json.vm_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenTicket.prototype, "ticket", {
        /**
         * Gets the ticket.
         * @returns {string}
         */
        get: function () {
            return this._json.ticket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenTicket.prototype, "host", {
        /**
         * Gets the host.
         * @returns {string}
         */
        get: function () {
            return this._json.host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenTicket.prototype, "sslThumbprint", {
        /**
         * Gets the SSL thumbprint.
         * @returns {string}
         */
        get: function () {
            return this._json.ssl_thumbprint;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    ScreenTicket.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(ScreenTicket.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {ScreenTicketJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return ScreenTicket;
}());
exports.ScreenTicket = ScreenTicket;
