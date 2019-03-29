import { Http as RealHttp } from '../http';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockTaskService } from '../../../model/task/__mocks__/task';
import { MockInternalNetworkResponse } from '../../../model/internal-network/__mocks__/internal-network';
import { MockVappNetworkResponse } from '../../../model/vapp-network/__mocks__/vapp-network';
import { MockService } from '../../../config/__mocks__/util';
import { MockVmDelete, MockVmGet, MockVmPost, MockVmPut } from './http.vm';
import { MockVappDelete, MockVappGet, MockVappPost, MockVappPut } from './http.vapp';
import { MockVdcDelete, MockVdcGet, MockVdcPost, MockVdcPut } from './http.vdc';
import { MockVpgDelete, MockVpgGet, MockVpgPost, MockVpgPut } from './http.vpg';
import { MockOrgDelete, MockOrgGet, MockOrgPost, MockOrgPut } from './http.org';
import { MockEdgeDelete, MockEdgeGet, MockEdgePost, MockEdgePut } from './http.edge';
import { MockCompanyDelete, MockCompanyGet, MockCompanyPost, MockCompanyPut } from './http.company';
import { MockMediaDelete, MockMediaGet, MockMediaPost, MockMediaPut } from './http.media';
import { MockUserDelete, MockUserGet, MockUserPost, MockUserPut } from './http.user';
import { MockCatalogDelete, MockCatalogGet, MockCatalogPost, MockCatalogPut } from './http.catalog';
import {
  MockVappTemplateDelete,
  MockVappTemplateGet,
  MockVappTemplatePost,
  MockVappTemplatePut
} from './http.vapp-template';

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
    const self = this;
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
      case /^\/companies\//.test(url):
        return MockCompanyGet(url, config);
      case /^\/orgs\//.test(url):
        return MockOrgGet(url, config);
      case /^\/vdcs\//.test(url):
        return MockVdcGet(url, config);
      case /^\/vapps\//.test(url):
        return MockVappGet(url, config);
      case /^\/vms\//.test(url):
        return MockVmGet(url, config);
      case /^\/vpgs\//.test(url):
        return MockVpgGet(url, config);
      case /^\/edges\//.test(url):
        return MockEdgeGet(url, config);
      case /^\/media\//.test(url):
        return MockMediaGet(url, config);
      case /^\/users\//.test(url):
        return MockUserGet(url, config);
      case /^\/catalogs\//.test(url):
        return MockCatalogGet(url, config);
      case /^\/vapp-templates\//.test(url):
        return MockVappTemplateGet(url, config);
      case /^\/tasks\/[^\/]+?$/.test(url):
        // get task by uuid
        const taskUuid = /\/tasks\/([^\/]+)$/.exec(url)![1];
        return MockTaskService.getExistingMockTaskResponse(taskUuid);
      case /\/vapp-networks\/[^\/]+?$/.test(url):
        // get a vapp network
        return MockVappNetworkResponse;
      case /\/org-vdc-networks\/[^\/]+?$/.test(url):
        // get a internal network
        return MockInternalNetworkResponse;
      default:
        return MockNotFoundResponse;
    }
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /^\/companies\//.test(url):
        return MockCompanyDelete(url, config);
      case /^\/orgs\//.test(url):
        return MockOrgDelete(url, config);
      case /^\/vdcs\//.test(url):
        return MockVdcDelete(url, config);
      case /^\/vapps\//.test(url):
        return MockVappDelete(url, config);
      case /^\/vms\//.test(url):
        return MockVmDelete(url, config);
      case /^\/vpgs\//.test(url):
        return MockVpgDelete(url, config);
      case /^\/edges\//.test(url):
        return MockEdgeDelete(url, config);
      case /^\/media\//.test(url):
        return MockMediaDelete(url, config);
      case /^\/users\//.test(url):
        return MockUserDelete(url, config);
      case /^\/catalogs\//.test(url):
        return MockCatalogDelete(url, config);
      case /^\/vapp-templates\//.test(url):
        return MockVappTemplateDelete(url, config);
      default:
        return MockNotFoundResponse;
    }
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /^\/companies\//.test(url):
        return MockCompanyPost(url, data, config);
      case /^\/orgs\//.test(url):
        return MockOrgPost(url, data, config);
      case /^\/vdcs\//.test(url):
        return MockVdcPost(url, data, config);
      case /^\/vapps\//.test(url):
        return MockVappPost(url, data, config);
      case /^\/vms\//.test(url):
        return MockVmPost(url, data, config);
      case /^\/vpgs\//.test(url):
        return MockVpgPost(url, data, config);
      case /^\/edges\//.test(url):
        return MockEdgePost(url, data, config);
      case /^\/media\//.test(url):
        return MockMediaPost(url, data, config);
      case /^\/users\//.test(url):
        return MockUserPost(url, data, config);
      case /^\/catalogs\//.test(url):
        return MockCatalogPost(url, data, config);
      case /^\/vapp-templates\//.test(url):
        return MockVappTemplatePost(url, data, config);

      case /\/vcc-backup-tenants\/[^\/]+?\/actions\/upgrade-contract$/.test(url):
        // update cloud tenant contract
        return MockService.getMockVoidResponse();
      default:
        return MockNotFoundResponse;
    }
  }

  async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    switch (true) {
      case /^\/companies\//.test(url):
        return MockCompanyPut(url, data, config);
      case /^\/orgs\//.test(url):
        return MockOrgPut(url, data, config);
      case /^\/vdcs\//.test(url):
        return MockVdcPut(url, data, config);
      case /^\/vapps\//.test(url):
        return MockVappPut(url, data, config);
      case /^\/vms\//.test(url):
        return MockVmPut(url, data, config);
      case /^\/vpgs\//.test(url):
        return MockVpgPut(url, data, config);
      case /^\/edges\//.test(url):
        return MockEdgePut(url, data, config);
      case /^\/media\//.test(url):
        return MockMediaPut(url, data, config);
      case /^\/users\//.test(url):
        return MockUserPut(url, data, config);
      case /^\/catalogs\//.test(url):
        return MockCatalogPut(url, data, config);
      case /^\/vapp-templates\//.test(url):
        return MockVappTemplatePut(url, data, config);
      default:
        return MockNotFoundResponse;
    }
  }
}
