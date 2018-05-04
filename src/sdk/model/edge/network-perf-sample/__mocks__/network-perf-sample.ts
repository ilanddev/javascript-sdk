import { NetworkPerfSampleSerieJson } from '../__json__/network-perf-sample-json';
import { AxiosResponse } from 'axios';

export const MockEdgeStats: NetworkPerfSampleSerieJson = {
  'summary': 'test',
  'interval': 300,
  'group': 'mem',
  'name': 'test',
  'type': 'absolute',
  'unit': 'test',
  'samples': [
    {
      'time': 1524470908,
      'value': 0
    }
  ]
};

export const MockEdgeStatsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeStats,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
