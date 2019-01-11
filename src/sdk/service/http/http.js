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
var axios_1 = require("axios");
var iland_1 = require("../../iland");
var api_error_1 = require("../../config/api-error");
var qs = require("qs");
var DEFAULT_API_VERSION = 1.0;
var ILAND_MIME_VND_PREFIX = 'vnd.ilandcloud.api';
/**
 * Iland API HTTP Client.
 */
var Http = (function () {
    /**
     * Constructs a new Http instance.
     * @param {string} baseUrl the base URL of the iland Cloud API
     */
    function Http(baseUrl) {
        var _this = this;
        var defaultMime = Http.versionMime('application/json');
        this._ilandAxios = axios_1.default.create({
            baseURL: baseUrl,
            headers: {
                'x-enable-json-security-chars': 'true',
                'Accept': defaultMime,
                'Content-Type': 'application/json'
            },
            paramsSerializer: function (params) {
                return qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true });
            }
        });
        this._ilandAxios.interceptors.request.use(function (config) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getAuthProvider().getToken().then(function (token) {
                        if (config.headers['x-enable-json-security-chars'] === false ||
                            config.headers['x-enable-json-security-chars'] === 'false') {
                            delete config.headers['x-enable-json-security-chars'];
                        }
                        config.headers['Authorization'] = 'Bearer ' + token;
                        return config;
                    })];
            });
        }); });
        this._ilandAxios.interceptors.response.use(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var str;
            return __generator(this, function (_a) {
                if (response.data instanceof Object || response.data instanceof Array) {
                    return [2 /*return*/, response];
                }
                else {
                    str = response.data;
                    if (str.indexOf(')]}\'\n') === 0) {
                        response.data = JSON.parse(str.substring(5));
                    }
                    return [2 /*return*/, response];
                }
                return [2 /*return*/];
            });
        }); }, function (reason) { return __awaiter(_this, void 0, void 0, function () {
            var error, response, str;
            return __generator(this, function (_a) {
                response = reason.response;
                if (!response) {
                    error = {
                        type: 'ConnectionError',
                        message: "failed to connect to " + reason.config.url
                    };
                }
                else {
                    if (response.data instanceof Object || response.data instanceof Array) {
                        error = response.data;
                    }
                    else {
                        str = response.data;
                        if (str.indexOf(')]}\'\n') === 0) {
                            str = str.substring(5);
                        }
                        error = JSON.parse(str);
                    }
                }
                throw new api_error_1.ApiError(error);
            });
        }); });
    }
    /**
     * Gets a formatted Accept header from a standard MIME and optional version number.
     * @param {string} mime the standard MIME string
     * @param {number} version the targeted version (defaults to the SDK version)
     * @returns {string} the formatted MIME type
     */
    Http.versionMime = function (mime, version) {
        if (mime.indexOf(ILAND_MIME_VND_PREFIX) >= 0) {
            return mime;
        }
        var versionStr = (version ? version : DEFAULT_API_VERSION).toFixed(1);
        var parts = mime.split('/');
        if (parts.length === 2) {
            var prefix = parts[0];
            var suffix = parts[1];
            return prefix + "/" + ILAND_MIME_VND_PREFIX + ".v" + versionStr + "+" + suffix;
        }
        return mime;
    };
    /**
     * Performs a request against the iland Cloud API.
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.request = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.request(config)];
            });
        });
    };
    /**
     * Perform a GET request against the iland Cloud API.
     * @param {string} url the URL path
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.get = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.get(url, config)];
            });
        });
    };
    /**
     * Perform a DELETE request against the iland Cloud API.
     * @param {string} url the URL path
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.delete = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.delete(url, config)];
            });
        });
    };
    /**
     * Perform a POST request against the iland Cloud API.
     * @param {string} url the URL path
     * @param data the data to include in the request body
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.post = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.post(url, data, config)];
            });
        });
    };
    /**
     * Perform a PUT request against the iland Cloud API.
     * @param {string} url the URL path
     * @param data the data to include in the request body
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.put = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.put(url, data, config)];
            });
        });
    };
    return Http;
}());
exports.Http = Http;
