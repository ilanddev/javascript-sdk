import { Iland } from '../../../../iland';
import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';
import { MockEdgeIpsecVpn } from '../__mocks__/edge-ipsec-vpn';
import { Edge } from '../../edge';
import { MockEdgeJson } from '../../__mocks__/edge';
import { IpSecVpnTunnel } from '../ip-sec-vpn-tunnel';
import { IpSecVpnSubnet } from '../ip-sec-vpn-subnet';
import { Http } from '../../../../service/http/http';
import { IpSecVpnSite } from '../ip-sec-vpn-site';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly get Ipsec Vpn service', () => {
  const edge = new Edge(MockEdgeJson);
  return edge.getIpsecVpn().then(ipsecVpn => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/ipsec-vpn`);
    expect(ipsecVpn.edgeUuid).toEqual(MockEdgeIpsecVpn.edge_uuid);
    expect(ipsecVpn.enabled).toEqual(MockEdgeIpsecVpn.enabled);
    expect(ipsecVpn.json).toEqual(Object.assign({}, MockEdgeIpsecVpn));
    expect(ipsecVpn.toString()).toEqual(JSON.stringify(MockEdgeIpsecVpn, undefined, 2));
    if (MockEdgeIpsecVpn.logging_settings) {
      expect(ipsecVpn.loggingSettings).toEqual(MockEdgeIpsecVpn.logging_settings);
      expect(ipsecVpn.loggingSettings).not.toBeNull();
      if (ipsecVpn.loggingSettings) {
        expect(ipsecVpn.loggingSettings.log_level).toEqual(MockEdgeIpsecVpn.logging_settings.log_level);
        expect(ipsecVpn.loggingSettings.enabled).toEqual(MockEdgeIpsecVpn.logging_settings.enabled);
      }
    }
    if (MockEdgeIpsecVpn.global_settings) {
      expect(ipsecVpn.globalSettings).toEqual(MockEdgeIpsecVpn.global_settings);
      expect(ipsecVpn.globalSettings).not.toBeNull();
      if (ipsecVpn.globalSettings) {
        expect(ipsecVpn.globalSettings.psk).toEqual(MockEdgeIpsecVpn.global_settings.psk);
        expect(ipsecVpn.globalSettings.service_certificate)
            .toEqual(MockEdgeIpsecVpn.global_settings.service_certificate);
        expect(ipsecVpn.globalSettings.ca_certificates).toEqual(MockEdgeIpsecVpn.global_settings.ca_certificates);
        expect(ipsecVpn.globalSettings.crl_certificates)
            .toEqual(MockEdgeIpsecVpn.global_settings.crl_certificates);
      }
    }
    if (MockEdgeIpsecVpn.sites) {
      expect(ipsecVpn.sites.length).toEqual(MockEdgeIpsecVpn.sites.length);
      let site: IpSecVpnSite;
      let siteMock;
      for (const idx in ipsecVpn.sites) {
        site = ipsecVpn.sites[idx];
        siteMock = MockEdgeIpsecVpn.sites[idx];
        expect(site.name).toEqual(siteMock.name);
        expect(site.description).toEqual(siteMock.description);
        expect(site.enabled).toEqual(siteMock.enabled);
        expect(site.encryptionAlgorithm).toEqual(siteMock.encryption_algorithm);
        expect(site.localIp).toEqual(siteMock.local_ip);
        expect(site.localId).toEqual(siteMock.local_id);
        expect(site.peerId).toEqual(siteMock.peer_id);
        expect(site.peerIp).toEqual(siteMock.peer_ip);
        expect(site.psk).toEqual(siteMock.psk);
        expect(site.authenticationMode).toEqual(siteMock.authentication_mode);
        expect(site.enablePfs).toEqual(siteMock.enable_pfs);
        expect(site.dhGroup).toEqual(siteMock.dh_group);
        if (siteMock.local_subnets) {
          expect(site.localSubnets.length).toEqual(siteMock.local_subnets.length);
          for (const index in site.localSubnets) {
            const localSubnet = site.localSubnets[index];
            expect(localSubnet).toEqual(siteMock.local_subnets[0]);
          }
        }
        if (siteMock.peer_subnets) {
          expect(site.peerSubnets.length).toEqual(siteMock.peer_subnets.length);
          for (const index in site.peerSubnets) {
            const peerSubnet = site.peerSubnets[index];
            expect(peerSubnet).toEqual(siteMock.peer_subnets[0]);
          }
        }
        expect(site.json).toEqual(Object.assign({}, siteMock));
        expect(site.toString()).toEqual(JSON.stringify(siteMock, undefined, 2));
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
