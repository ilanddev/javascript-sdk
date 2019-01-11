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
var iland_1 = require("../../iland");
var vapp_network_dhcp_service_1 = require("./vapp-network-dhcp-service");
var vapp_network_static_routing_service_1 = require("./vapp-network-static-routing-service");
var vapp_network_interface_1 = require("./vapp-network-interface");
var vapp_network_nat_service_1 = require("./vapp-network-nat-service");
var vapp_network_firewall_1 = require("./vapp-network-firewall");
var abstract_network_1 = require("../internal-network/abstract-network");
var task_1 = require("../task/task");
/**
 * vApp Network.
 */
var VappNetwork = (function (_super) {
    __extends(VappNetwork, _super);
    function VappNetwork(_json) {
        return _super.call(this, _json) || this;
    }
    /**
     * Gets an vApp network by UUID.
     * @param uuid vApp network UUID
     * @returns {Promise<VappNetwork>} promise that resolves with the vApp network
     */
    VappNetwork.getVappNetwork = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-networks/" + uuid).then(function (response) {
                        var json = response.data;
                        return new VappNetwork(json);
                    })];
            });
        });
    };
    Object.defineProperty(VappNetwork.prototype, "entityType", {
        /**
         * Gets the entity type.
         * @returns {EntityType}
         */
        get: function () {
            return 'IAAS_VAPP_NETWORK';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetwork.prototype, "vappUuid", {
        /**
         * Gets the UUID of the vApp that the network is associated with.
         * @returns {string} vApp UUID
         */
        get: function () {
            return this._json.vapp_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetwork.prototype, "routerExternalIp", {
        /**
         * If this is a NAT Routed network, gets the external IP of the router for the vApp Network edge gateway.
         * @returns {string} IP address
         */
        get: function () {
            return this._json.router_external_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetwork.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VappNetworkJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the vApp network data by retrieving it from the API again.
     * @returns {Promise<VappNetwork>} promise that resolves with this object
     */
    VappNetwork.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-networks/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Remove a network from the given Vapp.
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.removeNetworkFromVapp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vapp-networks/" + this.uuid).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update a vApp network's properties. Note that vCloud Director changes the
     * UUID of the network when it is updated.
     * @param {VappNetworkUpdateRequest} vappNetwork VappNetwork update request
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.updateVappNetwork = function (vappNetwork) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vapp-networks/" + this.uuid, vappNetwork.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Get DHCP service for a given vapp network.
     * @returns {Promise<VappNetworkDHCPService>} promise Promise that resolve with VappNetworkDHCPService
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.getDHCPService = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-networks/" + this.uuid + "/dhcp").then(function (response) {
                        var json = response.data;
                        return new vapp_network_dhcp_service_1.VappNetworkDHCPService(json);
                    })];
            });
        });
    };
    /**
     *
     * @param {VappNetworkDHCPServiceUpdateRequest} dhcpService
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.updateDHCPService = function (dhcpService) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapp-networks/" + this.uuid + "/actions/update-dhcp", dhcpService.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Get static routing service for a given vapp network.
     * @returns {Promise<VappNetworkStaticRoutingService>} promise Promise that resolves with a
     * VappNetworkStaticRoutingService
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.getStaticRouting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-networks/" + this.uuid + "/static-routing").then(function (response) {
                        var json = response.data;
                        return new vapp_network_static_routing_service_1.VappNetworkStaticRoutingService(json);
                    })];
            });
        });
    };
    /**
     * Get vApp Network VM interfaces that are tied to this vApp network.
     *
     * This is a list of VM vnic interfaces that are currently tied to this vApp
     * network. If the <em>ip_translation_mapped</em>field is true it means the
     * interface already has and IP translation rule currently mapped via NAT.
     * Other fields return such as <em>vm_local_id</em> and <em>vnic_id</em> point
     * to which VM the interface is attached to and in what VNIC spot.
     * @returns {Promise<Array<VappNetworkInterface>>} promise Promise that resolves with a list of VappNetworkInterface
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.getVmInterfaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-networks/" + this.uuid + "/vm-interfaces").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_network_interface_1.VappNetworkInterface(it); });
                    })];
            });
        });
    };
    /**
     * Update the static routing service for a given vapp network.
     * @param {VappNetworkStaticRoutingServiceUpdateRequest} staticRoutingService vapp network static routing service
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.updateStaticRouting = function (staticRoutingService) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapp-networks/" + this.uuid + "/actions/update-static-routing", staticRoutingService.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Get NAT service for a given vapp network
     * @returns {Promise<VappNetworkNATService>}
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.getNATService = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-networks/" + this.uuid + "/nat").then(function (response) {
                        var json = response.data;
                        return new vapp_network_nat_service_1.VappNetworkNATService(json);
                    })];
            });
        });
    };
    /**
     * Get a firewall for a given vapp network.
     * @returns {Promise<VappNetworkFirewall>} promise Promise that resolves with a VappNetworkFirewall
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.getFirewall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp-networks/" + this.uuid + "/firewall").then(function (response) {
                        var json = response.data;
                        return new vapp_network_firewall_1.VappNetworkFirewall(json);
                    })];
            });
        });
    };
    /**
     * Update the NAT service for a given vapp network
     * @param {VappNetworkNATServiceUpdateRequest} natService vapp network nat service
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.updateNAT = function (natService) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapp-networks/" + this.uuid + "/actions/update-nat", natService.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update a firewall for a given vApp Network.
     * @param {VappNetworkFirewallUpdateRequest} firewall vapp firewall
     * @returns {Promise<Task>} promise Promise that resolves with a Task
     */
    /* istanbul ignore next: autogenerated */
    VappNetwork.prototype.updateFirewall = function (firewall) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vapp-networks/" + this.uuid + "/actions/update-firewall", firewall.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    return VappNetwork;
}(abstract_network_1.AbstractNetwork));
exports.VappNetwork = VappNetwork;
