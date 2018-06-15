import { LoadBalancerPoolMemberUpdateRequestJson } from './load-balancer-pool-member-update-request-json';
import { LoadBalancerPoolServicePortUpdateRequestJson } from './load-balancer-pool-service-port-update-request-jston';

/**
 * Load Balancer Pool Update Request JSON interface.
 */
export interface LoadBalancerPoolUpdateRequestJson {
  id: string;
  name: string;
  description: string;
  service_ports: Array<LoadBalancerPoolServicePortUpdateRequestJson>;
  members: Array<LoadBalancerPoolMemberUpdateRequestJson>;
  operational: boolean;
  error_details: string;
}
