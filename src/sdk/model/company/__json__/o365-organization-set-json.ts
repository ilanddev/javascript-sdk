import { O365OrganizationJson } from '../../o365/__json__/o365-organization-json';

/**
 * O365 Organization Set JSON.
 */
export interface O365OrganizationSetJson {
  data: Array<O365OrganizationJson>;
  total_reserved_licenses: number;
}
