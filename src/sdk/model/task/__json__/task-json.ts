import { TaskStatus } from './task-status-type';
import { TaskOperation } from './task-operation-type';
import { TaskType } from './task-type';

/**
 * Api Task representation.
 */
export interface TaskJson {
  active: boolean;
  company_id: string;
  synced: boolean;
  uuid: string;
  status: TaskStatus;
  location_id: string;
  operation: TaskOperation;
  end_time: number | null;
  entity_uuid: string;
  initiated_from_ecs: boolean;
  initiation_time: number;
  message: string | null;
  operation_description: string;
  org_uuid: string;
  other_attributes: { [key: string]: string };
  parent_task_uuid: string | null;
  progress: number;
  start_time: number | null;
  sub_tasks: Array<string>;
  task_id: string;
  task_type: TaskType;
  user_full_name: string;
  username: string;
}
