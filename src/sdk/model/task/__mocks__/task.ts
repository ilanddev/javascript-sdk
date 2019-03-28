import { AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { TaskJson } from '../__json__/task-json';
import { TaskOperation } from '../__json__/task-operation-type';
import { TaskStatus } from '../__json__/task-status-type';

export class MockTaskService {

  private static taskMap: Map<string, TaskJson> = new Map();

  static async getNewMockTaskResponse(op: TaskOperation): Promise<AxiosResponse> {
    const uuid = 'task-uuid:' + Math.floor((Math.random() * 10000));
    const mockTask: TaskJson = {
      active: true,
      synced: false,
      uuid: uuid,
      status: 'running' as TaskStatus,
      company_id: '12345',
      location_id: 'dal02.ilandcloud.com',
      operation: op,
      end_time: null,
      entity_uuid: '',
      initiated_from_ecs: true,
      initiation_time: (new Date()).getTime(),
      message: null,
      operation_description: op,
      org_uuid: 'mock-org-uuid',
      other_attributes: {},
      parent_task_uuid: null,
      progress: 1,
      start_time: null,
      sub_tasks: [],
      task_id: uuid,
      task_type: 'ILAND',
      user_full_name: 'Cory Snyder',
      username: 'csnyder',
      entity_name: 'task-entity-name'
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

  static setMockTask(uuid: string, taskJSON: TaskJson) {
    MockTaskService.taskMap.set(uuid, taskJSON);
  }

  static async getExistingMockTaskResponse(uuid: string): Promise<AxiosResponse> {
    const mockTask = MockTaskService.taskMap.get(uuid);
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

  static async getTaskResponseForJSON(json: TaskJson): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: json,
        status: 200,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

}
