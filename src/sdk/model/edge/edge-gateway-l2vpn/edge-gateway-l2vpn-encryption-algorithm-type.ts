export enum EdgeGatewayL2vpnEncryptionAlgorithm {
  ECDHE_RSA_AES128_GCM_SHA256 = 'ECDHE_RSA_AES128_GCM_SHA256',
  ECDHE_RSA_AES256_GCM_SHA384 = 'ECDHE_RSA_AES256_GCM_SHA384',
  NULL_SHA256 = 'NULL_SHA256',
  AES128_GCM_SHA256 = 'AES128_GCM_SHA256',
  NULL_MD5 = 'NULL_MD5',
  AES128_SHA = 'AES128_SHA',
  AES256_SHA = 'AES256_SHA',
  DES_CBC3_SHA = 'DES_CBC3_SHA'
}

export type EdgeGatewayL2vpnEncryptionAlgorithmType = keyof typeof EdgeGatewayL2vpnEncryptionAlgorithm;
