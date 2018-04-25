import { AxiosResponse } from 'axios';
import { EdgeIpsecVpnServiceJson } from '../../../model/edge/ipsec-vpn/json/edge-ipsec-vpn';

export const MockEdgeIpsecVpn: EdgeIpsecVpnServiceJson = {
  'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
  'enabled': true,
  'endpoints': [
    {
      'public_ip': '',
      'network': 'iland Dev DEV02 Advanced Network'
    }
  ],
  'tunnels': [
    {
      'name': 'DEV02A to DAL',
      'description': '',
      'peer_ip_address': '69.64.172.190',
      'peer_id': '69.64.172.190',
      'local_id': '209.143.151.73',
      'local_ip_address': '209.143.151.73',
      'local_subnets': [
        {
          'name': '10.1.22.0/24',
          'gateway': '10.1.22.1',
          'netmask': '255.255.255.0'
        }
      ],
      'peer_subnets': [
        {
          'name': '10.0.12.0/24',
          'gateway': '10.0.12.0',
          'netmask': '255.255.255.0'
        }
      ],
      'shared_secret': '',
      'shared_secret_encrypted': false,
      'encryption_protocol': 'AES256',
      'mtu': 0,
      'enabled': true,
      'operational': false,
      'error_details': '',
      'vpn_peer': {
        'type': 'third party',
        'id': '69.64.172.190',
        'name': '',
        'vcd_url': '',
        'vcd_org': '',
        'vcd_username': ''
      }
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
