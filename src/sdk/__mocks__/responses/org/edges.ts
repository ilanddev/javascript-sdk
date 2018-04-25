import { AxiosResponse } from 'axios';
import { MockEdgeJson } from '../edge/edge';
import { EdgeJson } from '../../../model/edge/json/edge';

export const MockOrgEdgesJson: Array<EdgeJson> = [MockEdgeJson];

export const MockOrgEdgesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockOrgEdgesJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
