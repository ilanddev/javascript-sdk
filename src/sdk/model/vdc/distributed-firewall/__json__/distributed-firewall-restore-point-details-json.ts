import { DistributedFirewallJson } from './distributed-firewall-json';

export interface DistributedFirewallRestorePointDetailsJson {
  description: string;
  restore_point_time: number;
  data: DistributedFirewallJson;
}
