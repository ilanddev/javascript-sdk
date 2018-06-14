import { AxiosResponse } from 'axios';
import { SnapshotJson } from '../__json__/snapshot-json';

export const MockSnapshotJson: SnapshotJson = {
  creation_date: (new Date()).getTime(),
  size: 1000,
  powered_on: false
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
