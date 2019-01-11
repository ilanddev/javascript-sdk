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
var vdc_1 = require("../vdc/vdc");
var edge_1 = require("../edge/edge");
var internal_network_1 = require("../internal-network/internal-network");
var vapp_network_1 = require("../vapp-network/vapp-network");
var org_vdc_bills_1 = require("../common/billing/org-vdc-bills");
var dns_record_1 = require("./dns-record");
var dns_zone_1 = require("./dns-zone");
var check_dns_zone_1 = require("./check-dns-zone");
var ip_address_set_1 = require("./ip-address-set");
var report_header_1 = require("../common/reports/report-header");
var compliance_over_time_1 = require("./reports/compliance-over-time");
var vulnerability_over_time_1 = require("./reports/vulnerability-over-time");
var anti_malware_over_time_1 = require("./reports/anti-malware-over-time");
var log_inspection_over_time_1 = require("./reports/log-inspection-over-time");
var firewall_over_time_1 = require("./reports/firewall-over-time");
var disaster_recovery_runbook_1 = require("./disaster-recovery-runbook/disaster-recovery-runbook");
var external_network_1 = require("./external-network");
var vm_affinity_rule_1 = require("./vm-affinity-rule");
var nessus_launch_1 = require("./nessus-launch");
var nessus_scan_1 = require("./nessus-scan");
var nessus_scan_details_1 = require("./nessus-scan-details");
var nessus_scan_update_1 = require("./nessus-scan-update");
var nessus_scan_opt_out_1 = require("./nessus-scan-opt-out");
var expanded_vpg_1 = require("../vpg/expanded-vpg");
var is_compliance_org_1 = require("./is-compliance-org");
var org_currency_code_1 = require("./org-currency-code");
var report_with_content_1 = require("./reports/report-with-content");
var report_with_summary_1 = require("./reports/report-with-summary");
var public_ip_assignment_1 = require("./public-ip-assignment");
var billing_sample_serie_1 = require("./billing-sample-serie");
var catalog_1 = require("../catalog/catalog");
var task_1 = require("../task/task");
var vapp_template_1 = require("../vapp-template/vapp-template");
var network_perf_sample_serie_1 = require("../edge/network-perf-sample/network-perf-sample-serie");
var bill_1 = require("../common/billing/bill");
var billing_summary_1 = require("../common/billing/billing-summary");
var bandwidth_usage_summary_1 = require("./bandwidth-usage-summary");
/**
 * IaaS Organization.
 */
var Org = (function (_super) {
    __extends(Org, _super);
    function Org(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets an Org by UUID.
     * @param uuid Org UUID
     * @returns {Promise<Org>} promise that resolves with the Org
     */
    Org.getOrg = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Org(json);
                    })];
            });
        });
    };
    Object.defineProperty(Org.prototype, "entityType", {
        get: function () {
            return 'IAAS_ORGANIZATION';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "enabled", {
        /**
         * Indicates whether the Org is enabled.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "description", {
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
    Object.defineProperty(Org.prototype, "vcloudHref", {
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
    Object.defineProperty(Org.prototype, "locationId", {
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
    Object.defineProperty(Org.prototype, "vappMaxRuntimeLease", {
        /**
         * Gets the Orgs max vApp runtime lease setting.
         * @returns {number} vApp max runtime lease
         */
        get: function () {
            return this._json.vapp_max_runtime_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappMaxStorageLease", {
        /**
         * Gets the vApps max storage lease setting.
         * @returns {number} vApp max storage lease
         */
        get: function () {
            return this._json.vapp_max_storage_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappTemplateMaxStorageLease", {
        /**
         * Gets the Orgs vApp template max storage lease setting.
         * @returns {number} vApp template max storage lease
         */
        get: function () {
            return this._json.vapp_template_max_storage_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappDeletedOnStorageLeaseExpiration", {
        /**
         * Indicates whether the Org is configured such that vApps are deleted upon storage lease expiration vs. being marked
         * as an expired item.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.vapp_delete_on_storage_expire;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappTemplateDeletedOnStorageLeaseExpiration", {
        /**
         * Indicates whether the Org is configured such that vApp templates are deleted upon storage lease expiration vs.
         * being marked as an expired item.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.vapp_template_delete_on_storage_expire;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "zertoTarget", {
        /**
         * Indicates whether the Org is a Zerto continuity target.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.zerto_target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "fullName", {
        /**
         * Gets the full name of the organization.
         * @returns {string} full name
         */
        get: function () {
            return this._json.fullname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "companyId", {
        /**
         * Gets the company ID (CRM).
         * @returns {string} company ID
         */
        get: function () {
            return this._json.company_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Org.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Org.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {OrgJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the Org data by retrieving it from the API again.
     * @returns {Promise<Org>} promise that resolves with this object
     */
    Org.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets a list of historical bills for the organization. All bills with timestamps between the start and end
     * parameters are returned.
     * @param {Date} start the begin timestamp of the query range
     * @param {Date} end the end timestamp of the query range
     * @returns {Promise<Array<Bill>>} promise that resolves with the list of historical bills
     */
    Org.prototype.getHistoricalBilling = function (start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/historical-billing", {
                        params: {
                            start: start.valueOf(),
                            end: end.valueOf()
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new bill_1.Bill(it); });
                    })];
            });
        });
    };
    /**
     * Gets the organization's current billing summary.
     * @returns {Promise<BillingSummary>} promise that resolves with the current billing summary
     */
    Org.prototype.getBillingSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/billing-summary").then(function (response) {
                        var json = response.data;
                        return new billing_summary_1.BillingSummary(json);
                    })];
            });
        });
    };
    /**
     * Gets the list of bills for each vDC within the org, for the specified range of billing periods.
     * @param {number} startMonth the begin range month specified as an integer in the range 1-12
     * @param {number} startYear the begin range year
     * @param {number} endMonth the end range month specified as an integer in the range 1-12
     * @param {number} endYear the end range month
     * @returns {Promise<Array<OrgVdcBills>>} a promise that resolves with the list of org vdc bill objects
     */
    Org.prototype.getBillingByVdcInRange = function (startMonth, startYear, endMonth, endYear) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/historical-billing-by-vdc", {
                        params: {
                            startMonth: startMonth,
                            startYear: startYear,
                            endMonth: endMonth,
                            endYear: endYear
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new org_vdc_bills_1.OrgVdcBills(it); });
                    })];
            });
        });
    };
    /**
     * Gets the list of bills for each vDC within the org, for the specified billing month/year.
     * @param {number} month the month to get vDC bills for in the range 1-12
     * @param {number} year the year to get vDC bills for
     * @returns {Promise<Array<OrgVdcBills|null>>} a promise that resolves with the org vdc bill object or null if none
     * exists for the specified month
     */
    Org.prototype.getBillingByVdc = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getBillingByVdcInRange(month, year, month, year).then(function (bills) {
                        return bills.length === 1 ? bills[0] : null;
                    })];
            });
        });
    };
    /**
     * Gets the organization's bill for the specified month/year.
     * @param {number} month a month specified as an integer in the range 1-12
     * @param {number} year a year
     * @returns {Promise<Bill>} a promise that resolves with the bill
     */
    Org.prototype.getBill = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/billing", {
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
     * Gets the Orgs child vDCs.
     * @returns {Promise<Vdc[]>} promise that resolves with an array of child vDCs
     */
    Org.prototype.getVdcs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vdcs").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (vdcJson) { return new vdc_1.Vdc(vdcJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child vApps.
     * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
     */
    Org.prototype.getVapps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vapps").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (vappJson) { return new vapp_1.Vapp(vappJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child VMs.
     * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
     */
    Org.prototype.getVms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vms").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (vmJson) { return new vm_1.Vm(vmJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child Edges.
     * @returns {Promise<Edge[]>} promise that resolves with an array of child Edges
     */
    Org.prototype.getEdges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/edges").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (edgeJson) { return new edge_1.Edge(edgeJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child internal networks.
     * @returns {Promise<InternalNetwork[]>} promise that resolves with an array of child Internal networks
     */
    Org.prototype.getInternalNetworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/org-vdc-networks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (netJson) { return new internal_network_1.InternalNetwork(netJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child vApp networks.
     * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp networks
     */
    Org.prototype.getVappNetworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vapp-networks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (netJson) { return new vapp_network_1.VappNetwork(netJson); });
                    })];
            });
        });
    };
    /**
     * Updates the organizations vapp template lease settings.
     * @param {OrgVappTemplateLeaseUpdateRequest} spec the new lease settings
     * @returns {Promise<Org>} a promise that resolves with the updated org
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.updateVappTemplateLeaseSettings = function (spec) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/update-vapp-template-lease-settings", spec.json)
                        .then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Updates the organization's vApp lease settings.
     * @param {OrgVappLeaseUpdateRequest} spec the new lease settings
     * @returns {Promise<Org>} a promise that resolves with the updated org
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.updateOrgVappLeaseSettings = function (spec) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/update-vapp-lease-settings", spec.json)
                        .then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets all DNS records for the organization.
     * @returns {Promise<Array<DnsRecord>>} a promise that resolves with a list of DNS records.
     */
    Org.prototype.getDnsRecords = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/dns-records").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new dns_record_1.DnsRecord(it); });
                    })];
            });
        });
    };
    /**
     * Adds a new DNS record for the org.
     * @param {DnsRecordCreateRequest} record the new record
     * @returns {Promise<DnsRecord>} a promise that resolves with the new record
     */
    Org.prototype.addDnsRecord = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/dns-records", record.json).then(function (response) {
                        var json = response.data;
                        return new dns_record_1.DnsRecord(json);
                    })];
            });
        });
    };
    /**
     * Updates a DNS record within the org.
     * @param {DnsRecordUpdateRequest} record the updated record
     * @returns {Promise<DnsRecord>} a promise that resolves with the updated record
     */
    Org.prototype.updateDnsRecord = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/orgs/" + this.uuid + "/dns-records", record.json).then(function (response) {
                        var json = response.data;
                        return new dns_record_1.DnsRecord(json);
                    })];
            });
        });
    };
    /**
     * Deletes a DNS record within the org.
     * @param {number} recordId the record ID
     * @returns {Promise<any>} a promise that resolves when the operation completes
     */
    Org.prototype.deleteDnsRecord = function (recordId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/orgs/" + this.uuid + "/dns-records/" + recordId)];
            });
        });
    };
    /**
     * Gets all DNS zones that exist within the org.
     * @returns {Promise<Array<DnsZone>>} a promise that resolves with the list of DNS zones
     */
    Org.prototype.getDnsZones = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/dns-zones").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new dns_zone_1.DnsZone(it); });
                    })];
            });
        });
    };
    /**
     * Adds a new DNS zone within the org.
     * @param {DnsZoneCreateRequest} zoneSpec the new DNS zone details
     * @returns {Promise<DnsZone>} a promise that resolves with the newly created DNS zone
     */
    Org.prototype.addDnsZone = function (zoneSpec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/dns-zones", zoneSpec.json).then(function (response) {
                        var json = response.data;
                        return new dns_zone_1.DnsZone(json);
                    })];
            });
        });
    };
    /**
     * Deletes a DNS zone from the org.
     * @param {number} zoneId the ID of the zone
     * @returns {Promise<any>} a promise that resolves when the operation completes
     */
    Org.prototype.deleteDnsZone = function (zoneId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/orgs/" + this.uuid + "/dns-zones/" + zoneId)];
            });
        });
    };
    /**
     * Checks the status of a DNS zone within the org.
     * @param {number} zoneId the ID of the zone
     * @returns {Promise<CheckDnsZone>} a promise that resolves with the zone check results
     */
    Org.prototype.checkDnsZone = function (zoneId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/dns-zones/" + zoneId + "/is-valid").then(function (response) {
                        var json = response.data;
                        return new check_dns_zone_1.CheckDnsZone(json);
                    })];
            });
        });
    };
    /**
     * Gets all IP addresses available for assignment in PTR records.
     * @returns {Promise<IpAddressSet>} a promise that resolves with the set of available IP addresses
     */
    Org.prototype.getAvailableIpsForPtrRecords = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/unmapped-dns-ptr-ip-addresses").then(function (response) {
                        var json = response.data;
                        return new ip_address_set_1.IpAddressSet(json);
                    })];
            });
        });
    };
    /**
     * Gets all catalogs within the organization.
     * @returns {Promise<Array<Catalog>>} returns a promise that resolves with the list of organization catalogs
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getOrgCatalogs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/catalogs").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new catalog_1.Catalog(it); });
                    })];
            });
        });
    };
    /**
     * Get the continuity protection reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getContinuityProtectionReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/continuity-protection-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the disaster recovery admin reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getDisasterRecoveryAdminReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/dr-admin-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the billing reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getBillingReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/billing-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the VM inventory reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getVmInventoryReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vm-inventory-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the support request reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getSupportRequestReports = function (orgUuid, format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/support-request-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the cloud event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getCloudEventReports = function (orgUuid, format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/cloud-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the login event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getLoginEventReports = function (orgUuid, format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/login-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the VM encryption reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getVMEncryptionReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vm-encryption-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the HIPAA reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getHIPAAReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/hipaa-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the web reputation reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getWebReputationEventReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/web-reputation-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the DPI event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getDPIEventReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/dpi-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the integrity event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getIntegrityEventReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/integrity-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the firewall event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getFirewallEventReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/firewall-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the log inspection event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getLogInspectionEventReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/log-inspection-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the anti-malware event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getAntimalwareEventReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/anti-malware-event-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get the vulnerability event reports available for download for the given organization.
     * @param {string} the report format to filter on
     * @param {boolean} whether to return the sole latest report for this org
     * @returns {Promise<Array<ReportHeader>>} promise Promise that resolves with a list of Report
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getVulnerabilityReports = function (format, latest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vulnerability-reports", {
                        params: {
                            format: format,
                            latest: latest
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new report_header_1.ReportHeader(it); });
                    })];
            });
        });
    };
    /**
     * Get a report with its JSON content.  This endpoint is experimental.
     * @param {string} the report UUID
     * @private
     * @returns {Promise<ReportWithContent>} promise Promise that resolves with the report with content
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getReportWithContent = function (reportUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/reports/" + reportUuid).then(function (response) {
                        var json = response.data;
                        return new report_with_content_1.ReportWithContent(json);
                    })];
            });
        });
    };
    /**
     * Get a report with its JSON summary.  This endpoint is experimental.
     * @param {string} the report UUID
     * @private
     * @returns {Promise<ReportWithSummary>} promise Promise that resolves with the report with summary
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getReportWithSummary = function (reportUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/reports/" + reportUuid + "/summary").then(function (response) {
                        var json = response.data;
                        return new report_with_summary_1.ReportWithSummary(json);
                    })];
            });
        });
    };
    /**
     * Get the antimalware over time serie for the given organization and date range.
     * @param {number} start Start date (defaults to one month prior to end param)
     * @param {number} end End date (defaults to current time if not provided)
     * @param {number} limit Limit on number of samples to return (defaults to 730)
     * @returns {Promise<AntimalwareOverTime>} promise Promise that resolves with a AntimalwareOverTime serie
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getAntimalwareOverTimeSerie = function (start, end, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/anti-malware-over-time", {
                        params: {
                            start: start,
                            end: end,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new anti_malware_over_time_1.AntimalwareOverTime(json);
                    })];
            });
        });
    };
    /**
     * Get the compliance over time serie for the given organization and serie name.
     * @param {SerieType} type Type of the series (ANTI_MALWARE, VULNERABILITY, LOG_INSPECTION, FIREWALL)
     * @param {number} start Start date (defaults to one month prior to end param)
     * @param {number} end End date (defaults to current time if not provided)
     * @param {number} limit Limit on number of samples to return (defaults to 60)
     * @returns {Promise<ComplianceOverTime>} promise Promise that resolves with a ComplianceOverTime serie
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getComplianceOverTimeSerie = function (type, start, end, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/compliance-over-time", {
                        params: {
                            type: type,
                            start: start,
                            end: end,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new compliance_over_time_1.ComplianceOverTime(json);
                    })];
            });
        });
    };
    /**
     * Get the firewall over time serie for the given organization and date range.
     * @param {number} start Start date (defaults to Jan 1, 1970)
     * @param {number} end End date (defaults to current time if not provided)
     * @param {number} limit Limit on number of samples to return (defaults to 730)
     * @returns {Promise<FirewallOverTime>} promise Promise that resolves with a FirewallOverTime serie
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getFirewallOverTimeSerie = function (start, end, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/firewall-over-time", {
                        params: {
                            start: start,
                            end: end,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new firewall_over_time_1.FirewallOverTime(json);
                    })];
            });
        });
    };
    /**
     * Get the log inspection over time serie for the given organization and date range.
     * @param {number} start Start date (defaults to Jan 1, 1970)
     * @param {number} end End date (defaults to current time if not provided)
     * @param {number} limit Limit on number of samples to return (defaults to 730)
     * @returns {Promise<LogInspectionOverTime>} promise Promise that resolves with a LogInspectionOverTime serie
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getLogInspectionOverTimeSerie = function (start, end, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/log-inspection-over-time", {
                        params: {
                            start: start,
                            end: end,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new log_inspection_over_time_1.LogInspectionOverTime(json);
                    })];
            });
        });
    };
    /**
     * Get the vulnerability over time serie for the given organization and date range.
     * @param {number} start Start date (defaults to Jan 1, 1970)
     * @param {number} end End date (defaults to current time if not provided)
     * @param {number} limit Limit on number of samples to return (defaults to 730)
     * @returns {Promise<VulnerabilityOverTime>} promise Promise that resolves with a ComplianceOverTime serie
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getVulnerabilityOverTimeSerie = function (start, end, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vulnerability-over-time", {
                        params: {
                            start: start,
                            end: end,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new vulnerability_over_time_1.VulnerabilityOverTime(json);
                    })];
            });
        });
    };
    /**
     * Generate the anti-malware report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateAntiMalwareReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-antimalware-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the billing report for a given organization.
     * @param {BillingReportRequest} billingReportSpec Billing report
     * ({@link http://doc.10.api.iland.test/1.0/apidocs/#!/org-reporting/generateBillingReport|Doc})
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateBillingReport = function (billingReportSpec, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-billing-report", billingReportSpec.json, {
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
     * Generate a continuity protection summary report for the given organization.
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateContinuityProtectionSummaryReport = function (format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-continuity-protection-report", {}, {
                        params: {
                            format: format,
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
     * Generate the DPI event history report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateDPIEventHistoryReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-dpi-event-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the dr admin report for the given organization.
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateDRAdminReport = function (format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-dr-admin-report", {}, {
                        params: {
                            format: format,
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
     * Generate the ecs event history report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateEcsEventHistoryReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-event-history-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the firewall event history report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateFirewallEventHistoryReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-firewall-event-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the HIPAA report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateHipaaReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-hipaa-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the integrity event history report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateIntegrityEventHistoryReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-integrity-event-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the log inspection report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateLogInspectionReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-log-inspection-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the login event history report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateLoginEventHistoryReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-login-event-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the support request history report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateSupportRequestReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-support-request-report", {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Generate the VM encryption report for the given organization.
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email 3mail address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateVmEncryptionReport = function (format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-vm-encryption-report", {}, {
                        params: {
                            format: format,
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
     * Generate the vm inventory report for a given organization.
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email 3mail address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateVmInventoryReport = function (emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-vm-inventory-report", {}, {
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
     * Generate the vulnerability report for the given organization.
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateVulnerabilityReport = function (format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-vulnerability-report", {}, {
                        params: {
                            format: format,
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
     * Generate the web reputation event history report for the given organization and time range.
     * @param {number} start Start date as timestamp
     * @param {number} end End date as timestamp
     * @param {string} format Report format ('pdf' or 'html')
     * @param {boolean} emailOnCompletion Whether to email the report upon successful generation
     * @param {string} email Email address to send the report to if emailOnCompletion is true,
     * defaults to the user's profile email if not specified
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.generateWebReputationEventHistoryReport = function (start, end, format, emailOnCompletion, email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/generate-web-reputation-event-report", {}, {
                        params: {
                            start: start,
                            end: end,
                            format: format,
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
     * Get the number of events for the given organization, date range, and report type.
     * @param {string} report Type Type of report to filter on
     * @param {number} start Start date (defaults to yesterday)
     * @param {number} end End date (defaults to today)
     * @returns {Promise<number>} promise Promise that resolves with the reports count
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getReportsCount = function (reportType, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/report-count", {
                        params: {
                            reportType: reportType,
                            start: start,
                            end: end
                        }
                    }).then(function (response) {
                        return response.data.count;
                    })];
            });
        });
    };
    /**
     * Gets all disaster recovery runbooks in the org.
     * @returns {Promise<Array<DisasterRecoveryRunbook>>} a promise that resolves with all runbooks in the org
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getRecoveryRunbooks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/disaster-recovery-runbooks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new disaster_recovery_runbook_1.DisasterRecoveryRunbook(it); });
                    })];
            });
        });
    };
    /**
     * Creates a new disaster recovery runbook.
     * @param {DisasterRecoveryRunbookCreateRequest} spec the new runbook specification
     * @returns {Promise<DisasterRecoveryRunbook>} a promise that resolves with the new runbook
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.createRecoveryRunbook = function (spec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/disaster-recovery-runbooks", spec.json).then(function (response) {
                        var json = response.data;
                        return new disaster_recovery_runbook_1.DisasterRecoveryRunbook(json);
                    })];
            });
        });
    };
    /**
     * Gets all vApp templates within the org.
     * @returns {Promise<Array<VappTemplate>>} a promise that resolves with the list of vapp templates
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getVappTemplates = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vapp-templates").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_template_1.VappTemplate(it); });
                    })];
            });
        });
    };
    /**
     * Get all external networks that are associated with the specified organization.
     * @returns {Promise<Array<ExternalNetwork>>} promise Promise that resolves with an Array of ExternalNetworks
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getExternalNetworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/external-networks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new external_network_1.ExternalNetwork(it); });
                    })];
            });
        });
    };
    /**
     * Gets the org's current DRS affinity rules.
     * @returns {Promise<Array<VmAffinityRule>>} a promise that resolves with the list of DRS affinity rules
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getDrsAffinityRules = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/drs-rules").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vm_affinity_rule_1.VmAffinityRule(it); });
                    })];
            });
        });
    };
    /**
     * Update the orgs DRS affinity rules.
     * @param {Array<VmAffinityRuleUpdateRequest>} ruleSpecs list of rule specifications
     * @returns {Promise<Task>} a promise that resolves with a task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.updateDrsAffinityRules = function (ruleSpecs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/update-drs-rules", ruleSpecs.map(function (it) { return it.json; }))
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Launches a new Nessus scan.
     * @param {number} scanTemplateId the ID of the template for the scan
     * @returns {Promise<NessusLaunch>} a promise that resolves with the launch result
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.launchNessusScan = function (scanTemplateId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/nessus-scan-templates/" + scanTemplateId + "/actions/launch-scan")
                        .then(function (response) {
                        var json = response.data;
                        return new nessus_launch_1.NessusLaunch(json);
                    })];
            });
        });
    };
    /**
     * Pauses a Nessus scan.
     * @param {number} scanTemplateId the ID of the template that the scan is derived from
     * @returns {Promise<any>} a promise that resolves when the operation completes
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.pauseNessusScan = function (scanTemplateId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/nessus-scan-templates/" + scanTemplateId + "/actions/pause-scan")];
            });
        });
    };
    /**
     * Stops a Nessus scan.
     * @param {number} scanTemplateId the ID of the template that the scan is derived from
     * @returns {Promise<any>} a promise that resolves when the operation completes.
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.stopNessusScan = function (scanTemplateId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/nessus-scan-templates/" + scanTemplateId + "/actions/stop-scan")];
            });
        });
    };
    /**
     * Resumes a Nessus scan.
     * @param {number} scanTemplateId the ID of the template that the scan is derived from.
     * @returns {Promise<any>} a promise that resolves when the operation completes
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.resumeNessusScan = function (scanTemplateId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/nessus-scan-templates/" + scanTemplateId + "/actions/resume-scan")];
            });
        });
    };
    /**
     * Gets all Nessus scan templates for the org.
     * @param {number} offset paging offset
     * @param {number} limit paging limit
     * @returns {Promise<Array<NessusScan>>} a promise that resolves with the list of Nessus scans
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getNessusScanTemplates = function (offset, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/nessus-scan-templates", {
                        params: {
                            offset: offset,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new nessus_scan_1.NessusScan(it); });
                    })];
            });
        });
    };
    /**
     * Gets the Nessus scan results for a specified template.
     * @param {number} scanTemplateId the ID of the template
     * @param {number} offset the paging offset
     * @param {number} limit the paging limit
     * @returns {Promise<Array<NessusScan>>} a promise that resolves with the list of nessus scan results
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getNessusScanResultsForTemplate = function (scanTemplateId, offset, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/nessus-scan-templates/" + scanTemplateId + "/nessus-scan-results", {
                        params: {
                            offset: offset,
                            limit: limit
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new nessus_scan_1.NessusScan(it); });
                    })];
            });
        });
    };
    /**
     * Get Nessus scan result.
     * @param {string} scanResultUuid the UUID of the result to retrieve
     * @returns {Promise<NessusScanDetails>} a promise that resolves with the nessus sacan details
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getNessusScanResult = function (scanResultUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/nessus-scans-results/" + scanResultUuid).then(function (response) {
                        var json = response.data;
                        return new nessus_scan_details_1.NessusScanDetails(json);
                    })];
            });
        });
    };
    /**
     * Update a nessus scan template.
     * @param {number} scanTemplateId the template ID
     * @param {NessusScanUpdateRequest} spec the udpate spec
     * @returns {Promise<NessusScanUpdate>} a promise that resolves with the scan update result
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.updateNessusScanTemplate = function (scanTemplateId, spec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/orgs/" + this.uuid + "/nessus-scan-templates/" + scanTemplateId, spec.json)
                        .then(function (response) {
                        var json = response.data;
                        return new nessus_scan_update_1.NessusScanUpdate(json);
                    })];
            });
        });
    };
    /**
     * Update Nessus scan opt out preferences.
     * @param {NessusScanOptOutCreateRequest} request opt out request
     * @returns {Promise<NessusScanOptOut>} a promise that resolves with the opt out details
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.updateNessusScanOptOutPreferences = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/update-nessus-scan-opt-out-preferences", request.json)
                        .then(function (response) {
                        var json = response.data;
                        return new nessus_scan_opt_out_1.NessusScanOptOut(json);
                    })];
            });
        });
    };
    /**
     * Gets Nessus scan opt out preferences.
     * @returns {Promise<NessusScanOptOut>} a promise that resolves with the orgs Nessus scan opt out details
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getNessusScanOptOutPreferences = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/nessus-scan-opt-out-preferences").then(function (response) {
                        var json = response.data;
                        return new nessus_scan_opt_out_1.NessusScanOptOut(json);
                    })];
            });
        });
    };
    /**
     * Get all VPGs that belong to the org.
     * @param {Array<VpgSubEntityRequest>} expand the list of expansions to include in the response
     * @returns {Promise<Array<ExpandedVpg>>} a promise that resolves with the vpgs
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getVpgs = function (expand) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vpgs", {
                        params: {
                            expand: expand
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new expanded_vpg_1.ExpandedVpg(it); });
                    })];
            });
        });
    };
    /**
     * Creates a catalog.
     * @param {CatalogCreateRequest} request the create catalog request.
     * @returns {Promise<Task>} a promise that resolves with a task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.createCatalog = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/catalog", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Indicates whether the org is an advanced security org.
     * @returns {Promise<isAdvancedSecurityOrg>} a promise that resolves with the result indicating whether this is an
     * advanced security org
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.isAdvancedSecurityOrg = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/is-compliance-org").then(function (response) {
                        var json = response.data;
                        return new is_compliance_org_1.IsComplianceOrg(json);
                    })];
            });
        });
    };
    /**
     * Gets the billing currency code for this org.
     * @returns {Promise<OrgCurrencyCode>} a promise that resolves with the org's currency code.
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getBillingCurrencyCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/billing-currency-code").then(function (response) {
                        var json = response.data;
                        return new org_currency_code_1.OrgCurrencyCode(json);
                    })];
            });
        });
    };
    /**
     * Gets the org's public IP assignments.
     * @returns {Promise<Array<PublicIpAssignment>>} a promise that resolves with the org's public ip assignments
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getPublicIpAssignments = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/public-ip-assignments").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new public_ip_assignment_1.PublicIpAssignment(it); });
                    })];
            });
        });
    };
    /**
     * Get a list of series detailing the hourly cost over an invoice period for
     * all vDCs in a given Organization.
     * @param {number} year the year
     * @param {number} month the month in range 1-12
     * @param {Array<string>} additionalFields additional bill fields that should be included in the series
     * @returns {Promise<Array<BillingSampleSerie>>} promise Promise that resolves with a list of series of samples
     * detailing hourly vDC total cost by hour for the invoice period
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getVdcCostOverInvoicePeriodSeries = function (year, month, additionalFields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/vdcs-cost-over-invoice-period", {
                        params: {
                            year: year,
                            month: month,
                            additionalFields: additionalFields
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new billing_sample_serie_1.BillingSampleSerie(it); });
                    })];
            });
        });
    };
    /**
     * Batch test failover for one or more VPGs within an org.
     * @param {BatchFailoverTestParamsRequest} params the batch failover test parameters
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.batchFailoverTest = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/vpg-batch-failover-test", params.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Initiates a batch live failover on one or more VPGs withing an org.
     * @param {BatchFailoverParamsRequest} params the batch failover parameters
     * @returns {Promise<Task>} promise promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.batchFailover = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/vpg-batch-failover", params.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets a vCD edge gateway usage summary, summarizing the total bandwidth used
     * for both inbound and outbound edge network traffic.
     *
     * If no start/end dates are provided it will default to the latest hour
     * range. If you pass a custom time range both start and end date must be
     * passed together
     * @param {string} type Type
     * @param {number} start Start date
     * @param {number} end End date
     * @returns {Promise<Array<NetworkPerfSampleSerie>>}
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getEdgeNetworkUsageSummary = function (type, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/edge-network-usage-summary", {
                        params: {
                            type: type,
                            start: start,
                            end: end
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new network_perf_sample_serie_1.NetworkPerfSampleSerie(it); });
                    })];
            });
        });
    };
    /**
     * Gets usage data for a VCD edge gateway. Returns a time series showing the
     * average inbound and outbound network thoughput in KBps.
     * @param {string} type Type
     * @param {number} start Start date
     * @param {number} end End date
     * @returns {Promise<Array<NetworkPerfSampleSerie>>}
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getEdgeNetworkUsageOverTime = function (type, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/edge-network-usage-over-time", {
                        params: {
                            type: type,
                            start: start,
                            end: end
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new network_perf_sample_serie_1.NetworkPerfSampleSerie(it); });
                    })];
            });
        });
    };
    /**
     * Get the network usage for the organization
     * @param {string} type Type
     * @param {number} start Start Date
     * @param {number} end End Date
     * @returns {Promise<Array<NetworkPerfSampleSerie>>}
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getOrgBandwidthUsage = function (type, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/bandwidth-usage", {
                        params: {
                            type: type,
                            start: start,
                            end: end
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new network_perf_sample_serie_1.NetworkPerfSampleSerie(it); });
                    })];
            });
        });
    };
    /**
     * Get the network usage summary for the organization
     * @param {string} type Type
     * @param {number} start Start Date
     * @param {number} end End Date
     * @returns {Promise<Array<NetworkPerfSampleSerie>>}
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getBandwidthSummation = function (type, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/bandwidth-summation", {
                        params: {
                            type: type,
                            start: start,
                            end: end
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new network_perf_sample_serie_1.NetworkPerfSampleSerie(it); });
                    })];
            });
        });
    };
    /**
     * Gets the bandwidth usage information for the organization.
     * @param {number} month the month in range 1-12
     * @param {number} year the year
     * @returns {Promise<BandwidthUsageSummary>} a promise that resolves with the bandwidth usage information
     */
    /* istanbul ignore next: autogenerated */
    Org.prototype.getBandwidthUsage = function (month, year) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/orgs/" + this.uuid + "/bandwidth-usage-summary", {
                        params: {
                            month: month,
                            year: year
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new bandwidth_usage_summary_1.BandwidthUsageSummary(json);
                    })];
            });
        });
    };
    /**
     * Retrieve a CSV report email with all event history for a given Org.
     * @returns {Promise<void>} there is no response object.
     */
    Org.prototype.emailEventHistory = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/orgs/" + this.uuid + "/actions/email-event-history", {
                        email: email
                    }).then(function () { return undefined; })];
            });
        });
    };
    return Org;
}(entity_1.Entity));
exports.Org = Org;
