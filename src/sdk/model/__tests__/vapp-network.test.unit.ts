import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { MockVappNetworkJson } from '../../__mocks__/responses/vapp-network/vapp-network';
import { VappNetwork } from '../vapp-network';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get vApp Network', async() => {
  const uuid = MockVappNetworkJson.uuid;
  return VappNetwork.getVappNetwork(uuid).then(function(net) {
    expect(Iland.getHttp().get).lastCalledWith(`/vapp-networks/${uuid}`);
    expect(net.entityType).toBe('VAPP_NETWORK');
    expect(net.orgUuid).toBe(MockVappNetworkJson.org_uuid);
    expect(net.locationId).toBe(MockVappNetworkJson.location_id);
    expect(net.description).toBe(MockVappNetworkJson.description);
    expect(net.vappUuid).toBe(MockVappNetworkJson.vapp_uuid);
    expect(net.fenceMode).toBe(MockVappNetworkJson.fence_mode);
    expect(net.gatewayAddress).toBe(MockVappNetworkJson.gateway);
    expect(net.netmask).toBe(MockVappNetworkJson.netmask);
    expect(net.ipRanges.length).toBe(MockVappNetworkJson.ip_ranges.length);
    let idx = 0;
    for (const ipRange of net.ipRanges) {
      expect(ipRange.startAddress).toBe(MockVappNetworkJson.ip_ranges[idx].start);
      expect(ipRange.endAddress).toBe(MockVappNetworkJson.ip_ranges[idx].end);
      expect(ipRange.json).toEqual(MockVappNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.parentNetworkUuid).toBe(MockVappNetworkJson.parent_network_uuid);
    expect(net.primaryDns).toBe(MockVappNetworkJson.primary_dns);
    expect(net.secondaryDns).toBe(MockVappNetworkJson.secondary_dns);
    expect(net.vdcUuid).toBe(MockVappNetworkJson.vdc_uuid);
    expect(net.inherited).toBe(MockVappNetworkJson.inherited);
    expect(net.routerExternalIp).toBe(MockVappNetworkJson.router_external_ip);
    expect(net.name).toBe(MockVappNetworkJson.name);
    expect(net.uuid).toBe(MockVappNetworkJson.uuid);
    if (net.deletedDate === null) {
      expect(net.deletedDate).toBeNull();
    } else {
      expect(net.deletedDate!.getTime()).toBe(MockVappNetworkJson.deleted_date);
    }
    expect(net.updatedDate.getTime()).toBe(MockVappNetworkJson.updated_date);
    expect(net.deleted).toBe(MockVappNetworkJson.deleted);
    expect(net.dnsSuffix).toBe(MockVappNetworkJson.dns_suffix);
    expect(net.json).toEqual(MockVappNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to refresh vApp Network', async() => {
  const net = new VappNetwork(MockVappNetworkJson);
  return net.refresh().then(function(net) {
    expect(Iland.getHttp().get).lastCalledWith(`/vapp-networks/${MockVappNetworkJson.uuid}`);
    expect(net.entityType).toBe('VAPP_NETWORK');
    expect(net.orgUuid).toBe(MockVappNetworkJson.org_uuid);
    expect(net.locationId).toBe(MockVappNetworkJson.location_id);
    expect(net.description).toBe(MockVappNetworkJson.description);
    expect(net.vappUuid).toBe(MockVappNetworkJson.vapp_uuid);
    expect(net.fenceMode).toBe(MockVappNetworkJson.fence_mode);
    expect(net.gatewayAddress).toBe(MockVappNetworkJson.gateway);
    expect(net.netmask).toBe(MockVappNetworkJson.netmask);
    expect(net.ipRanges.length).toBe(MockVappNetworkJson.ip_ranges.length);
    let idx = 0;
    for (const ipRange of net.ipRanges) {
      expect(ipRange.startAddress).toBe(MockVappNetworkJson.ip_ranges[idx].start);
      expect(ipRange.endAddress).toBe(MockVappNetworkJson.ip_ranges[idx].end);
      expect(ipRange.json).toEqual(MockVappNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.parentNetworkUuid).toBe(MockVappNetworkJson.parent_network_uuid);
    expect(net.primaryDns).toBe(MockVappNetworkJson.primary_dns);
    expect(net.secondaryDns).toBe(MockVappNetworkJson.secondary_dns);
    expect(net.vdcUuid).toBe(MockVappNetworkJson.vdc_uuid);
    expect(net.inherited).toBe(MockVappNetworkJson.inherited);
    expect(net.routerExternalIp).toBe(MockVappNetworkJson.router_external_ip);
    expect(net.name).toBe(MockVappNetworkJson.name);
    expect(net.uuid).toBe(MockVappNetworkJson.uuid);
    if (net.deletedDate === null) {
      expect(net.deletedDate).toBeNull();
    } else {
      expect(net.deletedDate!.getTime()).toBe(MockVappNetworkJson.deleted_date);
    }
    expect(net.updatedDate.getTime()).toBe(MockVappNetworkJson.updated_date);
    expect(net.deleted).toBe(MockVappNetworkJson.deleted);
    expect(net.dnsSuffix).toBe(MockVappNetworkJson.dns_suffix);
    expect(net.json).toEqual(MockVappNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});
