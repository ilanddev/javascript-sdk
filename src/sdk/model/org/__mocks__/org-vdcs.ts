import { AxiosResponse } from 'axios';
import { MockVdcJson } from '../../vdc/__mocks__/vdc';
import { VdcJson } from '../../vdc/__json__/vdc-json';

export const MockOrgVdcsJson: Array<VdcJson> = [MockVdcJson];

export const MockOrgVdcsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockOrgVdcsJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
