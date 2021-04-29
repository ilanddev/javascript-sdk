export enum SAMLPrincipalTypeEnum {
  ATTRIBUTE = 'ATTRIBUTE',
  FRIENDLY_ATTRIBUTE = 'FRIENDLY_ATTRIBUTE',
  SUBJECT = 'SUBJECT'
}

export type SAMLPrincipalType = keyof typeof SAMLPrincipalTypeEnum;
