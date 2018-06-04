import { CapabilitiesJson } from '../__json__';
import { AxiosResponse } from 'axios';

export const MockVmCapabilitiesJson: CapabilitiesJson = {
  cpu_hot_add_enabled: true,
  memory_hot_add_enabled: true
};

export const MockVmCapabilitiesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmCapabilitiesJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
