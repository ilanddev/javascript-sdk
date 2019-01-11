"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var iland_1 = require("../../../iland");
var support_ticket_comment_1 = require("./support-ticket-comment");
var support_ticket_attachment_1 = require("./support-ticket-attachment");
/**
 * SupportTicket.
 */
var SupportTicket = (function () {
    function SupportTicket(_json) {
        this._json = _json;
    }
    Object.defineProperty(SupportTicket.prototype, "id", {
        /**
         * Get support ticket ID.
         * @returns {number}
         */
        get: function () {
            return this._json.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "summary", {
        /**
         * Get support ticket summary
         * @returns {string}
         */
        get: function () {
            return this._json.summary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "status", {
        /**
         * Get support ticket status
         * @returns {SupportTicketStatus}
         */
        get: function () {
            return this._json.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "companyId", {
        /**
         * Get support ticket crm
         * @returns {string}
         */
        get: function () {
            return this._json.company_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "creatorFullName", {
        /**
         * Get support ticket creator full name
         * @returns {string}
         */
        get: function () {
            return this._json.creator_full_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "creatorUserName", {
        /**
         * Get support ticket creator username
         * @returns {string}
         */
        get: function () {
            return this._json.creator_user_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "creationDate", {
        /**
         * Get support ticket creation date
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.creation_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "ccEmailAddresses", {
        /**
         * Get support ticket cc email addresses
         * @returns {Array<string>}
         */
        get: function () {
            return this._json.cc_email_addresses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "ccEmailsEnabled", {
        /**
         * Whether or not support ticket has CC emails field enabled.
         * @returns {boolean}
         */
        get: function () {
            return this._json.cc_emails_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "regardingId", {
        /**
         * Get support ticket regarding ID
         * @returns {number}
         */
        get: function () {
            return this._json.regarding_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "serviceId", {
        /**
         * Get support ticket service ID
         * @returns {number}
         */
        get: function () {
            return this._json.service_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "categoryId", {
        /**
         * Get support ticket category ID
         * @returns {number}
         */
        get: function () {
            return this._json.category_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "severity", {
        /**
         * Get support ticket severity
         * @returns {SupportTicketSeverity}
         */
        get: function () {
            return this._json.severity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "regardingName", {
        /**
         * Get support ticket regarding name
         * @returns {string}
         */
        get: function () {
            return this._json.regarding_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "serviceName", {
        /**
         * Get support ticket service name
         * @returns {string}
         */
        get: function () {
            return this._json.service_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportTicket.prototype, "categoryName", {
        /**
         * Get support ticket category name
         * @returns {string}
         */
        get: function () {
            return this._json.category_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get support ticket JSON string
     * @returns {string}
     */
    SupportTicket.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(SupportTicket.prototype, "json", {
        /**
         * Get support ticket JSON object
         * @returns {SupportTicketJson}
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get all ticket attachments.
     * @returns {Promise<Array<SupportTicketAttachment>>}
     */
    SupportTicket.prototype.getAttachments = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.companyId + "/support-tickets/" + this.id + "/attachments")
                        .then(function (response) {
                        return response.data;
                    })];
            });
        });
    };
    /**
     * Get ticket attachment.
     * @param {number} attachmentId
     * @returns {Promise<SupportTicketAttachment>}
     */
    SupportTicket.prototype.getAttachment = function (attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.companyId + "/support-tickets/" + this.id + "/attachments/" + attachmentId)
                        .then(function (response) {
                        return response.data;
                    })];
            });
        });
    };
    /**
     * Whether or not the attachment is downloadable
     * @param {number} attachmentId
     * @returns {Promise<boolean>}
     */
    SupportTicket.prototype.isAttachmentDownloadable = function (attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp()
                        .get("/companies/" + this.companyId + "/support-tickets/" + this.id + "/attachments/" + attachmentId + "/is-downloadable")
                        .then(function (response) {
                        return response.data.downloadable;
                    })];
            });
        });
    };
    /**
     * Get ticket comments.
     * @returns {Promise<Array<SupportTicketComment>>}
     */
    SupportTicket.prototype.getComments = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.companyId + "/support-tickets/" + this.id + "/comments").then(function (response) {
                        return response.data.data;
                    })];
            });
        });
    };
    /**
     * Add ticket comment.
     * @param {string} companyId
     * @param {SupportTicketCommentCreateRequest} newComment
     * @returns {Promise<SupportTicketComment>}
     */
    /* istanbul ignore next: autogenerated */
    SupportTicket.prototype.addTicketComment = function (companyId, newComment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + companyId + "/support-tickets/" + this.id + "/comments", newComment.json)
                        .then(function (response) {
                        var json = response.data;
                        return new support_ticket_comment_1.SupportTicketComment(json);
                    })];
            });
        });
    };
    /**
     * Add ticket attachment.
     * @param {string} companyId
     * @param {SupportTicketAttachmentCreateRequest} attachment
     * @returns {Promise<SupportTicketAttachment>}
     */
    /* istanbul ignore next: autogenerated */
    SupportTicket.prototype.addTicketAttachment = function (companyId, attachment) {
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append('file', attachment.getContents, attachment.getFilename);
                formData.append('filename', attachment.getFilename);
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + companyId + "/support-tickets/" + this.id + "/attachments", formData).then(function (response) {
                        var json = response.data;
                        return new support_ticket_attachment_1.SupportTicketAttachment(json);
                    })];
            });
        });
    };
    return SupportTicket;
}());
exports.SupportTicket = SupportTicket;
