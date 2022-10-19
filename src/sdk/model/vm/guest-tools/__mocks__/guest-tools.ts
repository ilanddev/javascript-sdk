import { AxiosResponse } from 'axios';
import { GuestToolsJson, ToolsRunningStatus, ToolsVersionStatus } from '../__json__/guest-tools-json';

export const MockVmGuestToolsJson: GuestToolsJson = {
  status: ToolsVersionStatus.UNMANAGED,
  running_status: ToolsRunningStatus.NOT_RUNNING,
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
