import { LoggingSettingsJson } from './logging-settings-json';
import { GlobalSettingsJson } from './global-settings-json';
import { IpSecVpnSiteJson } from './ip-sec-vpn-site-json';

/**
 * Edge Ip Sec Vpn Service JSON interface.
 */
export interface EdgeIpsecVpnServiceJson {
  edge_uuid: string;
  enabled: boolean | null;
  logging_settings: LoggingSettingsJson;
  global_settings: GlobalSettingsJson;
  sites: Array<IpSecVpnSiteJson>;
}
