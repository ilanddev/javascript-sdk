export interface VappNetworkInterfaceJson {
  vapp_uuid: string;
  vapp_network_uuid: string;
  vm_uuid: string;
  vnic_id: number;
  ip_address: string;
  vm_local_id: string;
  ip_translation_mapped: boolean;
  vm_name: string;
}
