export enum EdgeGatewayIpsecComplianceSuiteTypeEnum {
  NONE = 'NONE',
  CNSA = 'CNSA',
  PRIME = 'PRIME',
  SUITE_B_GCM_128 = 'SUITE_B_GCM_128',
  SUITE_B_GCM_256 = 'SUITE_B_GCM_256',
  FOUNDATION = 'FOUNDATION'
}

export type EdgeGatewayIpsecComplianceSuiteType = keyof typeof EdgeGatewayIpsecComplianceSuiteTypeEnum;
