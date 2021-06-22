export enum SAMLSignatureKeyNameEnum {
  NONE = 'NONE',
  KEY_ID = 'KEY_ID',
  CERT_SUBJECT = 'CERT_SUBJECT'
}

export type SAMLSignatureKeyName = keyof typeof SAMLSignatureKeyNameEnum;
