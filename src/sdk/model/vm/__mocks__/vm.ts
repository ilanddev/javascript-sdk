import { AxiosResponse } from 'axios';
import { VmJson } from '../__json__/vm-json';
import { OperatingSystem } from '../__json__/operating-system-type';
import { VmStatus } from '../__json__/vm-status-type';
import { PerfCounterJson, PerfSamplesSeriesJson } from '../../mixins/perf-samples/__json__/perf-samples';
import { PerfCounter } from '../../mixins/perf-samples/perf-counter';

export const MockVmJson: VmJson = {
  name: 'mock VM',
  uuid: 'mock-vm-uuid',
  deleted: false,
  deleted_date: 0,
  updated_date: 0,
  cores_per_socket: 2,
  cpus_number: 2,
  created_date: null,
  deployed: true,
  description: '',
  hardware_version: '',
  inserted_media_name: '',
  location_id: '',
  media_inserted: false,
  memory_size: 500,
  org_uuid: '',
  os: 'ubuntuGuest' as OperatingSystem,
  status: 'POWERED_OFF' as VmStatus,
  storage_profiles: [],
  vapp_uuid: '',
  vcenter_href: '',
  vcenter_instance_uuid: '',
  vcenter_moref: '',
  vcenter_name: '',
  vcloud_href: '',
  vdc_uuid: '',
  vim_datastore_ref: '',
  vm_local_id: ''
};

export const MockVmResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVmPerfSamplesSeriesJson: PerfSamplesSeriesJson = {
  uuid: 'dev-vcd01.iland.dev:urn:vcloud:vm:9a32f0b4-bc1f-4d73-b497-fa70411b0ec6:cpu:usage:average',
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

export const MockVmPerfSamplesSeriesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmPerfSamplesSeriesJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVmPerfCountersJson: Array<PerfCounterJson> = [
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

export const MockVmPerfCountersResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmPerfCountersJson.map((json) => new PerfCounter(json)),
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
