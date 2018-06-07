/**
 * Nessus Scan Opt Out Create Request API JSON.
 */
export interface NessusScanOptOutCreateRequestJson {
  opt_out: boolean;
  exclusions: Array<string>;
}
