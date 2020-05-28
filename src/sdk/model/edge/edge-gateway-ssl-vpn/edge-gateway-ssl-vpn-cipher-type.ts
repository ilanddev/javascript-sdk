export enum EdgeGatewaySslVpnCipherTypeEnum {
  AES128_SHA = 'AES128_SHA',
  AES256_SHA = 'AES256_SHA',
  AES128_GCM_SHA256 = 'AES128_GCM_SHA256',
  ECDHE_RSA_AES128_GCM_SHA256 = 'ECDHE_RSA_AES128_GCM_SHA256',
  ECDHE_RSA_AES256_GCM_SHA384 = 'ECDHE_RSA_AES256_GCM_SHA384',
  DES_CBC3_SHA = 'DES_CBC3_SHA'
}

export type EdgeGatewaySslVpnCipherType = keyof typeof EdgeGatewaySslVpnCipherTypeEnum;
