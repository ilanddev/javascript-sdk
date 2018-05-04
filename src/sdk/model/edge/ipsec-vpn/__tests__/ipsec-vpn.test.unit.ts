import { Iland } from '../../../../iland';
import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';
import { MockEdgeIpsecVpn } from '../__mocks__/edge-ipsec-vpn';
import { Edge } from '../../edge';
import { MockEdgeJson } from '../../__mocks__/edge';
import { IpSecVpnTunnel } from '../ip-sec-vpn-tunnel';
import { IpSecVpnSubnet } from '../ip-sec-vpn-subnet';
import { Http } from '../../../../service/http/http';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly get Ipsec Vpn service', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getIpsecVpn().then(ipsecVpn => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/ipsec-vpn`);
    expect(ipsecVpn.edgeUuid).toEqual(MockEdgeIpsecVpn.edge_uuid);
    expect(ipsecVpn.enabled).toEqual(MockEdgeIpsecVpn.enabled);
    expect(ipsecVpn.json).toEqual(Object.assign({}, MockEdgeIpsecVpn));
    expect(ipsecVpn.toString()).toEqual(JSON.stringify(MockEdgeIpsecVpn, undefined, 2));
    if (MockEdgeIpsecVpn.endpoints) {
      expect(ipsecVpn.endpoints.length).toEqual(MockEdgeIpsecVpn.endpoints.length);
      expect(ipsecVpn.endpoints[0]).not.toBeNull();
      if (ipsecVpn.endpoints[0]) {
        expect(ipsecVpn.endpoints[0].network).toEqual(MockEdgeIpsecVpn.endpoints[0].network);
        expect(ipsecVpn.endpoints[0].publicIp).toEqual(MockEdgeIpsecVpn.endpoints[0].public_ip);
        expect(ipsecVpn.endpoints[0].json).toEqual(Object.assign({}, MockEdgeIpsecVpn.endpoints[0]));
        expect(ipsecVpn.endpoints[0].toString()).toEqual(JSON.stringify(MockEdgeIpsecVpn.endpoints[0], undefined, 2));
      }
    }
    if (MockEdgeIpsecVpn.tunnels) {
      expect(ipsecVpn.tunnels.length).toEqual(MockEdgeIpsecVpn.tunnels.length);
      let tunnel: IpSecVpnTunnel;
      let tunnelMock;
      let localSubnet: IpSecVpnSubnet;
      let peerSubnet: IpSecVpnSubnet;
      for (const idx in ipsecVpn.tunnels) {
        tunnel = ipsecVpn.tunnels[idx];
        tunnelMock = MockEdgeIpsecVpn.tunnels[idx];
        expect(tunnel.description).toEqual(tunnelMock.description);
        expect(tunnel.enabled).toEqual(tunnelMock.enabled);
        expect(tunnel.encryptionProtocol).toEqual(tunnelMock.encryption_protocol);
        expect(tunnel.errorDetails).toEqual(tunnelMock.error_details);
        expect(tunnel.localId).toEqual(tunnelMock.local_id);
        expect(tunnel.localIpAddress).toEqual(tunnelMock.local_ip_address);
        if (tunnelMock.local_subnets) {
          expect(tunnel.localSubnets.length).toEqual(tunnelMock.local_subnets.length);
          for (const index in tunnel.localSubnets) {
            localSubnet = tunnel.localSubnets[index];
            expect(localSubnet.gateway).toEqual(tunnelMock.local_subnets[index].gateway);
            expect(localSubnet.name).toEqual(tunnelMock.local_subnets[index].name);
            expect(localSubnet.netmask).toEqual(tunnelMock.local_subnets[index].netmask);
            expect(localSubnet.json).toEqual(Object.assign({}, tunnelMock.local_subnets[index]));
            expect(localSubnet.toString())
              .toEqual(JSON.stringify(tunnelMock.local_subnets[index], undefined, 2));
          }
        }
        expect(tunnel.mtu).toEqual(tunnelMock.mtu);
        expect(tunnel.name).toEqual(tunnelMock.name);
        expect(tunnel.operational).toEqual(tunnelMock.operational);
        expect(tunnel.peerId).toEqual(tunnelMock.peer_id);
        expect(tunnel.peerIpAddress).toEqual(tunnelMock.peer_ip_address);
        expect(tunnel.sharedSecret).toEqual(tunnelMock.shared_secret);
        expect(tunnel.sharedSecretEncrypted).toEqual(tunnelMock.shared_secret_encrypted);
        expect(tunnel.vpnPeer).not.toBeNull();
        if (tunnel.vpnPeer && tunnelMock.vpn_peer) {
          expect(tunnel.vpnPeer.id).toEqual(tunnelMock.vpn_peer.id);
          expect(tunnel.vpnPeer.name).toEqual(tunnelMock.vpn_peer.name);
          expect(tunnel.vpnPeer.type).toEqual(tunnelMock.vpn_peer.type);
          expect(tunnel.vpnPeer.vcdOrg).toEqual(tunnelMock.vpn_peer.vcd_org);
          expect(tunnel.vpnPeer.vcdUrl).toEqual(tunnelMock.vpn_peer.vcd_url);
          expect(tunnel.vpnPeer.vcdUsername).toEqual(tunnelMock.vpn_peer.vcd_username);
          expect(tunnel.vpnPeer.json).toEqual(Object.assign({}, tunnelMock.vpn_peer));
          expect(tunnel.vpnPeer.toString())
            .toEqual(JSON.stringify(tunnelMock.vpn_peer, undefined, 2));
        }
        if (tunnelMock.peer_subnets) {
          expect(tunnel.peerSubnets.length).toEqual(tunnelMock.peer_subnets.length);
          for (const index2 in tunnel.peerSubnets) {
            peerSubnet = tunnel.peerSubnets[index2];
            expect(peerSubnet.gateway).toEqual(tunnelMock.peer_subnets[index2].gateway);
            expect(peerSubnet.name).toEqual(tunnelMock.peer_subnets[index2].name);
            expect(peerSubnet.netmask).toEqual(tunnelMock.peer_subnets[index2].netmask);
            expect(peerSubnet.json).toEqual(Object.assign({}, tunnelMock.peer_subnets[index2]));
            expect(peerSubnet.toString())
              .toEqual(JSON.stringify(tunnelMock.peer_subnets[index2], undefined, 2));
          }
        }
        expect(tunnel.json).toEqual(Object.assign({}, tunnelMock));
        expect(tunnel.toString()).toEqual(JSON.stringify(tunnelMock, undefined, 2));
      }
    }
  });
});

test('Properly get IpsecVpn export Href with filename', (done) => {
  expect.assertions(1);
  const edge = new Edge(MockEdgeJson);
  edge.getExportIpsecVpnHref('testfile').subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/edges/' + MockEdgeJson.uuid + '/ipsec-vpn/export' +
      '?accept=' + encodeURIComponent(Http.versionMime('application/octet-stream')) +
      '&filename=testfile&oauth_token=fake-auth-token-2');
    done();
  }, error => {
    console.log(error);
    done();
  });
});

test('Properly get IpsecVpn export Href without filename', (done) => {
  expect.assertions(1);
  const edge = new Edge(MockEdgeJson);
  edge.getExportIpsecVpnHref().subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/edges/' + MockEdgeJson.uuid + '/ipsec-vpn/export' +
      '?accept=' + encodeURIComponent(Http.versionMime('application/octet-stream')) +
      '&oauth_token=fake-auth-token-2');
    done();
  }, error => {
    console.log(error);
    done();
  });
});
