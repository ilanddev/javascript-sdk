import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockMetadataResponse } from '../../../model/common/metadata/__mocks__/metadata';
import { MockVmPerfCountersResponse } from '../../../model/vm/__mocks__/vm';
import { MockVappVmsResponse } from '../../../model/vapp/__mocks__/vapp-vms';
import { MockVappVappNetworksResponse } from '../../../model/vapp/__mocks__/vapp-networks';
import { MockVappPerfSamplesSeriesResponse } from '../../../model/vapp/__mocks__/vapp';
import { MockTaskService } from '../../../model/task/__mocks__/task';
import { MockService } from '../../../config/__mocks__/util';

export async function MockVappGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vapps\/[^\/]+?\/metadata$/.test(url):
      // get metadata
      return MockMetadataResponse;
    case /\/vapps\/[^\/]+?\/vms$/.test(url):
      // get a vapps child vms
      return MockVappVmsResponse;
    case /\/vapps\/[^\/]+?\/networks$/.test(url):
      // get a vapps child vapp networks
      return MockVappVappNetworksResponse;
    case /\/vapps\/[^\/]+?\/performance-counters/.test(url):
      // get vapp perf counters
      return MockVmPerfCountersResponse;
    case /\/vapps\/[^\/]+?\/performance/.test(url):
      // get vapp perf samples
      return MockVappPerfSamplesSeriesResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVappPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vapps\/[^\/]+?\/actions\/email-event-history$/.test(url):
      // send a csv file with event history by email.
      return MockService.getMockVoidResponse();
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVappPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vapps\/[^\/]+?\/metadata$/.test(url):
      // update metadata
      return MockTaskService.getNewMockTaskResponse('update metadata');
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVappDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vapps\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
      // delete single metadata entry
      return MockTaskService.getNewMockTaskResponse('delete metadata');
    default:
      return MockNotFoundResponse;
  }
}
