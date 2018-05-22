import { EntityType } from '../../common/__json__/entity-type';
import { EventOwnerType } from './event-owner-type';
import { EventType } from './event-type';

/**
 * Interface for Event json properties.
 */
export interface EventJson {
  uuid: string;
  owner_type: EventOwnerType;
  owner_id: string;
  entity_uuid: string;
  entity_name: string;
  entity_type: EntityType;
  type: EventType;
  timestamp: number;
  task_uuid?: string;
  initiated_by_username: string;
  initiated_by_full_name: string;
  details: string;
}
