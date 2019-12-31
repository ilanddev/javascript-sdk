import { LoggingJson } from './logging-json';
import { IpPrefixJson } from './ip-prefix-json';

/**
 * Routing Global Configuration JSON
 */
export interface RoutingGlobalConfigJson {
  router_id: string;
  ecmp: boolean;
  logging: LoggingJson;
  ip_prefixes: Array<IpPrefixJson>;
}
