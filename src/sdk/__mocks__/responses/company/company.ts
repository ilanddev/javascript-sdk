import { AxiosResponse } from 'axios';
import { CompanyJson } from '../../../model/json/company';
import { RoleCreationRequestJson } from '../../../model/json/role-creation-request';
import { RoleJson } from '../../../model/json/role';
import { UserCreationRequestJson } from '../../../model/json/user-creation-request';
import { UserJson } from '../../../model/json/user';

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
      'content-type': 'image/vnd.ilandcloud.api.v1.0+jpeg'
    },
    config: {}
  })
});

//{"headers": {"Accept": "image/vnd.ilandcloud.api.v1.0+jpeg"}, "responseType": "arraybuffer"}

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
