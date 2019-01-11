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
var metadata_1 = require("../common/metadata/metadata");
var media_1 = require("../media/media");
var vapp_template_1 = require("../vapp-template/vapp-template");
var task_1 = require("../task/task");
/**
 * Catalog.
 */
var Catalog = (function (_super) {
    __extends(Catalog, _super);
    function Catalog(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Get the Catalog from API.
     * @param {string} uuid
     * @returns {Promise<Catalog>} promise that resolves with the Catalog
     */
    Catalog.getCatalog = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/catalogs/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Catalog(json);
                    })];
            });
        });
    };
    Object.defineProperty(Catalog.prototype, "originalUuid", {
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "uuid", {
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "entityType", {
        /**
         * Get entity type for catalog.
         * @returns {EntityType}
         */
        get: function () {
            return 'IAAS_CATALOG';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "locationId", {
        /**
         * Get location ID
         * @returns {string}
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "isShared", {
        /**
         * Indicate whether the catalog is shared or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.shared;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "isPublic", {
        /**
         * Indicate whether the catalog is public or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.public;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "version", {
        /**
         * Get the catalog version
         * @returns {number}
         */
        get: function () {
            return this._json.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "orgUuid", {
        /**
         * Get org uuid for catalog.
         * @returns {string}
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "description", {
        /**
         * Get description for catalog
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "vcloudHref", {
        /**
         * Get vCloudHref for catalog
         * @returns {string}
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "createdDate", {
        /**
         * Get the creation date
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.created_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Catalog.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {CatalogJson} the JSON representation
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
    Catalog.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    /**
     * Refreshes the Catalog data by retrieving it from the API again.
     * @returns {Promise<Catalog>} promise that resolves with the Catalog
     */
    Catalog.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/catalogs/" + this.originalUuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets Catalog's item downloads.
     * @description There are two types of catalog items that will show up: 'media' or 'template'.
     * The item type field will report 'media' or 'vapp_template'.If the item is a media,
     * the 'template' field will be null and vice-versa. (null 'media' field if item is a vapp_template).
     * Only private catalogs will have a list of catalog item downloads returned.
     * @returns {Promise<Array<ItemDownloadJson>>}
     */
    Catalog.prototype.getItemDownloads = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/catalogs/" + this.originalUuid + "/item-downloads").then(function (response) {
                        return response.data.data;
                    })];
            });
        });
    };
    /**
     * Gets the Catalog's Medias
     * @returns {Promise<Array<Media>>}
     */
    Catalog.prototype.getMedia = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/catalogs/" + this.originalUuid + "/media").then(function (response) {
                        var medias = response.data.data;
                        return medias.map(function (media) { return new media_1.Media(media); });
                    })];
            });
        });
    };
    /**
     * Gets the Catalog's vApp-Templates
     * @returns {Promise<Array<VappTemplate>>}
     */
    Catalog.prototype.getVappTemplates = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/catalogs/" + this.originalUuid + "/vapp-templates").then(function (response) {
                        var vappTemplates = response.data.data;
                        return vappTemplates.map(function (vappTemplate) { return new vapp_template_1.VappTemplate(vappTemplate); });
                    })];
            });
        });
    };
    /**
     * Add a Vapp Template to the catalog based on an existing vapp.
     * The json can contain params "name" and "description" for the new vapp
     * template.
     * @param {VappTemplateFromVappCreateRequest} spec vapp template spec
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Catalog.prototype.addVappTemplateFromVapp = function (spec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/catalogs/" + this.uuid + "/actions/add-vapp-template-from-vapp", spec.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets the Catalog's metadata.
     * @returns {Promise<Metadata<MetadataType>[]>}
     * @throws Error Throw an error if the type is unrecognized.
     */
    Catalog.prototype.getMetadata = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/catalogs/" + this.originalUuid + "/metadata").then(function (response) {
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
     * Updates the catalog's metadata.
     * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
     * @returns {Promise<Task>} task promise
     */
    Catalog.prototype.updateMetadata = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var metadataJson;
            return __generator(this, function (_a) {
                metadataJson = metadata.map(function (m) {
                    return m.json;
                });
                return [2 /*return*/, iland_1.Iland.getHttp().put("/catalogs/" + this.uuid + "/metadata", metadataJson).then(function (response) {
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
    Catalog.prototype.deleteMetadata = function (metadataKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/catalogs/" + this.uuid + "/metadata/" + metadataKey).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Updates the catalog.
     * @param {CatalogUpdateRequest} catalog
     * @return {Promise<Catalog>}
     */
    /* istanbul ignore next: autogenerated */
    Catalog.prototype.updateCatalog = function (catalog) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/catalogs/" + this.uuid, catalog.json).then(function (response) {
                        var json = response.data;
                        return new Catalog(json);
                    })];
            });
        });
    };
    /**
     * Deletes the catalog.
     */
    /* istanbul ignore next: autogenerated */
    Catalog.prototype.deleteCatalog = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/catalogs/" + this.uuid)];
            });
        });
    };
    return Catalog;
}(entity_1.Entity));
exports.Catalog = Catalog;
