import { AxiosResponse } from 'axios';
import { MockVappNetworkJson } from '../../vapp-network/__mocks__/vapp-network';
import { VappNetworkJson } from '../../vapp-network/__json__/vapp-network-json';

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
