import { VmJson } from '../../../model/json/vm';
import { AxiosResponse } from 'axios';
import { MockVmJson } from '../vm/vm';

export const MockVdcVappsJson: Array<VmJson> = [MockVmJson];

export const MockVdcVappsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVdcVappsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
