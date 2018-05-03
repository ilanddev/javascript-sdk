import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { Org } from '../org';
import { MockOrgVappsJson } from '../__mocks__/org-vapps';
import { MockOrgJson } from '../__mocks__/org';
import { MockOrgVmsJson } from '../__mocks__/org-vms';
import { MockOrgVdcsJson } from '../__mocks__/org-vdcs';
import { MockOrgEdgesJson } from '../__mocks__/edges';
import { MockOrgInternalNetworksJson } from '../__mocks__/internal-networks';
import { MockOrgVappNetworksJson } from '../__mocks__/org-vapp-networks';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get Org', async() => {
  const uuid = 'test-org-uuid';
  return Org.getOrg(uuid).then(function(org) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${uuid}`);
    expect(org.entityType).toBe('ORG');
  });
});

test('Properly submits request to get Orgs child vDCs', async() => {
  const org = new Org(MockOrgJson);
  return org.getVdcs().then(function(vdcs) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vdcs`);
    expect(vdcs.length).toBe(MockOrgVdcsJson.length);
    let idx = 0;
    for (const vdc of vdcs) {
      expect(vdc.json).toEqual(MockOrgVdcsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child vApps', async() => {
  const org = new Org(MockOrgJson);
  return org.getVapps().then(function(vapps) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vapps`);
    expect(vapps.length).toBe(MockOrgVappsJson.length);
    let idx = 0;
    for (const vapp of vapps) {
      expect(vapp.json).toEqual(MockOrgVappsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child VMs', async() => {
  const org = new Org(MockOrgJson);
  return org.getVms().then(function(vms) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vms`);
    expect(vms.length).toBe(MockOrgVmsJson.length);
    let idx = 0;
    for (const vm of vms) {
      expect(vm.json).toEqual(MockOrgVmsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child edges', async() => {
  const org = new Org(MockOrgJson);
  return org.getEdges().then(function(edges) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/edges`);
    expect(edges.length).toBe(MockOrgEdgesJson.length);
    let idx = 0;
    for (const edge of edges) {
      expect(edge.json).toEqual(MockOrgEdgesJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child internal networks', async() => {
  const org = new Org(MockOrgJson);
  return org.getInternalNetworks().then(function(nets) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vdc-networks`);
    expect(nets.length).toBe(MockOrgInternalNetworksJson.length);
    let idx = 0;
    for (const net of nets) {
      expect(net.json).toEqual(MockOrgInternalNetworksJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child vapp networks', async() => {
  const org = new Org(MockOrgJson);
  return org.getVappNetworks().then(function(nets) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vapp-networks`);
    expect(nets.length).toBe(MockOrgVappNetworksJson.length);
    let idx = 0;
    for (const net of nets) {
      expect(net.json).toEqual(MockOrgVappNetworksJson[idx]);
      idx++;
    }
  });
});
