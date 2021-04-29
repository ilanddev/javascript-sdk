export enum SAMLSignatureAlgorithmEnum {
  RSA_SHA1 = 'RSA_SHA1',
  RSA_SHA256 = 'RSA_SHA256',
  RSA_SHA512 = 'RSA_SHA512',
  DSA_SHA1 = 'DSA_SHA1'
}

export type SAMLSignatureAlgorithm = keyof typeof SAMLSignatureAlgorithmEnum;
