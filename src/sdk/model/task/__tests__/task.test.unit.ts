import { Iland } from '../../../iland';
import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { TaskJson } from '../__json__/task-json';
import { TaskStatus } from '../__json__/task-status-type';
import { TaskOperation } from '../__json__/task-operation-type';
import { MockTaskService } from '../__mocks__/task';
import { Task } from '../task';
import { Subject } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Mock = jest.Mock;

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

describe('task update tests', () => {

  test('getPromise resolves with terminal task details when task is successful', async(done) => {
    const taskUUID = 'test-task-uuid-resolve-on-success';
    const builder = new MockTaskBuilder(taskUUID);
    const taskJson = builder.buildJSON();
    MockTaskService.setMockTask(taskUUID, taskJson);
    const mockPushChObs = new Subject<Event | Task>();
    const getObsFn = jest.fn(() => mockPushChObs);
    const mockPushChProvider = jest.fn(companyID => {
      return {
        getObservable: getObsFn
      };
    });
    Task.setPushChannelProvider(mockPushChProvider);
    const task = new Task(taskJson);
    const completionTime = (new Date()).getTime();
    task.getPromise().then(t => {
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('success');
      expect(t.complete).toBe(true);
      mockPushChObs.complete();
      done();
    }, err => {
      fail(`task.getPromise() was rejected: ${err}`);
    });
    mockPushChObs.next(builder.setCompleted(completionTime).buildTask());
  });

  test('getPromise rejects with terminal task details when task status is error', (done) => {
    const taskUUID = 'test-task-uuid-reject-on-err';
    const builder = new MockTaskBuilder(taskUUID);
    const taskJson = builder.buildJSON();
    MockTaskService.setMockTask(taskUUID, taskJson);
    const mockPushChObs = new Subject<Event | Task>();
    const getObsFn = jest.fn(() => mockPushChObs);
    const mockPushChProvider = jest.fn(companyID => {
      return {
        getObservable: getObsFn
      };
    });
    Task.setPushChannelProvider(mockPushChProvider);
    const task = new Task(taskJson);
    const errorMsg = 'test error msg';
    const completionTime = (new Date()).getTime();
    task.getPromise().then(() => {
      fail('task.getPromise() was resolved but expected rejection');
    }, t => {
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('error');
      expect(t.complete).toBe(true);
      expect(t.message).toBe(errorMsg);
      mockPushChObs.complete();
      done();
    });
    mockPushChObs.next(builder.setCompleted(completionTime, 'error', errorMsg).buildTask());
  });

  test('getPromise rejects immediately when task status is already error', async(done) => {
    const taskUUID = 'test-task-uuid-reject-immediate';
    const completionTime = (new Date()).getTime();
    const errorMsg = 'test error msg';
    const builder = new MockTaskBuilder(taskUUID).setCompleted(completionTime, 'error', errorMsg);
    const taskJson = builder.buildJSON();
    MockTaskService.setMockTask(taskUUID, taskJson);
    const task = new Task(taskJson);
    task.getPromise().then(() => {
      fail('task.getPromise() was resolved but expected rejection');
    }, t => {
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('error');
      expect(t.complete).toBe(true);
      expect(t.message).toBe(errorMsg);
      done();
    });
  });

  test('getPromise resolves immediately when task status is already success', async(done) => {
    const taskUUID = 'test-task-uuid-resolve-immediate';
    const completionTime = (new Date()).getTime();
    const builder = new MockTaskBuilder(taskUUID).setCompleted(completionTime);
    const taskJson = builder.buildJSON();
    MockTaskService.setMockTask(taskUUID, taskJson);
    const task = new Task(taskJson);
    task.getPromise().then(t => {
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('success');
      expect(t.complete).toBe(true);
      done();
    }, err => {
      fail(`task.getPromise() was rejected: ${err}`);
    });
  });

  test('getPromise uses polling when no push channel is set and resolves successfully', (done) => {
    const taskUUID = 'test-task-poll-uuid';
    const builder = new MockTaskBuilder(taskUUID);
    const taskJson = builder.buildJSON();
    MockTaskService.setMockTask(taskUUID, taskJson);
    Task.setPushChannelProvider(null);
    const task = new Task(taskJson);
    const completionTime = (new Date()).getTime();
    MockTaskService.setMockTask(taskUUID, builder.setCompleted(completionTime).buildJSON());
    task.getPromise().then(t => {
      expect(Iland.getHttp().get).lastCalledWith(`/tasks/${taskUUID}`);
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('success');
      expect(t.complete).toBe(true);
      done();
    }, err => {
      fail(`task.getPromise() was rejected: ${err}`);
    });
  });

  test('getPromise uses polling when no push channel is set and rejects on task error', async(done) => {
    const taskUUID = 'test-task-poll-err-uuid';
    const builder = new MockTaskBuilder(taskUUID);
    const taskJson = builder.buildJSON();
    MockTaskService.setMockTask(taskUUID, taskJson);
    Task.setPushChannelProvider(null);
    const task = new Task(taskJson);
    const completionTime = (new Date()).getTime();
    const errMsg = 'error message';
    MockTaskService.setMockTask(taskUUID, builder.setCompleted(completionTime, 'error', errMsg).buildJSON());
    task.getPromise().then(t => {
      fail('task.getPromise() was resolved but expected rejection');
    }, t => {
      expect(Iland.getHttp().get).lastCalledWith(`/tasks/${taskUUID}`);
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('error');
      expect(t.complete).toBe(true);
      done();
    });
  });

  test('multiple instances of the same task use the same Subject', (done) => {
    const taskUUID = 'test-task-multiple';
    const builder = new MockTaskBuilder(taskUUID);
    const mockPushChObs = new Subject<Event | Task>();
    const getObsFn = jest.fn(() => mockPushChObs);
    const mockPushChProvider = jest.fn(companyID => {
      return {
        getObservable: getObsFn
      };
    });
    Task.setPushChannelProvider(mockPushChProvider);
    const taskOne = builder.buildTask();
    const taskTwo = builder.buildTask();
    const completionTime = (new Date()).getTime();
    const errMsg = 'error message';
    Promise.all([taskOne.getPromise(), taskTwo.getPromise()]).then(tasks => {
      tasks.forEach(t => {
        expect(t.endTime).not.toBeNull();
        expect((t.endTime as Date).getTime()).toBe(completionTime);
        expect(t.status).toBe('success');
        expect(t.complete).toBe(true);
      });
      expect(mockPushChProvider).toHaveBeenCalledTimes(1);
      expect(getObsFn).toHaveBeenCalledTimes(1);
      done();
    }, err => {
      fail(`task.getPromise() was rejected: ${err}`);
    });
    MockTaskService.setMockTask(taskUUID, builder.setCompleted(completionTime, 'error', errMsg).buildJSON());
    mockPushChObs.next(builder.setCompleted(completionTime).buildTask());
  });

  test('correctly handles case where unexpected error is returned from task poll request', (done) => {
    const taskUUID = 'test-task-poll-unexp-err';
    const builder = new MockTaskBuilder(taskUUID);
    const taskJson = builder.buildJSON();
    MockTaskService.setMockTask(taskUUID, taskJson);
    Task.setPushChannelProvider(null);
    const task = new Task(taskJson);
    const completionTime = (new Date()).getTime();
    const tempHttpGet = jest.fn(() => MockTaskService.getExistingMockTaskResponse('unreal'));
    MockTaskService.setMockTask(taskUUID, builder.setCompleted(completionTime).buildJSON());
    (Iland.getHttp().get as Mock<(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>>)
        .mockImplementationOnce(tempHttpGet);
    task.getPromise().then(t => {
      expect(Iland.getHttp().get).lastCalledWith(`/tasks/${taskUUID}`);
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('success');
      expect(t.complete).toBe(true);
      expect(tempHttpGet).toHaveBeenCalledTimes(1);
      expect(Iland.getHttp().get).toHaveBeenCalledTimes(2);
      done();
    }, err => {
      fail(`task.getPromise() was rejected: ${err}`);
    });
  });

  test('falls back on polling if the push channel is closed', (done) => {
    const taskUUID = 'test-task-fallback';
    const builder = new MockTaskBuilder(taskUUID);
    const mockPushChObs = new Subject<Event | Task>();
    const getObsFn = jest.fn(() => mockPushChObs);
    const mockPushChProvider = jest.fn(companyID => {
      return {
        getObservable: getObsFn
      };
    });
    Task.setPushChannelProvider(mockPushChProvider);
    const completionTime = (new Date()).getTime();
    MockTaskService.setMockTask(taskUUID, builder.setCompleted(completionTime).buildJSON());
    builder.buildTask().getPromise().then(t => {
      expect(mockPushChProvider).toHaveBeenCalledTimes(1);
      expect(getObsFn).toHaveBeenCalledTimes(1);
      expect(Iland.getHttp().get).toHaveBeenCalledTimes(1);
      expect(Iland.getHttp().get).lastCalledWith(`/tasks/${taskUUID}`);
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('success');
      expect(t.complete).toBe(true);
      done();
    }, err => {
      fail(`task.getPromise() was rejected: ${err}`);
    });
    mockPushChObs.next(builder.setProgress(50).buildTask());
    mockPushChObs.complete();
  });

  test('polling handles task progress properly', (done) => {
    const taskUUID = 'test-task-poll-progress';
    const builder = new MockTaskBuilder(taskUUID);
    Task.setPushChannelProvider(null);
    const completionTime = (new Date()).getTime();
    MockTaskService.setMockTask(taskUUID, builder.setCompleted(completionTime).buildJSON());
    const tempHttpGet = jest.fn(() =>
        MockTaskService.getTaskResponseForJSON(builder.setProgress(50).buildJSON()));
    MockTaskService.setMockTask(taskUUID, builder.setCompleted(completionTime).buildJSON());
    (Iland.getHttp().get as Mock<(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>>)
        .mockImplementationOnce(tempHttpGet);
    builder.buildTask().getPromise().then(t => {
      expect(Iland.getHttp().get).toHaveBeenCalledTimes(2);
      expect(Iland.getHttp().get).lastCalledWith(`/tasks/${taskUUID}`);
      expect(t.endTime).not.toBeNull();
      expect((t.endTime as Date).getTime()).toBe(completionTime);
      expect(t.status).toBe('success');
      expect(t.complete).toBe(true);
      done();
    }, err => {
      fail(`task.getPromise() was rejected: ${err}`);
    });
  });

});

class MockTaskBuilder {

  private taskJSON: TaskJson;

  /**
   * Constructs a task with sensible defaults for a mock and a specified UUID.
   * @param arg can be a string task UUID (in which case the other initial task parameters are just set to defaults),
   * another MockTaskBuilder, or a task JSON object
   */
  constructor(arg: string | TaskJson | MockTaskBuilder) {
    if (typeof arg === 'string') {
      const uuid = arg;
      this.taskJSON = {
        active: true,
        synced: false,
        uuid: uuid,
        status: 'running' as TaskStatus,
        company_id: '12345',
        location_id: 'dal02.ilandcloud.com',
        operation: 'rename vm' as TaskOperation,
        end_time: null,
        entity_uuid: '',
        initiated_from_ecs: true,
        initiation_time: (new Date()).getTime(),
        message: null,
        operation_description: 'rename vm',
        org_uuid: 'mock-org-uuid',
        other_attributes: {},
        parent_task_uuid: null,
        progress: 0,
        start_time: (new Date()).getTime(),
        sub_tasks: [],
        task_id: uuid,
        task_type: 'ILAND',
        user_full_name: 'Cory Snyder',
        username: 'csnyder',
        entity_name: 'task-entity-name'
      };
      this.taskJSON.uuid = uuid;
    } else if (arg instanceof MockTaskBuilder) {
      this.taskJSON = arg.buildJSON();
    } else {
      this.taskJSON = arg as TaskJson;
    }
  }

  setProgress(progress: number): MockTaskBuilder {
    const clone = new MockTaskBuilder(this);
    clone.taskJSON.progress = progress;
    return clone;
  }

  setStatus(status: TaskStatus): MockTaskBuilder {
    const clone = new MockTaskBuilder(this);
    clone.taskJSON.status = status;
    return clone;
  }

  setCompleted(time: number = (new Date().getTime()), status: TaskStatus = 'success', message = ''): MockTaskBuilder {
    const clone = new MockTaskBuilder(this);
    clone.taskJSON.status = status;
    clone.taskJSON.synced = true;
    clone.taskJSON.progress = 100;
    clone.taskJSON.active = false;
    clone.taskJSON.end_time = time;
    clone.taskJSON.message = message;
    return clone;
  }

  setMessage(msg: string): MockTaskBuilder {
    const clone = new MockTaskBuilder(this);
    clone.taskJSON.message = msg;
    return clone;
  }

  buildJSON(): TaskJson {
    return Object.assign({}, this.taskJSON);
  }

  buildTask(): Task {
    return new Task(this.buildJSON());
  }

}
