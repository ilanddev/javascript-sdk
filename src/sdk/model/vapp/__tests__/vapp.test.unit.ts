import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { Vapp } from '../vapp';
import { VappJson } from '../__json__/vapp-json';
import { MockVappJson, MockVappPerfCountersJson, MockVappPerfSamplesSeriesJson } from '../__mocks__/vapp';
import { MockVappVmsJson } from '../__mocks__/vapp-vms';
import { MockVappNetworksJson } from '../__mocks__/vapp-networks';
import { PerfSamplesRequest } from '../../mixins/perf-samples/perf-samples-request';
import { PerfSamplesRequestJson } from '../../mixins/perf-samples/__json__/perf-samples-request';
import { PerfSamplesSeries } from '../../mixins/perf-samples/perf-samples-series';
import { PerfCounter } from '../../mixins/perf-samples/perf-counter';
import { PerfSample } from '../../mixins/perf-samples/perf-sample';
import { MockMetadataJson } from '../../common/metadata/__mocks__/metadata';
import { Metadata } from '../../common/metadata/metadata';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Parses power status correctly', () => {
  const apiVapp: VappJson = {
    deployed: true,
    status: 'POWERED_OFF',
    storage_profiles: ['dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:a3ee2076-2060-46e8-bde6-337b6da166be'],
    runtime_lease_in_seconds: 0,
    storage_lease_in_seconds: 0,
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
  const vapp = new Vapp(apiVapp);
  expect(vapp.powerStatus).toBe('PARTIALLY_POWERED_OFF');
  apiVapp.deployed = false;
  expect(vapp.powerStatus).toBe('POWERED_OFF');
  apiVapp.status = 'POWERED_ON';
  expect(vapp.powerStatus).toBe('POWERED_ON');
  apiVapp.status = 'WAITING_FOR_INPUT';
  expect(vapp.powerStatus).toBe('WAITING_FOR_INPUT');
  apiVapp.status = 'UNRESOLVED';
  expect(vapp.powerStatus).toBe('UNRESOLVED');
  apiVapp.status = 'UNRECOGNIZED';
  expect(vapp.powerStatus).toBe('UNRECOGNIZED');
  apiVapp.status = 'FAILED_CREATION';
  expect(vapp.powerStatus).toBe('FAILED_CREATION');
  apiVapp.status = 'UNKNOWN';
  expect(vapp.powerStatus).toBe('UNKNOWN');
  apiVapp.status = 'MIXED';
  expect(vapp.powerStatus).toBe('MIXED');
  apiVapp.status = 'SUSPENDED';
  expect(vapp.powerStatus).toBe('SUSPENDED');
});

test('Properly submits request to get vApps child VMs', async() => {
  const vapp = new Vapp(MockVappJson);
  return vapp.getVms().then(function(vms) {
    expect(Iland.getHttp().get).lastCalledWith(`/vapps/${vapp.uuid}/vms`);
    expect(vms.length).toBe(MockVappVmsJson.length);
    let idx = 0;
    for (const vm of vms) {
      expect(vm.json).toEqual(MockVappVmsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get vApps child vApp Networks', async() => {
  const vapp = new Vapp(MockVappJson);
  return vapp.getVappNetworks().then(function(networks) {
    expect(Iland.getHttp().get).lastCalledWith(`/vapps/${vapp.uuid}/networks`);
    expect(networks.length).toBe(MockVappVmsJson.length);
    let idx = 0;
    for (const net of networks) {
      expect(net.json).toEqual(MockVappNetworksJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get vApp perf counters', async() => {
  const vapp = new Vapp(MockVappJson);
  return vapp.getPerfCounters().then(async(perfCounters) => {
    expect(Iland.getHttp().get).lastCalledWith(`${vapp.apiPrefix}/${vapp.uuid}/performance-counters`);

    expect(perfCounters).toBeDefined();
    expect(perfCounters.length).toBeGreaterThan(0);
    expect(perfCounters[0] instanceof PerfCounter).toBeTruthy();
    expect(perfCounters[0].name).toBe(MockVappPerfCountersJson[0].name);
    expect(perfCounters[0].group).toBe(MockVappPerfCountersJson[0].group);
    expect(perfCounters[0].type).toBe(MockVappPerfCountersJson[0].type);
    expect(perfCounters[0].json).toEqual(MockVappPerfCountersJson[0]);
    expect(perfCounters[0].toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to get vApps perf samples', async() => {
  const vapp = new Vapp(MockVappJson);
  const request = new PerfSamplesRequest({
    counter: { group: 'cpu', name: 'usage', type: 'average' },
    start: 1,
    end: 2,
    interval: 3,
    limit: 4
  } as PerfSamplesRequestJson);
  return vapp.getPerfSamples(request).then(async(perfSamples) => {
    expect(Iland.getHttp().get).lastCalledWith(
      `${vapp.apiPrefix}/${vapp.uuid}/performance/` +
      `${request.counter.group}::${request.counter.name}::${request.counter.type}`,
      { params: { start: 1, end: 2, interval: 3, limit: 4 } }
    );

    expect(perfSamples).toBeDefined();
    expect(perfSamples instanceof PerfSamplesSeries).toBeTruthy();
    expect(perfSamples.uuid).toBe(MockVappPerfSamplesSeriesJson.uuid);
    expect(perfSamples.summary).toBe(MockVappPerfSamplesSeriesJson.summary);
    expect(perfSamples.interval).toBe(MockVappPerfSamplesSeriesJson.interval);
    expect(perfSamples.group).toBe(MockVappPerfSamplesSeriesJson.group);
    expect(perfSamples.name).toBe(MockVappPerfSamplesSeriesJson.name);
    expect(perfSamples.type).toBe(MockVappPerfSamplesSeriesJson.type);
    expect(perfSamples.unit).toBe(MockVappPerfSamplesSeriesJson.unit);
    expect(perfSamples.counter).toBeDefined();
    expect(perfSamples.counter instanceof PerfCounter).toBeTruthy();
    expect(perfSamples.samples).toBeDefined();
    expect(perfSamples.samples.length).toBeGreaterThan(0);
    expect(perfSamples.json).toEqual(MockVappPerfSamplesSeriesJson);
    expect(perfSamples.toString().length).toBeGreaterThan(0);

    const perfSample = perfSamples.samples[0];
    expect(perfSample instanceof PerfSample).toBeTruthy();
    expect(perfSample.date instanceof Date).toBeTruthy();
    expect(perfSample.timestamp).toBe(MockVappPerfSamplesSeriesJson.samples[0].timestamp);
    expect(perfSample.value).toBe(MockVappPerfSamplesSeriesJson.samples[0].value);
    expect(perfSample.json).toEqual(MockVappPerfSamplesSeriesJson.samples[0]);
    expect(perfSample.toString().length).toBeGreaterThan(0);
  });
});

test('Properly handles request for retrieving a vApps metadata', async() => {
  const vapp = new Vapp(MockVappJson);
  return vapp.getMetadata().then(function(metadata) {
    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(4);
    expect(metadata[0].key).toBe(MockMetadataJson[0].key);
    expect(metadata[0].access).toBe(MockMetadataJson[0].access);
    expect(metadata[0].type).toBe(MockMetadataJson[0].type);
    expect(metadata[0].value).toBe(MockMetadataJson[0].value);
    expect(metadata[0].json).toEqual(MockMetadataJson[0]);
    expect(metadata[0].toString().length).toBeGreaterThan(0);

    expect(metadata[1].key).toBe(MockMetadataJson[1].key);
    expect(metadata[1].access).toBe(MockMetadataJson[1].access);
    expect(metadata[1].type).toBe(MockMetadataJson[1].type);
    expect(metadata[1].value).toBe(MockMetadataJson[1].value);
    expect(metadata[1].json).toEqual(MockMetadataJson[1]);
    expect(metadata[1].toString().length).toBeGreaterThan(0);

    expect(metadata[2].key).toBe(MockMetadataJson[2].key);
    expect(metadata[2].access).toBe(MockMetadataJson[2].access);
    expect(metadata[2].type).toBe(MockMetadataJson[2].type);
    expect(metadata[2].value).toBe(MockMetadataJson[2].value);
    expect(metadata[2].json).toEqual(MockMetadataJson[2]);
    expect(metadata[2].toString().length).toBeGreaterThan(0);

    expect(metadata[3].key).toBe(MockMetadataJson[3].key);
    expect(metadata[3].access).toBe(MockMetadataJson[3].access);
    expect(metadata[3].type).toBe(MockMetadataJson[3].type);
    expect(metadata[3].value).toBe(MockMetadataJson[3].value);
    expect(metadata[3].json).toEqual(MockMetadataJson[3]);
    expect(metadata[3].toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request for updating vApps metadata', async() => {
  const vapp = new Vapp(MockVappJson);
  const metadata = MockMetadataJson.map(m => {
    return new Metadata(m);
  });
  return vapp.updateMetadata(metadata).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vapps/${vapp.uuid}/metadata`, MockMetadataJson);
    expect(task.operation).toBe('update metadata');
  });
});

test('Properly submits request for deleting a vApps metadata entry', async() => {
  const vapp = new Vapp(MockVappJson);
  const metadataKey = 'metadata-key';
  return vapp.deleteMetadata(metadataKey).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vapps/${vapp.uuid}/metadata/${metadataKey}`);
    expect(task.operation).toBe('delete metadata');
  });
});
