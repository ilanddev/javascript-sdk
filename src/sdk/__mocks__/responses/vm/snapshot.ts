import { AxiosResponse } from 'axios';
import { SnapshotJson } from '../../../model/json/snapshot';

export const MockSnapshotJson: SnapshotJson = {
  creation_date: (new Date()).getTime(),
  size: 1000,
  is_powered_on: false
};

export const MockVmSnapshotResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockSnapshotJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
