import { EntityJson } from './';

/**
 * Interface for Catalog JSON representation.
 */
export interface CatalogJson extends EntityJson {
  location_id: string;
  shared: boolean;
  public: boolean;
  version: number;
  org_uuid: string;
  description: string;
  vcloud_href: string;
  created_date: number;
}
