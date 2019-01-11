"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Request to create a support ticket.
 */
/* istanbul ignore next: autogenerated */
var SupportTicketCreateRequest = (function () {
    function SupportTicketCreateRequest(firstParam, description, ccEmailAddresses, ccEmailsEnabled, regardingId, serviceId, categoryId, severity, contactType, phoneNumber, phoneNumberExt) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                summary: firstParam,
                description: description,
                cc_email_addresses: ccEmailAddresses,
                cc_emails_enabled: ccEmailsEnabled,
                regarding_id: regardingId,
                service_id: serviceId,
                category_id: categoryId,
                severity: severity,
                contact_type: contactType,
                phone_number: phoneNumber,
                phone_number_ext: phoneNumberExt
            };
        }
        else if (firstParam instanceof SupportTicketCreateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(SupportTicketCreateRequest.prototype, "summary", {
        /**
         * Get summary.
         * @returns {string}
         */
        get: function () {
            return this._json.summary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "description", {
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
    Object.defineProperty(SupportTicketCreateRequest.prototype, "ccEmailAddresses", {
        /**
         * Get cc email addresses.
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.cc_email_addresses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "ccEmailsEnabled", {
        /**
         * Get cc emails enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.cc_emails_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "regardingId", {
        /**
         * Get regarding id.
         * @returns {number}
         */
        get: function () {
            return this._json.regarding_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "serviceId", {
        /**
         * Get service id.
         * @returns {number}
         */
        get: function () {
            return this._json.service_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "categoryId", {
        /**
         * Get category id.
         * @returns {number}
         */
        get: function () {
            return this._json.category_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "severity", {
        /**
         * Get severity.
         * @returns {SeverityType}
         */
        get: function () {
            return this._json.severity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "contactType", {
        /**
         * Get contact type.
         * @returns {ContactType}
         */
        get: function () {
            return this._json.contact_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "phoneNumber", {
        /**
         * Get phone number.
         * @returns {string}
         */
        get: function () {
            return this._json.phone_number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "phoneNumberExt", {
        /**
         * Get phone number ext.
         * @returns {string}
         */
        get: function () {
            return this._json.phone_number_ext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicketCreateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {SupportTicketCreateRequestJson}
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
    SupportTicketCreateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return SupportTicketCreateRequest;
}());
exports.SupportTicketCreateRequest = SupportTicketCreateRequest;
