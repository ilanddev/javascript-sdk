import { AxiosResponse } from 'axios';
import { ApiVirtualDisk } from '../../../model/api-spec/api-virtual-disk';

export const MockVirtualDisk1: ApiVirtualDisk = {
  name: 'test disk 1',
  size: 500,
  type: 'LSI_LOGIC'
};

export const MockVirtualDisk2: ApiVirtualDisk = {
  name: 'test disk 2',
  size: 1000,
  type: 'BUS_LOGIC'
};

export const MockVirtualDisks: Array<ApiVirtualDisk> = [MockVirtualDisk1, MockVirtualDisk2];

export const MockVmVirtualDisksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVirtualDisks,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
