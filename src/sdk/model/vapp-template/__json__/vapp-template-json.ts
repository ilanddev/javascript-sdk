import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for VappTemplate JSON representation.
 */
export interface VappTemplateJson extends EntityJson {
  description: string;
  vcloud_href: string;
  status: number;
  size: number;
  customizable: boolean;
  customization_required: boolean;
  gold_master: boolean;
  storage_profile_uuid: string;
  public: boolean;
  vdc_uuid: string;
  location_id: string;
  org_uuid: string;
  catalog_uuid: string;
  created_date: number;
  is_expired: boolean;
}
