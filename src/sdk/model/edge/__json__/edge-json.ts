import { EdgeInterfaceJson } from '../edge-interface/__json__/edge-interface-json';
import { EntityJson } from '../../common/__json__/entity-json';
import { EdgeBackingConfigurationType } from './edge-backing-configuration-type';

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
