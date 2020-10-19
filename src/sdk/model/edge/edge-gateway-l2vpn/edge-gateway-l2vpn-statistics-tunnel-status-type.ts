/**
 * Edge Gateway L2VPN Tunnel Status Enum
 */
export enum EdgeGatewayL2vpnTunnelStatusEnum {
  UP = 'UP',
  DOWN = 'DOWN'
}

/**
 * Edge Gateway L2VPN Tunnel Status Type
 */
export type EdgeGatewayL2vpnTunnelStatusType = keyof typeof EdgeGatewayL2vpnTunnelStatusEnum;
