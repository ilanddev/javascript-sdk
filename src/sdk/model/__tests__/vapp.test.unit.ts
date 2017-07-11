import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { Vapp } from '../vapp';
import { VappJson } from '../json/vapp';
import { MockVappJson } from '../../__mocks__/responses/vapp/vapp';
import { MockVappVmsJson } from '../../__mocks__/responses/vapp/vms';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Parses power status correctly', () => {
  let apiVapp: VappJson = {
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
  let vapp = new Vapp(apiVapp);
  expect(vapp.getPowerStatus()).toBe('PARTIALLY_POWERED_OFF');
  apiVapp.deployed = false;
  expect(vapp.getPowerStatus()).toBe('POWERED_OFF');
  apiVapp.status = 'POWERED_ON';
  expect(vapp.getPowerStatus()).toBe('POWERED_ON');
  apiVapp.status = 'WAITING_FOR_INPUT';
  expect(vapp.getPowerStatus()).toBe('WAITING_FOR_INPUT');
  apiVapp.status = 'UNRESOLVED';
  expect(vapp.getPowerStatus()).toBe('UNRESOLVED');
  apiVapp.status = 'UNRECOGNIZED';
  expect(vapp.getPowerStatus()).toBe('UNRECOGNIZED');
  apiVapp.status = 'FAILED_CREATION';
  expect(vapp.getPowerStatus()).toBe('FAILED_CREATION');
  apiVapp.status = 'UNKNOWN';
  expect(vapp.getPowerStatus()).toBe('UNKNOWN');
  apiVapp.status = 'MIXED';
  expect(vapp.getPowerStatus()).toBe('MIXED');
  apiVapp.status = 'SUSPENDED';
  expect(vapp.getPowerStatus()).toBe('SUSPENDED');
});

test('Properly submits request to get vApps child VMs', async() => {
  let vapp = new Vapp(MockVappJson);
  return vapp.getVms().then(function(vms) {
    expect(Iland.getHttp().get).lastCalledWith(`/vapp/${vapp.getUuid()}/vms`);
    expect(vms.length).toBe(MockVappVmsJson.length);
    let idx = 0;
    for (let vm of vms) {
      expect(vm.getJson()).toEqual(MockVappVmsJson[idx]);
      idx++;
    }
  });
});
