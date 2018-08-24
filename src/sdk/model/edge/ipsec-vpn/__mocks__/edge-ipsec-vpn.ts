import { AxiosResponse } from 'axios';
import { EdgeIpsecVpnServiceJson } from '../__json__/edge-ipsec-vpn-json';

export const MockEdgeIpsecVpn: EdgeIpsecVpnServiceJson = {
  'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
  'enabled': true,
  'logging_settings': [
    {
      'log_level': 'mock-log-level',
      'enabled': true
    }
  ],
  'global_settings': [
    {
      'psk': 'mock-psk',
      'service_certificate': 'mock-service-certificate',
      'ca_certificates': ['mock-ca-certificate'],
      'crl_certificates': ['mock-crl-certificate']
    }
  ],
  'sites': [
    {
      'name': 'Tunnel name',
      'description': 'Tunnel desc',
      'enabled': true,
      'local_id': '10.11.12.13',
      'local_ip': '10.11.12.13',
      'peer_id': '10.11.11.11',
      'peer_ip': '10.11.11.11',
      'psk': 'tunnelpsk',
      'encryption_algorithm': 'AES',
      'authentication_mode': 'PSK',
      'enable_pfs': true,
      'dh_group': 'DH2',
      'local_subnets': [
        '10.10.11.1/24'
      ],
      'peer_subnets': [
        '11.11.11.0/12'
      ]
    }
  ]
};

export const MockEdgeIpsecVpnResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockEdgeIpsecVpn,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
