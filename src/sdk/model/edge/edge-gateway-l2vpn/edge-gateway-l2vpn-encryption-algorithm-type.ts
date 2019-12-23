export enum EdgeGatewayL2vpnEncryptionAlgorithm {
  ECDHE_RSA_AES128_GCM_SHA256 = 'ECDHE_RSA_AES128_GCM_SHA256',
  ECDHE_RSA_AES256_GCM_SHA384 = 'ECDHE_RSA_AES256_GCM_SHA384',
  AES128_GCM_SHA256 = 'AES128_GCM_SHA256',
  NULL_SHA256 = 'NULL_SHA256',
  NULL_MD5 = 'NULL_MD5'
}

export type EdgeGatewayL2vpnEncryptionAlgorithmType = keyof typeof EdgeGatewayL2vpnEncryptionAlgorithm;
