import { AxiosResponse } from 'axios';
import { VdcJson } from '../__json__';
import { PerfCounterJson, PerfSamplesSeriesJson } from '../../mixins/perf-samples/__json__/perf-samples';
import { PerfCounter } from '../../mixins/perf-samples/perf-counter';

export const MockVdcJson: VdcJson = {
  enabled: true,
  vcenter_moref: 'resgroup-4750',
  vcenter_name: 'VC',
  description: '',
  vcloud_href: 'https://dev-vcd02.iland.dev/cloud/#/OrgVdcVAppsList?org',
  vcenter_instance_uuid: 'c0da5511-3903-4d21-ad22-fe0c4c608d06',
  vcenter_href: 'https://dev-vcd02.iland.dev/api/admin/extension/vimServer/c0da5511-3903-4d21-ad22-fe0c4c608d06',
  allocation_model: 'paygo',
  reserved_cpu: 0,
  reserved_mem: 0,
  disk_limit: 2810675,
  alloc_cpu: 0,
  alloc_mem: 0,
  max_hardware_version: 'vmx-11',
  network_quota: 1024,
  used_network_count: 8,
  location_id: 'dev-vcd01.iland.dev',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  name: 'PAYG',
  deleted: false,
  deleted_date: null,
  updated_date: 1499693404432
};

export const MockSecondVdcJson: VdcJson = {
  enabled: true,
  vcenter_moref: 'resgroup-4750',
  vcenter_name: 'VC',
  description: 'second vDc for testing',
  vcloud_href: 'https://dev-vcd01.iland.dev/cloud/#/OrgVdcVAppsList?org',
  vcenter_instance_uuid: 'q8ed9976-3903-4d21-ad22-fe0c4c608d06',
  vcenter_href: 'https://dev-vcd02.iland.dev/api/admin/extension/vimServer/q8ed9976-3903-4d21-ad22-fe0c4c608d06',
  allocation_model: 'paygo',
  reserved_cpu: 0,
  reserved_mem: 0,
  disk_limit: 2810675,
  alloc_cpu: 0,
  alloc_mem: 0,
  max_hardware_version: 'vmx-11',
  network_quota: 1024,
  used_network_count: 8,
  location_id: 'dev-vcd01.iland.dev',
  org_uuid: 'dev-vcd01.iland.dev:urn:vcloud:org:69e9c2b7-ee9f-4a3e-80f0-8ffc66aac147',
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:e51cc45c-8890-r331-7e7e-2934lk235ie5',
  name: 'PAYG',
  deleted: false,
  deleted_date: null,
  updated_date: 1499693404654
};

export const MockVdcResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVdcJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVdcPerfSamplesSeriesJson: PerfSamplesSeriesJson = {
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdc:f83bb52c-271d-411f-9d0d-1307cb192cb2',
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

export const MockVdcPerfSamplesSeriesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVdcPerfSamplesSeriesJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVdcPerfCountersJson: Array<PerfCounterJson> = [
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

export const MockVdcPerfCountersResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVdcPerfCountersJson.map((json) => new PerfCounter(json)),
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
