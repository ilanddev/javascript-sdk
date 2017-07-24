import { AxiosResponse } from 'axios';
import { VappNetworkJson } from '../../../model/json/vapp-network';
import { MockVappNetworkJson } from '../vapp-network/vapp-network';

export const MockVappNetworksJson: Array<VappNetworkJson> = [MockVappNetworkJson];

export const MockVappVappNetworksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVappNetworksJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
