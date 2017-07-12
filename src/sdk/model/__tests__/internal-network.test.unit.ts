import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { InternalNetwork } from '../internal-network';
import { MockInternalNetworkJson } from '../../__mocks__/responses/internal-network/internal-network';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get Internal Network', async() => {
  let uuid = MockInternalNetworkJson.uuid;
  return InternalNetwork.getInternalNetwork(uuid).then(function(net) {
    expect(Iland.getHttp().get).lastCalledWith(`/network/${uuid}`);
    expect(net.getEntityType()).toBe('ORG_VDC_NETWORK');
    expect(net.getOrgUuid()).toBe(MockInternalNetworkJson.org_uuid);
    expect(net.getLocationId()).toBe(MockInternalNetworkJson.location_id);
    expect(net.getDescription()).toBe(MockInternalNetworkJson.description);
    expect(net.getEdgeUuid()).toBe(MockInternalNetworkJson.edge_uuid);
    expect(net.getFenceMode()).toBe(MockInternalNetworkJson.fence_mode);
    expect(net.getGatewayAddress()).toBe(MockInternalNetworkJson.gateway);
    expect(net.getNetmask()).toBe(MockInternalNetworkJson.netmask);
    expect(net.getIpRanges().length).toBe(MockInternalNetworkJson.ip_ranges.length);
    let idx = 0;
    for (let ipRange of net.getIpRanges()) {
      expect(ipRange.getStartAddress()).toBe(MockInternalNetworkJson.ip_ranges[idx].start);
      expect(ipRange.getEndAddress()).toBe(MockInternalNetworkJson.ip_ranges[idx].end);
      expect(ipRange.getJson()).toEqual(MockInternalNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.getParentNetworkUuid()).toBe(MockInternalNetworkJson.parent_network_uuid);
    expect(net.getPrimaryDns()).toBe(MockInternalNetworkJson.primary_dns);
    expect(net.getSecondaryDns()).toBe(MockInternalNetworkJson.secondary_dns);
    expect(net.getVdcUuid()).toBe(MockInternalNetworkJson.vdc_uuid);
    expect(net.isInherited()).toBe(MockInternalNetworkJson.inherited);
    expect(net.isShared()).toBe(MockInternalNetworkJson.shared);
    expect(net.getName()).toBe(MockInternalNetworkJson.name);
    expect(net.getUuid()).toBe(MockInternalNetworkJson.uuid);
    if (net.getDeletedDate() === null) {
      expect(net.getDeletedDate()).toBeNull();
    } else {
      expect(net.getDeletedDate()!.getTime()).toBe(MockInternalNetworkJson.deleted_date);
    }
    expect(net.getUpdatedDate().getTime()).toBe(MockInternalNetworkJson.updated_date);
    expect(net.isDeleted()).toBe(MockInternalNetworkJson.deleted);
    expect(net.getDnsSuffix()).toBe(MockInternalNetworkJson.dns_suffix);
    expect(net.getJson()).toEqual(MockInternalNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to refresh Internal Network', async() => {
  let net = new InternalNetwork(MockInternalNetworkJson);
  return net.refresh().then(function(net) {
    expect(Iland.getHttp().get).lastCalledWith(`/network/${MockInternalNetworkJson.uuid}`);
    expect(net.getEntityType()).toBe('ORG_VDC_NETWORK');
    expect(net.getOrgUuid()).toBe(MockInternalNetworkJson.org_uuid);
    expect(net.getLocationId()).toBe(MockInternalNetworkJson.location_id);
    expect(net.getDescription()).toBe(MockInternalNetworkJson.description);
    expect(net.getEdgeUuid()).toBe(MockInternalNetworkJson.edge_uuid);
    expect(net.getFenceMode()).toBe(MockInternalNetworkJson.fence_mode);
    expect(net.getGatewayAddress()).toBe(MockInternalNetworkJson.gateway);
    expect(net.getNetmask()).toBe(MockInternalNetworkJson.netmask);
    expect(net.getIpRanges().length).toBe(MockInternalNetworkJson.ip_ranges.length);
    let idx = 0;
    for (let ipRange of net.getIpRanges()) {
      expect(ipRange.getStartAddress()).toBe(MockInternalNetworkJson.ip_ranges[idx].start);
      expect(ipRange.getEndAddress()).toBe(MockInternalNetworkJson.ip_ranges[idx].end);
      expect(ipRange.getJson()).toEqual(MockInternalNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.getParentNetworkUuid()).toBe(MockInternalNetworkJson.parent_network_uuid);
    expect(net.getPrimaryDns()).toBe(MockInternalNetworkJson.primary_dns);
    expect(net.getSecondaryDns()).toBe(MockInternalNetworkJson.secondary_dns);
    expect(net.getVdcUuid()).toBe(MockInternalNetworkJson.vdc_uuid);
    expect(net.isInherited()).toBe(MockInternalNetworkJson.inherited);
    expect(net.isShared()).toBe(MockInternalNetworkJson.shared);
    expect(net.getName()).toBe(MockInternalNetworkJson.name);
    expect(net.getUuid()).toBe(MockInternalNetworkJson.uuid);
    if (net.getDeletedDate() === null) {
      expect(net.getDeletedDate()).toBeNull();
    } else {
      expect(net.getDeletedDate()!.getTime()).toBe(MockInternalNetworkJson.deleted_date);
    }
    expect(net.getUpdatedDate().getTime()).toBe(MockInternalNetworkJson.updated_date);
    expect(net.isDeleted()).toBe(MockInternalNetworkJson.deleted);
    expect(net.getDnsSuffix()).toBe(MockInternalNetworkJson.dns_suffix);
    expect(net.getJson()).toEqual(MockInternalNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});
