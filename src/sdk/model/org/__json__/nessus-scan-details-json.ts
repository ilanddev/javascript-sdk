import { NessusScanInfoJson } from './nessus-scan-info-json';
import { NessusRemediationsJson } from './nessus-remediations-json';
import { NessusVulnerabilityJson } from './nessus-vulnerability-json';
import { NessusHostJson } from './nessus-host-json';
import { NessusHistoryJson } from './nessus-history-json';
import { NessusNoteJson } from './nessus-note-json';

/**
 * Nessus Scan Details API JSON interface.
 */
export interface NessusScanDetailsJson {
  info: NessusScanInfoJson;
  remediations: NessusRemediationsJson;
  vulnerabilities: Array<NessusVulnerabilityJson>;
  hosts: Array<NessusHostJson>;
  comp_hosts: Array<NessusHostJson>;
  history: Array<NessusHistoryJson>;
  notes: Array<NessusNoteJson>;
  compliance: Array<NessusVulnerabilityJson>;
  vulns_by_host: { [key: number]: Array<NessusVulnerabilityJson> };
}
