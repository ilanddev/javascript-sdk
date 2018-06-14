export interface VappResourceSummaryJson {
  reserved_cpu: number;
  reserved_mem: number;
  consumed_cpu: number;
  consumed_mem: number;
  consumed_disk: number;
  provisioned_disk: number;
  configured_disk: number;
  number_of_vms: number;
}
