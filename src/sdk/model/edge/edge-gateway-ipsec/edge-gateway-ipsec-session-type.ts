export enum EdgeGatewayIPsecSessionTypeEnum {
  POLICY_BASED_SESSION = 'POLICY_BASED_SESSION',
  ROUTE_BASED_SESSION = 'ROUTE_BASED_SESSION'
}

export type EdgeGatewayIPsecSessionType = keyof typeof EdgeGatewayIPsecSessionTypeEnum;
