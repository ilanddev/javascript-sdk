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
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../../../config/__mocks__/errors");
var MockTaskService = (function () {
    function MockTaskService() {
    }
    MockTaskService.getNewMockTaskResponse = function (op) {
        return __awaiter(this, void 0, void 0, function () {
            var uuid, mockTask;
            return __generator(this, function (_a) {
                uuid = 'task-uuid:' + Math.floor((Math.random() * 10000));
                mockTask = {
                    active: true,
                    synced: false,
                    uuid: uuid,
                    status: 'running',
                    company_id: '12345',
                    location_id: 'dal02.ilandcloud.com',
                    operation: op,
                    end_time: null,
                    entity_uuid: '',
                    initiated_from_ecs: true,
                    initiation_time: (new Date()).getTime(),
                    message: null,
                    operation_description: op,
                    org_uuid: 'mock-org-uuid',
                    other_attributes: {},
                    parent_task_uuid: null,
                    progress: 1,
                    start_time: null,
                    sub_tasks: [],
                    task_id: uuid,
                    task_type: 'ILAND',
                    user_full_name: 'Cory Snyder',
                    username: 'csnyder',
                    entity_name: 'task-entity-name'
                };
                MockTaskService.taskMap.set(uuid, mockTask);
                return [2 /*return*/, new Promise(function (resolve) {
                        resolve({
                            data: mockTask,
                            status: 202,
                            statusText: '',
                            headers: {},
                            config: {}
                        });
                    })];
            });
        });
    };
    MockTaskService.getExistingMockTaskResponse = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var mockTask;
            return __generator(this, function (_a) {
                mockTask = MockTaskService.taskMap.get(uuid);
                if (mockTask === undefined) {
                    return [2 /*return*/, errors_1.MockNotFoundResponse];
                }
                else {
                    return [2 /*return*/, new Promise(function (resolve) {
                            resolve({
                                data: mockTask,
                                status: 200,
                                statusText: '',
                                headers: {},
                                config: {}
                            });
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    MockTaskService.taskMap = new Map();
    return MockTaskService;
}());
exports.MockTaskService = MockTaskService;
