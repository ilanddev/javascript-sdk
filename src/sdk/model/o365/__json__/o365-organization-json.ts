import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for O365 Organization JSON properties
 */
export interface O365OrganizationJson extends EntityJson {
  crm: string;
  location_id: string;
  contract_uuid: string;
  type: O365OrganizationType;
  region: O365OrganizationRegion;
  is_backed_up: boolean;
  first_backup_time: Date;
  last_backup_time: Date;
  is_exchange_online: boolean;
  is_share_point_online: boolean;
  exchange_online_settings: any;
  share_point_online_settings: any;
  is_trial: boolean;
  total_users: number;
  total_backedup_users: number;
  total_licensed_users: number;
  total_licenses_consumed: number;
}

/**
 * O365 Organization Region enum
 */
export enum O365OrganizationRegion {
  WORLDWIDE = 'Worldwide',
  US_GOV_COMMUNITY = 'USgovCommunity',
  GERMANY = 'Germany',
  CHINA = 'China',
  US_GOV_DEFENCE = 'USgovDefence'
}

/**
 * O365 Organization Type enum
 */
export enum O365OrganizationType {
  OFFICE365 = 'Office365',
  ON_PREMISES = 'OnPremises',
  HYBRID = 'Hybrid'
}
