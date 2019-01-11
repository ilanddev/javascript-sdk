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
var vm_1 = require("../vm/vm");
var vapp_1 = require("../vapp/vapp");
var task_1 = require("../task/task");
var vdc_summary_1 = require("./vdc-summary");
var metadata_1 = require("../common/metadata/metadata");
var entity_with_perf_samples_1 = require("../mixins/perf-samples/entity-with-perf-samples");
var applyMixins_1 = require("rxjs/util/applyMixins");
var media_1 = require("../media/media");
var storage_profile_1 = require("../common/storage-profile");
var billing_summary_1 = require("../common/billing/billing-summary");
var bill_1 = require("../common/billing/bill");
var vdc_storage_profile_summary_1 = require("./vdc-storage-profile-summary");
var billing_sample_serie_1 = require("../org/billing-sample-serie");
var report_header_1 = require("../common/reports/report-header");
var edge_1 = require("../edge/edge");
var internal_network_1 = require("../internal-network/internal-network");
var vapp_resource_summary_map_1 = require("./vapp-resource-summary-map");
var vm_resource_summary_map_1 = require("./vm-resource-summary-map");
/**
 * Virtual Data Center.
 */
var Vdc = (function (_super) {
    __extends(Vdc, _super);
    function Vdc(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        // EntityWithPerfSamples mixin properties and methods
        _this.apiPrefix = '/vdcs';
        return _this;
    }
    /**
     * Gets a vDC by UUID.
     * @param uuid vDC UUID
     * @returns {Promise<Vdc>} promise that resolves with the vDC
     */
    Vdc.getVdc = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Vdc(json);
                    })];
            });
        });
    };
    Object.defineProperty(Vdc.prototype, "entityType", {
        get: function () {
            return 'IAAS_VDC';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "enabled", {
        /**
         * Indicates whether the vDC is enabled.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterMoref", {
        /**
         * Gets the vCenter HREF.
         * @returns {string} vCenter HREF
         */
        get: function () {
            return this._json.vcenter_moref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterName", {
        /**
         * Gets the vCenter name.
         * @returns {string} vCenter name
         */
        get: function () {
            return this._json.vcenter_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "description", {
        /**
         * Gets the description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcloudHref", {
        /**
         * Gets the vCloud HREF
         * @returns {string} vCloud HREF
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterInstanceUuid", {
        /**
         * Gets the vCenter instance UUID.
         * @returns {string} vCenter instance UUID
         */
        get: function () {
            return this._json.vcenter_instance_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterHref", {
        /**
         * Gets the vCenter HREF
         * @returns {string} vCenter HREF
         */
        get: function () {
            return this._json.vcenter_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "allocationModel", {
        /**
         * Gets the vDC allocation __json__
         * @returns {VdcAllocationModel} allocation __json__ identifier
         */
        get: function () {
            return this._json.allocation_model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "reservedCpu", {
        /**
         * Gets the amount of reserved CPU
         * @returns {number} reserved cpu
         */
        get: function () {
            return this._json.reserved_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "reservedMemory", {
        /**
         * Gets the amount of reserved memory.
         * @returns {number} reserved memory
         */
        get: function () {
            return this._json.reserved_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "diskLimit", {
        /**
         * Gets the disk limit within the vDc.
         * @returns {number} disk limit
         */
        get: function () {
            return this._json.disk_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "allocatedCpu", {
        /**
         * Gets the amount of CPU allocated
         * @returns {number} allocated CPU
         */
        get: function () {
            return this._json.alloc_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "allocatedMemory", {
        /**
         * Gets the amount of memory allocated
         * @returns {number} allocated memory
         */
        get: function () {
            return this._json.alloc_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "maxHardwareVersion", {
        /**
         * Gets the maximum hardware version of the vDC.
         * @returns {string} max hardware version
         */
        get: function () {
            return this._json.max_hardware_version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "networkQuota", {
        /**
         * Gets the network quota.
         * @returns {number} network quota
         */
        get: function () {
            return this._json.network_quota;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "usedNetworkCount", {
        /**
         * Gets the number of networks that exist within this vDC.
         * @returns {number} used network count
         */
        get: function () {
            return this._json.used_network_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier.
         * @returns {string} location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "orgUuid", {
        /**
         * Gets the UUID of the organization that the vDC is associated with.
         * @returns {string} Org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vdc.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Vdc.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VdcJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the vDC data by retrieving it from the API again.
     * @returns {Promise<Vdc>}
     */
    Vdc.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets the vDCs child vApps.
     * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
     */
    Vdc.prototype.getVapps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/vapps").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (vappJson) { return new vapp_1.Vapp(vappJson); });
                    })];
            });
        });
    };
    /**
     * Gets the vDCs child VMs.
     * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
     */
    Vdc.prototype.getVms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/vms").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (vmJson) { return new vm_1.Vm(vmJson); });
                    })];
            });
        });
    };
    /**
     * Create a scratch vApp into the vDC.
     * @param {BuildVappRequestJson} buildVappRequest
     * @returns {Promise<Task>} task promise
     */
    Vdc.prototype.buildVapp = function (buildVappRequest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vdcs/" + this.uuid + "/actions/build-vapp", buildVappRequest).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets the vDCs Summary.
     * @returns {Promise<VdcSummary>} promise that resolved with a vDC summary
     */
    Vdc.prototype.getSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/summary").then(function (response) {
                        var json = response.data;
                        return new vdc_summary_1.VdcSummary(json);
                    })];
            });
        });
    };
    /**
     * Add a vApp from template to vDC.
     * @param {VdcAddVappFromTemplateRequest} vdcAddVappFromTemplateRequest
     * @returns {Promise<Task>} task promise
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.addVappFromTemplate = function (vdcAddVappFromTemplateRequest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vdcs/" + this.uuid + "/actions/add-vapp-from-template", vdcAddVappFromTemplateRequest.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Get media for the vDC.
     * @returns {Promise<Array<Media>>} promise that is resolved with a list of media
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getMedias = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/medias").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new media_1.Media(it); });
                    })];
            });
        });
    };
    /**
     * Gets the vDC metadata.
     * @returns {Promise<Metadata<MetadataType>[]>}
     */
    Vdc.prototype.getMetadata = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/metadata").then(function (response) {
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
     * Get the VM inventory reports available for download for the given vDC.
     * @param {string} the report format to filter on
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of report headers
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getVmInventoryReports = function (format) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/vm-inventory-reports", {
                        params: {
                            format: format
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Updates the vDC metadata.
     * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
     * @returns {Promise<Task>} task promise
     */
    Vdc.prototype.updateMetadata = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vdcs/" + this.uuid + "/metadata", metadata.map(function (it) { return it.json; }))
                        .then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Deletes a metadata entry for vDC.
     * @param {string} metadataKey the key of the metadata entry to delete
     * @returns {Promise<Task>} task promise
     */
    Vdc.prototype.deleteMetadata = function (metadataKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vdcs/" + this.uuid + "/metadata/" + metadataKey).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Get the edges for the vDC.
     * @returns {Promise<Edge>} promise that resolves with a list of edges
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getEdges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/edges").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new edge_1.Edge(it); });
                    })];
            });
        });
    };
    /**
     * Gets all org-vdc networks within this vDC.
     * @returns {Promise<Array<InternalNetwork>>} a promise that resolves with the list of org-vdc networks.
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getOrgVdcNetworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/org-vdc-networks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new internal_network_1.InternalNetwork(it); });
                    })];
            });
        });
    };
    /**
     * Creates a new org-vdc network in this vDC.
     * @param {OrgVdcNetworkCreateRequest} network the specification for the new network
     * @returns {Promise<Task>} a promise that resolves with a task
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.createOrgVdcNetwork = function (network) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vdcs/" + this.uuid + "/actions/create-org-vdc-network", network.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Get all storage profiles for the vDC.
     * @param {boolean} includeDisabled whether to also return disabled storage profiles
     * @returns {Promise<Array<StorageProfile>>} a promise that resolves with the list of storage profiles
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getStorageProfiles = function (includeDisabled) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/storage-profiles", {
                        params: {
                            includeDisabled: includeDisabled
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new storage_profile_1.StorageProfile(it); });
                    })];
            });
        });
    };
    /**
     * Gets the current billing information
     * @returns {Promise<BillingSummary>} a promise that resolves with the current billing information
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getCurrentBilling = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/billing-summary").then(function (response) {
                        var json = response.data;
                        return new billing_summary_1.BillingSummary(json);
                    })];
            });
        });
    };
    /**
     * Get billing for a specified billing period. If the billing period is not specified, the current billing period is
     * used.
     * @param {number} year the year
     * @param {number} month the month in range 0-11
     * @returns {Promise<Bill>} a promise that resolves with the bill
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getBilling = function (year, month) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/billing", {
                        params: {
                            year: year,
                            month: month
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new bill_1.Bill(json);
                    })];
            });
        });
    };
    /**
     * Get bills for all child vapps for the specified billing period. If the billing period is not specified, the current
     * billing period is used.
     * @param {number} month the month in range 0-11
     * @param {number} year the year
     * @returns {Promise<Array<Bill>>} a promise that resolves with the list of vapp bills
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getVappBills = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/vapp-bills", {
                        params: {
                            month: month,
                            year: year
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new bill_1.Bill(it); });
                    })];
            });
        });
    };
    /**
     * Get bills for all child VMs for the specified billing period. If the billing period is not specified, the current
     * billing period is used.
     * @param {number} month the month in range 0-11
     * @param {number} year the year
     * @returns {Promise<Array<Bill>>} a promise that resolves with the list of VM bills
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getVmBills = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/vm-bills", {
                        params: {
                            month: month,
                            year: year
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new bill_1.Bill(it); });
                    })];
            });
        });
    };
    /**
     * Gets the storage profile summary for this vDC and the specified billing period.
     * @param {number} year the year
     * @param {number} month the month in range 1-12.
     * @returns {Promise<VdcStorageProfileSummary>} a promise that resolves with the storage profile summary
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getStorageProfileSummary = function (year, month) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/storage-profile-summary", {
                        params: {
                            year: year,
                            month: month
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new vdc_storage_profile_summary_1.VdcStorageProfileSummary(json);
                    })];
            });
        });
    };
    /**
     * Gets the cost over invoice period samples for the vDC and specified billing period.
     * @param {number} year the year
     * @param {number} month the month in range 1-12
     * @param {Array<string>} additionalFields any additional bill fields that should be included in the results
     * @returns {Promise<BillingSampleSerie>} a promise that resolves with the sample series
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getCostOverInvoicePeriodSerie = function (year, month, additionalFields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/cost-over-invoice-period", {
                        params: {
                            year: year,
                            month: month,
                            additionalFields: additionalFields
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new billing_sample_serie_1.BillingSampleSerie(json);
                    })];
            });
        });
    };
    /**
     * Generate the vm inventory report for a given vDC.
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.generateVmInventoryReport = function (emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vdcs/" + this.uuid + "/actions/generate-vm-inventory-report", {
                        params: {
                            emailOnCompletion: emailOnCompletion,
                            email: email
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets all child vApp resource summaries.
     * @returns {Promise<VappResourceSummaryMap>} a promise that resolves with a map of vApp resource summaries, keyed by
     * UUID.
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getVappResourceSummaries = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/vapp-summary-map").then(function (response) {
                        var json = response.data;
                        return new vapp_resource_summary_map_1.VappResourceSummaryMap(json);
                    })];
            });
        });
    };
    /**
     * Gets resource summaries for all child VMs.
     * @returns {Promise<VmResourceSummaryMap>} a promise that resolves with a map of VM resource summaries, keyed by
     * UUID.
     */
    /* istanbul ignore next: autogenerated */
    Vdc.prototype.getVmResourceSummaries = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdcs/" + this.uuid + "/vm-summary-map").then(function (response) {
                        var json = response.data;
                        return new vm_resource_summary_map_1.VmResourceSummaryMap(json);
                    })];
            });
        });
    };
    /**
     * Retrieve a CSV report email with all event history for a given vDC.
     * @returns {Promise<void>} there is no response object.
     */
    Vdc.prototype.emailEventHistory = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vdcs/" + this.uuid + "/actions/email-event-history", {
                        email: email
                    }).then(function () { return undefined; })];
            });
        });
    };
    return Vdc;
}(entity_1.Entity));
exports.Vdc = Vdc;
applyMixins_1.applyMixins(Vdc, [entity_with_perf_samples_1.EntityWithPerfSamples]);
