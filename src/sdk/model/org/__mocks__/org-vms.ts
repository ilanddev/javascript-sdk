import { AxiosResponse } from 'axios';
import { MockVmJson } from '../../vm/__mocks__/vm';
import { VmJson } from '../../vm/__json__/vm-json';

export const MockOrgVmsJson: Array<VmJson> = [MockVmJson];

export const MockOrgVmsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockOrgVmsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
