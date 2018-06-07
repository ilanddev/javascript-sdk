/**
 * Nessus Scan Opt Out JSON interface.
 */
export interface NessusScanOptOutJson {
  org_uuid: string;
  opt_out: boolean;
  exclusions: Array<string>;
}
