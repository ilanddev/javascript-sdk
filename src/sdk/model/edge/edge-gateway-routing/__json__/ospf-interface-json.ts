/**
 * OSPF Interface JSON
 */
export interface OSPFInterfaceJson {
  vnic: number;
  area_id: number;
  hello_interval: number;
  dead_interval: number;
  priority: number;
  cost: number;
  mtu_ignore: boolean;
}
