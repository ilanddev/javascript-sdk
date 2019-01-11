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
var role_1 = require("../iam/role/role");
var user_1 = require("../user/user");
var search_result_1 = require("./search-result");
var support_ticket_1 = require("./support-ticket/support-ticket");
var org_1 = require("../org/org");
var vapp_1 = require("../vapp/vapp");
var vm_1 = require("../vm/vm");
var vdc_1 = require("../vdc/vdc");
var support_regarding_option_1 = require("./support-ticket/support-regarding-option");
var cloud_tenant_1 = require("../vcc/cloud-tenant");
var cloud_tenant_bill_history_1 = require("./cloud-tenant-bill-history");
var company_user_1 = require("./company-user");
var edge_1 = require("../edge/edge");
var media_1 = require("../media/media");
var vapp_template_1 = require("../vapp-template/vapp-template");
var expanded_vpg_1 = require("../vpg/expanded-vpg");
var internal_network_1 = require("../internal-network/internal-network");
var vapp_network_1 = require("../vapp-network/vapp-network");
var catalog_1 = require("../catalog/catalog");
var task_1 = require("../task/task");
var task_filter_params_1 = require("../task/task-filter-params");
/**
 * Company.
 */
var Company = (function (_super) {
    __extends(Company, _super);
    function Company(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets an Company by ID.
     * @param id Company ID
     * @returns {Promise<Company>} promise that resolves with the Company
     */
    Company.getCompany = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + id).then(function (response) {
                        var json = response.data;
                        return new Company(json);
                    })];
            });
        });
    };
    Object.defineProperty(Company.prototype, "entityType", {
        get: function () {
            return 'COMPANY';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "hasIlandCloud", {
        /**
         * Indicates whether the company has the iland cloud product.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.has_iaas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "hasIlandBackup", {
        /**
         * Indicates whether the company has the iland backup product.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.has_vcc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "hasIlandObjectStorage", {
        /**
         * Indicates whether the company has the iland Object Storage product
         * @returns {boolean}
         */
        get: function () {
            return this._json.has_object_storage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {CompanyJson} the JSON representation
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
    Company.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    /**
     * Refreshes the Company data by retrieving it from the API again.
     * @returns {Promise<Company>} promise that resolves with this object
     */
    Company.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Get company roles.
     * @returns {Promise<Array<Role>>} task promise
     */
    Company.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/roles").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new role_1.Role(it); });
                    })];
            });
        });
    };
    /**
     * Get a company role.
     * @returns {Promise<Role>} a promise with the queried role
     */
    Company.prototype.getRole = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/roles/" + uuid).then(function (response) {
                        var json = response.data;
                        return new role_1.Role(json);
                    })];
            });
        });
    };
    /**
     * Creates a new company role.
     * @returns {Promise<Role>} a promise with the newly created role
     */
    Company.prototype.createRole = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + this.uuid + "/roles", request.json).then(function (response) {
                        var json = response.data;
                        return new role_1.Role(json);
                    })];
            });
        });
    };
    /**
     * Updates a company role.
     * @returns {Promise<Role>} a promise with the newly created role that has replaced the original
     */
    Company.prototype.updateRole = function (uuid, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/companies/" + this.uuid + "/roles/" + uuid, request.json).then(function (response) {
                        var json = response.data;
                        return new role_1.Role(json);
                    })];
            });
        });
    };
    /**
     * Deletes a new company role.
     * @returns {Promise<void>} a promise that indicates success or failure
     */
    Company.prototype.deleteRole = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/companies/" + this.uuid + "/roles/" + uuid).then(function () { return undefined; })];
            });
        });
    };
    /**
     * Gets all company users.
     * @returns {Promise<Array<CompanyUser>>} a promise with the list of the company users
     */
    Company.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/users").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new company_user_1.CompanyUser(it); });
                    })];
            });
        });
    };
    /**
     * Gets all company users that are assigned to a specified role.
     * @returns {Promise<Array<User>>} a promise with the list of the company users that are assigned to the role
     */
    Company.prototype.getUsersWithRole = function (roleUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/users", {
                        params: {
                            role: roleUuid
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new user_1.User(it); });
                    })];
            });
        });
    };
    /**
     * A company may have multiple user domains if they have users that are shared with other companies. This method
     * returns the identifiers for all domains that are associated with this company.
     * @returns {Promise<Array<string>>} a promise with the list of the company user domains
     */
    Company.prototype.getUserDomains = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/user-domains").then(function (response) {
                        return response.data.data;
                    })];
            });
        });
    };
    /**
     * Creates a new company user.
     * @returns {Promise<User>} a promise with the newly created user
     */
    Company.prototype.createUser = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + this.uuid + "/users", request.json).then(function (response) {
                        var json = response.data;
                        return new user_1.User(json);
                    })];
            });
        });
    };
    /**
     * Get all support tickets
     * @param {number} offset
     * @param {number} limit
     * @param {string} search
     * @returns {Promise<Array<SupportTicket>>}
     */
    Company.prototype.getSupportTickets = function (offset, limit, search) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/support-tickets", {
                        params: {
                            offset: offset || 0,
                            limit: limit || 10,
                            search: search || ''
                        }
                    }).then(function (response) {
                        var supportTickets = response.data.data;
                        return supportTickets.map(function (it) { return new support_ticket_1.SupportTicket(it); });
                    })];
            });
        });
    };
    /**
     * Get a specified support ticket.
     * @param {number} ticketId
     * @returns {Promise<SupportTicket>}
     */
    Company.prototype.getSupportTicket = function (ticketId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/support-tickets/" + ticketId).then(function (response) {
                        var supportTicket = response.data;
                        return new support_ticket_1.SupportTicket(supportTicket);
                    })];
            });
        });
    };
    /**
     * Get all organizations in the company location
     * @param {string} locationId
     * @returns {Promise<Array<Org>>}
     */
    Company.prototype.getOrganizations = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/orgs").then(function (response) {
                        var orgs = response.data.data;
                        return orgs.map(function (it) { return new org_1.Org(it); });
                    })];
            });
        });
    };
    /**
     * Get all vApps in the company location
     * @param {string} locationId
     * @returns {Promise<Array<Vapp>>}
     */
    Company.prototype.getVapps = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/vapps").then(function (response) {
                        var vapps = response.data.data;
                        return vapps.map(function (it) { return new vapp_1.Vapp(it); });
                    })];
            });
        });
    };
    /**
     * Get all vDCs in the company location
     * @param {string} locationId
     * @returns {Promise<Array<Vdc>>}
     */
    Company.prototype.getVdcs = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/vdcs").then(function (response) {
                        var vdcs = response.data.data;
                        return vdcs.map(function (it) { return new vdc_1.Vdc(it); });
                    })];
            });
        });
    };
    /**
     * Get all VMs in the company location
     * @param {string} locationId
     * @returns {Promise<Array<Vm>>}
     */
    Company.prototype.getVms = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/vms").then(function (response) {
                        var vms = response.data.data;
                        return vms.map(function (it) { return new vm_1.Vm(it); });
                    })];
            });
        });
    };
    /**
     * Get all edges in the company location.
     * @param {string} locationId
     * @returns {Promise<Array<Edge>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getEdges = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/edges").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new edge_1.Edge(it); });
                    })];
            });
        });
    };
    /**
     * Get all media in the company location.
     * @param {string} locationId
     * @returns {Promise<Array<Media>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getMedia = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/media").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new media_1.Media(it); });
                    })];
            });
        });
    };
    /**
     * Get all vApp templates in the company location.
     * @param {string} locationId
     * @returns {Promise<Array<VappTemplate>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getVappTemplates = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/vapp-templates").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_template_1.VappTemplate(it); });
                    })];
            });
        });
    };
    /**
     * Gets all VPGs in the company location.
     * @param {string} locationId
     * @param {Array<VpgSubEntityRequest>} expand
     * @returns {Promise<Array<ExpandedVpg>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getVpgs = function (locationId, expand) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/vpgs", {
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
     * Gets all catalogs in the company location.
     * @param {string} locationId
     * @returns {Promise<Array<Catalog>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getCatalogs = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/catalogs").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new catalog_1.Catalog(it); });
                    })];
            });
        });
    };
    /**
     * Gets all internal networks in the company location.
     * @param {string} locationId
     * @returns {Promise<Array<InternalNetwork>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getOrgVdcNetworks = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/org-vdc-networks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new internal_network_1.InternalNetwork(it); });
                    })];
            });
        });
    };
    /**
     * Gets all the vApp networks in the company location.
     * @param {string} locationId
     * @returns {Promise<Array<VappNetwork>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getVappNetworks = function (locationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/location/" + locationId + "/vapp-networks").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_network_1.VappNetwork(it); });
                    })];
            });
        });
    };
    /**
     * Change the company logo
     * @param {Uint8Array} logo
     * @returns {Promise<any>}
     */
    Company.prototype.setLogo = function (logo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + this.uuid + "/logo", logo, {
                        headers: {
                            'Content-Type': 'image/jpeg'
                        }
                    })];
            });
        });
    };
    /**
     * Get a company logo
     * @returns {Promise<Uint8Array | null>}
     */
    Company.prototype.getLogo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/logo", {
                        headers: {
                            'Accept': 'image/jpeg'
                        },
                        responseType: 'arraybuffer'
                    }).then(function (response) {
                        return new Uint8Array(response.data);
                    }, function () {
                        return null;
                    })];
            });
        });
    };
    /**
     * Delete a company logo
     * @returns {Promise<any>}
     */
    Company.prototype.deleteLogo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/companies/" + this.uuid + "/logo")];
            });
        });
    };
    /**
     *  Creates a new support ticket.
     *  @param {SupportTicketCreateRequest} newSupportTicket
     *  @returns {Promise<SupportTicket>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.createSupportTicket = function (newSupportTicket) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + this.uuid + "/support-tickets", newSupportTicket.json).then(function (response) {
                        var json = response.data;
                        return new support_ticket_1.SupportTicket(json);
                    })];
            });
        });
    };
    /**
     * Updates a support ticket.
     * @param {number} ticketId
     * @param {SupportTicketUpdateRequest} supportTicket
     * @returns {Promise<SupportTicket>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.updateSupportTicket = function (ticketId, supportTicket) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/companies/" + this.uuid + "/support-tickets/" + ticketId, supportTicket.json)
                        .then(function (response) {
                        var json = response.data;
                        return new support_ticket_1.SupportTicket(json);
                    })];
            });
        });
    };
    /**
     * Get all cloud tenants in company location.
     * @param {string} location
     * @returns {Array<Promise<CloudTenant>>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getCloudTenants = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                if (location && location.length > 0) {
                    url = "/companies/" + this.uuid + "/location/" + location + "/vcc-backup-tenants";
                }
                else {
                    url = "/companies/" + this.uuid + "/vcc-backup-tenants";
                }
                return [2 /*return*/, iland_1.Iland.getHttp().get(url).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new cloud_tenant_1.CloudTenant(it); });
                    })];
            });
        });
    };
    /**
     * Get support ticket regarding options.
     * @returns {Array<SupportRegardingOption>}
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getSupportTicketRegardingOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/support-tickets/regarding-options").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new support_regarding_option_1.SupportRegardingOption(it); });
                    })];
            });
        });
    };
    /**
     * Get the billing history for the cloud tenants.
     * @returns {Promise<CloudTenantBillHistory>} promise resolving to the cloud tenant billing history
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.getCloudTenantBillingHistory = function (location, startYear, startMonth, endYear, endMonth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/vcc-backup-tenants-billing", {
                        params: {
                            location: location,
                            startYear: startYear,
                            startMonth: startMonth,
                            endYear: endYear,
                            endMonth: endMonth
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new cloud_tenant_bill_history_1.CloudTenantBillHistory(json);
                    })];
            });
        });
    };
    /**
     * Get company tasks.
     * @param {CompanyTaskFilterParams} filters used to get tasks matching specific criteria
     * @returns {Promise<TaskList>} a promise that resolves with a task list
     */
    Company.prototype.getTasks = function (filters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (filters) {
                    return [2 /*return*/, task_1.Task.getTasks(new task_filter_params_1.TaskFilterParams(this.uuid, 'COMPANY', filters.includeDescendantTasks, filters.synced, filters.username, filters.timestampAfter, filters.timestampBefore, filters.queryTimestamp, filters.offset, filters.limit, filters.order))];
                }
                else {
                    return [2 /*return*/, task_1.Task.getTasks(new task_filter_params_1.TaskFilterParams(this.uuid, 'COMPANY'))];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Perform a full-text search of entities pertaining to this company.
     * @param {string} query Query string
     * @param {number} pageOffset Page offset for return documents
     * @param {number} pageSize Number of hits per page (default value is 10 and maximum is 50)
     * @returns {Promise<SearchResult>} a promise that resolves with a SearchResult
     */
    /* istanbul ignore next: autogenerated */
    Company.prototype.search = function (query, pageOffset, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/search", {
                        params: {
                            query: query,
                            pageOffset: pageOffset,
                            pageSize: pageSize
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new search_result_1.SearchResult(json);
                    })];
            });
        });
    };
    return Company;
}(entity_1.Entity));
exports.Company = Company;
