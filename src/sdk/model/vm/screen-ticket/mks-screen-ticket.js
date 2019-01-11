"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM MKS Screen Ticket.
 */
var MksScreenTicket = (function () {
    function MksScreenTicket(_json) {
        this._json = _json;
    }
    Object.defineProperty(MksScreenTicket.prototype, "vmx", {
        /**
         * Gets the VMX attribute.
         * @returns {string} vmx
         */
        get: function () {
            return this._json.vmx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MksScreenTicket.prototype, "ticket", {
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
    Object.defineProperty(MksScreenTicket.prototype, "host", {
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
    Object.defineProperty(MksScreenTicket.prototype, "port", {
        /**
         * Gets the port.
         * @returns {string}
         */
        get: function () {
            return this._json.port;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    MksScreenTicket.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(MksScreenTicket.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {MksScreenTicketJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return MksScreenTicket;
}());
exports.MksScreenTicket = MksScreenTicket;
