import { AxiosResponse } from 'axios';
import { VappJson } from '../../../model/json/vapp';
import { MockVappJson } from '../vapp/vapp';

export const MockOrgVappsJson: Array<VappJson> = [MockVappJson];

export const MockOrgVappsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockOrgVappsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
