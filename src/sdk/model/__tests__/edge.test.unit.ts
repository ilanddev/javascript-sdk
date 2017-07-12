import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { MockEdgeJson } from '../../__mocks__/responses/edge/edge';
import { Edge } from '../edge';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runEdgeAssertionsAgainsMock(edge: Edge) {
  expect(edge.getEntityType()).toBe('EDGE');
  expect(edge.getOrgUuid()).toBe(MockEdgeJson.org_uuid);
  expect(edge.getJson()).toEqual(MockEdgeJson);
  expect(edge.toString().length).toBeGreaterThan(0);
  expect(edge.getVdcUuid()).toBe(MockEdgeJson.vdc_uuid);
  expect(edge.getDescription()).toBe(MockEdgeJson.description);
  expect(edge.getLocationId()).toBe(MockEdgeJson.location_id);
  expect(edge.getStatus()).toBe(MockEdgeJson.status === 0 ? 'DOWN' : 'UP');
  expect(edge.getBackingConfigurationType()).toBe(MockEdgeJson.gateway_backing_config);
  expect(edge.getVcloudHref()).toBe(MockEdgeJson.vcloud_href);
  expect(edge.isDefaultDnsRelayRoute()).toBe(MockEdgeJson.default_dns_relay_route);
  expect(edge.isHighAvailabilityEnabled()).toBe(MockEdgeJson.high_availability_enabled);
  expect(edge.isInBackwardCompatibilityMode()).toBe(MockEdgeJson.backward_compatibility_mode);
  expect(edge.isDeleted()).toBe(MockEdgeJson.deleted);
  expect(edge.getUuid()).toBe(MockEdgeJson.uuid);
  expect(edge.getName()).toBe(MockEdgeJson.name);
  if (edge.getDeletedDate() === null) {
    expect(edge.getDeletedDate()).toBeNull();
  } else {
    expect(edge.getDeletedDate()!.getTime()).toBe(MockEdgeJson.deleted_date);
  }
  expect(edge.getUpdatedDate().getTime()).toBe(MockEdgeJson.updated_date);
  expect(edge.getInterfaces().length).toBe(MockEdgeJson.interfaces.length);
  let idx = 0;
  for (const int of edge.getInterfaces()) {
    expect(int.getName()).toBe(MockEdgeJson.interfaces[idx].name);
    expect(int.getDisplayName()).toBe(MockEdgeJson.interfaces[idx].display_name);
    expect(int.getNetworkName()).toBe(MockEdgeJson.interfaces[idx].network);
    expect(int.getOutRateLimit()).toBe(MockEdgeJson.interfaces[idx].out_rate_limit);
    expect(int.getInRateLimit()).toBe(MockEdgeJson.interfaces[idx].in_rate_limit);
    expect(int.isRateLimitEnabled()).toBe(MockEdgeJson.interfaces[idx].apply_rate_limit);
    expect(int.getNetworkUuid()).toBe(MockEdgeJson.interfaces[idx].network_uuid);
    expect(int.getJson()).toEqual(MockEdgeJson.interfaces[idx]);
    expect(int.toString().length).toBeGreaterThan(0);
    expect(int.getSubnetParticipation().length).toBe(MockEdgeJson.interfaces[idx].subnet_participation.length);
    expect(int.getType()).toBe(MockEdgeJson.interfaces[idx].type);
    expect(int.isDefaultRoute()).toBe(MockEdgeJson.interfaces[idx].default_route);
    let spIdx = 0;
    for (const sp of int.getSubnetParticipation()) {
      let mockSp = MockEdgeJson.interfaces[idx].subnet_participation[spIdx];
      expect(sp.getNetmask()).toBe(mockSp.netmask);
      expect(sp.getIpAddress()).toBe(mockSp.ip_address);
      expect(sp.getGatewayAddress()).toBe(mockSp.gateway);
      expect(sp.getJson()).toEqual(mockSp);
      expect(sp.toString().length).toBeGreaterThan(0);
      expect(sp.getIpRanges().length).toBe(mockSp.ip_ranges.length);
      let rangeIdx = 0;
      for (const range of sp.getIpRanges()) {
        let mockRange = mockSp.ip_ranges[rangeIdx];
        expect(range.getStartAddress()).toBe(mockRange.start);
        expect(range.getEndAddress()).toBe(mockRange.end);
        expect(range.getJson()).toEqual(mockRange);
        expect(range.toString().length).toBeGreaterThan(0);
        rangeIdx++;
      }
      spIdx++;
    }
    idx++;
  }
}

test('Properly submits request to get Edge', async() => {
  let uuid = MockEdgeJson.uuid;
  return Edge.getEdge(uuid).then(function(edge) {
    expect(Iland.getHttp().get).lastCalledWith(`/edge/${MockEdgeJson.uuid}`);
    runEdgeAssertionsAgainsMock(edge);
  });
});

test('Properly submits request to refresh Edge', async() => {
  let edge = new Edge(MockEdgeJson);
  return edge.refresh().then(function(edge) {
    expect(Iland.getHttp().get).lastCalledWith(`/edge/${MockEdgeJson.uuid}`);
    runEdgeAssertionsAgainsMock(edge);
  });
});
