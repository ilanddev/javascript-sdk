"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Configuration for tests using environment variables.
 */
var TestConfiguration = (function () {
    function TestConfiguration() {
    }
    TestConfiguration.getUsername = function () {
        return process.env.ILAND_USERNAME;
    };
    TestConfiguration.getPassword = function () {
        return process.env.ILAND_PASSWORD;
    };
    TestConfiguration.getClientId = function () {
        return process.env.ILAND_CLIENT_ID;
    };
    TestConfiguration.getClientSecret = function () {
        return process.env.ILAND_CLIENT_SECRET;
    };
    return TestConfiguration;
}());
exports.TestConfiguration = TestConfiguration;
