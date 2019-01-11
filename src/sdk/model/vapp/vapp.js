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
var entity_with_perf_samples_1 = require("../mixins/perf-samples/entity-with-perf-samples");
var entity_1 = require("../common/entity");
var iland_1 = require("../../iland");
var vm_1 = require("../vm/vm");
var vapp_network_1 = require("../vapp-network/vapp-network");
var task_1 = require("../task/task");
var applyMixins_1 = require("rxjs/util/applyMixins");
var snapshot_1 = require("../common/snapshot/snapshot");
var has_snapshot_1 = require("../common/snapshot/has-snapshot");
var metadata_1 = require("../common/metadata/metadata");
var vapp_startup_section_item_1 = require("./vapp-startup-section-item");
var vapp_download_detail_1 = require("./vapp-download-detail");
var vm_resource_summary_map_response_1 = require("./summary/vm-resource-summary-map-response");
var vapp_resource_summary_1 = require("./summary/vapp-resource-summary");
var bill_1 = require("../common/billing/bill");
var billing_summary_1 = require("../common/billing/billing-summary");
var storage_profile_1 = require("../common/storage-profile");
/**
 * Virtual Application.
 */
var Vapp = (function (_super) {
    __extends(Vapp, _super);
    function Vapp(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        // EntityWithPerfSamples mixin properties and methods
        _this.apiPrefix = '/vapps';
        return _this;
    }
    /**
     * Gets a vApp by UUID.
     * @param uuid vApp UUID
     * @returns {Promise<Vapp>} promise that resolves with the vApp
     */
    Vapp.getVapp = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Vapp(json);
                    })];
            });
        });
    };
    Object.defineProperty(Vapp.prototype, "entityType", {
        get: function () {
            return 'IAAS_VAPP';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "deployed", {
        /**
         * Indicates whether this vApp is currently deployed.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.deployed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "powerStatus", {
        /**
         * Gets the vApps current power status.
         * @returns {VappPowerStatus} power status
         */
        get: function () {
            if (this._json.deployed && this._json.status === 'POWERED_OFF') {
                return 'PARTIALLY_POWERED_OFF';
            }
            else {
                return this._json.status;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "storageProfiles", {
        /**
         * Gets the storage profiles that are associated with this VM
         * @returns {Array<string>} array of storage profile UUIDs
         */
        get: function () {
            return this._json.storage_profiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "runtimeLease", {
        /**
         * Gets the runtime lease setting, in seconds.
         * @returns {number} runtime lease
         */
        get: function () {
            return this._json.runtime_lease_in_seconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "storageLease", {
        /**
         * Gets the storage lease setting, in seconds.
         * @returns {number} storage lease
         */
        get: function () {
            return this._json.storage_lease_in_seconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "runtimeLeaseExpirationDate", {
        /**
         * Gets the expiration date of the runtime lease, if one is currently active.
         * @returns {Date} runtime lease expiration date
         */
        get: function () {
            return this._json.runtime_expire === null ? null : new Date(this._json.runtime_expire);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "storageLeaseExpirationDate", {
        /**
         * Gets the expiration date of the storage lease, if one is currently active.
         * @returns {Date} storage lease expiration date
         */
        get: function () {
            return this._json.storage_expire === null ? null : new Date(this._json.storage_expire);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the vDC that this vApp is associated with.
         * @returns {string} vDC UUID
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "orgUuid", {
        /**
         * Gets the UUID of the Org that this vApp is associated with.
         * @returns {string} org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier for the vApp.
         * @returns {string} datacenter location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "description", {
        /**
         * Gets the vApps description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "vcloudHref", {
        /**
         * Gets the vCloud HREF of the vApp.
         * @returns {string} vCloud HREF
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "creationDate", {
        /**
         * Gets the date that this vApp was created.
         * @returns {Date} creation date
         */
        get: function () {
            return new Date(this._json.created_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "expired", {
        /**
         * Indicates whether this vApp is currently in the expired items bin.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.is_expired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "allocationModel", {
        /**
         * Get Vapp's Vdc Allocation Model
         * @returns {VdcAllocationModel} allocation model
         */
        get: function () {
            return this._json.allocation_model;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vapp.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Vapp.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VappJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the vApp data by retrieving it from the API again.
     * @returns {Promise<Vapp>}
     */
    Vapp.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Update the vApp name.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.updateName = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/update-name", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update the vApp description.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.updateDescription = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/update-description", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets the vApps child VMs.
     * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
     */
    Vapp.prototype.getVms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/vms").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (vmJson) { return new vm_1.Vm(vmJson); });
                    })];
            });
        });
    };
    /**
     * Gets the vApps child vApp Networks.
     * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp Networks
     */
    Vapp.prototype.getVappNetworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/networks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (vappNetJson) { return new vapp_network_1.VappNetwork(vappNetJson); });
                    })];
            });
        });
    };
    /**
     * Creates VMs in vApp.
     * @param {Array} buildVmRequestList
     * @returns {Promise<Task>} task response
     */
    Vapp.prototype.buildVms = function (buildVmRequestList) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/build-vms", buildVmRequestList).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Delete the vApp.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.deleteVapp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vapps/" + this.uuid).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Power on the vApp.
     * @param {boolean} forceGuestCustomization Optional param to force guest re-customization on restart
     * defaults to false
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.powerOnVapp = function (forceGuestCustomization) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/poweron", {
                        params: {
                            forceGuestCustomization: forceGuestCustomization
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Power off the vApp.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.powerOffVapp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/poweroff").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Managed shutdown of the vApp using the vApp's startup section settings.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.managedShutdown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/managed-shutdown").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Suspend the vApp.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.suspendVapp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/suspend").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Shutdown the vApp.
     * This action requires VMWare Tools to be installed on each VM in the vApp.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.shutdownVapp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/shutdown").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Reset the vApp.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.resetVapp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/reset").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Reboot the vApp.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.rebootVapp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/reboot").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Get the resource summary for the given vApp.
     * @returns {Promise<VappResourceSummary>} promise Promise that resolves with VappResourceSummary
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/summary").then(function (response) {
                        var json = response.data;
                        return new vapp_resource_summary_1.VappResourceSummary(json);
                    })];
            });
        });
    };
    /**
     * Get the snapshot for the given vApp.
     * @returns {Promise<Snapshot>} promise Promise that resolves with Snapshot
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/snapshot").then(function (response) {
                        var json = response.data;
                        return new snapshot_1.Snapshot(json);
                    })];
            });
        });
    };
    /**
     * Get whether the given vApp has a snapshot.
     * @returns {Promise<HasSnapshot>} promise Promise that resolves with HasSnapshot
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.hasVappSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/has-snapshot").then(function (response) {
                        var json = response.data;
                        return new has_snapshot_1.HasSnapshot(json);
                    })];
            });
        });
    };
    /**
     * Create a snapshot.
     * @param {SnapshotCreateRequest} request the snapshot creation request
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.createSnapshot = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/create-snapshot", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Restore a snapshot.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.restoreSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/restore-snapshot").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Remove a snapshot.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.removeSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/remove-snapshot").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets the vApp's metadata.
     * @returns {Promise<Metadata<MetadataType>[]>}
     * @throws Error if type not found for metadata
     */
    Vapp.prototype.getMetadata = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/metadata").then(function (response) {
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
     * Updates the vApp's metadata.
     * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
     * @returns {Promise<Task>} task promise
     */
    Vapp.prototype.updateMetadata = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var metadataJson;
            return __generator(this, function (_a) {
                metadataJson = metadata.map(function (m) {
                    return m.json;
                });
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vapps/" + this.uuid + "/metadata", metadataJson).then(function (response) {
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
    Vapp.prototype.deleteMetadata = function (metadataKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vapps/" + this.uuid + "/metadata/" + metadataKey).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Returns vApp Billing for a given invoice period.
     * If month and year are not explicitly supplied the current invoice period is used.
     * @param {number} year the invoice period year (defaults to current year)
     * @param {number} month the invoice period month (defaults to the current month) must be in range 1-12
     * @returns {Promise<Bill>} promise Promise that resolves with billing for the vApp and given invoice period
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getBilling = function (year, month) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/billing", {
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
     * Get the current billing for a vApp.
     * @returns {Promise<BillingSummary>} promise Promise that resolves with vapp billing
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getCurrentBilling = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/billing-summary").then(function (response) {
                        var json = response.data;
                        return new billing_summary_1.BillingSummary(json);
                    })];
            });
        });
    };
    /**
     *  Get the startup section for a particular Vapp.
     * @returns {Promise<Array<VappStartupSectionItem>>} promise Promise that resolves with a list of
     * VappStartupSectionItem
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getStartupSection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/startup-section").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_startup_section_item_1.VappStartupSectionItem(it); });
                    })];
            });
        });
    };
    /**
     * Add a vapp-network to vapp.
     * @param {VappNetworkCreateRequest} vappNetworkCreateRequest
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.addVappNetwork = function (vappNetworkCreateRequest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/add-vapp-network", vappNetworkCreateRequest.json)
                        .then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Copy a vApp.
     * @param {VappCopyMoveRequest} the request for the vApp copy
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.copyVapp = function (spec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/copy", spec.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Move a vApp.
     * @param {VappCopyMoveRequest} the request for the vApp move
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.moveVapp = function (spec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/move", spec.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update a vApp runtime lease.
     * @param {RuntimeLeaseUpdateRequest} runtime lease update request
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.updateRuntimeLease = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/update-runtime-lease", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update a vApp storage lease.
     * @param {StorageLeaseUpdateRequest} storage lease update request
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.updateStorageLease = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/update-storage-lease", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update the startup section of a particular Vapp.
     * @param {Array<VappStartupSectionItemRequest>} startupSection
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.updateStartupSection = function (startupSection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/update-startup-section", startupSection.map(function (section) { return section.json; })).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Enable the download of the vapp. Returns a TaskResponse which monitors the
     * progress of the download.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.enableDownload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/enable-download").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets download details for the vApp. Details include whether the vapp is
     * enabled for download, and, if enabled, the size and name of the download.
     * @returns {Promise<VappDownloadDetails>} promise Promise that resolves with VappDownloadDetails
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getDownloadDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/download-details").then(function (response) {
                        var json = response.data;
                        return new vapp_download_detail_1.VappDownloadDetails(json);
                    })];
            });
        });
    };
    /**
     * Get vm resource summary map.
     * @returns {Promise<VmResourceSummaryMapResponse>}
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getVmResourceSummaryMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/vm-summary-map").then(function (response) {
                        var json = response.data;
                        return new vm_resource_summary_map_response_1.VmResourceSummaryMapResponse(json);
                    })];
            });
        });
    };
    /**
     * Adds an org vDC network to the vApp.
     * @param {string} networkUuid the UUID of the org vDC network
     * @returns {Promise<Task>} a promise that resolves with the task details
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.addOrgVdcNetwork = function (networkUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/org-vdc-network/" + networkUuid).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets the vApp's available storage profiles.
     * @returns {Promise<Array<StorageProfile>>} a promise that resolves with the available storage profiles
     */
    /* istanbul ignore next: autogenerated */
    Vapp.prototype.getAvailableStorageProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapps/" + this.uuid + "/available-storage-profiles").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new storage_profile_1.StorageProfile(it); });
                    })];
            });
        });
    };
    /**
     * Retrieve a CSV report email with all event history for a given vApp.
     * @returns {Promise<void>} there is no response object.
     */
    Vapp.prototype.emailEventHistory = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapps/" + this.uuid + "/actions/email-event-history", {
                        email: email
                    }).then(function () { return undefined; })];
            });
        });
    };
    return Vapp;
}(entity_1.Entity));
exports.Vapp = Vapp;
applyMixins_1.applyMixins(Vapp, [entity_with_perf_samples_1.EntityWithPerfSamples]);
