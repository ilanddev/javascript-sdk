import { AxiosResponse } from 'axios';
import { MockVappJson } from '../../vapp/__mocks__/vapp';
import { VappJson } from '../../vapp/__json__/vapp-json';

export const MockOrgVappsJson: Array<VappJson> = [MockVappJson];

export const MockOrgVappsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockOrgVappsJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
