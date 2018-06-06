import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import {
  MockCompanyLogoResponse, MockCompanyOrgsResponse,
  MockCompanyResponse, MockCompanyService, MockCompanySupportTicketsResponse,
  MockCompanyUsersResponse,
  MockCompanyVappsResponse, MockCompanyVdcsResponse, MockCompanyVmsResponse
} from '../../../model/company/__mocks__/company';
import {
  SupportTicketAttachmentDownloadableMockResponse,
  SupportTicketAttachmentMockResponse, SupportTicketAttachmentsMockResponse, SupportTicketCommentsMockResponse,
  SupportTicketMockResponse
} from '../../../model/company/support-ticket/__mocks__/support-ticket';
import { MockService } from '../../../config/__mocks__/util';
import { UserCreationRequestJson } from '../../../model/user/__json__/user-creation-request-json';
import { RoleCreationRequestJson } from '../../../model/iam/role/__json__/role-creation-request-json';

export async function MockCompanyGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/companies\/[^\/]+?$/.test(url):
      // get a company
      return MockCompanyResponse;
    case /\/companies\/[^\/]+\/users?$/.test(url):
      // get users for a company
      return MockCompanyUsersResponse;
    case /\/companies\/[^\/]+\/support-tickets$/.test(url):
      return MockCompanySupportTicketsResponse;
    case /\/companies\/[^\/]+\/support-tickets\/[^\/]+$/.test(url):
      return SupportTicketMockResponse;
    case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/attachments$/.test(url):
      return SupportTicketAttachmentsMockResponse;
    case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/attachments\/[^\/]+$/.test(url):
      return SupportTicketAttachmentMockResponse;
    case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/attachments\/[^\/]+\/is-downloadable$/.test(url):
      return SupportTicketAttachmentDownloadableMockResponse;
    case /\/companies\/[^\/]+\/support-tickets\/[^\/]+\/comments$/.test(url):
      return SupportTicketCommentsMockResponse;
    case /\/companies\/[^\/]+\/location\/[^\/]+\/orgs$/.test(url):
      return MockCompanyOrgsResponse;
    case /\/companies\/[^\/]+\/location\/[^\/]+\/vdcs/.test(url):
      return MockCompanyVdcsResponse;
    case /\/companies\/[^\/]+\/location\/[^\/]+\/vapps/.test(url):
      return MockCompanyVappsResponse;
    case /\/companies\/[^\/]+\/location\/[^\/]+\/vms/.test(url):
      return MockCompanyVmsResponse;
    case /\/companies\/[^\/]+\/logo?$/.test(url):
      // get company logo
      return MockCompanyLogoResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockCompanyPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/companies\/[^\/]+?\/roles$/.test(url):
      // create new role
      const request = data as RoleCreationRequestJson;
      return MockCompanyService.createRole(request);
    case /\/companies\/[^\/]+?\/users$/.test(url): {
      // create new user
      const request = data as UserCreationRequestJson;
      return MockCompanyService.createUser(request);
    }
    default:
      return MockNotFoundResponse;
  }
}

export async function MockCompanyPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/companies\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
      // update a role
      const request = data as RoleCreationRequestJson;
      return MockCompanyService.createRole(request);
    default:
      return MockNotFoundResponse;
  }
}

export async function MockCompanyDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/companies\/[^\/]+?\/roles\/[^\/]+?$/.test(url):
      // delete a role
      return MockService.getMockNoContentResponse();
    default:
      return MockNotFoundResponse;
  }
}
