import {EntityType} from './api-entity-type';

/**
 * API Org Entity Tree representation.
 */
export interface OrgEntityTree {

  location_id: string;

  org_uuid: string;

  tree: EntityTreeNode;

  updated_date: number;

  crm: string;

}

/**
 * API Entity Tree Node.
 */
export interface EntityTreeNode {

  type: EntityType;

  uuid: string;

  name: string;

  update_date: number;

  children: {[entityType: string]: Array<EntityTreeNode>};

}
