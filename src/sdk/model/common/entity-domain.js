"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * EntityDomain
 */
var EntityDomain = (function () {
    function EntityDomain(entityDomainType) {
        this._entityDomainType = entityDomainType;
        switch (entityDomainType) {
            case 'COMPANY':
                this._parent = null;
                break;
            case 'IAAS_PRODUCT':
                this._parent = 'COMPANY';
                break;
            case 'VCC_BACKUP_PRODUCT':
                this._parent = 'COMPANY';
                break;
            case 'IAAS_LOCATION':
                this._parent = 'VCC_BACKUP_PRODUCT';
                break;
            case 'IAAS_ORGANIZATION':
                this._parent = 'IAAS_LOCATION';
                break;
            case 'IAAS_VPG':
                this._parent = 'IAAS_ORGANIZATION';
                break;
            case 'IAAS_CATALOG':
                this._parent = 'IAAS_ORGANIZATION';
                break;
            case 'IAAS_MEDIA':
                this._parent = 'IAAS_CATALOG';
                break;
            case 'IAAS_VAPP_TEMPLATE':
                this._parent = 'IAAS_CATALOG';
                break;
            case 'IAAS_VDC':
                this._parent = 'IAAS_ORGANIZATION';
                break;
            case 'IAAS_EDGE':
                this._parent = 'IAAS_VDC';
                break;
            case 'IAAS_INTERNAL_NETWORK':
                this._parent = 'IAAS_VDC';
                break;
            case 'IAAS_VAPP':
                this._parent = 'IAAS_VDC';
                break;
            case 'IAAS_VAPP_NETWORK':
                this._parent = 'IAAS_VAPP';
                break;
            case 'IAAS_VM':
                this._parent = 'IAAS_VAPP';
                break;
            case 'VCC_BACKUP_LOCATION':
                this._parent = 'VCC_BACKUP_PRODUCT';
                break;
            case 'VCC_BACKUP_TENANT':
                this._parent = 'VCC_BACKUP_LOCATION';
                break;
        }
    }
    /**
     * Return the string representation of this class. Which is an IamEntityType
     * @returns {string}
     */
    EntityDomain.prototype.toString = function () {
        return this._entityDomainType.toString();
    };
    Object.defineProperty(EntityDomain.prototype, "parent", {
        /**
         * Get the parent entityDomain.
         * @returns {EntityDomain | null}
         */
        get: function () {
            if (this._parent !== null) {
                return new EntityDomain(this._parent);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return EntityDomain;
}());
exports.EntityDomain = EntityDomain;
