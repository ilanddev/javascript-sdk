import { AxiosResponse } from 'axios';
import { MockVmJson } from '../../vm/__mocks__/vm';
import { VmJson } from '../../vm/__json__/vm-json';

export const MockVappVmsJson: Array<VmJson> = [MockVmJson];

export const MockVappVmsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockVappVmsJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
