import { AxiosResponse } from 'axios';
import { MockVappNetworkJson } from '../../vapp-network/__mocks__/vapp-network';
import { VappNetworkJson } from '../../vapp-network/__json__/vapp-network-json';

export const MockOrgVappNetworksJson: Array<VappNetworkJson> = [MockVappNetworkJson];

export const MockOrgVappNetworksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockOrgVappNetworksJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
