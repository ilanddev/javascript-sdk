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
var iland_1 = require("../../iland");
var Subject_1 = require("rxjs/Subject");
var task_list_1 = require("./task-list");
/**
 * Task.
 */
var Task = (function () {
    function Task(_apiTask) {
        this._apiTask = _apiTask;
    }
    /**
     * Gets a Task by UUID.
     * @param taskUuid the task uuid
     * @returns {Promise<Task>} promise that resolves with the Task
     */
    Task.getTask = function (taskUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/tasks/" + taskUuid).then(function (response) {
                        var apiTask = response.data;
                        return new Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets a list of tasks filtered by specified query parameters.
     * @param params the query params
     * @returns {Promise<TaskList>} promise that resolves with the TaskList
     */
    Task.getTasks = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/tasks", {
                        params: params.getQueryParams()
                    }).then(function (response) {
                        var list = response.data;
                        return new task_list_1.TaskList(list);
                    })];
            });
        });
    };
    Object.defineProperty(Task.prototype, "uuid", {
        /**
         * Gets the UUID of the task.
         * @returns {string} UUID
         */
        get: function () {
            return this._apiTask.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "companyId", {
        /**
         * Get company id.
         * @returns {string}
         */
        get: function () {
            return this._apiTask.company_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "locationId", {
        /**
         * Gets the datacenter location ID of the task.
         * @returns {string} datacenter location ID
         */
        get: function () {
            return this._apiTask.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "complete", {
        /**
         * Indicates whether the task is complete.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiTask.synced;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "status", {
        /**
         * Indicates the status of the task.
         * @returns {TaskStatus} task status
         */
        get: function () {
            return this._apiTask.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "operation", {
        /**
         * Gets the task's operation identifier.
         */
        get: function () {
            return this._apiTask.operation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "endTime", {
        /**
         * Gets the end time of the task.
         * @returns {Date|null} end time of the task or null if the task hasn't yet completed
         */
        get: function () {
            return this._apiTask.end_time !== null ? new Date(this._apiTask.end_time) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "entityUuid", {
        /**
         * Gets the UUID of the entity that is associated with the task.
         * @returns {string} the UUID of the associated entity
         */
        get: function () {
            return this._apiTask.entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "initiatedFromIlandApi", {
        /**
         * Indicates whether the task was initiated from the iland API.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiTask.initiated_from_ecs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "initiationTime", {
        /**
         * Gets the date/time that the task was received/queued by the API.
         * @returns {Date} the date that the task was initiated
         */
        get: function () {
            return new Date(this._apiTask.initiation_time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "message", {
        /**
         * Gets the message associated with the task, if there is one. The message may provide extra information if the task
         * ended with an error status.
         * @returns {string|null} message string or null if no message is associated with the task
         */
        get: function () {
            return this._apiTask.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "operationDescription", {
        /**
         * Returns an operation description that may provide more detail about the operation that the task is associated with.
         * @returns {string} description
         */
        get: function () {
            return this._apiTask.operation_description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "orgUuid", {
        /**
         * Returns the UUID of the organization that the task is associated with.
         */
        get: function () {
            return this._apiTask.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "otherAttributes", {
        /**
         * Gets a map of additional task details that are specific to the task operation type.
         * @returns {{ [key: string]: string }} map of other task attributes
         */
        get: function () {
            return this._apiTask.other_attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "parentTaskUuid", {
        /**
         * If this is a sub-task, returns the UUID of the parent task, otherwise null.
         * @returns {string|null} returns the UUID of the parent task
         */
        get: function () {
            return this._apiTask.parent_task_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "progress", {
        /**
         * Gets the task progress as a percentage.
         * @returns {number} in the range 0-100
         */
        get: function () {
            return this._apiTask.progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "startTime", {
        /**
         * Gets the start time of the task, if the task has started. If the task is still queued, returns null.
         * @returns {Date|null} the start time of the task or null
         */
        get: function () {
            return this._apiTask.start_time === null ? null : new Date(this._apiTask.start_time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "subTasks", {
        /**
         * Gets the task's sub-tasks, if this is a composite task.
         * @returns {Array<string>}
         */
        get: function () {
            return this._apiTask.sub_tasks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "taskId", {
        /**
         * If this task is a wrapper for a task from another service (vCloud director, Zerto, etc), this will return the ID of
         * the task known to that service. Otherwise returns Uhe task UUID.
         * @returns {string} the ID of the task
         */
        get: function () {
            return this._apiTask.task_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "taskType", {
        /**
         * Gets the task type.
         * @returns {TaskType} the type of the task
         */
        get: function () {
            return this._apiTask.task_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "username", {
        /**
         * Gets the username of the user that initiated the task.
         * @returns {string} username of the initiating user
         */
        get: function () {
            return this._apiTask.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "userFullName", {
        /**
         * Gets the full name of the user that initiated the task.
         * @returns {string} full name of the user that initiated the task
         */
        get: function () {
            return this._apiTask.user_full_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "entityName", {
        /**
         * Gets the tasks entity name
         * @returns {string} entity name
         */
        get: function () {
            return this._apiTask.entity_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Task.prototype.toString = function () {
        return JSON.stringify(this._apiTask, undefined, 2);
    };
    Object.defineProperty(Task.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {TaskJson} the API Task object
         */
        get: function () {
            return Object.assign({}, this._apiTask);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a new representation of the task from the API.
     * @returns {Promise<Task>} promise that resolves with updated task
     */
    Task.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/tasks/" + this.uuid).then(function (response) {
                        _this._apiTask = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets a promise that resolves or rejects when the task is complete. An error status will cause rejection.
     * @returns {Promise<Task>} completion promise
     */
    Task.prototype.getPromise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.complete) {
                            if (self.status === 'error') {
                                reject(_this);
                            }
                            else {
                                resolve(_this);
                            }
                        }
                        else {
                            _this.getObservable().subscribe(function (task) {
                                if (task.complete) {
                                    if (task.status === 'error') {
                                        reject(task);
                                    }
                                    else {
                                        resolve(task);
                                    }
                                }
                            });
                        }
                    })];
            });
        });
    };
    /**
     * Gets an observable that is updated as the progress or status of the task changes.
     * @returns {Observable<Task>} task observable
     */
    Task.prototype.getObservable = function () {
        // tslint:disable-next-line:no-floating-promises
        this._updateUntilComplete();
        return this._subject.asObservable();
    };
    Task.prototype._updateUntilComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subject;
            return __generator(this, function (_a) {
                if (this._subject === undefined) {
                    this._subject = new Subject_1.Subject();
                }
                subject = this._subject;
                return [2 /*return*/, this.refresh().then(function (task) {
                        subject.next(task);
                        if (task.complete) {
                            subject.complete();
                            return _this;
                        }
                        else {
                            return new Promise(function (resolve) {
                                setTimeout(function () {
                                    resolve(_this._updateUntilComplete());
                                }, 1000);
                            });
                        }
                    })];
            });
        });
    };
    return Task;
}());
exports.Task = Task;
