import { VmJson } from '../../../model/json/vm';
import { AxiosResponse } from 'axios';
import { MockVmJson } from '../vm/vm';

export const MockVappVmsJson: Array<VmJson> = [MockVmJson];

export const MockVappVmsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVappVmsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
