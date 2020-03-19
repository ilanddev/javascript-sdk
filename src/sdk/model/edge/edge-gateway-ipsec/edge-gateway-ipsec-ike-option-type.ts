export enum EdgeGatewayIpsecIkeOptionTypeEnum {
  IKEV_1 = 'IKEV_1',
  IKEV_2 = 'IKEV_2',
  IKE_FLEX = 'IKE_FLEX'
}

export type EdgeGatewayIpsecIkeOptionType = keyof typeof EdgeGatewayIpsecIkeOptionTypeEnum;
