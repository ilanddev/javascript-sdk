import { AxiosResponse } from 'axios';
import { CompanyJson } from '../../../model/json/company';
import { RoleCreationRequestJson } from '../../../model/json/role-creation-request';
import { RoleJson } from '../../../model/json/role';
import { UserCreationRequestJson } from '../../../model/json/user-creation-request';
import { UserJson } from '../../../model/json/user';
import { MockOrgJson } from '../org/org';
import { MockVdcJson } from '../vdc/vdc';
import { MockVappJson } from '../vapp/vapp';
import { MockVmJson } from '../vm/vm';
import { SupportTicketMock } from '../support-ticket/support-ticket';

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
    data: [],
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyLogoResponse: Promise<AxiosResponse> = new Promise<AxiosResponse> ((resolve) => {
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
    data: [MockOrgJson],
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyVdcsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: [MockVdcJson],
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyVappsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: [MockVappJson],
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanyVmsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: [MockVmJson],
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCompanySupportTicketsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: [SupportTicketMock],
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

  static async createUser(request: UserCreationRequestJson): Promise<AxiosResponse> {
    const mockUser: UserJson = {
      name: request.name,
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
