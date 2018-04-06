import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { Vdc } from '../vdc';
import { MockVdcJson } from '../../__mocks__/responses/vdc/vdc';
import { MockVdcVmsJson } from '../../__mocks__/responses/vdc/vms';
import { MockVdcVappsJson } from '../../__mocks__/responses/vdc/vapps';
import { BuildVappRequestJson } from '../json/vapp';
import { BuildVmRequestJson, VmDiskRequestJson, VmVnicRequestJson } from '../json/vm';
import { PerfSamplesRequestJson } from '../json/perf-samples-request';

jest.mock('../../http');

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
    expect(vdc.entityType).toBe('VDC');
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
    expect(Iland.getHttp().post).lastCalledWith(`/vdcs/${vdc.uuid}/build-vapp`, json);
    expect(task.operation).toBe('build vapp');
  });
});

test('Properly submits request to get vDC perf samples', async() => {
  const vdc = new Vdc(MockVdcJson);
  const request = {
    counter: {group: 'cpu', name: 'usagemhz', type: 'average'},
    start: 1,
    end: 2,
    interval: 3,
    limit: 4
  } as PerfSamplesRequestJson;
  return vdc.getPerfSamples(request).then(async(perfSamplesSerie) => {
    expect(Iland.getHttp().get).lastCalledWith(
        `${vdc.apiPrefix}/${vdc.uuid}/performance/` +
        `${request.counter.group}::${request.counter.name}::${request.counter.type}`,
        {params: {start: 1, end: 2, interval: 3, limit: 4}}
    );
  });
});
