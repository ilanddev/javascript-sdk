import { AxiosResponse } from 'axios';
import { CompanyJson } from '../../../model/json/company';
import { UserJson } from '../../../model/json/user';

export const MockUserJson: UserJson = {
  name: 'coke',
  address: '111 washington st.',
  city: 'new york',
  company: 'coke-co',
  country: 'USA',
  created_date: 12394123948,
  deleted: false,
  deleted_date: null,
  email: 'coke@coke.com',
  fullname: 'Coke User',
  locked: false,
  phone: '111-111-1111',
  state: 'NY',
  user_type: 'SYSTEM_ADMIN',
  zip: '11111',
  domain: 'SYSTEM'
};

export const MockUserCompaniesJson: Array<CompanyJson> = [{
  deleted: false,
  deleted_date: null,
  has_iaas: true,
  has_vcc: false,
  name: 'MyCorp',
  updated_date: 1494608461964,
  uuid: '000003'
}, {
  deleted: false,
  deleted_date: null,
  has_iaas: true,
  has_vcc: true,
  name: 'Coke',
  updated_date: 1494608461964,
  uuid: '000002'
}];

export const MockUserCompaniesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockUserCompaniesJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
