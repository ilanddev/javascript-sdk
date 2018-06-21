export interface VmBootupLogJson {
  vm_uuid: string;
  vm_name: string;
  screenshot: Uint8Array;
  timestamp: number;
  ip_address: string;
  error_log: string;
}
