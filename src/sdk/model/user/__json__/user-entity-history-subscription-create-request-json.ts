import { FrequencyEnum } from './user-entity-history-subscription-json';

/**
 * User entity history subscription create request JSON interface
 */
export interface UserEntityHistorySubscriptionCreateRequestJson {
  entity_type: EntityHistorySubscriptionType;
  entity_uuid: string;
  email: string;
  frequency: FrequencyEnum;
  enabled: boolean;
}

/**
 * User entity history subscription type
 */
export enum EntityHistorySubscriptionType {
  COMPANY = 'COMPANY',
  ORG = 'ORG',
  VDC = 'VDC',
  CATALOG = 'CATALOG',
  VPG = 'VPG',
  ORG_VDC_NETWORK = 'ORG_VDC_NETWORK',
  EDGE = 'EDGE',
  VAPP = 'VAPP',
  VAPP_NETWORK = 'VAPP_NETWORK',
  VM = 'VM',
  VAPP_TEMPLATE = 'VAPP_TEMPLATE',
  MEDIA = 'MEDIA',
  EXTERNAL_NETWORK = 'EXTERNAL_NETWORK',
  RECOVERY_RUNBOOK = 'RECOVERY_RUNBOOK',
  VCC_TENANT = 'VCC_TENANT'
}
