import { EdgeGatewayIpsecComplianceSuiteType } from '../edge-gateway-ipsec-compliance-suite-type';
import { EdgeGatewayIpsecDigestAlgorithmType } from '../edge-gateway-ipsec-digest-algorithm-type';
import { EdgeGatewayIpsecEncryptionAlgorithmType } from '../edge-gateway-ipsec-encryption-algorithm-type';
import { EdgeGatewayIpsecIkeOptionType } from '../edge-gateway-ipsec-ike-option-type';
import { EdgeGatewayIPsecSessionType } from '../edge-gateway-ipsec-session-type';
import { EdgeGatewayIpsecTunnelInterfaceJson } from './edge-gateway-ipsec-tunnel-interface-json';

export interface EdgeGatewayIpsecSiteJson {
  enabled: boolean;
  name: string;
  local_id: string;
  local_ip: string;
  peer_id: string;
  peer_ip: string;
  ipsec_session_type: EdgeGatewayIPsecSessionType;
  compliance_suite: EdgeGatewayIpsecComplianceSuiteType;
  encryption_algorithm: EdgeGatewayIpsecEncryptionAlgorithmType;
  enable_pfs: boolean;
  dh_group: string;
  local_subnets: Array<string>;
  peer_subnets: Array<string>;
  psk: string;
  authentication_mode: string;
  extension: string;
  ike_option: EdgeGatewayIpsecIkeOptionType;
  digest_algorithm: EdgeGatewayIpsecDigestAlgorithmType;
  responder_only: boolean;
  tunnel_interface: EdgeGatewayIpsecTunnelInterfaceJson;
}
