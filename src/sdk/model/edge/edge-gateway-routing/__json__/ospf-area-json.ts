import { RoutingAreaType } from './routing-area-type';
import { AuthenticationJson } from './authentication-json';

/**
 * OSPF Area JSON
 */
export interface OSPFAreaJson {
  area_id: number;
  type: RoutingAreaType;
  authentication: AuthenticationJson;
  translate_type_7_to_type_5: boolean;
}
