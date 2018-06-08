import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import {
  MockUserCompaniesResponse,
  MockUserCompanyInventoryResponse,
  MockUserRoleForCompanyResponse1,
  MockUserRoleForCompanyResponse2,
  MockUserRoleForCompanyResponse3,
  MockUserUpdatedJsonResponse
} from '../../../model/user/__mocks__/user';
import { MockService } from '../../../config/__mocks__/util';

export async function MockUserGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/users\/[^\/]+\/companies?$/.test(url):
      // get companies for a user
      return MockUserCompaniesResponse;
    case /\/users\/[^\/]+\/iaas-inventory$/.test(url):
      return MockUserCompanyInventoryResponse;
    case /\/users\/[^\/]+\/roles\/000002$/.test(url):
      return MockUserRoleForCompanyResponse1;
    case /\/users\/[^\/]+\/roles\/000003$/.test(url):
      return MockUserRoleForCompanyResponse2;
    case /\/users\/[^\/]+\/roles\/12345$/.test(url):
      return MockUserRoleForCompanyResponse3;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockUserPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockUserPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/users\/[^\/]+?$/.test(url):
      return MockUserUpdatedJsonResponse;
    case /\/users\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
      return MockService.getMockVoidResponse();
    default:
      return MockNotFoundResponse;
  }
}

export async function MockUserDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/users\/[^\/]+?$/.test(url):
    case /\/users\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
      return MockService.getMockVoidResponse();
    default:
      return MockNotFoundResponse;
  }
}
