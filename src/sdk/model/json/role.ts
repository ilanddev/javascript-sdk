import { PolicyJson } from './policy';

/**
 * Interface for Role JSON properties.
 */
export interface RoleJson {
  uuid: string;
  company_id: string;
  name: string;
  description: string;
  policies: Array<PolicyJson>;
  type: RoleType;
}

export type RoleType = 'CUSTOM' | 'BUILT_IN';

export type EntityDomain =
    'COMPANY' |
    'ILAND_CLOUD_PRODUCT' |
    'ILAND_BACKUP_PRODUCT' |
    'ILAND_CLOUD_LOCATION' |
    'ILAND_CLOUD_ORGANIZATION' |
    'ILAND_CLOUD_VPG' |
    'ILAND_CLOUD_CATALOG' |
    'ILAND_CLOUD_MEDIA' |
    'ILAND_CLOUD_VAPP_TEMPLATE' |
    'ILAND_CLOUD_VDC' |
    'ILAND_CLOUD_EDGE' |
    'ILAND_CLOUD_INTERNAL_NETWORK' |
    'ILAND_CLOUD_VAPP' |
    'ILAND_CLOUD_VAPP_NETWORK' |
    'ILAND_CLOUD_VM' |
    'ILAND_BACKUP_LOCATION' |
    'ILAND_BACKUP_TENANT';
