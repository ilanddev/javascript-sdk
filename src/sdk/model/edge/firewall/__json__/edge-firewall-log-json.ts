/**
 * Interface for Edge firewall log.
 */
export interface EdgeFirewallLogJson {
  edge_uuid: string | null;
  time: number | null;
  dest_port: number | null;
  count: number;
  dest_ip: string | null;
  action: string | null;
  source_ip: string | null;
  protocol: string | null;
}
