import { EntityJson } from './entity';

/**
 * Interface for Company JSON properties.
 */
export interface CompanyJson extends EntityJson {
  has_iaas: boolean;
  has_vcc: boolean;
}
