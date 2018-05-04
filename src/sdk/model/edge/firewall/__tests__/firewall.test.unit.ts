import { Iland } from '../../../../iland';
import {
  MockEdgeFirewall,
  MockEdgeFirewallCheckpoints,
  MockEdgeFirewallLogs
} from '../__mocks__/edge-firewall';
import { Edge } from '../../edge';
import { MockEdgeJson } from '../../__mocks__/edge';
import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly get Firewall service for Edge.', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getFirewall().then(firewall => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/firewall`);
    expect(firewall.defaultAction).toEqual(MockEdgeFirewall.default_action);
    expect(firewall.enabled).toEqual(MockEdgeFirewall.enabled);
    expect(firewall.edgeUuid).toEqual(MockEdgeFirewall.edge_uuid);
    expect(firewall.log).toEqual(MockEdgeFirewall.log);
    if (MockEdgeFirewall.rules) {
      expect(firewall.rules.length).toEqual(MockEdgeFirewall.rules.length);
      for (const idx in firewall.rules) {
        expect(firewall.rules[idx].description).toEqual(MockEdgeFirewall.rules[idx].description);
        expect(firewall.rules[idx].destinationIp).toEqual(MockEdgeFirewall.rules[idx].destination_ip);
        expect(firewall.rules[idx].destinationPortRange).toEqual(MockEdgeFirewall.rules[idx].destination_port_range);
        expect(firewall.rules[idx].direction).toEqual(MockEdgeFirewall.rules[idx].direction);
        expect(firewall.rules[idx].enabled).toEqual(MockEdgeFirewall.rules[idx].enabled);
        expect(firewall.rules[idx].icmpSubType).toEqual(MockEdgeFirewall.rules[idx].icmp_sub_type);
        expect(firewall.rules[idx].id).toEqual(MockEdgeFirewall.rules[idx].id);
        expect(firewall.rules[idx].idx).toEqual(MockEdgeFirewall.rules[idx].idx);
        expect(firewall.rules[idx].logging).toEqual(MockEdgeFirewall.rules[idx].logging);
        expect(firewall.rules[idx].matchOnTranslate).toEqual(MockEdgeFirewall.rules[idx].match_on_translate);
        expect(firewall.rules[idx].policy).toEqual(MockEdgeFirewall.rules[idx].policy);
        expect(firewall.rules[idx].port).toEqual(MockEdgeFirewall.rules[idx].port);
        expect(firewall.rules[idx].protocol).toEqual(MockEdgeFirewall.rules[idx].protocol);
        expect(firewall.rules[idx].sourceIp).toEqual(MockEdgeFirewall.rules[idx].source_ip);
        expect(firewall.rules[idx].sourcePort).toEqual(MockEdgeFirewall.rules[idx].source_port);
        expect(firewall.rules[idx].sourcePortRange).toEqual(MockEdgeFirewall.rules[idx].source_port_range);
        expect(firewall.rules[idx].json).toEqual(Object.assign({}, MockEdgeFirewall.rules[idx]));
        expect(firewall.rules[idx].toString()).toEqual(JSON.stringify(MockEdgeFirewall.rules[idx], undefined, 2));
      }
    }
    expect(firewall.json).toEqual(Object.assign({}, MockEdgeFirewall));
    expect(firewall.toString()).toEqual(JSON.stringify(MockEdgeFirewall, undefined, 2));
  });
});

test('Properly get firewall logs for Edge.', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getFirewallLogs().then(logs => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/firewall-logs`,
      {'params': {'end': undefined, 'start': undefined, 'type': undefined}});
    expect(logs.length).toEqual(MockEdgeFirewallLogs.length);
    for (const idx in logs) {
      expect(logs[idx].action).toEqual(MockEdgeFirewallLogs[idx].action);
      expect(logs[idx].count).toEqual(MockEdgeFirewallLogs[idx].count);
      expect(logs[idx].destIp).toEqual(MockEdgeFirewallLogs[idx].dest_ip);
      expect(logs[idx].destPort).toEqual(MockEdgeFirewallLogs[idx].dest_port);
      expect(logs[idx].edgeUuid).toEqual(MockEdgeFirewallLogs[idx].edge_uuid);
      expect(logs[idx].sourceIp).toEqual(MockEdgeFirewallLogs[idx].source_ip);
      const log = logs[idx];
      if (log && log.time) {
        expect(log.time.getTime()).toEqual(MockEdgeFirewallLogs[idx].time);
      }
      expect(logs[idx].protocol).toEqual(MockEdgeFirewallLogs[idx].protocol);
      expect(logs[idx].toString()).toEqual(JSON.stringify(MockEdgeFirewallLogs[idx], undefined, 2));
      expect(logs[idx].json).toEqual(Object.assign({}, MockEdgeFirewallLogs[idx]));
    }
  });
});

test('Properly get firewall checkpoints for Edge.', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getFirewallCheckpoints().then(checkpoints => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/firewall/checkpoints`);
    expect(checkpoints.length).toEqual(MockEdgeFirewallCheckpoints.length);
    for (const idx in checkpoints) {
      expect(checkpoints[idx].export).toEqual(MockEdgeFirewallCheckpoints[idx].export);
      expect(checkpoints[idx].time).toEqual(new Date(MockEdgeFirewallCheckpoints[idx].time));
      expect(checkpoints[idx].uuid).toEqual(MockEdgeFirewallCheckpoints[idx].uuid);
      expect(checkpoints[idx].json).toEqual(Object.assign({}, MockEdgeFirewallCheckpoints[idx]));
      expect(checkpoints[idx].toString()).toEqual(JSON.stringify(MockEdgeFirewallCheckpoints[idx], undefined, 2));
    }
  });
});

test('Properly get firewall checkpoint by it\'s ID for Edge.', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getFirewallCheckpoint('82f74090-8915-11e7-b13e-2d72519d62d5').then(checkpoint => {
    expect(Iland.getHttp().get)
      .lastCalledWith(`/edges/${MockEdgeJson.uuid}/firewall/checkpoints/82f74090-8915-11e7-b13e-2d72519d62d5`);
    expect(checkpoint.uuid).toEqual(MockEdgeFirewallCheckpoints[0].uuid);
    expect(checkpoint.time).toEqual(new Date(MockEdgeFirewallCheckpoints[0].time));
    expect(checkpoint.export).toEqual(MockEdgeFirewallCheckpoints[0].export);
    expect(checkpoint.json).toEqual(Object.assign({}, MockEdgeFirewallCheckpoints[0]));
    expect(checkpoint.toString()).toEqual(JSON.stringify(MockEdgeFirewallCheckpoints[0], undefined, 2));
  });
});

test('Properly get firewall export href with filename', (done) => {
  expect.assertions(1);
  const edge = new Edge(MockEdgeJson);
  edge.getExportFirewallHref('testfile').subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/edges/' + MockEdgeJson.uuid + '/firewall/export' +
      '?accept=application%2Fvnd.ilandcloud.api.v1.0%2Boctet-stream&filename=testfile&oauth_token=fake-auth-token-2');
    done();
  }, error => {
    console.log(error);
    done();
  });
});

test('Properly get firewall export href without filename', (done) => {
  expect.assertions(1);
  const edge = new Edge(MockEdgeJson);
  edge.getExportFirewallHref().subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/edges/' + MockEdgeJson.uuid + '/firewall/export' +
      '?accept=application%2Fvnd.ilandcloud.api.v1.0%2Boctet-stream&oauth_token=fake-auth-token-2');
    done();
  }, error => {
    console.log(error);
    done();
  });
});
