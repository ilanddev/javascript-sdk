import { AxiosResponse } from 'axios';
import { MockVappNetworkJson } from '../vapp-network/vapp-network';
import { VappNetworkJson } from '../../../model/json/vapp-network';

export const MockOrgVappNetworksJson: Array<VappNetworkJson> = [MockVappNetworkJson];

export const MockOrgVappNetworksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockOrgVappNetworksJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
