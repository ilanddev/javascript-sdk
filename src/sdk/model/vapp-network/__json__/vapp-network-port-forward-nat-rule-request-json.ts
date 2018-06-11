export interface VappNetworkPortForwardNATRuleRequestJson {
  external_port: string;
  forward_to_port: string;
  protocol: string;
  vm_interface: string;
  vm_local_id: string;
}
