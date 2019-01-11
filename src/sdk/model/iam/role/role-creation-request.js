"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Role Creation Request Implementation.
 */
var RoleCreationRequest = (function () {
    /**
     * Creates a new role creation request.
     * @param {string} companyId the ID of the company that the role will be created in
     * @param {string} name the name of the role
     * @param {string} description the description of the role
     * @param {Array<Policy>} policies the policies that define the role
     */
    function RoleCreationRequest(companyId, name, description, policies) {
        this.companyId = companyId;
        this.name = name;
        this.description = description;
        this.policies = policies;
    }
    Object.defineProperty(RoleCreationRequest.prototype, "json", {
        /**
         * Gets the raw JSON object for the API.
         * @returns {RoleCreationRequestJson} JSON representation
         */
        get: function () {
            return {
                company_id: this.companyId,
                name: this.name,
                description: this.description,
                policies: this.policies.map(function (it) { return it.json; })
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    RoleCreationRequest.prototype.toString = function () {
        return JSON.stringify(this.json, undefined, 2);
    };
    /**
     * Return the policy for the specified uuid.
     * @param {string} entityUuid
     * @returns {Policy | null}
     */
    RoleCreationRequest.prototype.getPolicy = function (entityUuid) {
        for (var _i = 0, _a = this.policies; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.entityUuid === entityUuid) {
                return p;
            }
        }
        return null;
    };
    return RoleCreationRequest;
}());
exports.RoleCreationRequest = RoleCreationRequest;
/**
 * Role Creation Request Builder.
 */
var RoleCreationRequestBuilder = (function () {
    function RoleCreationRequestBuilder(_companyId, _name, _description) {
        this._companyId = _companyId;
        this._name = _name;
        this._description = _description;
        this._policies = {};
    }
    /**
     * Sets the name for the role creation request.
     * @param {string} name
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.setName = function (name) {
        this._name = name;
        return this;
    };
    /**
     * Sets the description for the role creation request.
     * @param {string} description
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.setDescription = function (description) {
        this._description = description;
        return this;
    };
    /**
     * Sets a policy on the role creation request.
     * @param {Policy} policy
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.setPolicy = function (policy) {
        this._policies[policy.entityUuid] = policy;
        return this;
    };
    /**
     * Removes a policy for a specified entity.
     * @param {string} entityUuid the UUID of the entity
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.removePolicy = function (entityUuid) {
        delete this._policies[entityUuid];
        return this;
    };
    /**
     * Clears all policies.
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.clearPolicies = function () {
        this._policies = {};
        return this;
    };
    /**
     * Builds the RoleCreationRequest.
     * @returns {RoleCreationRequest}
     */
    RoleCreationRequestBuilder.prototype.build = function () {
        var _this = this;
        return new RoleCreationRequest(this._companyId, this._name, this._description, Object.keys(this._policies).map(function (it) { return _this._policies[it]; }));
    };
    return RoleCreationRequestBuilder;
}());
exports.RoleCreationRequestBuilder = RoleCreationRequestBuilder;
