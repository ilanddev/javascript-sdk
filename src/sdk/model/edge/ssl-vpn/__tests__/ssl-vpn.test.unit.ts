import { Iland } from '../../../../iland';
import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';
import {
  MockAdAuthenticationServer,
  MockEdgeSslVpn,
  MockLdapAuthenticationServer,
  MockLocalAuthenticationServer,
  MockRadiusAuthenticationServer,
  MockRsaAuthenticationServer,
  MockSslVpnServiceUsers
} from '../__mocks__/edge-ssl-vpn';
import { Edge } from '../../edge';
import { MockEdgeJson } from '../../__mocks__/edge';
import { EdgeSslVpnClientInstallPackage } from '../edge-ssl-vpn-client-install-package';
import { EdgeSslVpnLocalAuthenticationServer } from '../edge-ssl-vpn-local-authentication-server';
import { EdgeSslVpnService } from '../edge-ssl-vpn-service';
import { EdgeSslVpnAuthenticationServer } from '../edge-ssl-vpn-authentication-server';
import {
  EdgeSslVpnAdAuthenticationServerJson,
  EdgeSslVpnClientInstallPackageJson,
  EdgeSslVpnGatewayJson,
  EdgeSslVpnIpPoolJson,
  EdgeSslVpnLdapAuthenticationServerJson,
  EdgeSslVpnLocalAuthenticationServerJson,
  EdgeSslVpnPrivateNetworkJson,
  EdgeSslVpnRadiusAuthenticationServerJson,
  EdgeSslVpnRsaAuthenticationServerJson
} from '../__json__/edge-ssl-vpn-json';
import { EdgeSslVpnLdapAuthenticationServer } from '../edge-ssl-vpn-ldap-authentication-server';
import { EdgeSslVpnAdAuthenticationServer } from '../edge-ssl-vpn-ad-authentication-server';
import { EdgeSslVpnRadiusAuthenticationServer } from '../edge-ssl-vpn-radius-authentication-server';
import { EdgeSslVpnRsaAuthenticationServer } from '../edge-ssl-vpn-rsa-authentication-server';
import { EdgeSslVpnAuthentication } from '../edge-ssl-vpn-authentication';
import { EdgeSslVpnGateway } from '../edge-ssl-vpn-gateway';
import { EdgeSslVpnIpPool } from '../edge-ssl-vpn-ip-pool';
import { EdgeSslVpnPrivateNetwork } from '../edge-ssl-vpn-private-network';
import { EdgeSslVpnUser } from '../edge-ssl-vpn-user';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runAssertionsAgainstLocalAuthenticationServerMock(authServer: EdgeSslVpnLocalAuthenticationServer,
                                                           mockAuthServer: EdgeSslVpnLocalAuthenticationServerJson) {
  expect(authServer).toBeInstanceOf(EdgeSslVpnLocalAuthenticationServer);
  expect(authServer.enabled).toEqual((mockAuthServer).enabled);
  expect(authServer.pwdExpiryNotification).toEqual((mockAuthServer).pwd_expiry_notification);
  expect(authServer.pwdLifetime).toEqual((mockAuthServer).pwd_lifetime);
  expect(authServer.pwdMaxLength).toEqual((mockAuthServer).pwd_max_length);
  expect(authServer.pwdMinAlphabets).toEqual((mockAuthServer).pwd_min_alphabets);
  expect(authServer.pwdMinDigits).toEqual((mockAuthServer).pwd_min_digits);
  expect(authServer.pwdMinLength).toEqual((mockAuthServer).pwd_min_length);
  expect(authServer.pwdMinSpecialCharacters).toEqual((mockAuthServer).pwd_min_special_characters);
  expect(authServer.retryCount).toEqual((mockAuthServer).retry_count);
  expect(authServer.retryDuration).toEqual((mockAuthServer).retry_duration);
  expect(authServer.type).toEqual((mockAuthServer).type);
  expect(authServer.lockoutDuration).toEqual((mockAuthServer).lockout_duration);
  expect(authServer.json).toEqual(Object.assign({}, mockAuthServer));
  expect(authServer.toString()).toEqual(JSON.stringify(mockAuthServer, undefined, 2));
}

function runAssertionsAgainstAdAuthenticationServerMock(authServer: EdgeSslVpnAdAuthenticationServer,
                                                        mockAuthServer: EdgeSslVpnAdAuthenticationServerJson) {
  expect(authServer).toBeInstanceOf(EdgeSslVpnAdAuthenticationServer);
  expect(authServer.enabled).toEqual((mockAuthServer).enabled);
  expect(authServer.type).toEqual((mockAuthServer).type);
  expect(authServer.bindDomainName).toEqual((mockAuthServer).bind_domain_name);
  expect(authServer.bindPassword).toEqual((mockAuthServer).bind_password);
  expect(authServer.enableSsl).toEqual((mockAuthServer).enable_ssl);
  expect(authServer.ip).toEqual((mockAuthServer).ip);
  expect(authServer.loginAttributeName).toEqual((mockAuthServer).login_attribute_name);
  expect(authServer.port).toEqual((mockAuthServer).port);
  expect(authServer.searchFilter).toEqual((mockAuthServer).search_filter);
  expect(authServer.terminateSessionOnAuthFails).toEqual((mockAuthServer).terminate_session_on_auth_fails);
  expect(authServer.timeout).toEqual((mockAuthServer).timeout);
  expect(authServer.searchBase).toEqual((mockAuthServer).search_base);
  expect(authServer.json).toEqual(Object.assign({}, mockAuthServer));
  expect(authServer.toString()).toEqual(JSON.stringify(mockAuthServer, undefined, 2));
}

function runAssertionsAgainstLdapAuthenticationServerMock(authServer: EdgeSslVpnLdapAuthenticationServer,
                                                          mockAuthServer: EdgeSslVpnLdapAuthenticationServerJson) {
  expect(authServer).toBeInstanceOf(EdgeSslVpnLdapAuthenticationServer);
  expect(authServer.enabled).toEqual((mockAuthServer).enabled);
  expect(authServer.type).toEqual((mockAuthServer).type);
  expect(authServer.bindDomainName).toEqual((mockAuthServer).bind_domain_name);
  expect(authServer.bindPassword).toEqual((mockAuthServer).bind_password);
  expect(authServer.enableSsl).toEqual((mockAuthServer).enable_ssl);
  expect(authServer.ip).toEqual((mockAuthServer).ip);
  expect(authServer.loginAttributeName).toEqual((mockAuthServer).login_attribute_name);
  expect(authServer.port).toEqual((mockAuthServer).port);
  expect(authServer.searchFilter).toEqual((mockAuthServer).search_filter);
  expect(authServer.timeout).toEqual((mockAuthServer).timeout);
  expect(authServer.searchBase).toEqual((mockAuthServer).search_base);
  expect(authServer.json).toEqual(Object.assign({}, mockAuthServer));
  expect(authServer.toString()).toEqual(JSON.stringify(mockAuthServer, undefined, 2));
}

function runAssertionsAgainstRadiusAuthenticationServerMock(authServer: EdgeSslVpnRadiusAuthenticationServer,
                                                            mockAuthServer: EdgeSslVpnRadiusAuthenticationServerJson) {
  expect(authServer).toBeInstanceOf(EdgeSslVpnRadiusAuthenticationServer);
  expect(authServer.type).toEqual((mockAuthServer).type);
  expect(authServer.ip).toEqual((mockAuthServer).ip);
  expect(authServer.port).toEqual((mockAuthServer).port);
  expect(authServer.timeout).toEqual((mockAuthServer).timeout);
  expect(authServer.nasIp).toEqual((mockAuthServer).nas_ip);
  expect(authServer.secret).toEqual((mockAuthServer).secret);
  expect(authServer.retryCount).toEqual((mockAuthServer).retry_count);
  expect(authServer.json).toEqual(Object.assign({}, mockAuthServer));
  expect(authServer.toString()).toEqual(JSON.stringify(mockAuthServer, undefined, 2));
}

function runAssertionsAgainstRsaAuthenticationServerMock(authServer: EdgeSslVpnRsaAuthenticationServer,
                                                         mockAuthServer: EdgeSslVpnRsaAuthenticationServerJson) {
  expect(authServer).toBeInstanceOf(EdgeSslVpnRsaAuthenticationServer);
  expect(authServer.type).toEqual((mockAuthServer).type);
  expect(authServer.timeout).toEqual((mockAuthServer).timeout);
  expect(authServer.sourceIp).toEqual((mockAuthServer).source_ip);
  expect(authServer.json).toEqual(Object.assign({}, mockAuthServer));
  expect(authServer.toString()).toEqual(JSON.stringify(mockAuthServer, undefined, 2));
}

function runAssertionsAgainstAuthenticationServersMock(authServers: Array<EdgeSslVpnAuthenticationServer |
  EdgeSslVpnLocalAuthenticationServer>) {
  if (MockEdgeSslVpn.authentication) {
    expect(authServers.length).toEqual(MockEdgeSslVpn.authentication.authentication_servers.length);
    let authServer: EdgeSslVpnAuthenticationServer;
    let mockAuthServer;
    for (const authServerIdx in authServers) {
      authServer = authServers[authServerIdx];
      mockAuthServer = MockEdgeSslVpn.authentication.authentication_servers[authServerIdx];
      switch (authServer.type) {
        case 'LOCAL':
          if (authServer instanceof EdgeSslVpnLocalAuthenticationServer) {
            runAssertionsAgainstLocalAuthenticationServerMock(authServer,
              mockAuthServer as EdgeSslVpnLocalAuthenticationServerJson);
          }
          break;
        case 'LDAP':
          if (authServer instanceof EdgeSslVpnLdapAuthenticationServer) {
            runAssertionsAgainstLdapAuthenticationServerMock(authServer,
              mockAuthServer as EdgeSslVpnLdapAuthenticationServerJson);
          }
          break;
        case 'AD':
          if (authServer instanceof EdgeSslVpnAdAuthenticationServer) {
            runAssertionsAgainstAdAuthenticationServerMock(authServer,
              mockAuthServer as EdgeSslVpnAdAuthenticationServerJson);
          }
          break;
        case 'RADIUS':
          if (authServer instanceof EdgeSslVpnRadiusAuthenticationServer) {
            runAssertionsAgainstRadiusAuthenticationServerMock(authServer,
              mockAuthServer as EdgeSslVpnRadiusAuthenticationServerJson);
          }
          break;
        case 'RSA':
          if (authServer instanceof EdgeSslVpnRsaAuthenticationServer) {
            runAssertionsAgainstRsaAuthenticationServerMock(authServer,
              mockAuthServer as EdgeSslVpnRsaAuthenticationServerJson);
          }
          break;
      }
    }
  }
}

function runAssertionsAgainstSecondaryAuthenticationServerMocks() {
  const localAuthServerMock = MockLocalAuthenticationServer.secondary_authentication_server;
  const ldapAuthServerMock = MockLdapAuthenticationServer.secondary_authentication_server;
  const radiusAuthServerMock = MockRadiusAuthenticationServer.secondary_authentication_server;
  const adAuthServerMock = MockAdAuthenticationServer.secondary_authentication_server;
  const rsaAuthServerMock = MockRsaAuthenticationServer.secondary_authentication_server;
  const localAuthServer = new EdgeSslVpnAuthentication(MockLocalAuthenticationServer);
  const ldapAuthServer = new EdgeSslVpnAuthentication(MockLdapAuthenticationServer);
  const radiusAuthServer = new EdgeSslVpnAuthentication(MockRadiusAuthenticationServer);
  const adAuthServer = new EdgeSslVpnAuthentication(MockAdAuthenticationServer);
  const rsaAuthServer = new EdgeSslVpnAuthentication(MockRsaAuthenticationServer);

  expect(localAuthServer.secondaryAuthenticationServer).not.toBeNull();
  expect(localAuthServer.secondaryAuthenticationServer).toBeInstanceOf(EdgeSslVpnLocalAuthenticationServer);
  if (localAuthServer.secondaryAuthenticationServer !== null &&
    localAuthServer.secondaryAuthenticationServer instanceof EdgeSslVpnLocalAuthenticationServer) {
    runAssertionsAgainstLocalAuthenticationServerMock(localAuthServer.secondaryAuthenticationServer,
      localAuthServerMock as EdgeSslVpnLocalAuthenticationServerJson);
  }
  expect(ldapAuthServer.secondaryAuthenticationServer).not.toBeNull();
  expect(ldapAuthServer.secondaryAuthenticationServer).toBeInstanceOf(EdgeSslVpnLdapAuthenticationServer);
  if (ldapAuthServer.secondaryAuthenticationServer !== null &&
    ldapAuthServer.secondaryAuthenticationServer instanceof EdgeSslVpnLdapAuthenticationServer) {
    runAssertionsAgainstLdapAuthenticationServerMock(ldapAuthServer.secondaryAuthenticationServer,
      ldapAuthServerMock as EdgeSslVpnLdapAuthenticationServerJson);
  }
  expect(adAuthServer.secondaryAuthenticationServer).not.toBeNull();
  expect(adAuthServer.secondaryAuthenticationServer).toBeInstanceOf(EdgeSslVpnAdAuthenticationServer);
  if (adAuthServer.secondaryAuthenticationServer !== null &&
    adAuthServer.secondaryAuthenticationServer instanceof EdgeSslVpnAdAuthenticationServer) {
    runAssertionsAgainstAdAuthenticationServerMock(adAuthServer.secondaryAuthenticationServer,
      adAuthServerMock as EdgeSslVpnAdAuthenticationServerJson);
  }
  expect(radiusAuthServer.secondaryAuthenticationServer).not.toBeNull();
  expect(radiusAuthServer.secondaryAuthenticationServer).toBeInstanceOf(EdgeSslVpnRadiusAuthenticationServer);
  if (radiusAuthServer.secondaryAuthenticationServer !== null &&
    radiusAuthServer.secondaryAuthenticationServer instanceof EdgeSslVpnRadiusAuthenticationServer) {
    runAssertionsAgainstRadiusAuthenticationServerMock(radiusAuthServer.secondaryAuthenticationServer,
      radiusAuthServerMock as EdgeSslVpnRadiusAuthenticationServerJson);
  }
  expect(rsaAuthServer.secondaryAuthenticationServer).not.toBeNull();
  expect(rsaAuthServer.secondaryAuthenticationServer).toBeInstanceOf(EdgeSslVpnRsaAuthenticationServer);
  if (rsaAuthServer.secondaryAuthenticationServer !== null &&
    rsaAuthServer.secondaryAuthenticationServer instanceof EdgeSslVpnRsaAuthenticationServer) {
    runAssertionsAgainstRsaAuthenticationServerMock(rsaAuthServer.secondaryAuthenticationServer,
      rsaAuthServerMock as EdgeSslVpnRsaAuthenticationServerJson);
  }
}

function runAssertionsAgainstMockClientInstallPackage(clientInsPack: EdgeSslVpnClientInstallPackage,
                                                      clientInsPackMock: EdgeSslVpnClientInstallPackageJson) {
  expect(clientInsPack.createDesktopIcon).toEqual(clientInsPackMock.create_desktop_icon);
  expect(clientInsPack.createLinuxClient).toEqual(clientInsPackMock.create_linux_client);
  expect(clientInsPack.createMacClient).toEqual(clientInsPackMock.create_mac_client);
  expect(clientInsPack.enabled).toEqual(clientInsPackMock.enabled);
  expect(clientInsPack.enforceServerSecurityCertValidation)
    .toEqual(clientInsPackMock.enforce_server_security_cert_validation);
  expect(clientInsPack.gatewayList).not.toBeNull();
  if (clientInsPackMock.gateway_list) {
    expect(clientInsPack.gatewayList.length).toEqual(clientInsPackMock.gateway_list.length);
    let gatewayMock: EdgeSslVpnGatewayJson;
    clientInsPack.gatewayList.forEach((gateway: EdgeSslVpnGateway, index: number) => {
      gatewayMock = clientInsPackMock.gateway_list[index];
      expect(gateway.hostName).toEqual(gatewayMock.host_name);
      expect(gateway.port).toEqual(gatewayMock.port);
      expect(gateway.json).toEqual(Object.assign({}, gatewayMock));
      expect(gateway.toString()).toEqual(JSON.stringify(gatewayMock, undefined, 2));
    });
  }
  expect(clientInsPack.hideNetworkAdaptor).toEqual(clientInsPackMock.hide_network_adaptor);
  expect(clientInsPack.hideSystrayIcon).toEqual(clientInsPackMock.hide_systray_icon);
  expect(clientInsPack.profileName).toEqual(clientInsPackMock.profile_name);
  expect(clientInsPack.rememberPassword).toEqual(clientInsPackMock.remember_password);
  expect(clientInsPack.silentModeInstallation).toEqual(clientInsPackMock.silent_mode_installation);
  expect(clientInsPack.silentModeOperation).toEqual(clientInsPackMock.silent_mode_operation);
  expect(clientInsPack.startClientOnLogin).toEqual(clientInsPackMock.start_client_on_login);
  expect(clientInsPack.json).toEqual(Object.assign({}, clientInsPackMock));
  expect(clientInsPack.toString()).toEqual(JSON.stringify(clientInsPackMock, undefined, 2));
  expect(clientInsPack.description).toEqual(clientInsPackMock.description);
}

test('Properly get ssl vpn', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getSslVpn().then(sslVpn => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/sslvpn`);
    expect(sslVpn).toBeInstanceOf(EdgeSslVpnService);
    expect(sslVpn.authentication).not.toBeNull();
    if (sslVpn.authentication) {
      runAssertionsAgainstAuthenticationServersMock(sslVpn.authentication.authenticationServers);
      expect(sslVpn.authentication.secondaryAuthenticationServer).toBeNull();
      expect(sslVpn.authentication.json).toEqual(Object.assign({}, MockEdgeSslVpn.authentication));
      expect(sslVpn.authentication.toString()).toEqual(JSON.stringify(MockEdgeSslVpn.authentication, undefined, 2));
    }
    expect(sslVpn.ipPools).not.toBeNull();
    if (sslVpn.ipPools && MockEdgeSslVpn.ip_pools) {
      expect(sslVpn.ipPools.length).toEqual(MockEdgeSslVpn.ip_pools.length);
      let ipPool: EdgeSslVpnIpPool;
      let ipPoolMock: EdgeSslVpnIpPoolJson;
      for (const ipPoolIdx in sslVpn.ipPools) {
        ipPool = sslVpn.ipPools[ipPoolIdx];
        ipPoolMock = MockEdgeSslVpn.ip_pools[ipPoolIdx];
        expect(ipPool.description).toEqual(ipPoolMock.description);
        expect(ipPool.dnsSuffix).toEqual(ipPoolMock.dns_suffix);
        expect(ipPool.enabled).toEqual(ipPoolMock.enabled);
        expect(ipPool.gateway).toEqual(ipPoolMock.gateway);
        expect(ipPool.ipRange).toEqual(ipPoolMock.ip_range);
        expect(ipPool.primaryDns).toEqual(ipPoolMock.primary_dns);
        expect(ipPool.secondaryDns).toEqual(ipPoolMock.secondary_dns);
        expect(ipPool.winsServer).toEqual(ipPoolMock.wins_server);
        expect(ipPool.netmask).toEqual(ipPoolMock.netmask);
        expect(ipPool.json).toEqual(Object.assign({}, ipPoolMock));
        expect(ipPool.toString()).toEqual(JSON.stringify(ipPoolMock, undefined, 2));
      }
    }
    expect(sslVpn.privateNetworks).not.toBeNull();
    if (sslVpn.privateNetworks && MockEdgeSslVpn.private_networks) {
      expect(sslVpn.privateNetworks.length).toEqual(MockEdgeSslVpn.private_networks.length);
      let privateNetwork: EdgeSslVpnPrivateNetwork;
      let privateNetworkMock: EdgeSslVpnPrivateNetworkJson;
      for (const privateNetworkIdx in sslVpn.privateNetworks) {
        privateNetwork = sslVpn.privateNetworks[privateNetworkIdx];
        privateNetworkMock = MockEdgeSslVpn.private_networks[privateNetworkIdx];
        expect(privateNetwork.description).toEqual(privateNetworkMock.description);
        expect(privateNetwork.enabled).toEqual(privateNetworkMock.enabled);
        expect(privateNetwork.network).toEqual(privateNetworkMock.network);
        expect(privateNetwork.optimize).toEqual(privateNetworkMock.optimize);
        expect(privateNetwork.ports).toEqual(privateNetworkMock.ports);
        expect(privateNetwork.json).toEqual(Object.assign({}, privateNetworkMock));
        expect(privateNetwork.toString()).toEqual(JSON.stringify(privateNetworkMock, undefined, 2));
      }
    }
    expect(sslVpn.clientInstallPackages).not.toBeNull();
    if (sslVpn.clientInstallPackages && MockEdgeSslVpn.client_install_packages) {
      let clientInsPack: EdgeSslVpnClientInstallPackage;
      let clientInsPackMock: EdgeSslVpnClientInstallPackageJson;
      for (const clientInsPackIdx in sslVpn.clientInstallPackages) {
        clientInsPack = sslVpn.clientInstallPackages[clientInsPackIdx];
        clientInsPackMock = MockEdgeSslVpn.client_install_packages[clientInsPackIdx];
        runAssertionsAgainstMockClientInstallPackage(clientInsPack, clientInsPackMock);
      }
    }
    expect(sslVpn.cipherList).not.toBeNull();
    if (MockEdgeSslVpn.cipher_list) {
      expect(sslVpn.cipherList.length).toEqual(MockEdgeSslVpn.cipher_list.length);
    }
    expect(sslVpn.enabled).toEqual(MockEdgeSslVpn.enabled);
    expect(sslVpn.ip).toEqual(MockEdgeSslVpn.ip);
    expect(sslVpn.logEnabled).toEqual(MockEdgeSslVpn.log_enabled);
    expect(sslVpn.port).toEqual(MockEdgeSslVpn.port);
    expect(sslVpn.logLevel).toEqual(MockEdgeSslVpn.log_level);
    expect(sslVpn.json).toEqual(Object.assign({}, MockEdgeSslVpn));
    expect(sslVpn.toString()).toEqual(JSON.stringify(MockEdgeSslVpn, undefined, 2));
    expect(sslVpn.users).toBeDefined();
    expect(sslVpn.users.length).toBeGreaterThan(0);
    expect(sslVpn.authenticationConfig).not.toBeNull();
    if (sslVpn.authenticationConfig) {
      runAssertionsAgainstLocalAuthenticationServerMock(sslVpn.authenticationConfig,
        MockEdgeSslVpn.authentication_config as EdgeSslVpnLocalAuthenticationServerJson);
    }
  });
});

test('Properly implement the secondary authentication server', () => {
  runAssertionsAgainstSecondaryAuthenticationServerMocks();
});

test('Properly implement an EdgeSslVpnUser class', () => {
  const sslVpnUser = new EdgeSslVpnUser(MockSslVpnServiceUsers);
  expect(sslVpnUser.changePwdOnNextLogin).toEqual(MockSslVpnServiceUsers.change_pwd_on_next_login);
  expect(sslVpnUser.userId).toEqual(MockSslVpnServiceUsers.user_id);
  expect(sslVpnUser.description).toEqual(MockSslVpnServiceUsers.description);
  expect(sslVpnUser.disableAccount).toEqual(MockSslVpnServiceUsers.disable_account);
  expect(sslVpnUser.firstName).toEqual(MockSslVpnServiceUsers.first_name);
  expect(sslVpnUser.lastName).toEqual(MockSslVpnServiceUsers.last_name);
  expect(sslVpnUser.objectId).toEqual(MockSslVpnServiceUsers.object_id);
  expect(sslVpnUser.password).toEqual(MockSslVpnServiceUsers.password);
  expect(sslVpnUser.passwordNeverExpires).toEqual(MockSslVpnServiceUsers.password_never_expires);
  expect(sslVpnUser.json).toEqual(Object.assign({}, MockSslVpnServiceUsers));
  expect(sslVpnUser.toString()).toEqual(JSON.stringify(MockSslVpnServiceUsers, undefined, 2));
});
