import { NessusRemediationJson } from './nessus-remediation-json';

/**
 * Nessus Remediations JSON API interface.
 */
export interface NessusRemediationsJson {
  remediations: Array<NessusRemediationJson>;
  num_hosts: number;
  num_cves: number;
  num_impacted_hosts: number;
  num_remediated_cves: number;
}
