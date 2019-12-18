import {
  EdgeGatewayL2vpnEncryptionAlgorithmType
} from '../edge-gateway-l2vpn-encryption-algorithm-type';
import { EdgeGatewayL2VpnPeerSiteJson } from './edge-gateway-l2vpn-peer-site-json';

export interface EdgeGatewayL2VpnServerConfigurationJson {
  listener_ip: string;
  listener_port: number;
  encryption_algorithm: Array<EdgeGatewayL2vpnEncryptionAlgorithmType>;
  server_certificate: string;
  peer_sites: Array<EdgeGatewayL2VpnPeerSiteJson>;
}
