import { Iland } from '../../../iland';
import { MockEdgeJson } from '../../../__mocks__/responses/edge/edge';
import { Edge } from '../edge';
import { MockIlandDirectGrantAuthProvider } from '../../../__mocks__/responses/iland-direct-grant-auth-privider';

jest.mock('../../../http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
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
  if (MockEdgeJson.interfaces) {
    expect(edge.interfaces.length).toBe(MockEdgeJson.interfaces.length);
    let int;
    let intMock;
    for (const intIdx in edge.interfaces) {
      int = edge.interfaces[intIdx];
      intMock = MockEdgeJson.interfaces[intIdx];
      expect(int.name).toBe(intMock.name);
      expect(int.displayName).toBe(intMock.display_name);
      expect(int.networkName).toBe(intMock.network);
      expect(int.outRateLimit).toBe(intMock.out_rate_limit);
      expect(int.inRateLimit).toBe(intMock.in_rate_limit);
      expect(int.rateLimitEnabled).toBe(intMock.apply_rate_limit);
      expect(int.networkUuid).toBe(intMock.network_uuid);
      expect(int.json).toEqual(intMock);
      expect(int.toString().length).toBeGreaterThan(0);
      expect(int.type).toBe(intMock.type);
      expect(int.defaultRoute).toBe(intMock.default_route);
      if (intMock.subnet_participation !== null) {
        expect(int.subnetParticipation.length).toEqual(intMock.subnet_participation.length);
        let spIdx = 0;
        for (const sp of int.subnetParticipation) {
          const mockSp = intMock.subnet_participation[spIdx];
          expect(sp.netmask).toBe(mockSp.netmask);
          expect(sp.ipAddress).toBe(mockSp.ip_address);
          expect(sp.gatewayAddress).toBe(mockSp.gateway);
          expect(sp.json).toEqual(mockSp);
          expect(sp.toString().length).toBeGreaterThan(0);
          if (mockSp.ip_ranges) {
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
          }
          spIdx++;
        }
      }
    }
  }
}

test('Properly submits request to get Edge', async() => {
  const uuid = MockEdgeJson.uuid;
  return Edge.getEdge(uuid).then(function(edge) {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}`);
    runEdgeAssertionsAgainsMock(edge);
  });
});

test('Properly submits request to refresh Edge', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.refresh().then(function(edge) {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}`);
    runEdgeAssertionsAgainsMock(edge);
  });
});
