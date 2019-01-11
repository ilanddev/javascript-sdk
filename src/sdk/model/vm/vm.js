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
var entity_1 = require("../common/entity");
var iland_1 = require("../../iland");
var vnic_1 = require("./vnic/vnic");
var virtual_disk_1 = require("./virtual-disk/virtual-disk");
var metadata_1 = require("../common/metadata/metadata");
var backup_restore_point_1 = require("./backup-restore-point/backup-restore-point");
var snapshot_1 = require("../common/snapshot/snapshot");
var screen_ticket_1 = require("./screen-ticket/screen-ticket");
var mks_screen_ticket_1 = require("./screen-ticket/mks-screen-ticket");
var bill_1 = require("../common/billing/bill");
var entity_with_perf_samples_1 = require("../mixins/perf-samples/entity-with-perf-samples");
var applyMixins_1 = require("rxjs/util/applyMixins");
var boot_options_1 = require("./boot-options/boot-options");
var guest_tools_1 = require("./guest-tools/guest-tools");
var vm_memory_size_update_request_1 = require("./vm-memory-size-update-request");
var jpeg_image_1 = require("../common/jpeg-image");
var billing_summary_1 = require("../common/billing/billing-summary");
var capabilities_1 = require("./capabilities/capabilities");
var guest_customization_1 = require("./guest-customization/guest-customization");
var vm_summary_1 = require("./summary/vm-summary");
var vm_network_1 = require("./vm-network/vm-network");
var vm_resource_summary_1 = require("./vm-resource-summary");
var storage_profile_1 = require("../common/storage-profile");
/**
 * Virtual Machine.
 */
var Vm = (function (_super) {
    __extends(Vm, _super);
    function Vm(_apiVm) {
        var _this = _super.call(this, _apiVm) || this;
        _this._apiVm = _apiVm;
        // EntityWithPerfSamples mixin properties and methods
        _this.apiPrefix = '/vms';
        return _this;
    }
    /**
     * Gets a VM by UUID.
     * @param uuid VM UUID
     * @returns {Promise<Vm>} promise that resolves with the VM
     */
    Vm.getVm = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + uuid).then(function (response) {
                        var apiVm = response.data;
                        return new Vm(apiVm);
                    })];
            });
        });
    };
    Object.defineProperty(Vm.prototype, "entityType", {
        get: function () {
            return 'IAAS_VM';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vmLocalId", {
        /**
         * Gets the VM's local ID.
         * @returns {string} the VM's local ID
         */
        get: function () {
            return this._apiVm.vm_local_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vimDatastoreRef", {
        /**
         * Gets the VM's datastore reference.
         * @returns {string} datastore reference
         */
        get: function () {
            return this._apiVm.vim_datastore_ref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the vDC that the VM belongs to.
         * @returns {string} vDC UUID
         */
        get: function () {
            return this._apiVm.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcloudHref", {
        /**
         * Gets the HREF of the vCloud Director instance that this VM is associated with.
         * @returns {string} vCloud HREF
         */
        get: function () {
            return this._apiVm.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterName", {
        /**
         * Gets the name of the vCenter server that the VM is associated with.
         * @returns {string} vCenter name
         */
        get: function () {
            return this._apiVm.vcenter_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterMoRef", {
        /**
         * Gets the VM'r vCenter reference.
         * @returns {string} vCenter reference
         */
        get: function () {
            return this._apiVm.vcenter_moref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterInstanceUuid", {
        /**
         * Gets the UUID of the vCenter instance that the VM is associated with.
         * @returns {string} vCenter UUID
         */
        get: function () {
            return this._apiVm.vcenter_instance_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterHref", {
        /**
         * Gets the HREF of the vCenter instance that the VM is associated with.
         * @returns {string} vCenter HREF
         */
        get: function () {
            return this._apiVm.vcenter_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vappUuid", {
        /**
         * Gets the UUID of the vApp that this VM belongs to.
         * @returns {string} vApp UUID
         */
        get: function () {
            return this._apiVm.vapp_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "storageProfiles", {
        /**
         * Gets the list of storage profiles that are available to this VM.
         * @returns {Array<string>} list of storage profile UUIDs
         */
        get: function () {
            return this._apiVm.storage_profiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "powerStatus", {
        /**
         * Gets the power status of the VM.
         * @returns {VmPowerStatus} power status identifier
         */
        get: function () {
            if (this._apiVm.deployed && this._apiVm.status === 'POWERED_OFF') {
                return 'PARTIALLY_POWERED_OFF';
            }
            else {
                return this._apiVm.status;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "operatingSystem", {
        /**
         * Gets the VM's operating system.
         * @returns {OperatingSystem} operating system
         */
        get: function () {
            return this._apiVm.os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "orgUuid", {
        /**
         * Gets the UUID of the Organization that the VM belongs to.
         * @returns {string} Org UUID
         */
        get: function () {
            return this._apiVm.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier for the VM.
         * @returns {string} datacenter location ID
         */
        get: function () {
            return this._apiVm.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "insertedMediaName", {
        /**
         * Gets the name of the media that is currently inserted in the VM.
         * @returns {string} the name of the inserted media or null if no media is currently inserted
         */
        get: function () {
            return this._apiVm.inserted_media_name && this._apiVm.inserted_media_name.length > 0 ?
                this._apiVm.inserted_media_name : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "mediaInserted", {
        /**
         * Indicates whether there is currently a media inserted in the VM.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVm.media_inserted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "hardwareVersion", {
        /**
         * Gets the VM's hardware version.
         * @returns {string} hardware version
         */
        get: function () {
            return this._apiVm.hardware_version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "description", {
        /**
         * Gets the VM's description.
         * @returns {string} description
         */
        get: function () {
            return this._apiVm.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "deployed", {
        /**
         * Indicates whether the VM is deployed.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVm.deployed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "createdDate", {
        /**
         * Gets the date that the VM was created.
         * @returns {Date} creation date
         */
        get: function () {
            return this._apiVm.created_date !== null ? new Date(this._apiVm.created_date) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "numberOfCpus", {
        /**
         * Gets the number of CPUs for the VM.
         * @returns {number} number of CPUs
         */
        get: function () {
            return this._apiVm.cpus_number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "coresPerSocket", {
        /**
         * Gets the number of cores per CPU socket.
         * @returns {number} cores per CPU socket
         */
        get: function () {
            return this._apiVm.cores_per_socket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "memorySize", {
        /**
         * Gets the VM's configured memory in MB.
         * @returns {number} the VM's configured memory in MB.
         */
        get: function () {
            return this._apiVm.memory_size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "allocationModel", {
        /**
         * Gets the VM's Vdc Allocation Model.
         * @returns {VdcAllocationModel} allocation model
         */
        get: function () {
            return this._apiVm.allocation_model;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vm.prototype.toString = function () {
        return JSON.stringify(this._apiVm, undefined, 2);
    };
    Object.defineProperty(Vm.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VmJson} the API VM object
         */
        get: function () {
            return Object.assign({}, this._apiVm);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deletes this VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vms/" + this.uuid).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Create a new virtual disk for this VM.
     * @param {VirtualDiskJson} diskJson spec for the new disk
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.createVirtualDisk = function (diskJson) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/add-virtual-disk", diskJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Creates a new Vm in the vApp based on an existing Vm.
     * @param {VmCopyMoveRequest} copyMoveRequest Vm properties
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.copy = function (copyMoveRequest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/copy", copyMoveRequest.json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Creates a snapshot of the VM.
     * @param {SnapshotCreateRequest} request the snapshot creation request
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.createSnapshot = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/create-snapshot", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Disable Nested Hypervisor
     * @returns {Promise<Task>}
     */
    Vm.prototype.disableNestedHypervisor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/disable-nested-hypervisor").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Ejects any media from the VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.ejectMedia = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/eject-media").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Retrieve a CSV report email with all event history for a given Vm.
     * @returns {Promise<void>} there is no response object.
     */
    Vm.prototype.emailEventHistory = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/email-event-history", {
                        email: email
                    }).then(function () { return undefined; })];
            });
        });
    };
    /**
     * Enable Nested Hypervisor
     * @returns {Promise<Task>}
     */
    Vm.prototype.enableNestedHypervisor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/enable-nested-hypervisor").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Inserts a specified media into the VM.
     * @param {string} mediaUuid the UUID of the media to insert
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.insertMedia = function (mediaUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                json = {
                    media: mediaUuid
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/insert-media", json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Install VmWare Tools.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.installVmWareTools = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/install-vmware-tools").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Moves an existing VM into the specified Vapp.
     * @param {VmCopyMoveRequest} spec Specification for newly moved vm
     * @returns {Promise<Task>} task Promise
     */
    /* istanbul ignore next: autogenerated */
    Vm.prototype.moveVm = function (spec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/move", spec.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Powers off the VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.powerOff = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('poweroff')];
            });
        });
    };
    /**
     * Powers on the VM.
     * @param {boolean} forceGuestCustomization whether to force guest customization
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.powerOn = function (forceGuestCustomization) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('poweron', forceGuestCustomization)];
            });
        });
    };
    /**
     * Requests that the guest OS restart.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.rebootGuestOs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('reboot')];
            });
        });
    };
    /**
     * Update the name and description of the VM as well as the guest customization section, the cpu, memory,
     * and disk specifications. Any sections left out of the VmReconfigureRequest will be left unchanged.
     * @param {VmReconfigureRequest} request
     * @returns {Promise<Task>}
     */
    Vm.prototype.reconfigure = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/reconfigure", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Move the VM to a different storage profile.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.relocate = function (storageProfileUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                json = {
                    storage_profile: storageProfileUuid
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/relocate", json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Performs a hard reset power operation.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('reset')];
            });
        });
    };
    /**
     * Reset MAC Addresses
     * @returns {Promise<Task>}
     */
    Vm.prototype.resetMacAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/reset-mac-addresses").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Restores a backup of the VM.
     * @param {Date} timestamp the timestamp of the restore point to be restored
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.restoreBackup = function (timestamp) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                json = {
                    time: timestamp.getTime()
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/restore", json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Restore a backup of the VM into another vApp.
     * @param {Date} timestamp the timestamp of the restore point to be restored
     * @param {string} vappUuid the uuid of the vApp in which VM will be restored
     * @returns {Promise<Task>}
     */
    Vm.prototype.restoreBackupIntoVapp = function (timestamp, vappUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                json = {
                    time: timestamp.getTime(),
                    vapp_uuid: vappUuid
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/restore-into-vapp", json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Restore the VMs snapshot.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.restoreSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/restore-snapshot").then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Shuts down the VMs guest operating system.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.shutdownGuestOs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('shutdown')];
            });
        });
    };
    /**
     * Suspends VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.suspend = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('suspend')];
            });
        });
    };
    /**
     * Update VM boot options
     * @returns {Promise<Task>}
     */
    Vm.prototype.updateBootOptions = function (bootDelay, enterBios) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-boot-options", {
                        boot_delay: bootDelay,
                        is_enter_bios: enterBios
                    }).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update VM capabilities
     * @param {CapabilitiesUpdateRequest} request VM capabilities update request
     * @returns {Promise<Task>}
     */
    Vm.prototype.updateCapabilities = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-capabilities", request.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Edit the number of CPUs.
     * @param request {VmCpuCountUpdateRequest} specifying new number of CPUs
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateCpuCount = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-cpu-count", request.json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Updates the VM's description.
     * @param description the new description
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateDescription = function (description) {
        return __awaiter(this, void 0, void 0, function () {
            var spec;
            return __generator(this, function (_a) {
                spec = {
                    description: description
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-description", spec).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Updates the VM's guest customization.
     * @param {GuestCustomizationUpdateRequest} request
     * @returns {Promise<Task>}
     */
    Vm.prototype.updateGuestCustomization = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-guest-customization", request.json)
                        .then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Edit the memory size of the VM.
     * @param memorySizeMb {number} the new memory size in MB
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateMemorySize = function (memorySizeMb) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = new vm_memory_size_update_request_1.VmMemorySizeUpdateRequest({ memory_size: memorySizeMb });
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-memory-size", request.json)
                        .then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Updates the VM's name.
     * @param newName the new name
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateName = function (newName) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                json = {
                    name: newName
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-name", json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Updates the VM's tools upgrade policy.
     * @param {ToolsUpgradePolicy} policy The new policy
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateToolsUpgradePolicy = function (policy) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                json = { upgrade_policy: policy };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-tools-upgrade-policy", json)
                        .then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Update a virtual disk that is attached to this VM.
     * @param {VirtualDiskJson} diskJson updated specification for the disk
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateVirtualDisk = function (diskJson) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-virtual-disk", diskJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Update the VM's virtual disks.
     * @param {Array<VirtualDiskJson>} disksJson array of specs for new disks
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateVirtualDisks = function (disksJson) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-virtual-disks", disksJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Update virtual network cards for a VM.
     * @param {Array<Vnic>} vnics
     * @returns {Promise<Task>}
     */
    Vm.prototype.updateVnics = function (vnics) {
        return __awaiter(this, void 0, void 0, function () {
            var spec;
            return __generator(this, function (_a) {
                spec = vnics.map(function (vnic) {
                    return vnic.json;
                });
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-vnics", spec).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Upgrade the VM's guest tools.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.upgradeGuestTools = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/upgrade-guest-tools").then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VMs available backup restore points.
     * @returns {Promise<BackupRestorePoint[]>} promise that resolves with the list of backup restore points
     */
    Vm.prototype.getBackupRestorePoints = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/backups").then(function (response) {
                        var restorePointsJson = response.data.data;
                        return restorePointsJson.map(function (restorePointJson) { return new backup_restore_point_1.BackupRestorePoint(restorePointJson); });
                    })];
            });
        });
    };
    /**
     * Gets the bill for the VM for the specified month and year. Month and year default to current month and year if left
     * unspecified.
     * @returns {Promise<Bill>} promise that resolves with the Bill
     */
    Vm.prototype.getBill = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/billing", {
                        params: {
                            month: month,
                            year: year
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new bill_1.Bill(json);
                    })];
            });
        });
    };
    /**
     * Gets the VMs boot options
     * @returns {Promise<BootOptions>} promise that resolves with the vm boot options
     */
    Vm.prototype.getBootOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/boot-options").then(function (response) {
                        var bootOptionsJson = response.data;
                        return new boot_options_1.BootOptions(bootOptionsJson);
                    })];
            });
        });
    };
    /**
     * Gets the VM capabilities
     * @returns {Promise<Capabilities>} promise that resolves with the vm capabilities
     */
    Vm.prototype.getCapabilities = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/capabilities").then(function (response) {
                        var capabilitiesJson = response.data;
                        return new capabilities_1.Capabilities(capabilitiesJson);
                    })];
            });
        });
    };
    /**
     * Gets the VM recommended disk bus type
     * @returns {Promise<DiskType>} promise that resolves with the vm recommended disk bus type
     */
    Vm.prototype.getRecommendedDiskBusType = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/recommended-disk-bus-type").then(function (response) {
                        return response.data.bus_type;
                    })];
            });
        });
    };
    /**
     * Gets the VM guest customization section includes properties of the guest operating system that can be modified
     * such as passwords, and domain names.
     * @returns {Promise<GuestCustomization>} promise that resolves with the vm guest customization object
     */
    Vm.prototype.getGuestCustomization = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/guest-customization").then(function (response) {
                        var guestCustomizationJson = response.data;
                        return new guest_customization_1.GuestCustomization(guestCustomizationJson);
                    })];
            });
        });
    };
    /**
     * Gets the VM guest tools information
     * @returns {Promise<GuestCustomization>} promise that resolves with the vm guest tools
     */
    Vm.prototype.getGuestToolsInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/guest-tools").then(function (response) {
                        var guestToolsJson = response.data;
                        return new guest_tools_1.GuestTools(guestToolsJson);
                    })];
            });
        });
    };
    /**
     * Returns true if VM has a snapshot
     * @returns {Promise<boolean>} promise that resolves with a boolean that indicates if VM has a snapshot
     */
    Vm.prototype.hasSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/has-snapshot").then(function (response) {
                        return response.data.has_snapshot;
                    })];
            });
        });
    };
    /**
     * Gets the VM summary
     * @returns {Promise<VmSummary>} promise that resolves with the vm guest tools
     */
    Vm.prototype.getSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/summary").then(function (response) {
                        var summary = response.data;
                        return new vm_summary_1.VmSummary(summary);
                    })];
            });
        });
    };
    /**
     * Gets the VM tools upgrade policy
     * @returns {Promise<ToolsUpgradePolicy>} promise that resolves with tools upgrade policy string
     */
    Vm.prototype.getToolUpgradePolicy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/tools-upgrade-policy").then(function (response) {
                        return response.data.upgrade_policy;
                    })];
            });
        });
    };
    /**
     * Delete a virtual disk.
     * @param {string} name the name of the disk to delete
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.deleteVirtualDisk = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vms/" + this.uuid + "/disks/" + name).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VM's metadata.
     * @returns {Promise<Metadata<MetadataType>[]>}
     */
    Vm.prototype.getMetadata = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/metadata").then(function (response) {
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
     * Updates the VM's metadata.
     * @param {Array<Metadata<MetadataType>>} metadata the new array of metadata
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateMetadata = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var metadataJson;
            return __generator(this, function (_a) {
                metadataJson = metadata.map(function (m) {
                    return m.json;
                });
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vms/" + this.uuid + "/metadata", metadataJson).then(function (response) {
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
    Vm.prototype.deleteMetadata = function (metadataKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vms/" + this.uuid + "/metadata/" + metadataKey).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VMs MKS screen ticket for a remote console connection.
     * @returns {Promise<MksScreenTicket>} promise that resolves with the MKS screen ticket
     */
    Vm.prototype.getMksScreenTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/mks-screen-ticket").then(function (response) {
                        var json = response.data;
                        return new mks_screen_ticket_1.MksScreenTicket(json);
                    })];
            });
        });
    };
    /**
     * Get the networks for current VM.
     * @returns {Promise<Array<VmNetwork>>}
     */
    Vm.prototype.getNetworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/networks").then(function (response) {
                        return response.data.data.map(function (data) {
                            return new vm_network_1.VmNetwork(data);
                        });
                    })];
            });
        });
    };
    /**
     * Gets the VMs screen ticket for a remote console connection.
     * @returns {Promise<ScreenTicket>} promise that resolves with the screen ticket
     */
    Vm.prototype.getScreenTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/screen-ticket").then(function (response) {
                        var json = response.data;
                        return new screen_ticket_1.ScreenTicket(json);
                    })];
            });
        });
    };
    /**
     * Gets the current screen JPEG thumbnail image.
     * @returns {Promise<JpegImage>} promise Promise that resolves with a JpegImage
     */
    /* istanbul ignore next: autogenerated */
    Vm.prototype.getScreen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/screen", {
                        headers: {
                            'Accept': 'image/jpeg'
                        },
                        responseType: 'arraybuffer'
                    }).then(function (response) {
                        return new jpeg_image_1.JpegImage(response.data);
                    })];
            });
        });
    };
    /**
     * Deletes the VMs snapshot.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.deleteSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/remove-snapshot").then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VMs snapshot details.
     * @returns {Promise<Snapshot>} promise that resolves with the current snapshot details
     * @throws {ApiError} as NotFoundError if the VM doesn't currently have a snapshot
     */
    Vm.prototype.getSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/snapshot").then(function (response) {
                        var json = response.data;
                        return new snapshot_1.Snapshot(json);
                    })];
            });
        });
    };
    /**
     * Gets the VM's virtual disks.
     * @returns {Promise<VirtualDisk[]>} array of virtual disks
     */
    Vm.prototype.getVirtualDisks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/virtual-disks").then(function (response) {
                        var apiDisks = response.data.data;
                        return apiDisks.map(function (apiDisk) { return new virtual_disk_1.VirtualDisk(apiDisk); });
                    })];
            });
        });
    };
    /**
     * Updates the VM's virtual hardware to the latest version available.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateVirtualHardwareVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/update-virtual-hardware-version").then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the list of VNICs for this VM.
     * @returns {Promise<Vnic[]>}
     */
    Vm.prototype.getVnics = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/vnics").then(function (response) {
                        var apiVnics = response.data.data;
                        return apiVnics.map(function (apiVnic) { return new vnic_1.Vnic(apiVnic); });
                    })];
            });
        });
    };
    /**
     * Delete a VNIC from this VM.
     * @returns {Promise<Task>} a promise that resolves with the task
     */
    Vm.prototype.deleteVnic = function (vnicId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vms/" + this.uuid + "/vnics/" + vnicId).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Refreshes the VM data by retrieving it from the API again.
     * @returns {Promise<Vm>}
     */
    Vm.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid).then(function (response) {
                        _this._apiVm = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Performs a power operation on the VM.
     * @param {VmPowerOperation} type the type of power operation to perform
     * @param {boolean} forceGuestCustomization whether to force guest customization (only applicable when powering on)
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.performPowerOperation = function (type, forceGuestCustomization) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                config = undefined;
                if (type === 'poweron' && forceGuestCustomization) {
                    config = {
                        params: {
                            forceGuestCustomization: forceGuestCustomization
                        }
                    };
                }
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vms/" + this.uuid + "/actions/" + type, undefined, config).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Get the billing summary for a VM.
     * @returns {Promise<BillingSummary>} a promise that resolves with the current billing information
     */
    /* istanbul ignore next: autogenerated */
    Vm.prototype.getCurrentBilling = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/billing-summary").then(function (response) {
                        var json = response.data;
                        return new billing_summary_1.BillingSummary(json);
                    })];
            });
        });
    };
    /**
     * Gets the VM's resource summary.
     * @returns {Promise<VmResourceSummary>} a promise that resolves with the resource summary information
     */
    /* istanbul ignore next: autogenerated */
    Vm.prototype.getVmSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/summary").then(function (response) {
                        var json = response.data;
                        return new vm_resource_summary_1.VmResourceSummary(json);
                    })];
            });
        });
    };
    /**
     * Gets the VM's available storage profiles.
     * @returns {Promise<Array<StorageProfile>>} a promise that resolves with the available storage profiles
     */
    /* istanbul ignore next: autogenerated */
    Vm.prototype.getAvailableStorageProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vms/" + this.uuid + "/available-storage-profiles").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new storage_profile_1.StorageProfile(it); });
                    })];
            });
        });
    };
    return Vm;
}(entity_1.Entity));
exports.Vm = Vm;
applyMixins_1.applyMixins(Vm, [entity_with_perf_samples_1.EntityWithPerfSamples]);
