import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for Media JSON representation.
 */
export interface MediaJson extends EntityJson {
  status: number;
  size: number;
  public: boolean;
  location_id: string;
  org_uuid: string;
  catalog_uuid: string;
  storage_profile_uuid: string;
  vdc_uuid: string;
  description: string;
  vcloud_href: string;
  created_date: number;
}
