"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Guest Customization
 */
var GuestCustomization = (function () {
    function GuestCustomization(firstParam) {
        if (firstParam instanceof GuestCustomization) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(GuestCustomization.prototype, "enabled", {
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
    Object.defineProperty(GuestCustomization.prototype, "changeSid", {
        /**
         * Get change sid.
         * @returns {boolean}
         */
        get: function () {
            return this._json.change_sid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "virtualMachineId", {
        /**
         * Get virtual machine id.
         * @returns {string}
         */
        get: function () {
            return this._json.virtual_machine_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "joinDomain", {
        /**
         * Get join domain.
         * @returns {boolean}
         */
        get: function () {
            return this._json.join_domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "useOrgSettings", {
        /**
         * Get use org settings.
         * @returns {boolean}
         */
        get: function () {
            return this._json.use_org_settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "domainName", {
        /**
         * Get domain name.
         * @returns {string}
         */
        get: function () {
            return this._json.domain_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "domainUserName", {
        /**
         * Get domain user name.
         * @returns {string}
         */
        get: function () {
            return this._json.domain_user_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "domainUserPassword", {
        /**
         * Get domain user password.
         * @returns {string}
         */
        get: function () {
            return this._json.domain_user_password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "machineObjectOu", {
        /**
         * Get machine object ou.
         * @returns {string}
         */
        get: function () {
            return this._json.machine_object_ou;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "adminPasswordEnabled", {
        /**
         * Get admin password enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.admin_password_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "adminPasswordAuto", {
        /**
         * Get admin password auto.
         * @returns {boolean}
         */
        get: function () {
            return this._json.admin_password_auto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "adminPassword", {
        /**
         * Get admin password.
         * @returns {string}
         */
        get: function () {
            return this._json.admin_password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "adminAutoLogonEnabled", {
        /**
         * Get admin auto logon enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.admin_auto_logon_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "adminAutoLogonCount", {
        /**
         * Get admin auto logon count.
         * @returns {number}
         */
        get: function () {
            return this._json.admin_auto_logon_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "resetPasswordRequired", {
        /**
         * Get reset password required.
         * @returns {boolean}
         */
        get: function () {
            return this._json.reset_password_required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "computerName", {
        /**
         * Get computer name.
         * @returns {string}
         */
        get: function () {
            return this._json.computer_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "required", {
        /**
         * Get required.
         * @returns {boolean}
         */
        get: function () {
            return this._json.required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomization.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {GuestCustomizationJson}
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
    GuestCustomization.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return GuestCustomization;
}());
exports.GuestCustomization = GuestCustomization;
