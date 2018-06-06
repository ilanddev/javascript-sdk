import { NessusScanSettingsUpdateRequestJson } from './nessus-scan-settings-update-request-json';

/**
 * Nessus Scan Update API Request JSON.
 */
export interface NessusScanUpdateRequestJson {
  template_uuid: string;
  scan_settings: NessusScanSettingsUpdateRequestJson;
}
