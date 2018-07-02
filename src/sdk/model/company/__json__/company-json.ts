import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for Company JSON properties.
 */
export interface CompanyJson extends EntityJson {
  has_iaas: boolean;
  has_vcc: boolean;
  has_object_storage: boolean;
}
