import { IdentityProviderType } from './identity-provider-type';

export interface IdentityProviderJson {
  enforce_sso: boolean;
  enabled: boolean;
  type: IdentityProviderType;
}
