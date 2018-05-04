import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for Org JSON properties.
 */
export interface OrgJson extends EntityJson {
  location_id: string;
  enabled: boolean;
  vapp_max_runtime_lease: number;
  vapp_max_storage_lease: number;
  vapp_template_max_storage_lease: number;
  vapp_delete_on_storage_expire: boolean;
  vapp_template_delete_on_storage_expire: boolean;
  zerto_target: boolean;
  fullname: string;
  description: string;
  vcloud_href: string;
  crm: string;
}
