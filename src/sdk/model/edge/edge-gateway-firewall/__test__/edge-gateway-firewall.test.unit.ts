import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';
import { Iland } from '../../../../iland';
import { MockEdgeJson } from '../../__mocks__/edge';
import { Edge } from '../../edge';
import { EdgeGatewayFirewallObjectPagingParams } from '../edge-gateway-firewall-object-paging-params';
import { EdgeGatewayFirewallObjectType } from '../edge-gateway-firewall-object-type';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Get Edge Gateway Firewall Source Objects with string and number params', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getFirewallSourceObjects('type', 2, 30).then(function(data) {
    expect(Iland.getHttp().get).lastCalledWith(`/edge-gateways/${MockEdgeJson.uuid}/firewall/sources/type`, {
      params: {
        page: 2,
        page_size: 30
      }
    });
  });
});

test('Get Edge Gateway Firewall Source Objects with paging object', async() => {
  const edge = new Edge(MockEdgeJson);
  const params: EdgeGatewayFirewallObjectPagingParams = new EdgeGatewayFirewallObjectPagingParams({
    page: 2,
    page_size: 30
  });
  return edge.getFirewallSourceObjects('type', params).then(function(data) {
    expect(Iland.getHttp().get).lastCalledWith(`/edge-gateways/${MockEdgeJson.uuid}/firewall/sources/type`, {
      params: {
        page: 2,
        page_size: 30
      }
    });
  });
});

test('Get Edge Gateway Firewall Source Objects with type as object', async() => {
  const edge = new Edge(MockEdgeJson);
  const type: EdgeGatewayFirewallObjectType = new EdgeGatewayFirewallObjectType({
    type: 'test_type',
    name: 'Test type'
  });
  return edge.getFirewallSourceObjects(type, 2, 30).then(function(data) {
    expect(Iland.getHttp().get).lastCalledWith(`/edge-gateways/${MockEdgeJson.uuid}/firewall/sources/test_type`, {
      params: {
        page: 2,
        page_size: 30
      }
    });
  });
});
