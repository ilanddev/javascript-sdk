import { VmSummaryJson } from '../__json__';
import { AxiosResponse } from 'axios';

export const MockVmSummaryJson: VmSummaryJson = {
  reserved_cpu: 4,
  reserved_mem: 1024,
  consumed_cpu: 2,
  consumed_mem: 512,
  consumed_disk: 512,
  provisioned_disk: 1024,
  configured_disk: 2048
};

export const MockVmSummaryResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmSummaryJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
