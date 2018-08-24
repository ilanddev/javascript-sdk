/**
 * Edge Ip Sec Vpn Global Settings JSON interface.
 */
export interface GlobalSettingsJson {
  psk: string;
  service_certificate: string;
  ca_certificates: Array<string>;
  crl_certificates: Array<string>;
}
