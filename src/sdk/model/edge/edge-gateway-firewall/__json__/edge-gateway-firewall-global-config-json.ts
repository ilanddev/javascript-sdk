/**
 * Firewall Global Config JSON
 */
export interface EdgeGatewayFirewallGlobalConfigJson {
  tcp_pick_ongoing_connections: boolean;
  tcp_allow_out_of_window_packets: boolean;
  tcp_send_reset_for_closed_vse_ports: boolean;
  drop_invalid_traffic: boolean;
  log_invalid_traffic: boolean;
  tcp_timeout_open: number;
  tcp_timeout_established: number;
  tcp_timeout_close: number;
  udp_timeout: number;
  icmp_timeout: number;
  icmp6_timeout: number;
  ip_generic_timeout: number;
  enable_syn_flood_protection: boolean;
  log_icmp_errors: boolean;
  drop_icmp_replays: boolean;
  enable_snmp_alg: boolean;
  enable_ftp_alg: boolean;
  enable_tftp_alg: boolean;
}
