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
  let uuid = MockVappNetworkJson.uuid;
  return VappNetwork.getVappNetwork(uuid).then(function(net) {
    expect(Iland.getHttp().get).lastCalledWith(`/network/${uuid}`);
    expect(net.getEntityType()).toBe('VAPP_NETWORK');
    expect(net.getOrgUuid()).toBe(MockVappNetworkJson.org_uuid);
    expect(net.getLocationId()).toBe(MockVappNetworkJson.location_id);
    expect(net.getDescription()).toBe(MockVappNetworkJson.description);
    expect(net.getVappUuid()).toBe(MockVappNetworkJson.vapp_uuid);
    expect(net.getFenceMode()).toBe(MockVappNetworkJson.fence_mode);
    expect(net.getGatewayAddress()).toBe(MockVappNetworkJson.gateway);
    expect(net.getNetmask()).toBe(MockVappNetworkJson.netmask);
    expect(net.getIpRanges().length).toBe(MockVappNetworkJson.ip_ranges.length);
    let idx = 0;
    for (let ipRange of net.getIpRanges()) {
      expect(ipRange.getStartAddress()).toBe(MockVappNetworkJson.ip_ranges[idx].start);
      expect(ipRange.getEndAddress()).toBe(MockVappNetworkJson.ip_ranges[idx].end);
      expect(ipRange.getJson()).toEqual(MockVappNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.getParentNetworkUuid()).toBe(MockVappNetworkJson.parent_network_uuid);
    expect(net.getPrimaryDns()).toBe(MockVappNetworkJson.primary_dns);
    expect(net.getSecondaryDns()).toBe(MockVappNetworkJson.secondary_dns);
    expect(net.getVdcUuid()).toBe(MockVappNetworkJson.vdc_uuid);
    expect(net.isInherited()).toBe(MockVappNetworkJson.inherited);
    expect(net.getRouterExternalIp()).toBe(MockVappNetworkJson.router_external_ip);
    expect(net.getName()).toBe(MockVappNetworkJson.name);
    expect(net.getUuid()).toBe(MockVappNetworkJson.uuid);
    if (net.getDeletedDate() === null) {
      expect(net.getDeletedDate()).toBeNull();
    } else {
      expect(net.getDeletedDate()!.getTime()).toBe(MockVappNetworkJson.deleted_date);
    }
    expect(net.getUpdatedDate().getTime()).toBe(MockVappNetworkJson.updated_date);
    expect(net.isDeleted()).toBe(MockVappNetworkJson.deleted);
    expect(net.getDnsSuffix()).toBe(MockVappNetworkJson.dns_suffix);
    expect(net.getJson()).toEqual(MockVappNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to refresh vApp Network', async() => {
  let net = new VappNetwork(MockVappNetworkJson);
  return net.refresh().then(function(net) {
    expect(Iland.getHttp().get).lastCalledWith(`/network/${MockVappNetworkJson.uuid}`);
    expect(net.getEntityType()).toBe('VAPP_NETWORK');
    expect(net.getOrgUuid()).toBe(MockVappNetworkJson.org_uuid);
    expect(net.getLocationId()).toBe(MockVappNetworkJson.location_id);
    expect(net.getDescription()).toBe(MockVappNetworkJson.description);
    expect(net.getVappUuid()).toBe(MockVappNetworkJson.vapp_uuid);
    expect(net.getFenceMode()).toBe(MockVappNetworkJson.fence_mode);
    expect(net.getGatewayAddress()).toBe(MockVappNetworkJson.gateway);
    expect(net.getNetmask()).toBe(MockVappNetworkJson.netmask);
    expect(net.getIpRanges().length).toBe(MockVappNetworkJson.ip_ranges.length);
    let idx = 0;
    for (let ipRange of net.getIpRanges()) {
      expect(ipRange.getStartAddress()).toBe(MockVappNetworkJson.ip_ranges[idx].start);
      expect(ipRange.getEndAddress()).toBe(MockVappNetworkJson.ip_ranges[idx].end);
      expect(ipRange.getJson()).toEqual(MockVappNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.getParentNetworkUuid()).toBe(MockVappNetworkJson.parent_network_uuid);
    expect(net.getPrimaryDns()).toBe(MockVappNetworkJson.primary_dns);
    expect(net.getSecondaryDns()).toBe(MockVappNetworkJson.secondary_dns);
    expect(net.getVdcUuid()).toBe(MockVappNetworkJson.vdc_uuid);
    expect(net.isInherited()).toBe(MockVappNetworkJson.inherited);
    expect(net.getRouterExternalIp()).toBe(MockVappNetworkJson.router_external_ip);
    expect(net.getName()).toBe(MockVappNetworkJson.name);
    expect(net.getUuid()).toBe(MockVappNetworkJson.uuid);
    if (net.getDeletedDate() === null) {
      expect(net.getDeletedDate()).toBeNull();
    } else {
      expect(net.getDeletedDate()!.getTime()).toBe(MockVappNetworkJson.deleted_date);
    }
    expect(net.getUpdatedDate().getTime()).toBe(MockVappNetworkJson.updated_date);
    expect(net.isDeleted()).toBe(MockVappNetworkJson.deleted);
    expect(net.getDnsSuffix()).toBe(MockVappNetworkJson.dns_suffix);
    expect(net.getJson()).toEqual(MockVappNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});
