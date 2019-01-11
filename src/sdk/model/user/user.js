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
var jpeg_image_1 = require("../common/jpeg-image");
var inventory_entity_1 = require("./inventory-entity/inventory-entity");
var company_1 = require("../company/company");
var role_1 = require("../iam/role/role");
var user_session_1 = require("./user-session");
var inbox_message_1 = require("./inbox-message");
var message_count_1 = require("./message-count");
var inbox_message_list_1 = require("./inbox-message-list");
var account_even_1 = require("./account-even");
var org_1 = require("../org/org");
var vdc_1 = require("../vdc/vdc");
var vapp_1 = require("../vapp/vapp");
var vm_1 = require("../vm/vm");
var media_1 = require("../media/media");
var vapp_template_1 = require("../vapp-template/vapp-template");
var edge_1 = require("../edge/edge");
var expanded_vpg_1 = require("../vpg/expanded-vpg");
var cloud_tenant_1 = require("../vcc/cloud-tenant");
var vapp_network_1 = require("../vapp-network/vapp-network");
var catalog_1 = require("../catalog/catalog");
var internal_network_1 = require("../internal-network/internal-network");
/**
 * User.
 */
var User = (function () {
    function User(_apiUser) {
        this._apiUser = _apiUser;
    }
    /**
     * Gets a user by username.
     * @param username the user's username
     * @returns {Promise<User>}
     */
    User.getUser = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + username).then(function (response) {
                        var apiUser = response.data;
                        return new User(apiUser);
                    })];
            });
        });
    };
    /**
     * Gets the currently authenticated user.
     * @returns {Promise<User>}
     */
    User.getCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getAuthProvider().getAuthenticatedUsername().then(function (username) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (username) {
                                return [2 /*return*/, User.getUser(username)];
                            }
                            else {
                                return [2 /*return*/, new Promise(function (_, reject) {
                                        reject();
                                    })];
                            }
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    Object.defineProperty(User.prototype, "username", {
        /**
         * Gets the user's username.
         * @returns {string} username
         */
        get: function () {
            return this._apiUser.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "address", {
        /**
         * Gets the user's address.
         * @returns {string} address
         */
        get: function () {
            return this._apiUser.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "city", {
        /**
         * Gets the user's city.
         * @returns {string} city
         */
        get: function () {
            return this._apiUser.city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "company", {
        /**
         * Gets the user's company.
         * @returns {string} company
         */
        get: function () {
            return this._apiUser.company;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "country", {
        /**
         * Gets the user's country.
         * @returns {string} country
         */
        get: function () {
            return this._apiUser.country;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "createdDate", {
        /**
         * Gets the user's created date.
         * @returns {Date} created date
         */
        get: function () {
            return new Date(this._apiUser.created_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "domain", {
        /**
         * Gets the user's domain.
         * @returns {string | UserDomainJson}
         */
        get: function () {
            return this._apiUser.domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "deleted", {
        /**
         * Indicates whether the user is deleted.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiUser.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "deletedDate", {
        /**
         * Gets the deleted date of the user.
         * @returns {Date} deleted date or null if the user is not deleted
         */
        get: function () {
            return this._apiUser.deleted_date ? new Date(this._apiUser.deleted_date) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        /**
         * Gets the user's email address.
         * @returns {string} email address
         */
        get: function () {
            return this._apiUser.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        /**
         * Gets the user's full name.
         * @returns {string} full name
         */
        get: function () {
            return this._apiUser.fullname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "locked", {
        /**
         * Indicates whether the user is locked out of their account.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiUser.locked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "phoneNumber", {
        /**
         * Gets the phone number of the user.
         * @returns {string} phone number
         */
        get: function () {
            return this._apiUser.phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "state", {
        /**
         * Gets the user's state.
         * @returns {string} state
         */
        get: function () {
            return this._apiUser.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userType", {
        /**
         * Gets the user type.
         * @returns {UserType} user type
         */
        get: function () {
            return this._apiUser.user_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "zip", {
        /**
         * Gets the user's zip code.
         * @returns {string} zip code.
         */
        get: function () {
            return this._apiUser.zip;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    User.prototype.toString = function () {
        return JSON.stringify(this._apiUser, undefined, 2);
    };
    Object.defineProperty(User.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {UserJson} the API User object
         */
        get: function () {
            return Object.assign({}, this._apiUser);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a new representation of the user from the API.
     * @returns {Promise<User>} promise that resolves with updated user
     */
    User.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username).then(function (response) {
                        _this._apiUser = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Update the user.
     * @param {UserUpdateRequest} request
     * @returns {Promise<User>}
     */
    User.prototype.update = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/users/" + this.username, request.json).then(function (response) {
                        var json = response.data;
                        return new User(json);
                    })];
            });
        });
    };
    /**
     * Delete the current user.
     * @returns {Promise<void>}
     * @throws Error
     */
    User.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/users/" + this.username)];
            });
        });
    };
    /**
     * Gets the user's inventory within the specified company..
     * @param {string} companyId the ID of the company to retrieve inventory for
     * @returns {Promise<CompanyInventory>}  entity inventory
     * @throws Error
     */
    User.prototype.getInventoryInCompany = function (companyId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/inventory", {
                        params: {
                            company: companyId
                        }
                    }).then(function (response) {
                        var userInventory = response.data;
                        return new inventory_entity_1.CompanyInventoryImpl(userInventory.inventory[0]);
                    }, function () {
                        throw new Error("No inventory found for company with id=" + companyId + ".");
                    })];
            });
        });
    };
    /**
     * Gets the user's entity inventory.
     * @returns {Promise<Array<CompanyInventory>>} user's entity inventory
     */
    User.prototype.getInventory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/inventory").then(function (response) {
                        var userInventory = response.data;
                        return userInventory.inventory.map(function (it) { return new inventory_entity_1.CompanyInventoryImpl(it); });
                    })];
            });
        });
    };
    /**
     * Gets the user's list of companies.
     * @returns {Promise<Array<Company>>} user's list of companies
     */
    User.prototype.getCompanies = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies").then(function (response) {
                        var companiesList = response.data.data;
                        return companiesList.map(function (it) { return new company_1.Company(it); });
                    })];
            });
        });
    };
    /**
     * Gets the user's role for a company
     * @param {string} companyUuid
     * @returns {Promise<Role>}
     */
    User.prototype.getRole = function (companyUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/roles/" + companyUuid).then(function (response) {
                        var role = response.data;
                        return new role_1.Role(role);
                    })];
            });
        });
    };
    /**
     * Assign a role to a user.
     * @param {string} companyUuid
     * @param {string} roleUuid
     * @returns {Promise<any>}
     */
    User.prototype.assignRole = function (companyUuid, roleUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/users/" + this.username + "/roles/" + companyUuid, {
                        role_uuid: roleUuid
                    })];
            });
        });
    };
    /**
     * Un-assign a role from a user.
     * @param {string} companyUuid
     * @returns {Promise<any>}
     */
    User.prototype.unassignRole = function (companyUuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/users/" + this.username + "/roles/" + companyUuid)];
            });
        });
    };
    /**
     * Get active sessions for a user.
     * @returns {Promise<Array<UserSession>>} a promise that resolves to a list of active user sessions.
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getActiveSessions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/sessions").then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new user_session_1.UserSession(it); });
                    })];
            });
        });
    };
    /**
     * End all active user sessions.
     * @returns {Promise<any>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.endAllActiveSessions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/users/" + this.username + "/sessions")];
            });
        });
    };
    /**
     * Updates the user's profile picture.
     * @param {JpegImage} pictureBytes
     * @returns {Promise<any>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.updatePicture = function (picture) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/users/" + this.username + "/picture", picture.toUint8Array(), {
                        headers: {
                            'Content-Type': 'image/jpeg'
                        }
                    })];
            });
        });
    };
    /**
     * Get the user picture.
     * @returns {Promise<JpegImage>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getPicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/picture", {
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
     * Move a user message to a specified folder.
     * @param {string} uuid
     * @param {MoveMessageRequest} spec
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.moveMessage = function (uuid, spec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/users/" + this.username + "/messages/" + uuid + "/actions/move", spec.json).then(function (response) {
                        var json = response.data;
                        return new inbox_message_1.InboxMessage(json);
                    })];
            });
        });
    };
    /**
     * Get a inbox message.
     * @param {string} uuid
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getMessage = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/messages/" + uuid).then(function (response) {
                        var json = response.data;
                        return new inbox_message_1.InboxMessage(json);
                    })];
            });
        });
    };
    /**
     * Mark message as read.
     * @param {string} uuid
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.markMessageAsRead = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/users/" + this.username + "/messages/" + uuid + "/actions/mark-as-read").then(function (response) {
                        var json = response.data;
                        return new inbox_message_1.InboxMessage(json);
                    })];
            });
        });
    };
    /**
     * Updates a batch of inbox messages.
     * @param {BatchInboxUpdateRequest} batchUpdate
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.batchInboxUpdate = function (batchUpdate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/users/" + this.username + "/messages/actions/batch-update", batchUpdate.json)];
            });
        });
    };
    /**
     * Mark all messages in a folder as read.
     * @param {InboxMarkAllAsReadRequest} request
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.markAllMessagesAsRead = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/users/" + this.username + "/messages/actions/mark-all-as-read", request.json)];
            });
        });
    };
    /**
     * Deletes inbox message.
     * @param {string} uuid
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.deleteMessage = function (uuid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/users/" + this.username + "/messages/" + uuid).then(function (response) {
                        var json = response.data;
                        return new inbox_message_1.InboxMessage(json);
                    })];
            });
        });
    };
    /**
     * Get unread message count.
     * @param {MessageFolder} folder
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getUnreadMessageCount = function (folder) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/unread-message-count", {
                        params: {
                            folder: folder
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new message_count_1.MessageCount(json);
                    })];
            });
        });
    };
    /**
     * Get the message headers.
     * @param {InboxMessageFilterParams} filters
     * @returns {Promise<InboxMessageList>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getMessageHeaders = function (filters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/messages", {
                        params: filters.json
                    }).then(function (response) {
                        var json = response.data;
                        return new inbox_message_list_1.InboxMessageList(json);
                    })];
            });
        });
    };
    /**
     * Get the user account events.
     * @param {number} offset
     * @param {number} limit
     * @param {number} dateFrom
     * @param {number} dateTo
     * @returns {Promise<Array<AccountEvent>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getAccountEvents = function (offset, limit, dateFrom, dateTo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/account-events", {
                        params: {
                            offset: offset,
                            limit: limit,
                            dateFrom: dateFrom,
                            dateTo: dateTo
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new account_even_1.AccountEvent(it); });
                    })];
            });
        });
    };
    /**
     * Get the orgs for a company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<Org>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getOrgs = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/orgs", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new org_1.Org(it); });
                    })];
            });
        });
    };
    /**
     * Get the vDCS for a company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<Vdc>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getVdcs = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/vdcs", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vdc_1.Vdc(it); });
                    })];
            });
        });
    };
    /**
     * Get the vApps for a company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<Vapp>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getVapps = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/vapps", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_1.Vapp(it); });
                    })];
            });
        });
    };
    /**
     * Get the VMs for a company and a user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<Vm>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getVms = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/vms", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vm_1.Vm(it); });
                    })];
            });
        });
    };
    /**
     * Get the media for a company and a user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<Media>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getMedia = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/media", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new media_1.Media(it); });
                    })];
            });
        });
    };
    /**
     * Get the vApp templates for a company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<VappTemplate>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getVappTemplates = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/vapp-templates", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_template_1.VappTemplate(it); });
                    })];
            });
        });
    };
    /**
     * Get the edges for a company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<Edge>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getEdges = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/edges", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new edge_1.Edge(it); });
                    })];
            });
        });
    };
    /**
     * Get the VPGs for the company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<VpgSubEntityRequest>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getVpgs = function (companyId, location, expand) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/vpgs", {
                        params: {
                            location: location,
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
     * Get the cloud tenants for a company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<CloudTenant>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getCloudTenants = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/vcc-backup-tenants", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new cloud_tenant_1.CloudTenant(it); });
                    })];
            });
        });
    };
    /**
     * Get the org vdc networks for company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<OrgVdcNetwork>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getOrgVdcNetworks = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/org-vdc-networks", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new internal_network_1.InternalNetwork(it); });
                    })];
            });
        });
    };
    /**
     * Get the vApp networks for company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<VappNetwork>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getVappNetworks = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/vapp-networks", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new vapp_network_1.VappNetwork(it); });
                    })];
            });
        });
    };
    /**
     * Get the catalogs for company and user.
     * @param {string} companyId
     * @param {string} location
     * @returns {Promise<Array<Catalog>>}
     */
    /* istanbul ignore next: autogenerated */
    User.prototype.getCatalogs = function (companyId, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/users/" + this.username + "/companies/" + companyId + "/catalogs", {
                        params: {
                            location: location
                        }
                    }).then(function (response) {
                        var json = response.data.data;
                        return json.map(function (it) { return new catalog_1.Catalog(it); });
                    })];
            });
        });
    };
    return User;
}());
exports.User = User;
