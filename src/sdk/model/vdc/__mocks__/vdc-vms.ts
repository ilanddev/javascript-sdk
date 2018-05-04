import { AxiosResponse } from 'axios';
import { MockVmJson } from '../../vm/__mocks__/vm';
import { VmJson } from '../../vm/__json__/vm-json';

export const MockVdcVmsJson: Array<VmJson> = [MockVmJson];

export const MockVdcVmsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVdcVmsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
