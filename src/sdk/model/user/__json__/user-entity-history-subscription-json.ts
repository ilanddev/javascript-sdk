import { EntityType } from '../../common/__json__/entity-type';

/**
 * User entity history subscription JSON interface
 */
export interface UserEntityHistorySubscriptionJson {
  entity_type: EntityType;
  entity_uuid: string;
  username: string;
  email: string;
  frequency: FrequencyEnum;
  enabled: boolean;
}

/**
 * User entity history subscription frequency enum
 */
export enum FrequencyEnum {
    WEEKLY = 'WEEKLY'
}
