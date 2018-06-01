import { GuestToolsJson } from '../__json__';
import { AxiosResponse } from 'axios';

export const MockVmGuestToolsJson: GuestToolsJson = {
  status: 'fake-status',
  running_status: 'fake-running-status',
  version: 'fake-version'
};

export const MockVmGuestToolsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmGuestToolsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
