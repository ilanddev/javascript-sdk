export type BillField = 'CPU' |
    'CPU_USAGE' |
    'CPU_BURST_USAGE' |
    'CPU_BURST' |
    'CPU_RES_USAGE' |
    'MEMORY' |
    'MEMORY_USAGE' |
    'MEMORY_BURST' |
    'MEMORY_BURST_USAGE' |
    'MEMORY_RES_USAGE' |
    'DISK' |
    'DISK_USAGE' |
    'DISK_BURST' |
    'DISK_BURST_USAGE' |
    'BANDWIDTH' |
    'BANDWIDTH_USAGE' |
    'BANDWIDTH_BURST' |
    'BANDWIDTH_RES_USAGE' |
    'BANDWIDTH_BURST_USAGE';

export interface BillingSampleJson {
  time: number;
  value: number;
  additional_fields: { [key in BillField]: number };
}
