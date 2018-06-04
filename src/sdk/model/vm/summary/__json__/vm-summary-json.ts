/**
 * VM summary JSON
 */
export interface VmSummaryJson {
  reserved_cpu: number;
  reserved_mem: number;
  consumed_cpu: number;
  consumed_mem: number;
  consumed_disk: number;
  provisioned_disk: number;
  configured_disk: number;
}
