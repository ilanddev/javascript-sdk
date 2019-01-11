"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemplateVmConfig = (function () {
    function TemplateVmConfig(_json) {
        this._json = _json;
    }
    Object.defineProperty(TemplateVmConfig.prototype, "vmTemplateUuid", {
        /**
         * Get vm template uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.vm_template_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemplateVmConfig.prototype, "name", {
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
    Object.defineProperty(TemplateVmConfig.prototype, "computerName", {
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
    Object.defineProperty(TemplateVmConfig.prototype, "description", {
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
    Object.defineProperty(TemplateVmConfig.prototype, "storageProfileUuid", {
        /**
         * Get storage profile uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.storage_profile_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemplateVmConfig.prototype, "vnics", {
        /**
         * Get vnics.
         * @returns {Array<VmVnicRequestJson>}
         */
        get: function () {
            return this._json.vnics;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemplateVmConfig.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {TemplateVmConfigJson}
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
    TemplateVmConfig.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return TemplateVmConfig;
}());
exports.TemplateVmConfig = TemplateVmConfig;
