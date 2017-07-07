import { AxiosResponse } from 'axios';
import { TaskJson, TaskOperation, TaskStatus } from '../../../model/json/task';
import { MockNotFoundResponse } from '../errors';

export class MockTaskService {

  private static taskMap: Map<string, TaskJson> = new Map();

  static async getNewMockTaskResponse(op: TaskOperation): Promise<AxiosResponse> {
    let uuid = 'task-uuid:' + Math.floor((Math.random() * 10000));
    let mockTask: TaskJson = {
      active: true,
      synchronized: false,
      uuid: uuid,
      status: 'running' as TaskStatus,
      location_id: 'dal02.ilandcloud.com',
      operation: op,
      end_time: null,
      entity_uuid: '',
      initiated_from_ecs: true,
      initiation_time: (new Date()).getTime(),
      message: null,
      operation_description: op,
      org_uuid: 'mock-org-uuid',
      other_attributes: {} as Map<string, any>,
      parent_task_uuid: null,
      progress: 1,
      start_time: null,
      sub_tasks: [],
      task_id: uuid,
      task_type: 'iland',
      user_full_name: 'Cory Snyder',
      username: 'csnyder'
    };
    MockTaskService.taskMap.set(uuid, mockTask);
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: mockTask,
        status: 202,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

  static async getExistingMockTaskResponse(uuid: string): Promise<AxiosResponse> {
    let mockTask = MockTaskService.taskMap.get(uuid);
    if (mockTask === undefined) {
      return MockNotFoundResponse;
    } else {
      return new Promise<AxiosResponse>(function(resolve) {
        resolve({
          data: mockTask,
          status: 200,
          statusText: '',
          headers: {},
          config: {}
        });
      });
    }
  }

}
