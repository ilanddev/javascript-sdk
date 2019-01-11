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
var auth_provider_1 = require("./auth-provider");
var axios_1 = require("axios");
var querystring = require("querystring");
var Observable_1 = require("rxjs/Observable");
var TOKEN_REFRESH_THRESHOLD = 10;
var IlandDirectGrantAuthProvider = (function () {
    function IlandDirectGrantAuthProvider(_config) {
        var _this = this;
        this._config = _config;
        this._tokenObservable = Observable_1.Observable.create(function (observable) {
            _this.getToken().then(function (token) {
                observable.next(token);
            }).catch(function (e) {
                observable.error(e);
            });
            _this._onTokenRefresh = function () {
                if (_this._token !== undefined) {
                    observable.next(_this._token.access_token);
                }
            };
        });
    }
    IlandDirectGrantAuthProvider._epochSeconds = function () {
        return new Date().getTime() / 1000;
    };
    IlandDirectGrantAuthProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token;
            return __generator(this, function (_a) {
                token = this._token;
                if (token === undefined) {
                    // login required
                    return [2 /*return*/, this._login().then(function (token) {
                            return token.access_token;
                        })];
                }
                else {
                    if (IlandDirectGrantAuthProvider._epochSeconds() >= token.expires_at - TOKEN_REFRESH_THRESHOLD) {
                        // refresh required
                        return [2 /*return*/, this._refreshToken().catch(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this._login()];
                                });
                            }); }).then(function (token) {
                                return token.access_token;
                            })];
                    }
                    else {
                        // no refresh necessary
                        return [2 /*return*/, new Promise(function (resolve) {
                                resolve(token.access_token);
                            })];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Return an Observable to get an up to date token over time.
     * @returns {Observable<string>}
     */
    IlandDirectGrantAuthProvider.prototype.getTokenObservable = function () {
        return this._tokenObservable;
    };
    /**
     * Return the currently used access token synchronously.
     * @return {string | undefined}
     */
    IlandDirectGrantAuthProvider.prototype.getTokenSync = function () {
        return (this._token && this._token.access_token) ? this._token.access_token : undefined;
    };
    IlandDirectGrantAuthProvider.prototype.logout = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, promise;
            return __generator(this, function (_a) {
                url = this._config.url || auth_provider_1.DEFAULT_AUTH_URL;
                promise = axios_1.default.post(url + "/realms/" + auth_provider_1.DEFAULT_REALM + "/protocol/openid-connect/logout", querystring.stringify({
                    client_id: this._config.clientId,
                    client_secret: this._config.clientSecret,
                    refresh_token: this._token.refresh_token
                }));
                return [2 /*return*/, promise.then(function () {
                        _this._token.expires_in = 0;
                        _this._token.expires_at = IlandDirectGrantAuthProvider._epochSeconds();
                    }, function (reason) {
                        if (reason.response) {
                            throw new Error(reason.response.status + ": " + JSON.stringify(reason.response.data));
                        }
                        else {
                            throw new Error(reason.code);
                        }
                    })];
            });
        });
    };
    IlandDirectGrantAuthProvider.prototype.getAuthenticatedUsername = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getToken().then(function () {
                        return _this._config.username;
                    })];
            });
        });
    };
    IlandDirectGrantAuthProvider.prototype._refreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, promise;
            return __generator(this, function (_a) {
                url = this._config.url || auth_provider_1.DEFAULT_AUTH_URL;
                promise = axios_1.default.post(url + "/realms/" + auth_provider_1.DEFAULT_REALM + "/protocol/openid-connect/token", querystring.stringify({
                    client_id: this._config.clientId,
                    client_secret: this._config.clientSecret,
                    refresh_token: this._token.refresh_token,
                    grant_type: 'refresh_token'
                }));
                return [2 /*return*/, promise.then(function (response) {
                        _this._token = response.data;
                        _this._token.expires_at = _this._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
                        if (_this._onTokenRefresh) {
                            _this._onTokenRefresh();
                        }
                        return _this._token;
                    })];
            });
        });
    };
    IlandDirectGrantAuthProvider.prototype._login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, promise;
            return __generator(this, function (_a) {
                url = this._config.url || auth_provider_1.DEFAULT_AUTH_URL;
                promise = axios_1.default.post(url + "/realms/" + auth_provider_1.DEFAULT_REALM + "/protocol/openid-connect/token", querystring.stringify({
                    client_id: this._config.clientId,
                    client_secret: this._config.clientSecret,
                    username: this._config.username,
                    password: this._config.password,
                    grant_type: 'password'
                }));
                return [2 /*return*/, promise.then(function (response) {
                        _this._token = response.data;
                        _this._token.expires_at = _this._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
                        return _this._token;
                    }).catch(function (reason) {
                        if (reason.response) {
                            throw new Error(reason.response.status + ": " + JSON.stringify(reason.response.data));
                        }
                        else {
                            throw new Error(reason.code);
                        }
                    })];
            });
        });
    };
    return IlandDirectGrantAuthProvider;
}());
exports.IlandDirectGrantAuthProvider = IlandDirectGrantAuthProvider;
