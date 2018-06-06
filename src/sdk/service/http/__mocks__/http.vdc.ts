import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockFakeMetadataResponse, MockMetadataResponse } from '../../../model/common/metadata/__mocks__/metadata';
import {
  MockVdcPerfCountersResponse,
  MockVdcPerfSamplesSeriesResponse,
  MockVdcResponse
} from '../../../model/vdc/__mocks__/vdc';
import { MockVdcVmsResponse } from '../../../model/vdc/__mocks__/vdc-vms';
import { MockVdcVappsResponse } from '../../../model/vdc/__mocks__/vdc-vapps';
import { MockTaskService } from '../../../model/task/__mocks__/task';

export async function MockVdcGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vdcs\/dev-vcd01.iland.dev:urn:vcloud:vdc:e51cc45c-8890-r331-7e7e-2934lk235ie5\/metadata$/.test(url):
      // get fake metadata
      return MockFakeMetadataResponse;
    case /\/vdcs\/[^\/]+?\/metadata$/.test(url):
      // get metadata
      return MockMetadataResponse;
    case /\/vdcs\/[^\/]+?$/.test(url):
      // get a vdc
      return MockVdcResponse;
    case /\/vdcs\/[^\/]+?\/vapps$/.test(url):
      // get a vdcs child vapps
      return MockVdcVappsResponse;
    case /\/vdcs\/[^\/]+?\/vms$/.test(url):
      // get a vdcs child vms
      return MockVdcVmsResponse;
    case /\/vdcs\/[^\/]+?\/performance-counters/.test(url):
      // get vdcs perf counters
      return MockVdcPerfCountersResponse;
    case /\/vdcs\/[^\/]+?\/performance/.test(url):
      // get vdcs perf samples
      return MockVdcPerfSamplesSeriesResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVdcPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vdcs\/[^\/]+?\/actions\/build-vapp$/.test(url):
      // build vapp task
      return MockTaskService.getNewMockTaskResponse('build vapp');
    case /\/vdcs\/[^\/]+?\/actions\/add-vapp-from-template$/.test(url):
      // add vapp
      return MockTaskService.getNewMockTaskResponse('add vapp');
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVdcPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vdcs\/[^\/]+?\/metadata$/.test(url):
      // update metadata
      return MockTaskService.getNewMockTaskResponse('update metadata');
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVdcDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vdcs\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
      // delete single metadata entry
      return MockTaskService.getNewMockTaskResponse('delete metadata');
    default:
      return MockNotFoundResponse;
  }
}
