import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockVpgAlertResponse, MockVpgReportDetailsResponse } from '../../../model/vpg/__mocks__/vpg';
import { MockTaskService } from '../../../model/task/__mocks__/task';
import { MockService } from '../../../config/__mocks__/util';

export async function MockVpgGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vpgs\/[^\/]+?\/failover-report\/[^\/]+?$/.test(url):
      // remove vpg failover test alert
      return MockVpgReportDetailsResponse;
    case /\/vpgs\/[^\/]+?\/failover-test-alerts$/.test(url):
      // remove vpg failover test alert
      return MockVpgAlertResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVpgPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vpgs\/[^\/]+?\/failover-test-alerts$/.test(url):
      // add a vpg failover test alert
      return MockVpgAlertResponse;
    case /\/vpgs\/[^\/]+?\/failover-test$/.test(url):
      // add a vpg failover test alert
      return MockTaskService.getNewMockTaskResponse('zerto failover test initiation');
    case /\/vpgs\/[^\/]+?\/failover-test-stop$/.test(url):
      // add a vpg failover test alert
      return MockTaskService.getNewMockTaskResponse('zerto failover test stop');
    case /\/vpgs\/[^\/]+?\/failover$/.test(url):
      // add a vpg failover test alert
      return MockTaskService.getNewMockTaskResponse('zerto live failover initiation');
    case /\/vpgs\/[^\/]+?\/failover-commit$/.test(url):
      // add a vpg failover test alert
      return MockTaskService.getNewMockTaskResponse('zerto failover commit');
    case /\/vpgs\/[^\/]+?\/failover-rollback$/.test(url):
      // add a vpg failover test alert
      return MockTaskService.getNewMockTaskResponse('zerto failover rollback');
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVpgPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVpgDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vpgs\/[^\/]+?\/failover-test-alerts\/[^\/]+?$/.test(url):
      // remove vpg failover test alert
      return MockService.getMockVoidResponse();
    default:
      return MockNotFoundResponse;
  }
}
