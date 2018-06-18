/**
 * Global Settings Request JSON Interface.
 */
export interface GlobalSettingsRequestJson {
  psk: string;
  service_certificate: string;
  ca_certificates: Array<string>;
  crl_certificates: Array<string>;
}
