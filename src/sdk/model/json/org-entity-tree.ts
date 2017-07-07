import { EntityType } from './entity-type';

/**
 * API Org Entity Tree JSON representation.
 */
export interface OrgEntityTreeJson {

  location_id: string;

  org_uuid: string;

  tree: EntityTreeNodeJson;

  updated_date: number;

  crm: string;

}

/**
 * API Entity Tree Node JSON representation.
 */
export interface EntityTreeNodeJson {

  type: EntityType;

  uuid: string;

  name: string;

  update_date: number;

  children: {[entityType: string]: Array<EntityTreeNodeJson>};

}
