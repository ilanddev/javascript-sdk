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
var vcc_perf_sample_1 = require("./vcc-perf-sample/vcc-perf-sample");
var iland_1 = require("../../iland");
var cloud_tenant_resource_1 = require("./cloud-tenant-resource/cloud-tenant-resource");
var cloud_tenant_backup_history_1 = require("./cloud-tenant-backup-history/cloud-tenant-backup-history");
/**
 * Cloud Tenant.
 */
var CloudTenant = (function (_super) {
    __extends(CloudTenant, _super);
    function CloudTenant(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets a Cloud Tenant by UUID.
     * @param {string} uuid
     * @returns {Promise<CloudTenant>} promise that resolves with the Cloud Tenant
     */
    CloudTenant.getCloudTenant = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vcc-backup-tenants/" + uuid).then(function (response) {
                        var json = response.data;
                        return new CloudTenant(json);
                    })];
            });
        });
    };
    Object.defineProperty(CloudTenant.prototype, "entityType", {
        get: function () {
            return 'VCC_BACKUP_TENANT';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "uid", {
        /**
         * Gets the uid of the Cloud Tenant.
         * @returns {string} id value
         */
        get: function () {
            return this._json.uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "enabled", {
        /**
         * Indicates whether the Cloud Tenant is enabled.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "resources", {
        /**
         * Gets the resources of the Cloud Tenant.
         * @returns {CloudTenantResource[]} resources
         */
        get: function () {
            return this._json.resources.resources.map(function (it) { return new cloud_tenant_resource_1.CloudTenantResource(it); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "lastResult", {
        /**
         * Get the last result of the Cloud Tenant.
         * @returns {string} last result
         */
        get: function () {
            return this._json.last_result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "lastActive", {
        /**
         * Gets the last active of the Cloud Tenant.
         * @returns {number} value
         */
        get: function () {
            return this._json.last_active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "throttlingEnabled", {
        /**
         * Gets the throttling enabled value of the Cloud Tenant.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.throttling_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "throttlingSpeedLimit", {
        /**
         * Gets the throttling speed limit of the Cloud Tenant.
         * @returns {number} speed limit
         */
        get: function () {
            return this._json.throttling_speed_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "throttlingSpeedUnit", {
        /**
         * Gets the throttling speed unit of the Cloud Tenant.
         * @returns {string} speed unit
         */
        get: function () {
            return this._json.throttling_speed_unit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "publicIpCount", {
        /**
         * Gets the public IP count of the Cloud Tenant.
         * @returns {number} public ip count
         */
        get: function () {
            return this._json.public_ip_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "backupCount", {
        /**
         * Gets the backup count of the Cloud Tenant.
         * @returns {number} backup count
         */
        get: function () {
            return this._json.backup_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "companyId", {
        /**
         * Gets the company ID of the Cloud Tenant.
         * @returns {string} company ID
         */
        get: function () {
            return this._json.company_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "ownerName", {
        /**
         * Gets the owner name of the Cloud Tenant.
         * @returns {string} owner name
         */
        get: function () {
            return this._json.owner_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "contractUuid", {
        /**
         * Gets the contract uuid for the Cloud Tenant.
         * @returns {string} contract uuid
         */
        get: function () {
            return this._json.contract_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "locationId", {
        /**
         * Gets the location id of the Cloud Tenant.
         * @returns {string} location id
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudTenant.prototype, "endPoint", {
        /**
         * Gets the end point of the Cloud Tenant.
         * @returns {string} end point
         */
        get: function () {
            return this._json.endpoint;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    CloudTenant.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(CloudTenant.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {CloudTenantJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the storage usage for the Cloud Tenant
     * @param {number} start
     * @param {number} end
     * @param {number} limit
     * @param {PerfIntervalType} interval
     * @returns {Promise<VccPerfSample[]>} array of Vcc Perf Samples
     */
    CloudTenant.prototype.getStorageUsageFor = function (start, end, limit, interval) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vcc-backup-tenants/" + this.uuid + "/storage-usage", {
                        params: {
                            start: start,
                            end: end,
                            limit: limit,
                            interval: interval
                        }
                    }).then(function (response) {
                        var samples = response.data.data;
                        return samples.map(function (sample) { return new vcc_perf_sample_1.VccPerfSample(sample); });
                    })];
            });
        });
    };
    /**
     * Upgrades the contract for the Cloud Tenant
     * @param {UpdateTenantContractRequest} contract
     * @returns {Promise<any>}
     */
    /* istanbul ignore next: autogenerated */
    CloudTenant.prototype.upgradeTenantContract = function (updateContractRequest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vcc-backup-tenants/" + this.uuid + "/actions/upgrade-contract", updateContractRequest.json)];
            });
        });
    };
    /**
     * Get the backup history for the Cloud Tenant
     * @param {number} offset
     * @param {number} limit
     * @returns {Promise<CloudTenantBackupHistory[]>} array of Cloud Tenant Backup History objects
     */
    CloudTenant.prototype.getBackupHistoryFor = function (offset, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vcc-backup-tenants/" + this.uuid + "/backup-history", {
                        params: {
                            offset: offset,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (backupHistoryJson) { return new cloud_tenant_backup_history_1.CloudTenantBackupHistory(backupHistoryJson); });
                    })];
            });
        });
    };
    /**
     * Refreshes the Cloud Tenant data by retrieving it from the API again.
     * @returns {Promise<CloudTenant>} promise that resolves with this object
     */
    CloudTenant.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vcc-backup-tenants/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    return CloudTenant;
}(entity_1.Entity));
exports.CloudTenant = CloudTenant;
