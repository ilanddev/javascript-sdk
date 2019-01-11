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
var abstract_network_1 = require("./abstract-network");
var task_1 = require("../task/task");
/**
 * Internal Network.
 */
var InternalNetwork = (function (_super) {
    __extends(InternalNetwork, _super);
    function InternalNetwork(_json) {
        return _super.call(this, _json) || this;
    }
    /**
     * Gets an internal network by UUID.
     * @param uuid internal network UUID
     * @returns {Promise<InternalNetwork>} promise that resolves with the internal network
     */
    InternalNetwork.getInternalNetwork = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org-vdc-networks/" + uuid).then(function (response) {
                        var json = response.data;
                        return new InternalNetwork(json);
                    })];
            });
        });
    };
    Object.defineProperty(InternalNetwork.prototype, "entityType", {
        get: function () {
            return 'IAAS_INTERNAL_NETWORK';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternalNetwork.prototype, "edgeUuid", {
        /**
         * Gets the UUID of the edge gateway that the network is connected to, if its a NAT routed network or null otherwise.
         * @returns {string|null} edge gateway UUID or null
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternalNetwork.prototype, "shared", {
        /**
         * Indicates whether this network is shared with other vDCs within the same organization.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.shared;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternalNetwork.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {InternalNetworkJson} the API __json__ object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the internal network data by retrieving it from the API again.
     * @returns {Promise<InternalNetwork>} promise that resolves with this object
     */
    InternalNetwork.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org-vdc-networks/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Updates the configuration of the network.
     * @param {OrgVdcNetworkUpdateRequest} request the update request
     * @returns {Promise<Task>} a promise that resolves with a task
     */
    /* istanbul ignore next: autogenerated */
    InternalNetwork.prototype.updateOrgVdcNetwork = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/org-vdc-networks/" + this.uuid, request.json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Deletes the network.
     * @returns {Promise<Task>} a promise that resolves with a task
     */
    /* istanbul ignore next: autogenerated */
    InternalNetwork.prototype.deleteOrgVdcNetwork = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/org-vdc-networks/" + this.uuid).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    return InternalNetwork;
}(abstract_network_1.AbstractNetwork));
exports.InternalNetwork = InternalNetwork;
