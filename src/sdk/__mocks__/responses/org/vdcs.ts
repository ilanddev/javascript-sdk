import { AxiosResponse } from 'axios';
import { MockVdcJson } from '../vdc/vdc';
import { VdcJson } from '../../../model/json/vdc';

export const MockOrgVdcsJson: Array<VdcJson> = [MockVdcJson];

export const MockOrgVdcsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockOrgVdcsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
