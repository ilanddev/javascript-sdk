import { VmJson } from '../../../model/json/vm';
import { AxiosResponse } from 'axios';
import { MockVmJson } from '../vm/vm';

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
