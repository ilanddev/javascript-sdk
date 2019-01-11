"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permission_map_1 = require("./permission-map");
/**
 * DomainPermissionsMap
 */
var DomainPermissionsMap = (function () {
    function DomainPermissionsMap() {
        this._domainPermissions = new Map();
        var permissionMap = permission_map_1.PermissionsMap.getInstance().permissions;
        var self = this;
        var tmp;
        permissionMap.forEach(function (value) {
            if (!self._domainPermissions.has(value.domain)) {
                self._domainPermissions.set(value.domain, [value]);
            }
            else if (self._domainPermissions.has(value.domain)) {
                tmp = self._domainPermissions.get(value.domain);
                if (tmp) {
                    self._domainPermissions.set(value.domain, tmp.concat([value]));
                }
            }
        });
    }
    /**
     * Get an instance of DomainPermissionsMap. Singleton implementation.
     * @returns {DomainPermissionsMap}
     */
    DomainPermissionsMap.getInstance = function () {
        if (!DomainPermissionsMap.instance) {
            DomainPermissionsMap.instance = new DomainPermissionsMap();
        }
        return DomainPermissionsMap.instance;
    };
    Object.defineProperty(DomainPermissionsMap.prototype, "domainPermissions", {
        /**
         * Get the domains permissions map.
         * @returns {Map<IamEntityType, Array<Permission>>}
         */
        get: function () {
            return this._domainPermissions;
        },
        enumerable: true,
        configurable: true
    });
    return DomainPermissionsMap;
}());
exports.DomainPermissionsMap = DomainPermissionsMap;
