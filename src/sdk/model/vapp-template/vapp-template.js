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
var task_1 = require("../task/task");
var iland_1 = require("../../iland");
var entity_1 = require("../common/entity");
var vapp_template_download_details_1 = require("./vapp-template-download-details");
var vapp_template_vm_1 = require("./vapp-template-vm");
var vapp_template_configuration_1 = require("./vapp-template-configuration");
var metadata_1 = require("../common/metadata/metadata");
/**
 * VappTemplate
 */
var VappTemplate = (function (_super) {
    __extends(VappTemplate, _super);
    function VappTemplate(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Get the VappTemplate from API.
     * @param {string} uuid
     * @returns {Promise<VappTemplate>} promise that resolves with the VappTemplate.
     */
    VappTemplate.getVappTemplate = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-templates/" + uuid).then(function (response) {
                        var json = response.data;
                        return new VappTemplate(json);
                    })];
            });
        });
    };
    Object.defineProperty(VappTemplate.prototype, "entityType", {
        /**
         * Get VappTemplate entity type.
         * @returns {EntityType}
         */
        get: function () {
            return 'IAAS_VAPP_TEMPLATE';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "description", {
        /**
         * Get VappTemplate description
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "vcloudHref", {
        /**
         * Get VappTemplate vCloudHref.
         * @returns {string}
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "status", {
        /**
         * Get VappTemplate status
         * @returns {number}
         */
        get: function () {
            return this._json.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "size", {
        /**
         * Get VappTemplate size.
         * @returns {number}
         */
        get: function () {
            return this._json.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "isCustomisable", {
        /**
         * Indicate whether the VappTemplate is customisable or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.customizable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "isCustomizationRequired", {
        /**
         * Indicate whether the VappTemplate customization is required or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.customization_required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "isGoldMaster", {
        /**
         * Indicate whether the VappTemplate is gold master or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.gold_master;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "isPublic", {
        /**
         * Indicate whether the VappTemplate is public or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.public;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "storageProfileUuid", {
        /**
         * Get VappTemplate storage profile uuid.
         * @returns {string}
         */
        get: function () {
            return this._json.storage_profile_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "vdcUuid", {
        /**
         * Get VappTemplate vDc uuid
         * @returns {string}
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "locationId", {
        /**
         * Get VappTemplate location ID
         * @returns {string}
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "orgUuid", {
        /**
         * Get VappTemplate org uuid
         * @returns {string}
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "catalogUuid", {
        /**
         * Get VappTemplate catalog uuid
         * @returns {string}
         */
        get: function () {
            return this._json.catalog_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "createdDate", {
        /**
         * Get VappTemplate creation date
         * @returns {Date}
         */
        get: function () {
            return new Date(this._json.created_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "isExpired", {
        /**
         * Indicate whether the VappTemplate is expired or not.
         * @returns {boolean}
         */
        get: function () {
            return this._json.is_expired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "vmTemplates", {
        /**
         * Get vm templates.
         * @returns {Array<VappTemplateVm>}
         */
        get: function () {
            return this._json.vm_templates.map(function (it) { return new vapp_template_vm_1.VappTemplateVm(it); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappTemplate.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VappTemplateJson} the API __json__ object
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
    VappTemplate.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    /**
     * Refreshes the VappTemplate data by retrieving it from the API again.
     * @returns {Promise<VappTemplate>} promise that resolves with this object
     */
    VappTemplate.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-templates/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Update a Vapp Template.
     * Capable of updating the templates name, and description.
     * @param {VappTemplateUpdateRequest} req vapp template update request
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.updateVappTemplate = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vapp-templates/" + this.uuid, req.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Delete a Vapp template.
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.deleteVappTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vapp-templates/" + this.uuid).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Retrieve a vApp Template's VMs.
     * @returns {Promise<Array<VappTemplateVm>>} promise Promise that resolves with a list of VappTemplateVm
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.getVappTemplateVms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-templates/" + this.uuid + "/vms").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_template_vm_1.VappTemplateVm(it); });
                    })];
            });
        });
    };
    /**
     * Retrieve a vApp Template's detailed configuration.
     * @returns {Promise<VappTemplateConfiguration>} promise Promise that resolves with VappTemplateConfiguration
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.getVappTemplateConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-templates/" + this.uuid + "/configuration").then(function (response) {
                        var json = response.data;
                        return new vapp_template_configuration_1.VappTemplateConfiguration(json);
                    })];
            });
        });
    };
    /**
     * Enable the download of the vapp template. Returns a CoreTask which monitors
     * the progress of the download.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.enableVappTemplateDownload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapp-templates/" + this.uuid + "/actions/enable-download")
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets download details for the vApp Template. Details include whether the
     * template is enabled for download, and, if enabled, the size and name of the
     * download.
     * @returns {Promise<VappTemplateDownloadDetails>} promise Promise that resolves with VappTemplateDownloadDetails
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.getDownloadDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-templates/" + this.uuid + "/download-details").then(function (response) {
                        var json = response.data;
                        return new vapp_template_download_details_1.VappTemplateDownloadDetails(json);
                    })];
            });
        });
    };
    /**
     * Gets the vApp Template's metadata.
     * @returns {Promise<Array<Metadata<MetadataType>>>} promise Promise that resolves with a list of Metadata
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.getMetadata = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-templates/" + this.uuid + "/metadata").then(function (response) {
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
     * Updates the vApp Template's metadata.
     * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
     * @returns {Promise<Task>} task promise
     */
    VappTemplate.prototype.updateMetadata = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var metadataJson;
            return __generator(this, function (_a) {
                metadataJson = metadata.map(function (m) {
                    return m.json;
                });
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vapp-templates/" + this.uuid + "/metadata", metadataJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Delete a specific piece of metadata associated with a vapp template by its
     * key.
     * @param {string} key metadata key
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    VappTemplate.prototype.deleteMetadata = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vapp-templates/" + this.uuid + "/metadata/" + key).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    return VappTemplate;
}(entity_1.Entity));
exports.VappTemplate = VappTemplate;
