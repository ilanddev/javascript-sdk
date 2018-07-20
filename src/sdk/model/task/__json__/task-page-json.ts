import { TaskJson } from './task-json';
import { TaskFilterParamsJson } from './task-filter-params-json';

export interface TaskListJson {
  current_page_parameters: TaskFilterParamsJson;
  next_page_parameters: TaskFilterParamsJson;
  total_records: number;
  last_page: boolean;
  data: Array<TaskJson>;
}
