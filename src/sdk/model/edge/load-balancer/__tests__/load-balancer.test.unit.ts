import { Iland } from '../../../../iland';
import { MockIlandDirectGrantAuthProvider } from '../../../../__mocks__/responses/iland-direct-grant-auth-privider';
import { MockEdgeLoadbalancer } from '../../../../__mocks__/responses/edge/edge-load-balancer';
import { Edge } from '../../edge';
import { MockEdgeJson } from '../../../../__mocks__/responses/edge/edge';
import { LoadBalancerPool } from '../load-balancer-pool';
import { LoadBalancerVirtualServer } from '../load-balancer-virtual-server';
import { LbPoolServicePort } from '../lb-pool-service-port';
import { LbVirtualServerServiceProfile } from '../lb-virtual-server-service-profile';
import {
  LbPoolMemberJson,
  LbPoolServicePortJson,
  LbVirtualServerServiceProfileJson,
  LoadBalancerPoolJson,
  LoadBalancerVirtualServerJson
} from '../json/load-balancer';
import { LbPoolMember } from '../lb-pool-member';

jest.mock('../../../../http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runServicePortsAssertions(servicePorts: Array<LbPoolServicePort>,
                                   MockServicePorts: Array<LbPoolServicePortJson>) {
  for (const servicePortsIdx in servicePorts) {
    const servicePort = servicePorts[servicePortsIdx];
    const MockServicePort = MockServicePorts[servicePortsIdx];
    expect(servicePort).toBeInstanceOf(LbPoolServicePort);
    expect(servicePort.algorithm).toEqual(MockServicePort.algorithm);
    expect(servicePort.enabled).toEqual(MockServicePort.enabled);
    expect(servicePort.healthCheckPort).toEqual(MockServicePort.health_check_port);
    if (MockServicePort.health_checks) {
      expect(servicePort.healthChecks.length).toEqual(MockServicePort.health_checks.length);
      for (const healthChecksIdx in servicePort.healthChecks) {
        const healthCheck = servicePort.healthChecks[healthChecksIdx];
        const MockHealthCheck = MockServicePort.health_checks[healthChecksIdx];
        expect(healthCheck.healthThreshold).toEqual(MockHealthCheck.health_threshold);
        expect(healthCheck.unhealthThreshold).toEqual(MockHealthCheck.unhealth_threshold);
        expect(healthCheck.interval).toEqual(MockHealthCheck.interval);
        expect(healthCheck.timeout).toEqual(MockHealthCheck.timeout);
        expect(healthCheck.uri).toEqual(MockHealthCheck.uri);
        expect(healthCheck.mode).toEqual(MockHealthCheck.mode);
        expect(healthCheck.json).toEqual(Object.assign({}, MockHealthCheck));
        expect(healthCheck.toString()).toEqual(JSON.stringify(MockHealthCheck, undefined, 2));
      }
    }
    expect(servicePort.port).toEqual(MockServicePort.port);
    expect(servicePort.protocol).toEqual(MockServicePort.protocol);
    expect(servicePort.json).toEqual(Object.assign({}, MockServicePort));
    expect(servicePort.toString()).toEqual(JSON.stringify(MockServicePort, undefined, 2));
  }
}

test('Properly get edge load balancer', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getLoadBalancer().then(lb => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/load-balancer`);
    expect(lb.edgeUuid).toEqual(MockEdgeLoadbalancer.edge_uuid);
    expect(lb.enabled).toEqual(MockEdgeLoadbalancer.enabled);
    expect(lb.json).toEqual(Object.assign({}, MockEdgeLoadbalancer, undefined, 2));
    expect(lb.toString()).toEqual(JSON.stringify(MockEdgeLoadbalancer, undefined, 2));
    if (MockEdgeLoadbalancer.pools) {
      expect(lb.pools.length).toEqual(MockEdgeLoadbalancer.pools.length);
      let pool: LoadBalancerPool;
      let poolMember: LbPoolMember;
      let MockPool: LoadBalancerPoolJson;
      let MockPoolMember: LbPoolMemberJson;
      for (const poolsIdx in lb.pools) {
        pool = lb.pools[poolsIdx];
        MockPool = MockEdgeLoadbalancer.pools[poolsIdx];
        expect(pool).toBeInstanceOf(LoadBalancerPool);
        expect(pool.description).toEqual(MockPool.description);
        expect(pool.errorDetails).toEqual(MockPool.error_details);
        expect(pool.id).toEqual(MockPool.id);
        expect(pool.name).toEqual(MockPool.name);
        expect(pool.operational).toEqual(MockPool.operational);
        if (MockPool.service_ports) {
          expect(pool.servicePorts.length).toEqual(MockPool.service_ports.length);
          runServicePortsAssertions(pool.servicePorts, MockPool.service_ports);
        }
        if (MockPool.members) {
          expect(pool.members.length).toEqual(MockPool.members.length);
          for (const membersIdx in pool.members) {
            poolMember = pool.members[membersIdx];
            MockPoolMember = MockPool.members[membersIdx];
            expect(poolMember.ipAddress).toEqual(MockPoolMember.ip_address);
            expect(poolMember.weight).toEqual(MockPoolMember.weight);
            expect(poolMember.json).toEqual(Object.assign({}, MockPoolMember));
            expect(poolMember.toString()).toEqual(JSON.stringify(MockPoolMember, undefined, 2));
            if (MockPoolMember.service_ports) {
              expect(poolMember.servicePorts.length).toEqual(MockPoolMember.service_ports.length);
              runServicePortsAssertions(poolMember.servicePorts, MockPoolMember.service_ports);
            }
          }
        }
        expect(pool.json).toEqual(Object.assign({}, MockPool));
        expect(pool.toString()).toEqual(JSON.stringify(MockPool, undefined, 2));
      }
    }
    let virtualServer: LoadBalancerVirtualServer;
    let virtualServerServiceProfile: LbVirtualServerServiceProfile;
    let MockVirtualServer: LoadBalancerVirtualServerJson;
    let MockVirtualServerServiceProfile: LbVirtualServerServiceProfileJson;

    if (MockEdgeLoadbalancer.virtual_servers) {
      expect(lb.virtualServers.length).toEqual(MockEdgeLoadbalancer.virtual_servers.length);
      for (const virtualServersIdx in lb.virtualServers) {
        virtualServer = lb.virtualServers[virtualServersIdx];
        MockVirtualServer = MockEdgeLoadbalancer.virtual_servers[virtualServersIdx];
        expect(virtualServer).toBeInstanceOf(LoadBalancerVirtualServer);
        expect(virtualServer.description).toEqual(MockVirtualServer.description);
        expect(virtualServer.enabled).toEqual(MockVirtualServer.enabled);
        expect(virtualServer.ipAddress).toEqual(MockVirtualServer.ip_address);
        expect(virtualServer.logging).toEqual(MockVirtualServer.logging);
        expect(virtualServer.name).toEqual(MockVirtualServer.name);
        expect(virtualServer.pool).toEqual(MockVirtualServer.pool);
        if (MockVirtualServer.service_profiles) {
          expect(virtualServer.serviceProfiles.length).toEqual(MockVirtualServer.service_profiles.length);
          for (const serviceProfilesIdx in virtualServer.serviceProfiles) {
            virtualServerServiceProfile = virtualServer.serviceProfiles[serviceProfilesIdx];
            MockVirtualServerServiceProfile = MockVirtualServer.service_profiles[serviceProfilesIdx];
            expect(virtualServerServiceProfile).toBeInstanceOf(LbVirtualServerServiceProfile);
            expect(virtualServerServiceProfile.enabled).toEqual(MockVirtualServerServiceProfile.enabled);
            expect(virtualServerServiceProfile.persistence).not.toBeNull();
            if (virtualServerServiceProfile.persistence && MockVirtualServerServiceProfile.persistence) {
              expect(virtualServerServiceProfile.persistence.cookieMode)
                .toEqual(MockVirtualServerServiceProfile.persistence.cookie_mode);
              expect(virtualServerServiceProfile.persistence.cookieName)
                .toEqual(MockVirtualServerServiceProfile.persistence.cookie_name);
              expect(virtualServerServiceProfile.persistence.method)
                .toEqual(MockVirtualServerServiceProfile.persistence.method);
              expect(virtualServerServiceProfile.persistence.toString())
                .toEqual(JSON.stringify(MockVirtualServerServiceProfile.persistence, undefined, 2));
              expect(virtualServerServiceProfile.persistence.json)
                .toEqual(Object.assign({}, MockVirtualServerServiceProfile.persistence));
            }
            expect(virtualServerServiceProfile.port).toEqual(MockVirtualServerServiceProfile.port);
            expect(virtualServerServiceProfile.protocol).toEqual(MockVirtualServerServiceProfile.protocol);
            expect(virtualServerServiceProfile.json).toEqual(Object.assign({}, MockVirtualServerServiceProfile));
            expect(virtualServerServiceProfile.toString())
              .toEqual(JSON.stringify(MockVirtualServerServiceProfile, undefined, 2));
          }
        }
        expect(virtualServer.network).toEqual(MockVirtualServer.network);
        expect(virtualServer.json).toEqual(Object.assign({}, MockVirtualServer));
        expect(virtualServer.toString()).toEqual(JSON.stringify(MockVirtualServer, undefined, 2));
      }
    }
  });
});
