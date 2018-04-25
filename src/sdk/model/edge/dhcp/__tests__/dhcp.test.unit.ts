import { Iland } from '../../../../iland';
import { MockEdgeDhcpJson, MockEdgeJson } from '../../../../__mocks__/responses/edge/edge';
import { Edge } from '../../edge';
import { MockIlandDirectGrantAuthProvider } from '../../../../__mocks__/responses/iland-direct-grant-auth-privider';
import { DhcpPool } from '../dhcp-pool';

jest.mock('../../../../http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly get DHCP service for Edge.', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getDhcp().then(dhcp => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/dhcp`);
    expect(dhcp.edgeUuid).toEqual(MockEdgeDhcpJson.edge_uuid);
    expect(dhcp.enabled).toEqual(MockEdgeDhcpJson.enabled);
    if (MockEdgeDhcpJson.dhcp_pools) {
      expect(dhcp.dhcpPools.length).toEqual(MockEdgeDhcpJson.dhcp_pools.length);
      expect(dhcp.dhcpPools[0]).toBeInstanceOf(DhcpPool);
    }
    expect(dhcp.json).toEqual(Object.assign({}, MockEdgeDhcpJson));
    expect(dhcp.toString()).toEqual(JSON.stringify(MockEdgeDhcpJson, undefined, 2));
  });
});

test('Properly instantiate DhcpPool class.', () => {
  const mockDhcpPool = MockEdgeDhcpJson.dhcp_pools ? MockEdgeDhcpJson.dhcp_pools[0] : null;
  if (mockDhcpPool) {
    const dhcpPool = new DhcpPool(mockDhcpPool);
    expect(dhcpPool.enabled).toEqual(mockDhcpPool.enabled);
    expect(dhcpPool.defaultLeaseTime).toEqual(mockDhcpPool.default_lease_time);
    expect(dhcpPool.highIp).toEqual(mockDhcpPool.high_ip);
    expect(dhcpPool.lowIp).toEqual(mockDhcpPool.low_ip);
    expect(dhcpPool.maxLeaseTime).toEqual(mockDhcpPool.max_lease_time);
    expect(dhcpPool.network).toEqual(mockDhcpPool.network);
    expect(dhcpPool.edgeUuid).toEqual(mockDhcpPool.edge_uuid);
    expect(dhcpPool.json).toEqual(Object.assign({}, mockDhcpPool));
    expect(dhcpPool.toString()).toEqual(JSON.stringify(mockDhcpPool, undefined, 2));
  }
});
