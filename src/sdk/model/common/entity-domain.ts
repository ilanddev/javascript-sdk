import { EntityDomainType } from './__json__/entity-domain-type';

/**
 * EntityDomain
 */
export class EntityDomain {
  private _parent: EntityDomainType | null;
  private _entityDomainType: EntityDomainType;

  constructor(entityDomainType: EntityDomainType) {
    this._entityDomainType = entityDomainType;
    switch (entityDomainType) {
      case 'COMPANY':
        this._parent = null;
        break;
      case 'ILAND_CLOUD_PRODUCT':
        this._parent = 'COMPANY';
        break;
      case 'ILAND_BACKUP_PRODUCT':
        this._parent = 'COMPANY';
        break;
      case 'ILAND_CLOUD_LOCATION':
        this._parent = 'ILAND_BACKUP_PRODUCT';
        break;
      case 'ILAND_CLOUD_ORGANIZATION':
        this._parent = 'ILAND_CLOUD_LOCATION';
        break;
      case 'ILAND_CLOUD_VPG':
        this._parent = 'ILAND_CLOUD_ORGANIZATION';
        break;
      case 'ILAND_CLOUD_CATALOG':
        this._parent = 'ILAND_CLOUD_ORGANIZATION';
        break;
      case 'ILAND_CLOUD_MEDIA':
        this._parent = 'ILAND_CLOUD_CATALOG';
        break;
      case 'ILAND_CLOUD_VAPP_TEMPLATE':
        this._parent = 'ILAND_CLOUD_CATALOG';
        break;
      case 'ILAND_CLOUD_VDC':
        this._parent = 'ILAND_CLOUD_ORGANIZATION';
        break;
      case 'ILAND_CLOUD_EDGE':
        this._parent = 'ILAND_CLOUD_VDC';
        break;
      case 'ILAND_CLOUD_INTERNAL_NETWORK':
        this._parent = 'ILAND_CLOUD_VDC';
        break;
      case 'ILAND_CLOUD_VAPP':
        this._parent = 'ILAND_CLOUD_VDC';
        break;
      case 'ILAND_CLOUD_VAPP_NETWORK':
        this._parent = 'ILAND_CLOUD_VAPP';
        break;
      case 'ILAND_CLOUD_VM':
        this._parent = 'ILAND_CLOUD_VAPP';
        break;
      case 'ILAND_BACKUP_LOCATION':
        this._parent = 'ILAND_BACKUP_PRODUCT';
        break;
      case 'ILAND_BACKUP_TENANT':
        this._parent = 'ILAND_BACKUP_LOCATION';
        break;
    }
  }

  /**
   * Return the string representation of this class. Which is an EntityDomainType
   * @returns {string}
   */
  toString(): string {
    return this._entityDomainType.toString();
  }

  /**
   * Get the parent entityDomain.
   * @returns {EntityDomain | null}
   */
  get parent(): EntityDomain | null {
    if (this._parent !== null) {
      return new EntityDomain(this._parent);
    }
    return null;
  }
}
