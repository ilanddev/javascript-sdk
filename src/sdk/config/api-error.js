"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wrapper for iland API errors.
 */
var ApiError = (function (_super) {
    __extends(ApiError, _super);
    /**
     * Constructor.
     * @param {ApiErrorJson} _json error JSON from the API
     */
    function ApiError(_json) {
        var _this = _super.call(this, _json.detail_message ? _json.detail_message : _json.message) || this;
        _this._json = _json;
        Object.setPrototypeOf(_this, ApiError.prototype);
        return _this;
    }
    /**
     * Gets the error message.
     * @returns {string}
     */
    ApiError.prototype.getMessage = function () {
        return this._json.message;
    };
    /**
     * Gets the error detail message.
     * @returns {string|any} detailed message or null if none exists
     */
    ApiError.prototype.getDetailMessage = function () {
        return this._json.detail_message || null;
    };
    /**
     * Gets the error type.
     * @returns {ApiErrorType} the type of API error
     */
    ApiError.prototype.getType = function () {
        return this._json.type;
    };
    /**
     * JSON format.
     * @returns {string}
     */
    ApiError.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    /**
     * Gets the raw JSON object from the API.
     * @returns {ApiErrorJson} the API Error JSON object
     */
    ApiError.prototype.getJson = function () {
        return Object.assign({}, this._json);
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;
