"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Is Compliance Org result.
 */
/* istanbul ignore next: autogenerated */
var IsComplianceOrg = (function () {
    function IsComplianceOrg(_json) {
        this._json = _json;
    }
    Object.defineProperty(IsComplianceOrg.prototype, "isComplianceOrg", {
        /**
         * Get is compliance org.
         * @returns {boolean}
         */
        get: function () {
            return this._json.is_compliance_org;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsComplianceOrg.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {IsComplianceOrgJson}
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
    IsComplianceOrg.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return IsComplianceOrg;
}());
exports.IsComplianceOrg = IsComplianceOrg;
