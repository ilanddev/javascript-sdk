export enum EdgeGatewayIpsecEncryptionAlgorithmTypeEnum {
  AES = 'AES',
  AES_256 = 'AES_256',
  TRIPLE_DES = 'TRIPLE_DES',
  AES_GCM = 'AES_GCM'
}

export type EdgeGatewayIpsecEncryptionAlgorithmType = keyof typeof EdgeGatewayIpsecEncryptionAlgorithmTypeEnum;
