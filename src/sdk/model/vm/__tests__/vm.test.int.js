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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var iland_1 = require("../../../iland");
var user_1 = require("../../user/user");
var configuration_1 = require("../../../../../__tests__/configuration");
var direct_grant_auth_provider_1 = require("../../../auth/direct-grant-auth-provider");
var vm_1 = require("../vm");
var task_1 = require("../../task/task");
var perf_samples_request_1 = require("../../mixins/perf-samples/perf-samples-request");
var auth;
var inventoryVm;
beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        auth = new direct_grant_auth_provider_1.IlandDirectGrantAuthProvider({
            username: configuration_1.TestConfiguration.getUsername(),
            password: configuration_1.TestConfiguration.getPassword(),
            clientSecret: configuration_1.TestConfiguration.getClientSecret(),
            clientId: configuration_1.TestConfiguration.getClientId()
        });
        iland_1.Iland.init(auth);
        return [2 /*return*/, user_1.User.getCurrentUser().then(function (user) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, user.getInventory().then(function (inventories) {
                                if (inventories.length === 0) {
                                    throw Error('no company inventories returned for test user, cant perform test.');
                                }
                                var inventory = inventories[0];
                                var vms = inventory.getEntitiesByType('IAAS_VM').filter(function (it) { return it.uuid.startsWith('res') || it.uuid.startsWith('dev'); });
                                expect(vms).toBeDefined();
                                if (vms) {
                                    expect(vms.length).toBeGreaterThan(0);
                                    inventoryVm = vms[0];
                                }
                                else {
                                    fail('failed to get inventory vms for vm tests');
                                }
                            })];
                    });
                });
            })];
    });
}); });
test('Get a proper error when trying to retrieve non-existent VM', function () { return __awaiter(_this, void 0, void 0, function () {
    var err_1, apiError, raw;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, vm_1.Vm.getVm('fake-uuid')];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                apiError = err_1;
                raw = apiError.getJson();
                expect(apiError.getType()).toBe('UnauthorizedError');
                expect(apiError.getMessage()).toBeDefined();
                expect(apiError.getDetailMessage()).toBe(raw.detail_message);
                expect(apiError.getMessage()).toBe(raw.message);
                expect(apiError.getType()).toBe(raw.type);
                expect(apiError.toString().length).toBeGreaterThan(0);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
test('Can get vm and verify required properties', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) {
                var raw = vm.json;
                expect(vm.name).toBeDefined();
                expect(vm.name).toBe(raw.name);
                expect(vm.uuid).toBe(inventoryVm.uuid);
                expect(vm.uuid).toBe(raw.uuid);
                expect(vm.coresPerSocket).toBeGreaterThan(0);
                expect(vm.coresPerSocket).toBe(raw.cores_per_socket);
                expect(vm.createdDate).toBeDefined();
                if (vm.createdDate !== null) {
                    expect(vm.createdDate.getTime()).toBe(raw.created_date === null ?
                        0 : raw.created_date);
                }
                expect(vm.locationId).toBeDefined();
                expect(vm.locationId).toBe(raw.location_id);
                expect(vm.vappUuid).toBeDefined();
                expect(vm.vappUuid).toBe(raw.vapp_uuid);
                expect(vm.vdcUuid).toBeDefined();
                expect(vm.vdcUuid).toBe(raw.vdc_uuid);
                expect(vm.hardwareVersion).toBeDefined();
                expect(vm.hardwareVersion).toBe(raw.hardware_version);
                expect(vm.vmLocalId).toBeDefined();
                expect(vm.vmLocalId).toBe(raw.vm_local_id);
                expect(vm.vcloudHref).toBeDefined();
                expect(vm.vcloudHref).toBe(raw.vcloud_href);
                expect(vm.storageProfiles).toBeDefined();
                expect(vm.storageProfiles.length).toBeGreaterThan(0);
                expect(vm.storageProfiles).toBe(raw.storage_profiles);
                expect(vm.vcenterInstanceUuid).toBeDefined();
                expect(vm.vcenterInstanceUuid).toBe(raw.vcenter_instance_uuid);
                expect(vm.powerStatus).toBeDefined();
                expect(vm.memorySize).toBeGreaterThan(0);
                expect(vm.memorySize).toBe(raw.memory_size);
                expect(vm.vimDatastoreRef).toBeDefined();
                expect(vm.vimDatastoreRef).toBe(raw.vim_datastore_ref);
                expect(vm.vcenterName).toBeDefined();
                expect(vm.vcenterName).toBe(raw.vcenter_name);
                expect(vm.vcenterMoRef).toBeDefined();
                expect(vm.vcenterMoRef).toBe(raw.vcenter_moref);
                expect(vm.vcenterHref).toBeDefined();
                expect(vm.vcenterHref).toBe(raw.vcenter_href);
                expect(vm.operatingSystem).toBeDefined();
                expect(vm.operatingSystem).toBe(raw.os);
                expect(vm.orgUuid).toBeDefined();
                expect(vm.orgUuid).toBe(raw.org_uuid);
                expect(vm.description).toBeDefined();
                expect(vm.description).toBe(raw.description);
                expect(vm.deployed).toBeDefined();
                expect(vm.deployed).toBe(raw.deployed);
                expect(vm.mediaInserted).toBeDefined();
                expect(vm.mediaInserted).toBe(raw.media_inserted);
                if (vm.mediaInserted) {
                    expect(vm.insertedMediaName).toBeDefined();
                    expect(vm.insertedMediaName).toBe(raw.inserted_media_name);
                }
                else {
                    expect(vm.insertedMediaName).toBeNull();
                }
                expect(vm.numberOfCpus).toBeDefined();
                expect(vm.numberOfCpus).toBe(raw.cpus_number);
                expect(vm.toString().length).toBeGreaterThan(0);
                expect(vm.deleted).toBe(false);
                expect(vm.updatedDate).toBeDefined();
                expect(vm.updatedDate.getTime()).toBeLessThan(new Date().getTime());
                expect(vm.deletedDate).toBeNull();
                expect(vm.entityType).toBe('IAAS_VM');
                expect(vm.allocationModel).toBeDefined();
                expect(vm.allocationModel).toBe(raw.allocation_model);
                return vm;
            })];
    });
}); });
test('Can get vm vnics', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, vm.getVnics().then(function (vnics) {
                                expect(vnics).toBeDefined();
                                expect(vnics.length).toBeDefined();
                                if (vnics.length > 0) {
                                    var vnic = vnics[0];
                                    var raw = vnic.json;
                                    expect(vnic.adapterType).toBeDefined();
                                    expect(vnic.adapterType).toBe(raw.adapter_type);
                                    expect(vnic.addressMode).toBeDefined();
                                    expect(vnic.addressMode).toBe(raw.ip_addressing_mode);
                                    expect(vnic.connectedNetworkName).toBeDefined();
                                    expect(vnic.connectedNetworkName).toBe(raw.network_name);
                                    expect(vnic.ipAddress).toBeDefined();
                                    expect(vnic.ipAddress).toBe(raw.ip_address);
                                    expect(vnic.vnicId).toBeDefined();
                                    expect(vnic.vnicId).toBe(raw.vnic_id);
                                    expect(vnic.macAddress).toBeDefined();
                                    expect(vnic.macAddress).toBe(raw.mac_address);
                                    expect(vnic.primaryConnection).toBeDefined();
                                    expect(vnic.primaryConnection).toBe(raw.is_primary);
                                    expect(vnic.deleted).toBe(false);
                                    expect(vnic.isConnected).toBeDefined();
                                    expect(vnic.isConnected).toBe(raw.is_connected);
                                    expect(vnic.toString().length).toBeGreaterThan(0);
                                }
                            })];
                    });
                });
            })];
    });
}); });
test('Can get vm virtual disks', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, vm.getVirtualDisks().then(function (disks) {
                                expect(disks).toBeDefined();
                                if (disks.length > 0) {
                                    var disk = disks[0];
                                    var raw = disk.json;
                                    expect(disk.name).toBeDefined();
                                    expect(disk.name).toBe(raw.name);
                                    expect(disk.size).toBeDefined();
                                    expect(disk.size).toBe(raw.size);
                                    expect(disk.type).toBeDefined();
                                    expect(disk.type).toBe(raw.type);
                                    expect(disk.toString().length).toBeGreaterThan(0);
                                }
                            })];
                    });
                });
            })];
    });
}); });
test('Can update VM description', function () { return __awaiter(_this, void 0, void 0, function () {
    var vm, task, rawTask, promises;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, vm_1.Vm.getVm(inventoryVm.uuid)];
            case 1:
                vm = _a.sent();
                expect.hasAssertions();
                return [4 /*yield*/, vm.updateDescription('test description')];
            case 2:
                task = _a.sent();
                rawTask = task.json;
                expect(task.complete).toBe(rawTask.synced);
                expect(task.uuid).toBeDefined();
                expect(task.uuid).toBe(rawTask.uuid);
                expect(task.locationId).toBeDefined();
                expect(task.locationId).toBe(rawTask.location_id);
                expect(task.operation).toBeDefined();
                expect(task.operation).toBe(rawTask.operation);
                if (rawTask.end_time !== null) {
                    expect(task.endTime).toBeDefined();
                    expect(task.endTime.getTime()).toBe(rawTask.end_time);
                }
                else {
                    expect(task.endTime).toBeNull();
                }
                expect(task.entityUuid).toBeDefined();
                expect(task.entityUuid).toBe(rawTask.entity_uuid);
                expect(task.initiatedFromIlandApi).toBeDefined();
                expect(task.initiatedFromIlandApi).toBe(rawTask.initiated_from_ecs);
                expect(task.initiationTime).toBeDefined();
                expect(task.initiationTime.getTime()).toBe(rawTask.initiation_time);
                expect(task.message).toBe(rawTask.message);
                expect(task.operationDescription).toBe(rawTask.operation_description);
                expect(task.orgUuid).toBeDefined();
                expect(task.orgUuid).toBe(rawTask.org_uuid);
                expect(task.otherAttributes).toBeDefined();
                expect(task.otherAttributes.size).toBe(rawTask.other_attributes.size);
                expect(task.parentTaskUuid).toBeNull();
                expect(task.progress).toBeDefined();
                expect(task.progress).toBeGreaterThanOrEqual(0);
                expect(task.progress).toBeLessThanOrEqual(100);
                expect(task.progress).toBe(rawTask.progress);
                if (rawTask.start_time === null) {
                    expect(task.startTime).toBeNull();
                }
                else {
                    expect(task.startTime.getTime()).toBe(rawTask.start_time);
                }
                expect(task.subTasks).toBeDefined();
                expect(task.subTasks.length).toBe(0);
                expect(task.taskId).toBeDefined();
                expect(task.taskId).toBe(rawTask.task_id);
                expect(task.taskType).toBeDefined();
                expect(task.taskType).toBe(rawTask.task_type);
                expect(task.userFullName).toBeDefined();
                expect(task.userFullName).toBe(rawTask.user_full_name);
                expect(task.username).toBeDefined();
                expect(task.username).toBe(rawTask.username);
                expect(task.entityName).toBeDefined();
                expect(task.entityName).toBe(rawTask.entity_name);
                promises = [];
                promises.push(new Promise(function (resolve) {
                    task.getObservable().subscribe(function () {
                        expect(task.uuid).toBeDefined();
                        expect(task.locationId).toBeDefined();
                        expect(task.toString().length).toBeGreaterThan(0);
                        if (task.complete) {
                            resolve(task.getPromise());
                        }
                    });
                }));
                promises.push(task.getPromise());
                promises.push(task_1.Task.getTask(task.uuid).then(function (taskCopy) {
                    expect(taskCopy.uuid).toBe(task.uuid);
                    expect(taskCopy.locationId).toBe(task.locationId);
                    expect(taskCopy.entityUuid).toBe(task.entityUuid);
                    expect(taskCopy.orgUuid).toBe(task.orgUuid);
                    return taskCopy;
                }));
                return [2 /*return*/, Promise.all(promises)];
        }
    });
}); });
test('Can refresh VM', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        expect(vm.uuid).toBe(inventoryVm.uuid);
                        return [2 /*return*/, vm.refresh().then(function (refreshed) {
                                expect(refreshed.uuid).toBe(inventoryVm.uuid);
                            })];
                    });
                });
            })];
    });
}); });
test('Can get boot options', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getBootOptions().then(function (bootOptions) {
                            expect(bootOptions).toBeDefined();
                            expect(bootOptions.bootDelay).toBeGreaterThan(-1);
                            expect(bootOptions.isEnterBios).toBeDefined();
                        })];
                });
            }); })];
    });
}); });
test('Can get capabilities', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getCapabilities().then(function (capabilities) {
                            expect(capabilities).toBeDefined();
                            expect(capabilities.cpuHotAddEnabled).toBeDefined();
                            expect(capabilities.memoryHotAddEnabled).toBeDefined();
                        })];
                });
            }); })];
    });
}); });
test('Can get recommended disk bus type', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getRecommendedDiskBusType().then(function (busType) {
                            expect(busType).toBeDefined();
                        })];
                });
            }); })];
    });
}); });
test('Can get guest customization', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getGuestCustomization().then(function (guestCustomization) {
                            expect(guestCustomization).toBeDefined();
                            var raw = guestCustomization.json;
                            expect(guestCustomization.enabled).toBe(raw.enabled);
                            expect(guestCustomization.changeSid).toBe(raw.change_sid);
                            expect(guestCustomization.virtualMachineId).toBe(raw.virtual_machine_id);
                            expect(guestCustomization.joinDomain).toBe(raw.join_domain);
                            expect(guestCustomization.useOrgSettings).toBe(raw.use_org_settings);
                            expect(guestCustomization.domainName).toBe(raw.domain_name);
                            expect(guestCustomization.domainUserName).toBe(raw.domain_user_name);
                            expect(guestCustomization.domainUserPassword).toBe(raw.domain_user_password);
                            expect(guestCustomization.machineObjectOu).toBe(raw.machine_object_ou);
                            expect(guestCustomization.adminPasswordEnabled).toBe(raw.admin_password_enabled);
                            expect(guestCustomization.adminPasswordAuto).toBe(raw.admin_password_auto);
                            expect(guestCustomization.adminPassword).toBe(raw.admin_password);
                            expect(guestCustomization.adminAutoLogonEnabled).toBe(raw.admin_auto_logon_enabled);
                            expect(guestCustomization.adminAutoLogonCount).toBe(raw.admin_auto_logon_count);
                            expect(guestCustomization.resetPasswordRequired).toBe(raw.reset_password_required);
                            expect(guestCustomization.computerName).toBe(raw.computer_name);
                            expect(guestCustomization.required).toBe(raw.required);
                        })];
                });
            }); })];
    });
}); });
test('Can get guest tools information', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getGuestToolsInfo().then(function (guestTools) {
                            expect(guestTools).toBeDefined();
                            var raw = guestTools.json;
                            expect(guestTools.status).toBe(raw.status);
                            expect(guestTools.runningStatus).toBe(raw.running_status);
                            expect(guestTools.version).toBe(raw.version);
                        }).catch(function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var err;
                            return __generator(this, function (_a) {
                                err = e;
                                if (err.getType() !== 'NotFoundError') {
                                    return [2 /*return*/, Promise.reject(err)];
                                }
                                else {
                                    return [2 /*return*/, Promise.resolve()];
                                }
                                return [2 /*return*/];
                            });
                        }); })];
                });
            }); })];
    });
}); });
test('Can get VM has snapshot', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.hasSnapshot().then(function (hasSnapshot) {
                            expect(hasSnapshot).toBeDefined();
                        })];
                });
            }); })];
    });
}); });
test('Can get summary', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getSummary().then(function (summary) {
                            expect(summary).toBeDefined();
                            var raw = summary.json;
                            expect(summary.reservedCpu).toBe(raw.reserved_cpu);
                            expect(summary.reservedMemory).toBe(raw.reserved_mem);
                            expect(summary.consumedCpu).toBe(raw.consumed_cpu);
                            expect(summary.consumedMemory).toBe(raw.consumed_mem);
                            expect(summary.consumedDisk).toBe(raw.consumed_disk);
                            expect(summary.configuredDisk).toBe(raw.configured_disk);
                            expect(summary.provisionedDisk).toBe(raw.provisioned_disk);
                        })];
                });
            }); })];
    });
}); });
test('Can get vm networks', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getNetworks().then(function (networks) {
                            expect(networks).toBeDefined();
                            expect(networks.length).toBeGreaterThan(0);
                        })];
                });
            }); })];
    });
}); });
test('Can get VM tools upgrade policy', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getToolUpgradePolicy().then(function (policy) {
                            expect(policy).toBeDefined();
                            expect(policy.length).toBeGreaterThan(0);
                        })];
                });
            }); })];
    });
}); });
test('Can get perf counters', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(inventoryVm.uuid);
                    return [2 /*return*/, vm.getPerfCounters().then(function (counters) {
                            expect(counters).toBeDefined();
                            expect(counters.length).toBeGreaterThan(0);
                        })];
                });
            }); })];
    });
}); });
test('Can get perf samples', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, vm_1.Vm.getVm(inventoryVm.uuid).then(function (vm) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    expect(vm.uuid).toBe(vm.uuid);
                    return [2 /*return*/, vm.getPerfCounters().then(function (counters) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var request;
                            return __generator(this, function (_a) {
                                expect(counters).toBeDefined();
                                expect(counters.length).toBeGreaterThan(0);
                                request = new perf_samples_request_1.PerfSamplesRequest({ counter: counters[0] });
                                return [2 /*return*/, vm.getPerfSamples(request).then(function (perfSamplesSerie) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            expect(perfSamplesSerie).toBeDefined();
                                            return [2 /*return*/];
                                        });
                                    }); })];
                            });
                        }); })];
                });
            }); })];
    });
}); });
