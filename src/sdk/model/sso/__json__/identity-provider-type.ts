export enum IdentityProviderTypeEnum {
  SAML = 'SAML',
  OIDC = 'OIDC'
}

export type IdentityProviderType = keyof typeof IdentityProviderTypeEnum;
