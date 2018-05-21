import { AxiosResponse } from 'axios';
import { InternalNetworkJson } from '../../internal-network/__json__/internal-network-json';
import { MockInternalNetworkJson } from '../../internal-network/__mocks__/internal-network';

export const MockOrgInternalNetworksJson: Array<InternalNetworkJson> = [MockInternalNetworkJson];

export const MockOrgInternalNetworksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockOrgInternalNetworksJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
