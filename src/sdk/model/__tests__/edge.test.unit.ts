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
  expect(edge.entityType).toBe('EDGE');
  expect(edge.orgUuid).toBe(MockEdgeJson.org_uuid);
  expect(edge.json).toEqual(MockEdgeJson);
  expect(edge.toString().length).toBeGreaterThan(0);
  expect(edge.vdcUuid).toBe(MockEdgeJson.vdc_uuid);
  expect(edge.description).toBe(MockEdgeJson.description);
  expect(edge.locationId).toBe(MockEdgeJson.location_id);
  expect(edge.status).toBe(MockEdgeJson.status === 0 ? 'DOWN' : 'UP');
  expect(edge.backingConfigurationType).toBe(MockEdgeJson.gateway_backing_config);
  expect(edge.vcloudHref).toBe(MockEdgeJson.vcloud_href);
  expect(edge.defaultDnsRelayRoute).toBe(MockEdgeJson.default_dns_relay_route);
  expect(edge.highAvailabilityEnabled).toBe(MockEdgeJson.high_availability_enabled);
  expect(edge.backwardCompatibilityMode).toBe(MockEdgeJson.backward_compatibility_mode);
  expect(edge.deleted).toBe(MockEdgeJson.deleted);
  expect(edge.uuid).toBe(MockEdgeJson.uuid);
  expect(edge.name).toBe(MockEdgeJson.name);
  if (edge.deletedDate === null) {
    expect(edge.deletedDate).toBeNull();
  } else {
    expect(edge.deletedDate!.getTime()).toBe(MockEdgeJson.deleted_date);
  }
  expect(edge.updatedDate.getTime()).toBe(MockEdgeJson.updated_date);
  expect(edge.interfaces.length).toBe(MockEdgeJson.interfaces.length);
  let idx = 0;
  for (const int of edge.interfaces) {
    expect(int.name).toBe(MockEdgeJson.interfaces[idx].name);
    expect(int.displayName).toBe(MockEdgeJson.interfaces[idx].display_name);
    expect(int.networkName).toBe(MockEdgeJson.interfaces[idx].network);
    expect(int.outRateLimit).toBe(MockEdgeJson.interfaces[idx].out_rate_limit);
    expect(int.inRateLimit).toBe(MockEdgeJson.interfaces[idx].in_rate_limit);
    expect(int.rateLimitEnabled).toBe(MockEdgeJson.interfaces[idx].apply_rate_limit);
    expect(int.networkUuid).toBe(MockEdgeJson.interfaces[idx].network_uuid);
    expect(int.json).toEqual(MockEdgeJson.interfaces[idx]);
    expect(int.toString().length).toBeGreaterThan(0);
    expect(int.subnetParticipation.length).toBe(MockEdgeJson.interfaces[idx].subnet_participation.length);
    expect(int.type).toBe(MockEdgeJson.interfaces[idx].type);
    expect(int.defaultRoute).toBe(MockEdgeJson.interfaces[idx].default_route);
    let spIdx = 0;
    for (const sp of int.subnetParticipation) {
      const mockSp = MockEdgeJson.interfaces[idx].subnet_participation[spIdx];
      expect(sp.netmask).toBe(mockSp.netmask);
      expect(sp.ipAddress).toBe(mockSp.ip_address);
      expect(sp.gatewayAddress).toBe(mockSp.gateway);
      expect(sp.json).toEqual(mockSp);
      expect(sp.toString().length).toBeGreaterThan(0);
      expect(sp.ipRanges.length).toBe(mockSp.ip_ranges.length);
      let rangeIdx = 0;
      for (const range of sp.ipRanges) {
        const mockRange = mockSp.ip_ranges[rangeIdx];
        expect(range.startAddress).toBe(mockRange.start);
        expect(range.endAddress).toBe(mockRange.end);
        expect(range.json).toEqual(mockRange);
        expect(range.toString().length).toBeGreaterThan(0);
        rangeIdx++;
      }
      spIdx++;
    }
    idx++;
  }
}

test('Properly submits request to get Edge', async() => {
  const uuid = MockEdgeJson.uuid;
  return Edge.getEdge(uuid).then(function(edge) {
    expect(Iland.getHttp().get).lastCalledWith(`/edge/${MockEdgeJson.uuid}`);
    runEdgeAssertionsAgainsMock(edge);
  });
});

test('Properly submits request to refresh Edge', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.refresh().then(function(edge) {
    expect(Iland.getHttp().get).lastCalledWith(`/edge/${MockEdgeJson.uuid}`);
    runEdgeAssertionsAgainsMock(edge);
  });
});
