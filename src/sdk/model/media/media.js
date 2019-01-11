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
var entity_1 = require("../common/entity");
var iland_1 = require("../../iland");
var task_1 = require("../task/task");
var http_1 = require("../../service/http/http");
var metadata_1 = require("../common/metadata/metadata");
require("rxjs/add/operator/map");
/**
 * Media.
 */
var Media = (function (_super) {
    __extends(Media, _super);
    function Media(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Get the Media from API.
     * @param {string} uuid
     * @returns {Promise<Media>} promise that resolves with the Media
     */
    Media.getMedia = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/media/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Media(json);
                    })];
            });
        });
    };
    Object.defineProperty(Media.prototype, "entityType", {
        /**
         * Get entity type for Media
         * @returns {EntityType}
         */
        get: function () {
            return 'IAAS_MEDIA';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "status", {
        /**
         * Get Media status.
         * @returns {number}
         */
        get: function () {
            return this._json.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "size", {
        /**
         * Get Media size.
         * @returns {number}
         */
        get: function () {
            return this._json.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "isPublic", {
        /**
         * Indicate whether the Media is public or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.public;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "locationId", {
        /**
         * Get Media location ID
         * @returns {string}
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "orgUuid", {
        /**
         * Get Media org uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "catalogUuid", {
        /**
         * Get Media catalog uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.catalog_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "storageProfileUuid", {
        /**
         * Get Media storageProfile uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.storage_profile_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "vdcUuid", {
        /**
         * Get Media vDc uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "description", {
        /**
         * Get Media description
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "vcloudHref", {
        /**
         * Get Media vCloudHref.
         * @returns {string}
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "createdDate", {
        /**
         * Get Media creation date.
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.created_date);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the Media data by retrieving it from the API again.
     * @returns {Promise<Media>} promise that resolves with the Media
     */
    Media.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/media/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Deletes current Media
     * @returns {Promise<Task>} promise that resolves with a Task
     */
    Media.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/media/" + this.uuid).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var apiTask;
                        return __generator(this, function (_a) {
                            apiTask = response.data;
                            return [2 /*return*/, new task_1.Task(apiTask)];
                        });
                    }); })];
            });
        });
    };
    /**
     * Updates media name, description and storage profile
     * @param {MediaUpdateRequest} request
     * @returns {Promise<Task>} promise that resolves with a Task
     */
    Media.prototype.update = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/media/" + this.uuid, request.json).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var apiTask;
                        return __generator(this, function (_a) {
                            apiTask = response.data;
                            return [2 /*return*/, new task_1.Task(apiTask)];
                        });
                    }); })];
            });
        });
    };
    /**
     * Clones current Media.
     * @param {MediaUpdateRequest} request
     * @returns {Promise<Task>} promise that resolves with a Task
     */
    Media.prototype.clone = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/media/" + this.uuid + "/actions/clone", request.json)
                        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var apiTask;
                        return __generator(this, function (_a) {
                            apiTask = response.data;
                            return [2 /*return*/, new task_1.Task(apiTask)];
                        });
                    }); })];
            });
        });
    };
    /**
     * Synchronize current Media.
     * @returns {Promise<Task>} promise that resolves with a Task
     */
    Media.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/media/" + this.uuid + "/actions/sync").then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var apiTask;
                        return __generator(this, function (_a) {
                            apiTask = response.data;
                            return [2 /*return*/, new task_1.Task(apiTask)];
                        });
                    }); })];
            });
        });
    };
    /**
     * Get a link to download the Media.
     * @param {string} filename
     * @returns {Observable<string>}
     */
    Media.prototype.getDownloadLink = function (filename) {
        var href = iland_1.Iland.baseUrl + "/media/" + this.uuid + "/download?accept=" +
            encodeURIComponent(http_1.Http.versionMime('application/octet-stream'));
        if (filename) {
            href = href + '&filename=' + encodeURIComponent(filename);
        }
        var observable = iland_1.Iland.getAuthProvider().getTokenObservable();
        return observable.map(function (token) { return href + "&oauth_token=" + token; });
    };
    /**
     * Gets the Media's metadata.
     * @returns {Promise<Metadata<MetadataType>[]>}
     */
    Media.prototype.getMetadata = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/media/" + this.uuid + "/metadata").then(function (response) {
                        var jsonMetadata = response.data.data;
                        return jsonMetadata.map(function (json) {
                            switch (json.type) {
                                case 'number':
                                    return new metadata_1.Metadata(json);
                                case 'boolean':
                                    return new metadata_1.Metadata(json);
                                case 'datetime':
                                    return new metadata_1.Metadata(json);
                                case 'string':
                                    return new metadata_1.Metadata(json);
                            }
                            throw new Error("Metadata with type " + json.type + " is unknown.");
                        });
                    })];
            });
        });
    };
    /**
     * Updates the Media's metadata.
     * @param {Array<MetadataJson<MetadataType>>} metadataJson the new array of metadata
     * @returns {Promise<Task>} task promise
     */
    Media.prototype.updateMetadata = function (metadataJson) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/media/" + this.uuid + "/metadata", metadataJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Deletes a metadata entry.
     * @param {string} metadataKey the key of the metadata entry to delete
     * @returns {Promise<Task>} task promise
     */
    Media.prototype.deleteMetadata = function (metadataKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/media/" + this.uuid + "/metadata/" + metadataKey).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    Object.defineProperty(Media.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {MediaJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Media.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return Media;
}(entity_1.Entity));
exports.Media = Media;
