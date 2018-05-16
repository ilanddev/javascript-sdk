import { AxiosResponse } from 'axios';
import { VappJson } from '../__json__/vapp-json';
import { PerfCounterJson, PerfSamplesSeriesJson } from '../../mixins/perf-samples/__json__/perf-samples';
import { PerfCounter } from '../../mixins/perf-samples/perf-counter';

export const MockVappJson: VappJson = {
  deployed: true,
  status: 'POWERED_OFF',
  storage_profiles: ['dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:a3ee2076-2060-46e8-bde6-337b6da166be'],
  runtime_lease: 0,
  storage_lease: 0,
  runtime_expire: null,
  storage_expire: null,
  vdc_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  location_id: 'dev-vcd01.iland.dev',
  description: '',
  vcloud_href: 'https://dev-vcd02.iland.dev/api/vApp/vapp-6b0151e7-f018-4366-9da5-b2ca77fc6573',
  created_date: 1481051455993,
  is_expired: false,
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapp:6b0151e7-f018-4366-9da5-b2ca77fc6573',
  name: 'Auth vApp',
  deleted: false,
  deleted_date: null,
  updated_date: 1493992836044
};

export const MockVappResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVappJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVappPerfSamplesSeriesJson: PerfSamplesSeriesJson = {
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vapp:6b0151e7-f018-4366-9da5-b2ca77fc6573',
  summary: '',
  interval: 20,
  group: 'cpu',
  name: 'usage',
  type: 'average',
  unit: '',
  samples: [
    { timestamp: 1525259560000, value: 0 },
    { timestamp: 1525259580000, value: 0 },
    { timestamp: 1525259600000, value: 0 },
    { timestamp: 1525259620000, value: 0 },
    { timestamp: 1525259640000, value: 0 },
    { timestamp: 1525259660000, value: 0 },
    { timestamp: 1525259680000, value: 0 },
    { timestamp: 1525259700000, value: 0 },
    { timestamp: 1525259720000, value: 0 }
  ]
};

export const MockVappPerfSamplesSeriesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVappPerfSamplesSeriesJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVappPerfCountersJson: Array<PerfCounterJson> = [
  { group: 'cpu', name: 'usage', type: 'average' },
  { group: 'cpu', name: 'usagemhz', type: 'average' },
  { group: 'cpu', name: 'ready', type: 'summation' },
  { group: 'mem', name: 'active', type: 'average' },
  { group: 'mem', name: 'consumed', type: 'average' },
  { group: 'mem', name: 'vmmemctl', type: 'average' },
  { group: 'mem', name: 'swapped', type: 'average' },
  { group: 'mem', name: 'overhead', type: 'average' },
  { group: 'net', name: 'received', type: 'average' },
  { group: 'net', name: 'transmitted', type: 'average' },
  { group: 'net', name: 'usage', type: 'average' },
  { group: 'disk', name: 'read', type: 'average' },
  { group: 'disk', name: 'write', type: 'average' },
  { group: 'disk', name: 'maxTotalLatency', type: 'latest' },
  { group: 'disk', name: 'usage', type: 'average' },
  { group: 'disk', name: 'provisioned', type: 'latest' },
  { group: 'disk', name: 'used', type: 'latest' },
  { group: 'disk', name: 'numberWriteAveraged', type: 'average' },
  { group: 'disk', name: 'numberReadAveraged', type: 'average' },
  { group: 'disk', name: 'numberIOPsAveraged', type: 'average' },
  { group: 'cpu', name: 'readyPercent', type: 'average' }
];

export const MockVappPerfCountersResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVappPerfCountersJson.map((json) => new PerfCounter(json)),
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
