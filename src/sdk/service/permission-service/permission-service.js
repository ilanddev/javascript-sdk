"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permission_map_1 = require("../../model/iam/permission/permission-map");
var domain_permission_map_1 = require("../../model/iam/permission/domain-permission-map");
/**
 * PermissionService
 */
var PermissionService = (function () {
    function PermissionService() {
        this.permissions = permission_map_1.PermissionsMap.getInstance().permissions;
        this.domainPermissions = domain_permission_map_1.DomainPermissionsMap.getInstance().domainPermissions;
    }
    /**
     * Get the instance of PermissionService. Singleton implementation.
     * @returns {PermissionService}
     */
    PermissionService.getInstance = function () {
        if (!PermissionService.instance) {
            PermissionService.instance = new PermissionService();
        }
        return PermissionService.instance;
    };
    /**
     * Get the decorated permission for the specified permission type.
     * @param {PermissionType} permission
     * @returns {Permission | undefined}
     */
    PermissionService.getPermission = function (permission) {
        return permission_map_1.PermissionsMap.getInstance().permissions.get(permission);
    };
    /**
     * Get implied permission for the current permission.
     * @param {Array<PermissionType> | undefined} originalPermissions
     * @returns {Array<Permission> | null}
     */
    PermissionService.prototype.getImpliedPermissions = function (originalPermissions) {
        if (originalPermissions === undefined) {
            return [];
        }
        var impliedPermissions = [];
        for (var _i = 0, originalPermissions_1 = originalPermissions; _i < originalPermissions_1.length; _i++) {
            var permissionType = originalPermissions_1[_i];
            var permission = this.permissions.get(permissionType);
            if (permission && permission.impliedPermissions !== null) {
                for (var _a = 0, _b = permission.impliedPermissions; _a < _b.length; _a++) {
                    var impliedPermission = _b[_a];
                    impliedPermissions.push(this.permissions.get(impliedPermission));
                }
            }
        }
        return impliedPermissions;
    };
    /**
     * Get all available permissions for an IamEntityType.
     * @param {IamEntityType} domain
     * @returns {Array<Permission> | undefined}
     */
    PermissionService.prototype.getAvailablePermissionsForDomain = function (domain) {
        return this.domainPermissions.get(domain);
    };
    /**
     * Get all required permissions for an IamEntityType.
     * @param {IamEntityType | undefined} domain
     * @returns {Array<Permission> | undefined}
     */
    PermissionService.prototype.getRequiredPermissionsForDomain = function (domain) {
        if (domain !== undefined) {
            var permissionMap = this.domainPermissions.get(domain);
            if (permissionMap) {
                return permissionMap.filter(function (item) {
                    return item.requiredForCustomPolicy;
                });
            }
        }
        return undefined;
    };
    /**
     * Get all view permissions for an IamEntityType.
     * @param {IamEntityType | undefined} domain
     * @returns {Permission | undefined}
     */
    PermissionService.prototype.getViewPermissionForDomain = function (domain) {
        if (domain !== undefined) {
            var domainPermissions = this.getAvailablePermissionsForDomain(domain);
            var permissions = void 0;
            var permission = void 0;
            if (domainPermissions) {
                permissions = domainPermissions.filter(function (p) {
                    return (p.permissionType === 'VIEW_COMPANY' || p.permissionType === 'VIEW_ILAND_CLOUD' ||
                        p.permissionType === 'VIEW_ILAND_BACKUP' || p.permissionType === 'VIEW_ILAND_CLOUD_LOCATION' ||
                        p.permissionType === 'VIEW_ILAND_CLOUD_ORG' || p.permissionType === 'VIEW_ILAND_CLOUD_VPG' ||
                        p.permissionType === 'VIEW_ILAND_CLOUD_CATALOG' || p.permissionType === 'VIEW_ILAND_CLOUD_MEDIA' ||
                        p.permissionType === 'VIEW_ILAND_CLOUD_VAPP_TEMPLATE' || p.permissionType === 'VIEW_ILAND_CLOUD_VDC' ||
                        p.permissionType === 'VIEW_ILAND_CLOUD_EDGE' || p.permissionType === 'VIEW_ILAND_CLOUD_INTERNAL_NETWORK' ||
                        p.permissionType === 'VIEW_ILAND_CLOUD_VAPP' || p.permissionType === 'VIEW_ILAND_CLOUD_VAPP_NETWORK' ||
                        p.permissionType === 'VIEW_ILAND_CLOUD_VM' || p.permissionType === 'VIEW_ILAND_BACKUP_LOCATION' ||
                        p.permissionType === 'VIEW_ILAND_BACKUP_TENANT' || p.permissionType === 'MANAGE_ILAND_OBJECT_STORAGE' ||
                        p.permissionType === 'MANAGE_ILAND_OBJECT_STORAGE_LOCATION');
                });
                if (permissions) {
                    permission = permissions[0];
                }
                return permission;
            }
        }
        return undefined;
    };
    return PermissionService;
}());
exports.PermissionService = PermissionService;
