import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import {
  MockPublicVappTemplateResponse,
  MockVappTemplateResponse
} from '../../../model/vapp-template/__mocks__/vapp-template';

export async function MockVappTemplateGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/vapp-templates\/dev-vcd01.iland.dev:urn:vcloud:vapptemplate:b1ffb935-f32c-4886-a7a6-2e4d3d7b1de8$/
        .test(url):
      // get a public vapp template
      return MockPublicVappTemplateResponse;
    case /\/vapp-templates\/[^\/]+?$/.test(url):
      // get a vapp template
      return MockVappTemplateResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVappTemplatePost(url: string, data?: any, config?: AxiosRequestConfig):
    Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVappTemplatePut(url: string, data?: any, config?: AxiosRequestConfig):
    Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockVappTemplateDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}
