import { AxiosResponse } from 'axios';
import { VirtualDiskJson } from '../../../model/json/virtual-disk';

export const MockVirtualDisk1Json: VirtualDiskJson = {
  name: 'test disk 1',
  size: 500,
  type: 'LSI_LOGIC'
};

export const MockVirtualDisk2Json: VirtualDiskJson = {
  name: 'test disk 2',
  size: 1000,
  type: 'BUS_LOGIC'
};

export const MockVirtualDisksJson: Array<VirtualDiskJson> = [MockVirtualDisk1Json, MockVirtualDisk2Json];

export const MockVmVirtualDisksResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVirtualDisksJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
