import { Iland } from '../../../../iland';
import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';
import { Edge } from '../../edge';
import { MockEdgeJson } from '../../__mocks__/edge';
import { MockEdgeNatJson } from '../__mocks__/edge-nat';

jest.mock('../../../../service/http/http');

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
    expect(nat.natType).toEqual(MockEdgeNatJson.nat_type);
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
        expect(n.ruleIndex).toEqual(nMock.rule_index);
        expect(n.interfaceName).toEqual(nMock.interface_name);
        expect(n.originalIp).toEqual(nMock.original_ip);
        expect(n.originalPort).toEqual(nMock.original_port);
        expect(n.protocol).toEqual(nMock.protocol);
        expect(n.translatedIp).toEqual(nMock.translated_ip);
        expect(n.translatedPort).toEqual(nMock.translated_port);
        expect(n.ruleType).toEqual(nMock.rule_type);
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
