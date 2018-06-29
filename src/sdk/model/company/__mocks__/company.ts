import { AxiosResponse } from 'axios';
import { MockOrgJson } from '../../org/__mocks__/org';
import { MockVdcJson } from '../../vdc/__mocks__/vdc';
import { MockVappJson } from '../../vapp/__mocks__/vapp';
import { MockVmJson } from '../../vm/__mocks__/vm';
import { SupportTicketMock } from '../support-ticket/__mocks__/support-ticket';
import { CompanyJson } from '../__json__/company-json';
import { RoleCreationRequestJson } from '../../iam/role/__json__/role-creation-request-json';
import { RoleJson } from '../../iam/role/__json__/role-json';
import { UserJson } from '../../user/__json__/user-json';
import { UserCreateRequestJson } from '../__json__/user-create-request-json';

export const MockCompanyJson: CompanyJson = {
  deleted: false,
  deleted_date: null,
  has_iaas: true,
  has_vcc: false,
  name: 'MyCorp',
  updated_date: 1494608461964,
  uuid: '000003'
};

export const MockCompanyResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockCompanyJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyUsersResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {data: []},
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyLogoResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>((resolve) => {
  resolve({
    data: [0xFF, 0xD8, 0xFF, 0xE0],
    status: 200,
    statusText: '',
    headers: {
      'content-type': 'image/jpeg'
    },
    config: {}
  });
});

export const MockCompanyOrgsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: [MockOrgJson]
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyVdcsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: [MockVdcJson]
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyVappsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: [MockVappJson]
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyVmsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: [MockVmJson]
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanySupportTicketsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: [SupportTicketMock]
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export class MockCompanyService {

  static async createRole(request: RoleCreationRequestJson): Promise<AxiosResponse> {
    const uuid = 'role-uuid:' + Math.floor((Math.random() * 10000));
    const mockRole: RoleJson = {
      uuid: uuid,
      company_id: request.company_id,
      name: request.name,
      description: request.description,
      policies: request.policies,
      type: 'CUSTOM'
    };
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: mockRole,
        status: 200,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

  static async createUser(request: UserCreateRequestJson): Promise<AxiosResponse> {
    const mockUser: UserJson = {
      name: request.username,
      address: '',
      city: '',
      company: '',
      country: '',
      created_date: new Date().getTime(),
      deleted: false,
      deleted_date: null,
      email: request.email,
      fullname: request.fullname,
      locked: false,
      phone: '',
      state: '',
      user_type: 'CUSTOMER',
      zip: '',
      domain: request.domain
    };
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: mockUser,
        status: 200,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }
}
