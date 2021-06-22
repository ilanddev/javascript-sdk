import { IdentityProviderType } from './identity-provider-type';
import { IdentityProviderJson } from './identity-provider-json';

export interface SAMLIdentityProviderJson extends IdentityProviderJson {
  enforce_sso: boolean;
  enabled: boolean;
  single_logout_service_url: string;
  single_sign_on_service_url: string;
  name_id_policy_format: string;
  principal_type: string;
  principal_attribute: string;
  signature_algorithm: string;
  saml_xml_key_name_tranformer: string;
  backchannel_supported: boolean;
  post_binding_response: boolean;
  post_binding_authn_request: boolean;
  post_binding_logout: boolean;
  want_authn_requests_signed: boolean;
  want_assertions_signed: boolean;
  want_assertions_encrypted: boolean;
  signing_certificate: string;
  force_authn: boolean;
  validate_signature: boolean;
  allowed_clock_skew: string;
  type: IdentityProviderType;
}
