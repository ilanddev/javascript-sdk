import { LoggingJson } from './logging-json';
import { IpPrefixJson } from './ip-prefix-json';

/**
 * Routing Global Configuration Update Request JSON
 */
export interface RoutingGlobalConfigUpdateRequestJson {
  router_id: string;
  ecmp: boolean;
  logging: LoggingJson;
  ip_prefixes: Array<IpPrefixJson>;
}
