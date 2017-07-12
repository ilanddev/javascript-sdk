import { EntityJson } from './entity';
import { IpRangeJson } from './ip-range';

/**
 * Interface for Edge Gateway JSON properties.
 */
export interface EdgeJson extends EntityJson {
  status: number;
  vdc_uuid: string;
  org_uuid: string;
  interfaces: Array<EdgeInterfaceJson>;
  backward_compatibility_mode: boolean;
  gateway_backing_config: EdgeBackingConfigurationType;
  high_availability_enabled: boolean;
  default_dns_relay_route: boolean;
  location_id: string;
  description: string;
  vcloud_href: string | null;
}

/**
 * Interface for Edge Interface JSON representation.
 */
export interface EdgeInterfaceJson {
  display_name: string;
  name: string;
  in_rate_limit: number;
  out_rate_limit: number;
  type: EdgeInterfaceType;
  apply_rate_limit: boolean;
  default_route: boolean;
  network: string;
  network_uuid: string;
  subnet_participation: Array<EdgeSubnetParticipationJson>;
}

/**
 * Interface for Edge SubnetParticipation JSON representation.
 */
export interface EdgeSubnetParticipationJson {
  gateway: string;
  netmask: string;
  ip_address: string;
  ip_ranges: Array<IpRangeJson>;
}

/**
 * Enumeration of possible edge interface types.
 */
export type EdgeInterfaceType = 'internal' | 'uplink';

/**
 * Enumeration of possible edge backing configuration types.
 */
export type EdgeBackingConfigurationType = 'compact' | 'full';
