import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockMetadataResponse } from '../../../model/common/metadata/__mocks__/metadata';
import { MockMediaResponse } from '../../../model/media/__mocks__/media';
import { MockTaskService } from '../../../model/task/__mocks__/task';

export async function MockMediaGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/media\/[^\/]+?$/.test(url):
      // get a media
      return MockMediaResponse;
    case /\/media\/[^\/]+?\/metadata$/.test(url):
      // get metadata
      return MockMetadataResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockMediaPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/media\/[^\/]+?\/actions\/clone$/.test(url):
      // Clone media
      return MockTaskService.getNewMockTaskResponse('clone media');
    case /\/media\/[^\/]+?\/actions\/sync/.test(url):
      // Sync media
      return MockTaskService.getNewMockTaskResponse('sync catalog item');
    default:
      return MockNotFoundResponse;
  }
}

export async function MockMediaPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/media\/[^\/]+?\/metadata$/.test(url):
      // update metadata
      return MockTaskService.getNewMockTaskResponse('update metadata');
    case /\/media\/[^\/]+?$/.test(url):
      // Update media
      return MockTaskService.getNewMockTaskResponse('update media');
    default:
      return MockNotFoundResponse;
  }
}

export async function MockMediaDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/media\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
      // delete single metadata entry
      return MockTaskService.getNewMockTaskResponse('delete metadata');
    case /\/media\/[^\/]+?$/.test(url):
      // Delete media
      return MockTaskService.getNewMockTaskResponse('delete entity');
    default:
      return MockNotFoundResponse;
  }
}
