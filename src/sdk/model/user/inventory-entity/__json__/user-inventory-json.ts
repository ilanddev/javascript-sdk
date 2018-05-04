import { EntityDomainType } from '../../../common/__json__/entity-domain-type';

/**
 * User Inventory JSON interface.
 */
export interface UserInventoryJson {
  username: string;
  inventory: Array<UserCompanyInventoryJson>;
}

/**
 * User Company Inventory JSON interface.
 */
export interface UserCompanyInventoryJson {
  company_id: string;
  company_name: string;
  entities: { [entityDomain: string]: Array<UserInventoryEntityJson> };
}

/**
 * User Inventory Entity JSON interface.
 */
export interface UserInventoryEntityJson {
  uuid: string;
  type: EntityDomainType;
  name: string;
  parent_uuid: string | null;
  parent_type: EntityDomainType | null;
}
