import { EdgeGatewayL2vpnEncryptionAlgorithmType } from '../edge-gateway-l2vpn-encryption-algorithm-type';

export interface EdgeGatewayL2VpnClientConfigurationJson {
  server_address: string;
  server_port: number;
  ca_certificate: string;
  vnic: Array<number>;
  egress_optimization: Array<string>;
  encryption_algorithm: Array<EdgeGatewayL2vpnEncryptionAlgorithmType>;
}
