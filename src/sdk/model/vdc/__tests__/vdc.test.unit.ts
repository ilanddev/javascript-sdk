import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { Vdc } from '../vdc';
import { MockSecondVdcJson, MockVdcJson, MockVdcPerfSamplesSeriesJson } from '../__mocks__/vdc';
import { MockVdcVmsJson } from '../__mocks__/vdc-vms';
import { MockVdcVappsJson } from '../__mocks__/vdc-vapps';
import {
  AddVappVmRequestJson,
  BuildVmRequestJson,
  VmDiskRequestJson,
  VmVnicRequestJson
} from '../../vm/__json__/vm-json';
import {
  AddVappNetworkInitializationParamsJson,
  AddVappRequestJson,
  BuildVappRequestJson
} from '../../vapp/__json__/vapp-json';
import {
  MockBooleanMetadataJson,
  MockDatetimeMetadataJson,
  MockMetadataJson,
  MockNumberMetadataJson,
  MockStringMetadataJson
} from '../../common/metadata/__mocks__/metadata';
import { Metadata } from '../../common/metadata/metadata';
import { MetadataType } from '../../common/metadata/__json__/metadata-type';
import { PerfCounter } from '../../mixins/perf-samples/perf-counter';
import { MockVappPerfCountersJson } from '../../vapp/__mocks__/vapp';
import { PerfSamplesRequest } from '../../mixins/perf-samples/perf-samples-request';
import { PerfSamplesRequestJson } from '../../mixins/perf-samples/__json__/perf-samples-request';
import { PerfSamplesSeries } from '../../mixins/perf-samples/perf-samples-series';
import { PerfSample } from '../../mixins/perf-samples/perf-sample';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get vDC', async() => {
  const uuid = 'test-vdc-uuid';
  return Vdc.getVdc(uuid).then(function(vdc) {
    expect(Iland.getHttp().get).lastCalledWith(`/vdcs/${uuid}`);
    expect(vdc.entityType).toBe('IAAS_VDC');
  });
});

test('Properly submits request to get vDCs child vApps', async() => {
  const vdc = new Vdc(MockVdcJson);
  return vdc.getVapps().then(function(vapps) {
    expect(Iland.getHttp().get).lastCalledWith(`/vdcs/${vdc.uuid}/vapps`);
    expect(vapps.length).toBe(MockVdcVappsJson.length);
    let idx = 0;
    for (const vapp of vapps) {
      expect(vapp.json).toEqual(MockVdcVappsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get vDCs child VMs', async() => {
  const vdc = new Vdc(MockVdcJson);
  return vdc.getVms().then(function(vms) {
    expect(Iland.getHttp().get).lastCalledWith(`/vdcs/${vdc.uuid}/vms`);
    expect(vms.length).toBe(MockVdcVmsJson.length);
    let idx = 0;
    for (const vm of vms) {
      expect(vm.json).toEqual(MockVdcVmsJson[idx]);
      idx++;
    }
  });
});

test('Build vApp in vDC', async() => {
  const vnic: VmVnicRequestJson = {
    primary_vnic: true,
    ip_address: '',
    ip_assignment: 'POOL',
    network_uuid: 'dev-vcd01.iland.dev:urn:vcloud:network:332a2980-ee2c-4962-b782-d93ec2b8cc7e',
    network_adapter_type: 'E1000'
  };
  const disk: VmDiskRequestJson = {
    name: 'Hard disk 1',
    disk_type: 'LSI_LOGIC',
    size: 8
  };
  const vmJson: BuildVmRequestJson = {
    name: 'vm name',
    description: 'vm desc',
    vm_template_uuid: null,
    vapp_template_uuid: null,
    disks: [disk],
    ram: 2000,
    number_of_cpus: 1,
    cpu_cores_per_socket: 1,
    hardware_version: 11,
    operating_system_version: 'sles10_64Guest',
    boot_delay: 0,
    expose_cpu_virtualization: false,
    media_uuid: null,
    computer_name: 'computerName',
    storage_profile_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vdcstorageProfile:72de9291-5a68-40db-8324-f90495a0088f',
    vnics: [vnic]
  };
  const json: BuildVappRequestJson = {
    name: 'name',
    description: '',
    vms: [vmJson]
  };
  const vdc = new Vdc(MockVdcJson);
  return vdc.buildVapp(json).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vdcs/${vdc.uuid}/actions/build-vapp`, json);
    expect(task.operation).toBe('build vapp');
  });
});

test('Add vApp in vDC', async() => {
  const vm: AddVappVmRequestJson = {
    name: 'test vm',
    description: '',
    ip_addressing_mode: 'POOL',
    network_uuid: 'network-uuid909',
    vapp_template_uuid: 'vappTemplateUuid909',
    vm_template_uuid: 'vmTemplateUuid909',
    ip_address: '',
    storage_profile_uuid: 'storageProfileUuid909'
  };
  const vappNetwork: AddVappNetworkInitializationParamsJson = {
    name: 'test network',
    description: '',
    deployed: true,
    backward_compatibility_mode: true,
    retain_net_info_across_deployments: true,
    parent_network_uuid: '',
    gateway_address: '',
    network_mask: '255.255.255.255',
    primary_dns: '',
    secondary_dns: '',
    dns_suffix: '',
    ip_ranges: []
  };
  const vapp: AddVappRequestJson = {
    name: 'test vapp',
    description: 'test desc',
    vapp_template_uuid: 'vappTemplateUuid',
    vms: [vm],
    fence_mode: 'ISOLATED',
    vapp_network: vappNetwork
  };
  const vdc = new Vdc(MockVdcJson);
  return vdc.addVapp(vapp).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vdcs/${vdc.uuid}/actions/add-vapp-from-template`, vapp);
    expect(task.operation).toBe('add vapp');
  });
});

test('Update vDC metadata', async() => {
  const vdc = new Vdc(MockVdcJson);
  const metaData = MockMetadataJson as Array<Metadata<MetadataType>>;
  return vdc.updateMetadata(metaData).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vdcs/${vdc.uuid}/metadata`, metaData);
    expect(task.operation).toBe('update metadata');
  });
});

test('Delete vDC metadata', async() => {
  const vdc = new Vdc(MockVdcJson);
  const metadataKey = 'metadata-key';
  return vdc.deleteMetadata(metadataKey).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vdcs/${vdc.uuid}/metadata/${metadataKey}`);
    expect(task.operation).toBe('delete metadata');
  });
});

test('Get vDC metadata', async() => {
  const vdc = new Vdc(MockVdcJson);
  return vdc.getMetadata().then(metadata => {
    expect(Iland.getHttp().get).lastCalledWith(`/vdcs/${vdc.uuid}/metadata`);
    expect(metadata.length).toEqual(4);
    expect(metadata[0].json).toEqual(Object.assign({}, MockStringMetadataJson));
    expect(metadata[1].json).toEqual(Object.assign({}, MockNumberMetadataJson));
    expect(metadata[2].json).toEqual(Object.assign({}, MockBooleanMetadataJson));
    expect(metadata[3].json).toEqual(Object.assign({}, MockDatetimeMetadataJson));
  });
});

test('Throw error if metadata type is not assignable for vDC', async() => {
  const vdc = new Vdc(MockSecondVdcJson);
  return vdc.getMetadata().catch(error => {
    expect(error).toEqual(new Error(`Metadata with type fake is unknown.`));
  });
});

test('Properly submits request to get vDC perf counters', async() => {
  const vdc = new Vdc(MockVdcJson);
  return vdc.getPerfCounters().then(async(perfCounters) => {
    expect(Iland.getHttp().get).lastCalledWith(`${vdc.apiPrefix}/${vdc.uuid}/performance-counters`);

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

test('Properly submits request to get vDC perf samples', async() => {
  const vdc = new Vdc(MockVdcJson);
  const request = new PerfSamplesRequest({
    counter: {group: 'cpu', name: 'usage', type: 'average'},
    start: 1,
    end: 2,
    interval: 3,
    limit: 4
  } as PerfSamplesRequestJson);
  return vdc.getPerfSamples(request).then(async(perfSamples) => {
    expect(Iland.getHttp().get).lastCalledWith(
        `${vdc.apiPrefix}/${vdc.uuid}/performance/` +
        `${request.counter.group}::${request.counter.name}::${request.counter.type}`,
        {params: {start: 1, end: 2, interval: 3, limit: 4}}
    );

    expect(perfSamples).toBeDefined();
    expect(perfSamples instanceof PerfSamplesSeries).toBeTruthy();
    expect(perfSamples.uuid).toBe(MockVdcPerfSamplesSeriesJson.uuid);
    expect(perfSamples.summary).toBe(MockVdcPerfSamplesSeriesJson.summary);
    expect(perfSamples.interval).toBe(MockVdcPerfSamplesSeriesJson.interval);
    expect(perfSamples.group).toBe(MockVdcPerfSamplesSeriesJson.group);
    expect(perfSamples.name).toBe(MockVdcPerfSamplesSeriesJson.name);
    expect(perfSamples.type).toBe(MockVdcPerfSamplesSeriesJson.type);
    expect(perfSamples.unit).toBe(MockVdcPerfSamplesSeriesJson.unit);
    expect(perfSamples.counter).toBeDefined();
    expect(perfSamples.counter instanceof PerfCounter).toBeTruthy();
    expect(perfSamples.samples).toBeDefined();
    expect(perfSamples.samples.length).toBeGreaterThan(0);
    expect(perfSamples.json).toEqual(MockVdcPerfSamplesSeriesJson);
    expect(perfSamples.toString().length).toBeGreaterThan(0);

    const perfSample = perfSamples.samples[0];
    expect(perfSample instanceof PerfSample).toBeTruthy();
    expect(perfSample.date instanceof Date).toBeTruthy();
    expect(perfSample.timestamp).toBe(MockVdcPerfSamplesSeriesJson.samples[0].timestamp);
    expect(perfSample.value).toBe(MockVdcPerfSamplesSeriesJson.samples[0].value);
    expect(perfSample.json).toEqual(MockVdcPerfSamplesSeriesJson.samples[0]);
    expect(perfSample.toString().length).toBeGreaterThan(0);
  });
});
