"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next: autogenerated */
var EdgeSslVpnUserUpdateRequest = (function () {
    function EdgeSslVpnUserUpdateRequest(firstParam, objectId, firstName, lastName, description, disableAccount, password, passwordNeverExpires, changePwdOnNextLogin) {
        if (typeof firstParam === 'string') {
            // Parameters constructor
            this._json = {
                user_id: firstParam,
                object_id: objectId,
                first_name: firstName,
                last_name: lastName,
                description: description,
                disable_account: disableAccount,
                password: password,
                password_never_expires: passwordNeverExpires,
                change_pwd_on_next_login: changePwdOnNextLogin
            };
        }
        else if (firstParam instanceof EdgeSslVpnUserUpdateRequest) {
            // Copy constructor
            this._json = firstParam.json;
        }
        else {
            // Json or empty constructor
            this._json = (firstParam || {});
        }
    }
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "userId", {
        /**
         * Get user id.
         * @returns {string}
         */
        get: function () {
            return this._json.user_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "objectId", {
        /**
         * Get object id.
         * @returns {string}
         */
        get: function () {
            return this._json.object_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "firstName", {
        /**
         * Get first name.
         * @returns {string}
         */
        get: function () {
            return this._json.first_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "lastName", {
        /**
         * Get last name.
         * @returns {string}
         */
        get: function () {
            return this._json.last_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "description", {
        /**
         * Get description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "disableAccount", {
        /**
         * Get disable account.
         * @returns {boolean}
         */
        get: function () {
            return this._json.disable_account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "password", {
        /**
         * Get password.
         * @returns {string}
         */
        get: function () {
            return this._json.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "passwordNeverExpires", {
        /**
         * Get password never expires.
         * @returns {boolean}
         */
        get: function () {
            return this._json.password_never_expires;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "changePwdOnNextLogin", {
        /**
         * Get change pwd on next login.
         * @returns {boolean}
         */
        get: function () {
            return this._json.change_pwd_on_next_login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSslVpnUserUpdateRequest.prototype, "json", {
        /**
         * Get the json representation of this class.
         * @returns {EdgeSslVpnUserUpdateRequestJson}
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the string representation of this class.
     * @returns {string}
     */
    EdgeSslVpnUserUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return EdgeSslVpnUserUpdateRequest;
}());
exports.EdgeSslVpnUserUpdateRequest = EdgeSslVpnUserUpdateRequest;
