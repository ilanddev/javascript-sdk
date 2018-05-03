import { AxiosResponse } from 'axios';
import { EdgeSslVpnServiceJson } from '../__json__/edge-ssl-vpn-json';
import { VpnLocalAuthenticationServerType } from '../__json__/vpn-local-authentication-server-type';

export const MockEdgeSslVpn: EdgeSslVpnServiceJson = {
  'enabled': true,
  'log_enabled': true,
  'log_level': 'notice',
  'ip': '74.220.148.15',
  'port': 443,
  'cipher_list': [
    'AES128-SHA'
  ],
  'private_networks': [
    {
      'enabled': true,
      'description': '',
      'network': '10.0.11.0/24',
      'ports': '0-65535',
      'optimize': true
    }
  ],
  'users': null,
  'ip_pools': [
    {
      'description': '',
      'ip_range': '192.168.11.2-192.168.11.254',
      'netmask': '255.255.255.0',
      'gateway': '192.168.11.1',
      'primary_dns': '',
      'secondary_dns': '',
      'dns_suffix': '',
      'wins_server': '',
      'enabled': true
    },
    {
      'description': '',
      'ip_range': '192.168.14.2-192.168.14.50',
      'netmask': '255.255.255.0',
      'gateway': '192.168.14.1',
      'primary_dns': '',
      'secondary_dns': '',
      'dns_suffix': '',
      'wins_server': '',
      'enabled': true
    }
  ],
  'client_install_packages': [
    {
      'profile_name': 'default',
      'gateway_list': [
        {
          'host_name': '74.220.148.15',
          'port': '443'
        }
      ],
      'start_client_on_login': false,
      'hide_systray_icon': false,
      'remember_password': false,
      'silent_mode_operation': false,
      'silent_mode_installation': false,
      'hide_network_adaptor': false,
      'create_desktop_icon': true,
      'enforce_server_security_cert_validation': true,
      'create_linux_client': true,
      'create_mac_client': true,
      'description': 'default client install package from iland portal',
      'enabled': true
    }
  ],
  'authentication_config': {
    'enabled': true,
    'pwd_min_length': 1,
    'pwd_max_length': 63,
    'pwd_min_alphabets': 0,
    'pwd_min_digits': 0,
    'pwd_min_special_characters': 0,
    'pwd_allow_user_id_within_pwd': true,
    'pwd_lifetime': 30,
    'pwd_expiry_notification': 25,
    'retry_count': 3,
    'retry_duration': 1,
    'lockout_duration': 1,
    'type': 'LOCAL'
  },
  'authentication': {
    'authentication_servers': [
      {
        'type': 'LOCAL',
        'enabled': true,
        'pwd_min_length': 1,
        'pwd_max_length': 63,
        'pwd_min_alphabets': 0,
        'pwd_min_digits': 0,
        'pwd_min_special_characters': 0,
        'pwd_allow_user_id_within_pwd': true,
        'pwd_lifetime': 30,
        'pwd_expiry_notification': 25,
        'retry_count': 3,
        'retry_duration': 1,
        'lockout_duration': 1
      }, {
        'type': 'LDAP',
        'enabled': true,
        'ip': '',
        'port': 8080,
        'timeout': 30,
        'enable_ssl': true,
        'search_base': '',
        'bind_domain_name': '',
        'bind_password': '',
        'login_attribute_name': '',
        'search_filter': ''
      }, {
        'type': 'AD',
        'enabled': true,
        'ip': '',
        'port': 60013,
        'timeout': 300,
        'enable_ssl': true,
        'search_base': '',
        'bind_domain_name': '',
        'bind_password': '',
        'login_attribute_name': '',
        'search_filter': '',
        'terminate_session_on_auth_fails': false
      }, {
        'type': 'RADIUS',
        'ip': '',
        'port': 54621,
        'timeout': 30,
        'secret': '',
        'nas_ip': '',
        'retry_count': 5
      }, {
        'type': 'RSA',
        'timeout': 30,
        'source_ip': ''
      }
    ],
    'secondary_authentication_server': null
  }
};

export const MockSslVpnServiceUsers = {
  'user_id': 'fake',
  'object_id': 'fake',
  'first_name': 'fake',
  'last_name': 'user',
  'description': 'fake user',
  'disable_account': true,
  'password': 'password',
  'password_never_expires': true,
  'change_pwd_on_next_login': false
};

export const MockLocalAuthenticationServer = {
  'authentication_servers': [],
  'secondary_authentication_server': {
    'type': 'LOCAL' as VpnLocalAuthenticationServerType,
    'enabled': true,
    'pwd_min_length': 1,
    'pwd_max_length': 63,
    'pwd_min_alphabets': 0,
    'pwd_min_digits': 0,
    'pwd_min_special_characters': 0,
    'pwd_allow_user_id_within_pwd': true,
    'pwd_lifetime': 30,
    'pwd_expiry_notification': 25,
    'retry_count': 3,
    'retry_duration': 1,
    'lockout_duration': 1
  }
};

export const MockRsaAuthenticationServer = {
  'authentication_servers': [],
  'secondary_authentication_server': {
    'type': 'RSA' as VpnLocalAuthenticationServerType,
    'timeout': 30,
    'source_ip': ''
  }
};

export const MockRadiusAuthenticationServer = {
  'authentication_servers': [],
  'secondary_authentication_server': {
    'type': 'RADIUS' as VpnLocalAuthenticationServerType,
    'ip': '',
    'port': 54621,
    'timeout': 30,
    'secret': '',
    'nas_ip': '',
    'retry_count': 5
  }
};

export const MockAdAuthenticationServer = {
  'authentication_servers': [],
  'secondary_authentication_server': {
    'type': 'AD' as VpnLocalAuthenticationServerType,
    'enabled': true,
    'ip': '',
    'port': 60013,
    'timeout': 300,
    'enable_ssl': true,
    'search_base': '',
    'bind_domain_name': '',
    'bind_password': '',
    'login_attribute_name': '',
    'search_filter': '',
    'terminate_session_on_auth_fails': false
  }
};

export const MockLdapAuthenticationServer = {
  'authentication_servers': [],
  'secondary_authentication_server': {
    'type': 'LDAP' as VpnLocalAuthenticationServerType,
    'enabled': true,
    'ip': '',
    'port': 8080,
    'timeout': 30,
    'enable_ssl': true,
    'search_base': '',
    'bind_domain_name': '',
    'bind_password': '',
    'login_attribute_name': '',
    'search_filter': ''
  }
};

export const MockEdgeSslVpnResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeSslVpn,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
