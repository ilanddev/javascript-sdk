import { OIDCClientAuthType } from './oidc-client-auth-type';
import { OIDCPromptType } from './oidc-prompt-type';

export interface OIDCIdentityProviderConfigRequestJson {
  enforce_sso: boolean;
  enabled: boolean;
  authorization_url: string;
  token_url: string;
  client_id: string;
  client_secret: string;
  client_auth: OIDCClientAuthType;

  logout_url?: string;
  login_hint?: boolean;
  ui_locales?: boolean;
  user_info_url?: string;
  backchannel_supported?: boolean;
  disable_user_info?: boolean;
  issuer?: string;
  default_scope?: string;
  prompt?: OIDCPromptType;
  accepts_prompt_none_forward_from_client?: boolean;
  validate_signature?: boolean;
  use_jwks_url?: boolean;
  jwks_url?: string;
  public_key_signature_verifier_key?: string;
  public_key_signature_verifier_key_id?: string;
  allowed_clock_skew?: number;
  forward_parameters?: string;
}
