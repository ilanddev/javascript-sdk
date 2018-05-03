import { AxiosResponse } from 'axios';
import { MockEdgeJson } from '../../edge/__mocks__/edge';
import { EdgeJson } from '../../edge/__json__/edge-json';

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
