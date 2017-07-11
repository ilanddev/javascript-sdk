import { VmJson } from '../../../model/json/vm';
import { AxiosResponse } from 'axios';
import { MockVmJson } from '../vm/vm';

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
