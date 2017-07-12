import { AxiosResponse } from 'axios';
import { InternalNetworkJson } from '../../../model/json/internal-network';
import { MockInternalNetworkJson } from '../internal-network/internal-network';

export const MockOrgInternalNetworksJson: Array<InternalNetworkJson> = [MockInternalNetworkJson];

export const MockOrgInternalNetworksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockOrgInternalNetworksJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
