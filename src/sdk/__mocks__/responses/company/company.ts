import { AxiosResponse } from 'axios';
import { CompanyJson } from '../../../model/json/company';

export const MockCompanyJson: CompanyJson = {
  deleted: false,
  deleted_date: null,
  has_iaas: true,
  has_vcc: false,
  name: "MyCorp",
  updated_date: 1494608461964,
  uuid: "000003"
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
