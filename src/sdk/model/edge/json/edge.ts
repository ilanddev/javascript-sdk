import { EntityJson } from '../../json/entity';
import { IpRangeJson } from '../../json/ip-range';

/**
 * Interface for Edge Gateway JSON properties.
 */
export interface EdgeJson extends EntityJson {
  status: number | null;
  vdc_uuid: string | null;
  org_uuid: string | null;
  interfaces: Array<EdgeInterfaceJson> | null;
  backward_compatibility_mode: boolean;
  gateway_backing_config: EdgeBackingConfigurationType | null;
  high_availability_enabled: boolean | null;
  default_dns_relay_route: boolean | null;
  location_id: string | null;
  description: string | null;
  vcloud_href: string | null;
}

/**
 * Interface for Edge Interface JSON representation.
 */
export interface EdgeInterfaceJson {
  display_name: string | null;
  name: string;
  in_rate_limit: number;
  out_rate_limit: number;
  type: EdgeInterfaceType | null;
  apply_rate_limit: boolean;
  default_route: boolean | null;
  network: string | null;
  network_uuid: string | null;
  subnet_participation: Array<EdgeSubnetParticipationJson> | null;
}

/**
 * Interface for Edge SubnetParticipation JSON representation.
 */
export interface EdgeSubnetParticipationJson {
  gateway: string | null;
  netmask: string | null;
  ip_address: string | null;
  ip_ranges: Array<IpRangeJson> | null;
}

export interface NatServiceJson {
  external_ip: string | null;
  type: string | null;
  policy: string | null;
  rules: Array<GatewayNatRuleJson> | null;
  enabled: boolean | null;
}

export interface GatewayNatRuleJson {
  description: string | null;
  id: number | null;
  type: string | null;
  enabled: boolean;
  icmp_sub_type: string | null;
  original_ip: string | null;
  original_port: string | null;
  protocol: string | null;
  translated_ip: string | null;
  translated_port: string | null;
  interface: string | null;
  idx: number;
}

/**
 * Enumeration of possible edge interface types.
 */
export type EdgeInterfaceType = 'internal' | 'uplink';

/**
 * Enumeration of possible edge backing configuration types.
 */
export type EdgeBackingConfigurationType = 'compact' | 'full';
