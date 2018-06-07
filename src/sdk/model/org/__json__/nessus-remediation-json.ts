/**
 * Nessus Remediation API JSON interface.
 */
export interface NessusRemediationJson {
  value: string;
  remediation: string;
  hosts: number;
  vulns: number;
}
