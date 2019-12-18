/**
 * Edge Gateway L2 VPN Site Type Enum
 */
export enum EdgeGatewayL2VpnSiteTypeEnum {
  CLIENT = 'CLIENT',
  SERVER = 'SERVER'
}

/**
 * Edge Gateway L2 VPN Site Type
 */
export type EdgeGatewayL2VpnSiteType = keyof typeof EdgeGatewayL2VpnSiteTypeEnum;
