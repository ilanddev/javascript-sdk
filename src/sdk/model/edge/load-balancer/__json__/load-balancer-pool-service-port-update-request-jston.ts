/**
 * Load Balancer Pool Service Port Update Request JSON interface.
 */
export interface LoadBalancerPoolServicePortUpdateRequestJson {
  enabled: boolean;
  protocol: string;
  algorithm: string;
  port: string;
  health_check_port: string;
}
