import { Iland } from '../../../iland';
import { MockIlandDirectGrantAuthProvider } from '../../../__mocks__/responses/iland-direct-grant-auth-privider';
import { MockEdgeJson, MockEdgeNatJson } from '../../../__mocks__/responses/edge/edge';
import { Edge } from '../edge';

jest.mock('../../../http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly get NAT', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getNat().then(nat => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/nat`);
    expect(nat.enabled).toEqual(MockEdgeNatJson.enabled);
    expect(nat.externalIp).toEqual(MockEdgeNatJson.external_ip);
    expect(nat.policy).toEqual(MockEdgeNatJson.policy);
    expect(nat.type).toEqual(MockEdgeNatJson.type);
    expect(nat.json).toEqual(Object.assign({}, MockEdgeNatJson));
    expect(nat.toString()).toEqual(JSON.stringify(MockEdgeNatJson, undefined, 2));
    if (MockEdgeNatJson.rules) {
      expect(nat.rules.length).toEqual(MockEdgeNatJson.rules.length);
      let n;
      let nMock;
      for (const natIdx in nat.rules) {
        n = nat.rules[natIdx];
        nMock = MockEdgeNatJson.rules[natIdx];
        expect(n.description).toEqual(nMock.description);
        expect(n.enabled).toEqual(nMock.enabled);
        expect(n.id).toEqual(nMock.id);
        expect(n.idx).toEqual(nMock.idx);
        expect(n.interface).toEqual(nMock.interface);
        expect(n.originalIp).toEqual(nMock.original_ip);
        expect(n.originalPort).toEqual(nMock.original_port);
        expect(n.protocol).toEqual(nMock.protocol);
        expect(n.translatedIp).toEqual(nMock.translated_ip);
        expect(n.translatedPort).toEqual(nMock.translated_port);
        expect(n.type).toEqual(nMock.type);
        expect(n.icmpSubType).toEqual(nMock.icmp_sub_type);
        expect(n.json).toEqual(Object.assign({}, nMock));
        expect(n.toString()).toEqual(JSON.stringify(nMock, undefined, 2));
      }
    }
  });
});

test('Properly get NAT export Href with filename', (done) => {
  expect.assertions(1);
  const edge = new Edge(MockEdgeJson);
  edge.getExportNatHref('testfile').subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/edges/' + MockEdgeJson.uuid + '/nat/export' +
      '?accept=application%2Fvnd.ilandcloud.api.v1.0%2Boctet-stream&filename=testfile&oauth_token=fake-auth-token-2');
    done();
  }, error => {
    console.log(error);
    done();
  });
});

test('Properly get NAT export Href without filename', (done) => {
  expect.assertions(1);
  const edge = new Edge(MockEdgeJson);
  edge.getExportNatHref().subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/edges/' + MockEdgeJson.uuid + '/nat/export' +
      '?accept=application%2Fvnd.ilandcloud.api.v1.0%2Boctet-stream&oauth_token=fake-auth-token-2');
    done();
  }, error => {
    console.log(error);
    done();
  });
});
