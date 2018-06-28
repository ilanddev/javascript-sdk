import { AxiosResponse } from 'axios';
import { MockVmJson } from '../../vm/__mocks__/vm';
import { VmJson } from '../../vm/__json__/vm-json';

export const MockVdcVappsJson: Array<VmJson> = [MockVmJson];

export const MockVdcVappsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockVdcVappsJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
