"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next: autogenerated */
var VappTemplateFromVappCreateRequest = (function () {
    function VappTemplateFromVappCreateRequest(firstParam, name, description) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                vapp_uuid: firstParam,
                name: name,
                description: description
            };
        }
        else if (firstParam instanceof VappTemplateFromVappCreateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(VappTemplateFromVappCreateRequest.prototype, "vappUuid", {
        /**
         * Get vapp uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.vapp_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplateFromVappCreateRequest.prototype, "name", {
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
    Object.defineProperty(VappTemplateFromVappCreateRequest.prototype, "description", {
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
    Object.defineProperty(VappTemplateFromVappCreateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {VappTemplateFromVappCreateRequestJson}
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
    VappTemplateFromVappCreateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return VappTemplateFromVappCreateRequest;
}());
exports.VappTemplateFromVappCreateRequest = VappTemplateFromVappCreateRequest;
