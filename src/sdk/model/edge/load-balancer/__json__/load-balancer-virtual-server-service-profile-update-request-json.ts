import { LoadBalancerPersistenceUpdateRequestJson } from './load-balancer-persistence-update-request-json';

/**
 * Load Balancer Virtual Server Service Profile Update Request JSON interface.
 */
export interface LoadBalancerVirtualServerServiceProfileUpdateRequestJson {
  enabled: boolean;
  protocol: string;
  port: string;
  persistence: LoadBalancerPersistenceUpdateRequestJson;
}
