import { CheckpointJson } from '../__json__/checkpoint-json';
import { AxiosResponse } from 'axios';

export const MockEdgeNatCheckpointsJson: Array<CheckpointJson> = [
  {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
    'uuid': '0ea3ac90-d471-11e7-b86f-79bbfaab00e8',
    'time': 1511896770009,
    'export': null
  }, {
    'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
    'uuid': '5dd80a80-caf4-11e7-8127-550561d80949',
    'time': 1510853655336,
    'export': null
  }
];

export const MockEdgeNatCheckpointsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockEdgeNatCheckpointsJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockEdgeNatCheckpointResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeNatCheckpointsJson[0],
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
