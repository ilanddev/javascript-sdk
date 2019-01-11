"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./service/http/http");
var basic_configuration_1 = require("./config/basic-configuration");
var noop_1 = require("rxjs/util/noop");
var DEFAULT_API_URL = basic_configuration_1.BasicConfiguration.getApiUrl() + "/v1";
var Iland = (function () {
    function Iland() {
    }
    Iland.init = function (_authProvider, _config, _logger) {
        this._authProvider = _authProvider;
        this.baseUrl = _config !== undefined && _config.baseUrl ? _config.baseUrl : DEFAULT_API_URL;
        this._http = new http_1.Http(this.baseUrl);
        this._logger = _logger ? _logger : {
            debug: noop_1.noop,
            info: noop_1.noop,
            warn: noop_1.noop,
            error: noop_1.noop
        };
    };
    Iland.getAuthProvider = function () {
        if (Iland._authProvider === undefined) {
            throw new Error('The Iland SDK has not yet been initialized.');
        }
        return Iland._authProvider;
    };
    Iland.getHttp = function () {
        if (Iland._http === undefined) {
            throw new Error('The Iland SDK has not yet been initialized.');
        }
        return Iland._http;
    };
    /**
     * Get the configured logger.
     * @returns {Logger}
     */
    Iland.getLogger = function () {
        return this._logger;
    };
    return Iland;
}());
exports.Iland = Iland;
