import { LoadBalancerVirtualServerServiceProfileUpdateRequestJson } from
      './load-balancer-virtual-server-service-profile-update-request-json';

/**
 * Load Balancer Virtual Server Update Request JSON interface.
 */
export interface LoadBalancerVirtualServerUpdateRequestJson {
  name: string;
  enabled: boolean;
  description: string;
  ip_address: string;
  service_profiles: Array<LoadBalancerVirtualServerServiceProfileUpdateRequestJson>;
  logging: boolean;
  pool: string;
  network: string;
}
