import { EncryptionAlgorithm } from './encyrption-algorithm';
import { AuthenticationMode } from './authentication-mode';
import { DHGroup } from './dh-group';

/**
 * Edge Ip Sec Vpn Site JSON interface.
 */
export interface IpSecVpnSiteJson {
  enabled: boolean;
  name: string;
  description: string;
  local_id: string;
  local_ip: string;
  peer_id: string;
  peer_ip: string;
  psk: string;
  encryption_algorithm: EncryptionAlgorithm;
  authentication_mode: AuthenticationMode;
  enable_pfs: boolean;
  dh_group: DHGroup;
  local_subnets: Array<string>;
  peer_subnets: Array<string>;
}
