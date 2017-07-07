import { Http as RealHttp } from '../http';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockVmResponse } from './responses/vm/vm';
import { MockNotFoundResponse } from './responses/errors';
import { MockVmVirtualDisksResponse } from './responses/vm/virtual-disks';
import { MockTaskService } from './responses/task/task';
import { MockMetadataResponse } from './responses/metadata/metadata';

jest.unmock('../http');

/**
 * Mock Iland API HTTP Client.
 */
export class Http {

  constructor() {
    this.request = jest.fn(this.request);
    this.get = jest.fn(this.get);
    this.delete = jest.fn(this.delete);
    this.post = jest.fn(this.post);
    this.put = jest.fn(this.put);
  }

  static versionMime(mime: string, version?: number): string {
    return RealHttp.versionMime(mime, version);
  }

  async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    let self = this;
    switch (config.method!.toLowerCase()) {
      case 'get':
        return self.get(config.url!, config);
      case 'put':
        return self.put(config.url!, config.data, config);
      case 'post':
        return self.post(config.url!, config.data, config);
      case 'delete':
        return self.delete(config.url!, config);
      default:
        return MockNotFoundResponse;
    }
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vm\/[^\/]+?$/.test(url):
        // get vm by uuid
        return MockVmResponse;
      case /\/vm\/[^\/]+?\/virtual-disks$/.test(url):
        // get virtual disks for VM
        return MockVmVirtualDisksResponse;
      case /\/task\/[^\/]+?\/([^\/]+)$/.test(url):
        // get task by uuid
        const taskUuid = /\/task\/[^\/]+?\/([^\/]+)$/.exec(url)![1];
        return MockTaskService.getExistingMockTaskResponse(taskUuid);
      case /\/vm\/[^\/]+?\/metadata$/.test(url):
      case /\/vapp\/[^\/]+?\/metadata$/.test(url):
      case /\/vdc\/[^\/]+?\/metadata$/.test(url):
        // get metadata
        return MockMetadataResponse;
      default:
        return MockNotFoundResponse;
    }
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vm\/[^\/]+?\/disks\/[^\/]+?$/.test(url):
        // delete single virtual disk
        return MockTaskService.getNewMockTaskResponse('delete virtual disk');
      case /\/vm\/[^\/]+?\/metadata\/[^\/]+?$/.test(url):
        // delete single metadata entry
        return MockTaskService.getNewMockTaskResponse('delete metadata');
      case /\/vm\/[^\/]+?$/.test(url):
        // delete vm
        return MockTaskService.getNewMockTaskResponse('delete entity');
      default:
        return MockNotFoundResponse;
    }
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vm\/[^\/]+?\/virtual-disk$/.test(url):
        // update single virtual disk
        return MockTaskService.getNewMockTaskResponse('add virtual disk');
      default:
        return MockNotFoundResponse;
    }
  }

  async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /\/vm\/[^\/]+?\/virtual-disks$/.test(url):
        // update VM's virtual disks
        return MockTaskService.getNewMockTaskResponse('update vm disks');
      case /\/vm\/[^\/]+?\/virtual-disk$/.test(url):
        // update single virtual disk
        return MockTaskService.getNewMockTaskResponse('update vm disks');
      case /\/vm\/[^\/]+?\/mem$/.test(url):
        // update VMs memory size
        return MockTaskService.getNewMockTaskResponse('update memory size');
      case /\/vm\/[^\/]+?\/cpu$/.test(url):
        // update VMs CPUs
        return MockTaskService.getNewMockTaskResponse('update cpu count');
      case /\/vm\/[^\/]+?\/metadata$/.test(url):
        // update VMs metadata
        return MockTaskService.getNewMockTaskResponse('update metadata');
      default:
        return MockNotFoundResponse;
    }
  }

}
