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
    expect(net.entityType).toBe('ORG_VDC_NETWORK');
    expect(net.orgUuid).toBe(MockInternalNetworkJson.org_uuid);
    expect(net.locationId).toBe(MockInternalNetworkJson.location_id);
    expect(net.description).toBe(MockInternalNetworkJson.description);
    expect(net.edgeUuid).toBe(MockInternalNetworkJson.edge_uuid);
    expect(net.fenceMode).toBe(MockInternalNetworkJson.fence_mode);
    expect(net.gatewayAddress).toBe(MockInternalNetworkJson.gateway);
    expect(net.netmask).toBe(MockInternalNetworkJson.netmask);
    expect(net.ipRanges.length).toBe(MockInternalNetworkJson.ip_ranges.length);
    let idx = 0;
    for (let ipRange of net.ipRanges) {
      expect(ipRange.startAddress).toBe(MockInternalNetworkJson.ip_ranges[idx].start);
      expect(ipRange.endAddress).toBe(MockInternalNetworkJson.ip_ranges[idx].end);
      expect(ipRange.json).toEqual(MockInternalNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.parentNetworkUuid).toBe(MockInternalNetworkJson.parent_network_uuid);
    expect(net.primaryDns).toBe(MockInternalNetworkJson.primary_dns);
    expect(net.secondaryDns).toBe(MockInternalNetworkJson.secondary_dns);
    expect(net.vdcUuid).toBe(MockInternalNetworkJson.vdc_uuid);
    expect(net.inherited).toBe(MockInternalNetworkJson.inherited);
    expect(net.shared).toBe(MockInternalNetworkJson.shared);
    expect(net.name).toBe(MockInternalNetworkJson.name);
    expect(net.uuid).toBe(MockInternalNetworkJson.uuid);
    if (net.deletedDate === null) {
      expect(net.deletedDate).toBeNull();
    } else {
      expect(net.deletedDate!.getTime()).toBe(MockInternalNetworkJson.deleted_date);
    }
    expect(net.updatedDate.getTime()).toBe(MockInternalNetworkJson.updated_date);
    expect(net.deleted).toBe(MockInternalNetworkJson.deleted);
    expect(net.dnsSuffix).toBe(MockInternalNetworkJson.dns_suffix);
    expect(net.json).toEqual(MockInternalNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to refresh Internal Network', async() => {
  let net = new InternalNetwork(MockInternalNetworkJson);
  return net.refresh().then(function(net) {
    expect(Iland.getHttp().get).lastCalledWith(`/network/${MockInternalNetworkJson.uuid}`);
    expect(net.entityType).toBe('ORG_VDC_NETWORK');
    expect(net.orgUuid).toBe(MockInternalNetworkJson.org_uuid);
    expect(net.locationId).toBe(MockInternalNetworkJson.location_id);
    expect(net.description).toBe(MockInternalNetworkJson.description);
    expect(net.edgeUuid).toBe(MockInternalNetworkJson.edge_uuid);
    expect(net.fenceMode).toBe(MockInternalNetworkJson.fence_mode);
    expect(net.gatewayAddress).toBe(MockInternalNetworkJson.gateway);
    expect(net.netmask).toBe(MockInternalNetworkJson.netmask);
    expect(net.ipRanges.length).toBe(MockInternalNetworkJson.ip_ranges.length);
    let idx = 0;
    for (let ipRange of net.ipRanges) {
      expect(ipRange.startAddress).toBe(MockInternalNetworkJson.ip_ranges[idx].start);
      expect(ipRange.endAddress).toBe(MockInternalNetworkJson.ip_ranges[idx].end);
      expect(ipRange.json).toEqual(MockInternalNetworkJson.ip_ranges[idx]);
      expect(ipRange.toString().length).toBeGreaterThan(0);
      idx++;
    }
    expect(net.parentNetworkUuid).toBe(MockInternalNetworkJson.parent_network_uuid);
    expect(net.primaryDns).toBe(MockInternalNetworkJson.primary_dns);
    expect(net.secondaryDns).toBe(MockInternalNetworkJson.secondary_dns);
    expect(net.vdcUuid).toBe(MockInternalNetworkJson.vdc_uuid);
    expect(net.inherited).toBe(MockInternalNetworkJson.inherited);
    expect(net.shared).toBe(MockInternalNetworkJson.shared);
    expect(net.name).toBe(MockInternalNetworkJson.name);
    expect(net.uuid).toBe(MockInternalNetworkJson.uuid);
    if (net.deletedDate === null) {
      expect(net.deletedDate).toBeNull();
    } else {
      expect(net.deletedDate!.getTime()).toBe(MockInternalNetworkJson.deleted_date);
    }
    expect(net.updatedDate.getTime()).toBe(MockInternalNetworkJson.updated_date);
    expect(net.deleted).toBe(MockInternalNetworkJson.deleted);
    expect(net.dnsSuffix).toBe(MockInternalNetworkJson.dns_suffix);
    expect(net.json).toEqual(MockInternalNetworkJson);
    expect(net.toString().length).toBeGreaterThan(0);
  });
});
