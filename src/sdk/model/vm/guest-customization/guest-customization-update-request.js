"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuestCustomizationUpdateRequest = (function () {
    function GuestCustomizationUpdateRequest(_json) {
        this._json = _json;
    }
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "enabled", {
        /**
         * Get enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.enabled;
        },
        /**
         * Set enabled
         * @returns {boolean}
         */
        set: function (enabled) {
            this._json.enabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "changeSid", {
        /**
         * Get change sid.
         * @returns {boolean}
         */
        get: function () {
            return this._json.change_sid;
        },
        /**
         * Set change sid.
         * @param {boolean} chgangeSid
         */
        set: function (chgangeSid) {
            this._json.change_sid = chgangeSid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "virtualMachineId", {
        /**
         * Get virtual machine id.
         * @returns {string}
         */
        get: function () {
            return this._json.virtual_machine_id;
        },
        /**
         * Set virtual machine id.
         * @param {string} vmId
         */
        set: function (vmId) {
            this._json.virtual_machine_id = vmId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "joinDomain", {
        /**
         * Get join domain.
         * @returns {boolean}
         */
        get: function () {
            return this._json.join_domain;
        },
        /**
         * Set join domain.
         * @param {boolean} joinDomain
         */
        set: function (joinDomain) {
            this._json.join_domain = joinDomain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "useOrgSettings", {
        /**
         * Get use org settings.
         * @returns {boolean}
         */
        get: function () {
            return this._json.use_org_settings;
        },
        /**
         * Set use org settings.
         * @param {boolean} useOrgSettings
         */
        set: function (useOrgSettings) {
            this._json.use_org_settings = useOrgSettings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "domainName", {
        /**
         * Get domain name.
         * @returns {string}
         */
        get: function () {
            return this._json.domain_name;
        },
        /**
         * Set domain name.
         * @param {string} name
         */
        set: function (name) {
            this._json.domain_name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "domainUserName", {
        /**
         * Get domain user name.
         * @returns {string}
         */
        get: function () {
            return this._json.domain_user_name;
        },
        /**
         * Set domain user name.
         * @param {string} name
         */
        set: function (name) {
            this._json.domain_user_name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "domainUserPassword", {
        /**
         * Get domain user password.
         * @returns {string}
         */
        get: function () {
            return this._json.domain_user_password;
        },
        /**
         * Set domain user password.
         * @param {string} pwd
         */
        set: function (pwd) {
            this._json.domain_user_password = pwd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "machineObjectOu", {
        /**
         * Get machine object ou.
         * @returns {string}
         */
        get: function () {
            return this._json.machine_object_ou;
        },
        /**
         * Set machine object ou.
         * @param {string} machineObjectOu
         */
        set: function (machineObjectOu) {
            this._json.machine_object_ou = machineObjectOu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "adminPasswordEnabled", {
        /**
         * Get admin password enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.admin_password_enabled;
        },
        /**
         * Set admin password enabled.
         * @param {boolean} enabled
         */
        set: function (enabled) {
            this._json.admin_password_enabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "adminPasswordAuto", {
        /**
         * Get admin password auto.
         * @returns {boolean}
         */
        get: function () {
            return this._json.admin_password_auto;
        },
        /**
         * Set admin password auto.
         * @param {boolean} auto
         */
        set: function (auto) {
            this._json.admin_password_auto = auto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "adminPassword", {
        /**
         * Get admin password.
         * @returns {string}
         */
        get: function () {
            return this._json.admin_password;
        },
        /**
         * Set admin password.
         * @param {string} pwd
         */
        set: function (pwd) {
            this._json.admin_password = pwd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "adminAutoLogonEnabled", {
        /**
         * Get admin auto logon enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.admin_auto_logon_enabled;
        },
        /**
         * Set admin auto logon enabled.
         * @param {boolean} enabled
         */
        set: function (enabled) {
            this._json.admin_auto_logon_enabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "adminAutoLogonCount", {
        /**
         * Get admin auto logon count.
         * @returns {number}
         */
        get: function () {
            return this._json.admin_auto_logon_count;
        },
        /**
         * Set admin auto logon count.
         * @param {number} count
         */
        set: function (count) {
            this._json.admin_auto_logon_count = count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "resetPasswordRequired", {
        /**
         * Get reset password required.
         * @returns {boolean}
         */
        get: function () {
            return this._json.reset_password_required;
        },
        /**
         * Set reset password required.
         * @param {boolean} required
         */
        set: function (required) {
            this._json.reset_password_required = required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "computerName", {
        /**
         * Get computer name.
         * @returns {string}
         */
        get: function () {
            return this._json.computer_name;
        },
        /**
         * Set computer name.
         * @param {string} name
         */
        set: function (name) {
            this._json.computer_name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "required", {
        /**
         * Get required.
         * @returns {boolean}
         */
        get: function () {
            return this._json.required;
        },
        /**
         * Set required.
         * @param {boolean} required
         */
        set: function (required) {
            this._json.required = required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuestCustomizationUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {GuestCustomizationUpdateRequestJson}
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
    GuestCustomizationUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return GuestCustomizationUpdateRequest;
}());
exports.GuestCustomizationUpdateRequest = GuestCustomizationUpdateRequest;
