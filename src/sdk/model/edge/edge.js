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
var edge_interface_1 = require("./edge-interface/edge-interface");
require("rxjs/add/operator/map");
var nat_service_1 = require("./nat/nat-service");
var dhcp_1 = require("./dhcp/dhcp");
var firewall_1 = require("./firewall/firewall");
var firewall_log_1 = require("./firewall/firewall-log");
var http_1 = require("../../service/http/http");
var checkpoint_1 = require("./checkpoint/checkpoint");
var edge_ssl_vpn_service_1 = require("./ssl-vpn/edge-ssl-vpn-service");
var ipsec_vpn_1 = require("./ipsec-vpn/ipsec-vpn");
var edge_ssl_vpn_authentication_1 = require("./ssl-vpn/edge-ssl-vpn-authentication");
var edge_ssl_vpn_client_install_package_1 = require("./ssl-vpn/edge-ssl-vpn-client-install-package");
var edge_ssl_vpn_ip_pool_1 = require("./ssl-vpn/edge-ssl-vpn-ip-pool");
var edge_ssl_vpn_private_network_1 = require("./ssl-vpn/edge-ssl-vpn-private-network");
var edge_ssl_vpn_user_1 = require("./ssl-vpn/edge-ssl-vpn-user");
var static_routing_1 = require("./static-routing/static-routing");
var network_perf_sample_serie_1 = require("./network-perf-sample/network-perf-sample-serie");
var load_balancer_1 = require("./load-balancer/load-balancer");
var task_1 = require("../task/task");
var firewall_configuration_1 = require("./firewall/firewall-configuration");
var ipsec_vpn_configuration_1 = require("./ipsec-vpn/ipsec-vpn-configuration");
var nat_service_config_1 = require("./nat/nat-service-config");
/**
 * Edge Gateway.
 */
var Edge = (function (_super) {
    __extends(Edge, _super);
    function Edge(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets an Edge by UUID.
     * @param uuid Edge UUID
     * @returns {Promise<Edge>} promise that resolves with the Edge
     */
    Edge.getEdge = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Edge(json);
                    })];
            });
        });
    };
    Object.defineProperty(Edge.prototype, "entityType", {
        get: function () {
            return 'IAAS_EDGE';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "status", {
        /**
         * Gets the status of the Edge gateway.
         * @returns {string} status
         */
        get: function () {
            return this._json.status === 1 ? 'UP' : 'DOWN';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the associated vDC.
         * @returns {string | null} vDC UUID
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "orgUuid", {
        /**
         * Gets the UUID of the associated Org.
         * @returns {string | null} org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "interfaces", {
        /**
         * Gets the Edges network interfaces.
         * @returns {[EdgeInterface]} array of interfaces
         */
        get: function () {
            var interfaces = (this._json.interfaces || []);
            return interfaces.map(function (interfaceJson) { return new edge_interface_1.EdgeInterface(interfaceJson); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "backwardCompatibilityMode", {
        /**
         * Indicates whether the edge is in backwards compatibility mode.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.backward_compatibility_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "backingConfigurationType", {
        /**
         * Gets the type of backing configuration.
         * @returns {EdgeBackingConfigurationType | null} backing configuration type
         */
        get: function () {
            return this._json.gateway_backing_config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "highAvailabilityEnabled", {
        /**
         * Indicates whether high availability mode is enabled.
         * @returns {boolean | null} value
         */
        get: function () {
            return this._json.high_availability_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "defaultDnsRelayRoute", {
        /**
         * Indicates whether this edge is the default DNS relay route.
         * @returns {boolean | null} value
         */
        get: function () {
            return this._json.default_dns_relay_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "locationId", {
        /**
         * Gets the data center location ID that the edge is associated with.
         * @returns {string | null} location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "description", {
        /**
         * Gets the description.
         * @returns {string | null} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "vcloudHref", {
        /**
         * Gets the vCloud HREF.
         * @returns {string|null} vCloud HREF
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Edge.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Edge.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {EdgeJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the Edge data by retrieving it from the API again.
     * @returns {Promise<Edge>} promise that resolves with this object
     */
    Edge.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Get the Edge Dhcp pool
     * @returns {Promise<Dhcp>}
     */
    Edge.prototype.getDhcp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/dhcp").then(function (response) {
                        return new dhcp_1.Dhcp(response.data);
                    })];
            });
        });
    };
    /**
     * Get the Edge firewall
     * @returns {Promise<Firewall>}
     */
    Edge.prototype.getFirewall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/firewall").then(function (response) {
                        return new firewall_1.Firewall(response.data);
                    })];
            });
        });
    };
    /**
     * Gets firewall traffic log analysis in different formats that summarize the count
     * of actions that have occurred against a particular edge firewall.
     * @returns {Promise<Array<FirewallLog>>}
     * @description By default the endpoint uses 'action_source' analysis type if a specific type is not specified.
     * The time range also defaults to the last hour if no start and end epoch milliseconds are specified.
     * If one of the start or end timestamps are specified the hour range immediately after or before,
     * respectively, are defaulted to.
     */
    Edge.prototype.getFirewallLogs = function (type, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/firewall-logs", {
                        params: {
                            type: type,
                            start: start,
                            end: end
                        }
                    }).then(function (response) {
                        return response.data.map(function (log) { return new firewall_log_1.FirewallLog(log); });
                    })];
            });
        });
    };
    /**
     * Get a list of edge firewall checkpoints that are snapshots of an edge firewall in time.
     * @returns {Promise<Array<Checkpoint>>}
     * @description These checkpoints can be used to restore the edge firewall to a previous state in time.
     */
    Edge.prototype.getFirewallCheckpoints = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/firewall-checkpoints").then(function (response) {
                        return response.data.data.map(function (checkpoint) { return new checkpoint_1.Checkpoint(checkpoint); });
                    })];
            });
        });
    };
    /**
     * Get an edge firewall checkpoint by edge uuid and checkpoint.
     * @param {string} checkpointUuid
     * @returns {Promise<Checkpoint>}
     * @description The actual firewall config of the checkpoint will be included in the return.
     */
    Edge.prototype.getFirewallCheckpoint = function (checkpointUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/firewall-checkpoints/" + checkpointUuid).then(function (response) {
                        return new checkpoint_1.Checkpoint(response.data);
                    })];
            });
        });
    };
    /**
     * Export an Edge Firewall configuration file that can be imported/applied to other edges.
     * @param {string} filename
     */
    Edge.prototype.getExportFirewallHref = function (filename) {
        var href = iland_1.Iland.baseUrl + "/edges/" + this.uuid + "/firewall/export?accept=" +
            encodeURIComponent(http_1.Http.versionMime('application/octet-stream'));
        if (filename) {
            href = href + '&filename=' + encodeURIComponent(filename);
        }
        var observable = iland_1.Iland.getAuthProvider().getTokenObservable();
        return observable.map(function (token) { return href + "&oauth_token=" + token; });
    };
    /**
     * Gets IpSec VPN Service details for an edge
     * @returns {Promise<IpsecVpn>}
     */
    Edge.prototype.getIpsecVpn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/ipsec-vpn").then(function (response) {
                        return new ipsec_vpn_1.IpsecVpn(response.data);
                    })];
            });
        });
    };
    /**
     * Get a link to download an Ipsec vpn export.
     * @param {string} filename
     * @returns {Observable<string>}
     */
    Edge.prototype.getExportIpsecVpnHref = function (filename) {
        var href = iland_1.Iland.baseUrl + "/edges/" + this.uuid + "/ipsec-vpn/export?accept=" +
            encodeURIComponent(http_1.Http.versionMime('application/octet-stream'));
        if (filename) {
            href = href + '&filename=' + encodeURIComponent(filename);
        }
        var observable = iland_1.Iland.getAuthProvider().getTokenObservable();
        return observable.map(function (token) { return href + "&oauth_token=" + token; });
    };
    /**
     * Gets Load Balancer Service details for an edge.
     * @returns {Promise<LoadBalancer>}
     */
    Edge.prototype.getLoadBalancer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/load-balancer").then(function (response) {
                        return new load_balancer_1.LoadBalancer(response.data);
                    })];
            });
        });
    };
    /**
     * Gets the NAT service configuration for a VCD edge gateway.
     * @returns {Promise<NatService>}
     */
    Edge.prototype.getNat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/nat").then(function (response) {
                        return new nat_service_1.NatService(response.data);
                    })];
            });
        });
    };
    /**
     * Get a list of edge NAT checkpoints that are snapshots of an edge NAT service in time
     * @returns {Promise<Array<Checkpoint>>}
     * @description These checkpoints can be used to restore the edge NAT service to a previous state in time.
     */
    Edge.prototype.getNatCheckpoints = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/nat-checkpoints").then(function (response) {
                        return response.data.data.map(function (checkpoint) { return new checkpoint_1.Checkpoint(checkpoint); });
                    })];
            });
        });
    };
    /**
     * Get a NAT checkpoint by edge uuid and checkpoint.
     * @param {string} checkpointUuid
     * @returns {Promise<Checkpoint>}
     * @description The actual NAT config of the checkpoint will be included in the return.
     */
    Edge.prototype.getNatCheckpoint = function (checkpointUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/nat-checkpoints/" + checkpointUuid).then(function (response) {
                        return new checkpoint_1.Checkpoint(response.data);
                    })];
            });
        });
    };
    /**
     * Export an Edge NAT configuration file that can be imported/applied to other edges.
     * @param {string} filename
     * @returns {Observable<string>}
     */
    Edge.prototype.getExportNatHref = function (filename) {
        var href = iland_1.Iland.baseUrl + "/edges/" + this.uuid + "/nat/export?accept=" +
            encodeURIComponent(http_1.Http.versionMime('application/octet-stream'));
        if (filename) {
            href = href + '&filename=' + encodeURIComponent(filename);
        }
        var observable = iland_1.Iland.getAuthProvider().getTokenObservable();
        return observable.map(function (token) { return href + "&oauth_token=" + token; });
    };
    /**
     * Gets SSL VPN configuration details for an edge gateway.
     * @returns {Promise<EdgeSslVpnServiceJson>}
     */
    Edge.prototype.getSslVpn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/sslvpn").then(function (response) {
                        return new edge_ssl_vpn_service_1.EdgeSslVpnService(response.data);
                    })];
            });
        });
    };
    /**
     * Gets static routing details for a VCD edge.
     * @returns {Promise<StaticRouting>}
     */
    Edge.prototype.getStaticRouting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/static-routing").then(function (response) {
                        return new static_routing_1.StaticRouting(response.data);
                    })];
            });
        });
    };
    /**
     * Gets statistics data for a VCD edge gateway.
     * @param {PerfGroupType} group
     * @param {string} name
     * @param {PerfStatsType} type
     * @param {number} start
     * @param {number} end
     * @returns {Promise<NetworkPerfSampleSerie>}
     */
    Edge.prototype.getPerformance = function (group, name, type, start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/performance/" + group + ":" + name + ":" + type, {
                        params: {
                            start: start,
                            end: end
                        }
                    }).then(function (response) {
                        return new network_perf_sample_serie_1.NetworkPerfSampleSerie(response.data);
                    })];
            });
        });
    };
    /**
     *  Update the static routing service.
     * @param {StaticRouting} request
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateStaticRouting = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/update-static-routing", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update the DHCP service.
     * @param {DhcpServiceUpdateRequest} request
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateDHCP = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/update-dhcp", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Restore firewall from checkpoint.
     * @param {string} checkpointUuid
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.restoreFirewallFromCheckpoint = function (checkpointUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/firewall-checkpoints/" + checkpointUuid + "/actions/restore")
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Restore NAT service from checkpoint.
     * @param {string} checkpointUuid
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.restoreNATFromCheckpoint = function (checkpointUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/nat-checkpoints/" + checkpointUuid + "/actions/restore")
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update the edge firewall.
     * @param {EdgeFirewallUpdateRequest} firewall
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateFirewall = function (firewall) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/update-firewall", firewall.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update the edge interface.
     * @param {EdgeInterface} request
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateInterface = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/update-edge-interface", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Updates the NAT service for a VCD edge gateway.
     * @param {NATServiceUpdateRequest} request NAT service update request
     * @returns {Promise<Task>} promise Promise that resoves with a task
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateNAT = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/update-nat", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update the load balancer service.
     * @param {LoadBalancerServiceUpdateRequest} request
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateLoadBalancer = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/update-load-balancer", request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Update the edge ip sec vpn service.
     * @param {EdgeIpSecVpnServiceUpdateRequest}
     * @returns {Promise<EdgeIpsecVpnService>>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateIpSecVpn = function (ipSecVpnService) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/ipsec-vpn", ipSecVpnService.json).then(function (response) {
                        var json = response.data;
                        return new ipsec_vpn_1.IpsecVpn(json);
                    })];
            });
        });
    };
    /**
     * Updates authentication configuration of SSL VPN for an edge gateway.
     * @param {EdgeSslVpnAuthenticationUpdateRequest} request
     * @returns {Promise<EdgeSslVpnAuthentication>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateSslVpnAuthentication = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/sslvpn-authentication-servers", request.json).then(function (response) {
                        var json = response.data;
                        return new edge_ssl_vpn_authentication_1.EdgeSslVpnAuthentication(json);
                    })];
            });
        });
    };
    /**
     * Updates client install package configuration of SSL VPN for an edge gateway.
     * @param {Array<EdgeSslVpnClientInstallPackageUpdateRequest>} requests
     * @returns {Promise<Array<EdgeSslVpnClientInstallPackage>>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateSslVpnClientInstallPackages = function (requests) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/sslvpn-client-install-packages", requests.map(function (req) { return req.json; })).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new edge_ssl_vpn_client_install_package_1.EdgeSslVpnClientInstallPackage(it); });
                    })];
            });
        });
    };
    /**
     * Updates the SSL VPN IP pools for an edge gateway.
     * @param {Array<EdgeSslVpnIpPoolUpdateRequest>} requests
     * @returns {Promise<Array<EdgeSslVpnIpPool>>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateSslVpnIpPools = function (requests) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/sslvpn-ip-pools", requests.map(function (req) { return req.json; }))
                        .then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new edge_ssl_vpn_ip_pool_1.EdgeSslVpnIpPool(it); });
                    })];
            });
        });
    };
    /**
     * Updates list of private networks that are reachable through an SSL VPN for an edge gateway.
     * @param {Array<EdgeSslVpnPrivateNetworkUpdateRequest>} requests
     * @returns {Promise<Array<EdgeSslVpnPrivateNetwork>>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateSslVpnPrivateNetworks = function (requests) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/sslvpn-private-networks", requests.map(function (req) { return req.json; })).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new edge_ssl_vpn_private_network_1.EdgeSslVpnPrivateNetwork(it); });
                    })];
            });
        });
    };
    /**
     * Updates SSL VPN configuration for an edge gateway.
     * @param {EdgeSslVpnServerConfigUpdateRequest} request
     * @returns {Promise<any>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateSslVpnServerConfig = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/sslvpn-config", request.json)];
            });
        });
    };
    /**
     * Updates SSL VPN server settings for an edge gateway.
     * @param {EdgeSslVpnServiceUpdateRequest} serverSettings
     * @returns {Promise<EdgeSslVpnService>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateSslVpnServerSettings = function (serverSettings) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/sslvpn-server-settings", serverSettings.json).then(function (response) {
                        var json = response.data;
                        return new edge_ssl_vpn_service_1.EdgeSslVpnService(json);
                    })];
            });
        });
    };
    /**
     * Updates an edge SSL VPN user.
     * @param {string} userId
     * @param {EdgeSslVpnUserUpdateRequest} request
     * @returns {Promise<EdgeSslVpnUser>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.updateSslVpnUser = function (userId, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/edges/" + this.uuid + "/sslvpn-user/" + userId, request.json).then(function (response) {
                        var json = response.data;
                        return new edge_ssl_vpn_user_1.EdgeSslVpnUser(json);
                    })];
            });
        });
    };
    /**
     * Get the Edge firewall configuration.
     * @returns {Promise<FirewallConfiguration>}
     */
    Edge.prototype.getFirewallConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/firewall-configuration").then(function (response) {
                        return new firewall_configuration_1.FirewallConfiguration(response.data);
                    })];
            });
        });
    };
    /**
     * Import an edge firewall from a configuration.
     * @param {FirewallConfiguration} firewall
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.importFirewallConfiguration = function (firewall) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/import-firewall-configuration", firewall.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets IpSec VPN Service configuration for an edge.
     * @returns {Promise<IpsecVpnConfiguration>}
     */
    Edge.prototype.getIpsecVpnConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/ipsec-vpn-configuration").then(function (response) {
                        return new ipsec_vpn_configuration_1.IpsecVpnConfiguration(response.data);
                    })];
            });
        });
    };
    /**
     * Import an Ipsec VPN service configuration.
     * @param {IpsecVpnConfiguration} vpn
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.importIpSecVpnConfiguration = function (vpn) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/import-ipsec-vpn-configuration", vpn.json)
                        .then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Gets the NAT service configuration for a VCD edge gateway.
     * @returns {Promise<NatServiceConfiguration>}
     */
    Edge.prototype.getNatConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edges/" + this.uuid + "/nat-configuration").then(function (response) {
                        return new nat_service_config_1.NatServiceConfiguration(response.data);
                    })];
            });
        });
    };
    /**
     * Import a NAT service configuration.
     * @param {NatServiceConfiguration} nat
     * @returns {Promise<Task>}
     */
    /* istanbul ignore next: autogenerated */
    Edge.prototype.importNATConfiguration = function (nat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/edges/" + this.uuid + "/actions/import-nat-configuration", nat.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    return Edge;
}(entity_1.Entity));
exports.Edge = Edge;
