import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { Vdc } from '../vdc';
import { MockVdcJson } from '../../__mocks__/responses/vdc/vdc';
import { MockVdcVmsJson } from '../../__mocks__/responses/vdc/vms';
import { MockVdcVappsJson } from '../../__mocks__/responses/vdc/vapps';

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
    expect(Iland.getHttp().get).lastCalledWith(`/vdc/${uuid}`);
    expect(vdc.entityType).toBe('VDC');
  });
});

test('Properly submits request to get vDCs child vApps', async() => {
  const vdc = new Vdc(MockVdcJson);
  return vdc.getVapps().then(function(vapps) {
    expect(Iland.getHttp().get).lastCalledWith(`/vdc/${vdc.uuid}/vapps`);
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
    expect(Iland.getHttp().get).lastCalledWith(`/vdc/${vdc.uuid}/vms`);
    expect(vms.length).toBe(MockVdcVmsJson.length);
    let idx = 0;
    for (const vm of vms) {
      expect(vm.json).toEqual(MockVdcVmsJson[idx]);
      idx++;
    }
  });
});
