"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_configuration_1 = require("../config/basic-configuration");
exports.DEFAULT_AUTH_URL = basic_configuration_1.BasicConfiguration.getAuthorizationUrl() + "/auth";
exports.DEFAULT_REALM = 'iland-core';
