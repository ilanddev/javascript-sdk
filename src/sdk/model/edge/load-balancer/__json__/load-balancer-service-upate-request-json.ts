import { LoadBalancerPoolUpdateRequestJson } from './load-balancer-pool-update-request-json';
import { LoadBalancerVirtualServerUpdateRequestJson } from './load-balancer-virtual-server-update-request-json';

/**
 * Load Balancer Service Update Request JSON interface.
 */
export interface LoadBalancerServiceUpdateRequestJson {
  edge_uuid: string;
  enabled: boolean;
  pools: Array<LoadBalancerPoolUpdateRequestJson>;
  virtual_servers: Array<LoadBalancerVirtualServerUpdateRequestJson>;
}
