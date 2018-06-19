import { LoggingSettingsRequestJson } from './logging-settings-request-json';
import { GlobalSettingsRequestJson } from './global-settings-request-json';
import { IpSecVpnSiteRequestJson } from './ip-sec-vpn-site-request-json';

/**
 * Edge Ip Sec Vpn Service Update Request JSON interface.
 */
export interface EdgeIpSecVpnServiceUpdateRequestJson {
  enabled: boolean;
  logging_settings: LoggingSettingsRequestJson;
  global_settings: GlobalSettingsRequestJson;
  sites: Array<IpSecVpnSiteRequestJson>;
}
