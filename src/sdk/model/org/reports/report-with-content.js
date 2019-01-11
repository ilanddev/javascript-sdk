"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next: autogenerated */
var ReportWithContent = (function () {
    function ReportWithContent(_json) {
        this._json = _json;
    }
    Object.defineProperty(ReportWithContent.prototype, "uuid", {
        /**
         * Get uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportWithContent.prototype, "entityUuid", {
        /**
         * Get entity uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportWithContent.prototype, "reportType", {
        /**
         * Get report type.
         * @returns {ReportTypeJson}
         */
        get: function () {
            return this._json.report_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportWithContent.prototype, "fileType", {
        /**
         * Get file type.
         * @returns {ReportFormat}
         */
        get: function () {
            return this._json.file_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportWithContent.prototype, "created", {
        /**
         * Get created.
         * @returns {number}
         */
        get: function () {
            return this._json.created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportWithContent.prototype, "jsonContent", {
        /**
         * Get json content.
         * @returns {string}
         */
        get: function () {
            return this._json.json_content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportWithContent.prototype, "hasContent", {
        /**
         * Get has content.
         * @returns {boolean}
         */
        get: function () {
            return this._json.has_content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportWithContent.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {ReportWithContentJson}
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
    ReportWithContent.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return ReportWithContent;
}());
exports.ReportWithContent = ReportWithContent;
