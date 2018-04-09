import { Iland } from '../../../../iland';
import { MockEdgeJson, MockEdgeStaticRoutingServiceJson } from '../../../../__mocks__/responses/edge/edge';
import { Edge } from '../../edge';
import { MockIlandDirectGrantAuthProvider } from '../../../../__mocks__/responses/iland-direct-grant-auth-privider';
import { StaticRouting } from '../static-routing';

jest.mock('../../../../http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runAssertionsAgainstMock(staticRouting: StaticRouting) {
  expect(staticRouting.edgeUuid).toEqual(MockEdgeStaticRoutingServiceJson.edge_uuid);
  expect(staticRouting.enabled).toEqual(MockEdgeStaticRoutingServiceJson.enabled);
  if (staticRouting.routes && MockEdgeStaticRoutingServiceJson.routes) {
    expect(staticRouting.routes.length).toEqual(MockEdgeStaticRoutingServiceJson.routes.length);
    let route;
    let routeMock;
    for (const idx in staticRouting.routes) {
      route = staticRouting.routes[idx];
      routeMock = MockEdgeStaticRoutingServiceJson.routes[idx];
      expect(route.edgeUuid).toEqual(routeMock.edge_uuid);
      expect(route.idx).toEqual(routeMock.idx);
      expect(route.interface).toEqual(routeMock.interface);
      expect(route.name).toEqual(routeMock.name);
      expect(route.network).toEqual(routeMock.network);
      expect(route.nextHopIp).toEqual(routeMock.next_hop_ip);
      expect(route.interfaceType).toEqual(routeMock.interface_type);
      expect(route.json).toEqual(Object.assign({}, routeMock));
      expect(route.toString()).toEqual(JSON.stringify(routeMock, undefined, 2));
    }
  }
  expect(staticRouting.toString()).toEqual(JSON.stringify(MockEdgeStaticRoutingServiceJson, undefined, 2));
  expect(staticRouting.json).toEqual(Object.assign({}, MockEdgeStaticRoutingServiceJson));
}

test('Properly get static routing', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getStaticRouting().then(staticRouting => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/static-routing`);
    runAssertionsAgainstMock(staticRouting);
  });
});
