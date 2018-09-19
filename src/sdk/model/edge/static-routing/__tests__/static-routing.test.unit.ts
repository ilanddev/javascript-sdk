import { Iland } from '../../../../iland';
import { Edge } from '../../edge';
import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';
import { MockEdgeStaticRoutingServiceJson } from '../__mocks__/static-routing';
import { MockEdgeJson } from '../../__mocks__/edge';
import { EdgeStaticRoutingService } from '../edge-static-routing-service';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runAssertionsAgainstMock(staticRouting: EdgeStaticRoutingService) {
  expect(staticRouting.edgeUuid).toEqual(MockEdgeStaticRoutingServiceJson.edge_uuid);
  expect(staticRouting.enabled).toEqual(MockEdgeStaticRoutingServiceJson.enabled);
  if (staticRouting.routes && MockEdgeStaticRoutingServiceJson.routes) {
    expect(staticRouting.routes.length).toEqual(MockEdgeStaticRoutingServiceJson.routes.length);
    let route;
    let routeMock;
    for (const idx in staticRouting.routes) {
      route = staticRouting.routes[idx];
      routeMock = MockEdgeStaticRoutingServiceJson.routes[idx];
      expect(route.edge_uuid).toEqual(routeMock.edge_uuid);
      expect(route.index).toEqual(routeMock.index);
      expect(route.interface_name).toEqual(routeMock.interface_name);
      expect(route.name).toEqual(routeMock.name);
      expect(route.network).toEqual(routeMock.network);
      expect(route.next_hop_ip).toEqual(routeMock.next_hop_ip);
      expect(route.interface_type).toEqual(routeMock.interface_type);
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
