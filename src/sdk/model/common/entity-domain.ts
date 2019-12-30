import { IamEntityType } from './__json__/iam-entity-type';

/**
 * EntityDomain
 */
export class EntityDomain {
  private _parent: IamEntityType | null;
  private _entityDomainType: IamEntityType;

  constructor(entityDomainType: IamEntityType) {
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
      case 'O365_PRODUCT':
        this._parent = 'COMPANY';
        break;
      case 'O365_LOCATION':
        this._parent = 'O365_PRODUCT';
        break;
      case 'O365_ORGANIZATION':
        this._parent = 'O365_LOCATION';
        break;
      case 'O365_JOB':
        this._parent = 'O365_ORGANIZATION';
        break;
      case 'O365_JOB_SESSION':
        this._parent = 'O365_JOB';
        break;
      case 'O365_RESTORE_SESSION':
        this._parent = 'O365_ORGANIZATION';
    }
  }

  /**
   * Return the string representation of this class. Which is an IamEntityType
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
