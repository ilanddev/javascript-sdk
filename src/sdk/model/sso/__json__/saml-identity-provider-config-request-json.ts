import { SAMLNameIdPolicyFormat } from './saml-name-id-policy-format';
import { SAMLPrincipalType } from './saml-principal-type';
import { SAMLSignatureAlgorithm } from './saml-signature-algorithm';
import { SAMLSignatureKeyName } from './saml-signature-key-name';

export interface SAMLIdentityProviderConfigRequestJson {
  enforce_sso: boolean;
  enabled: boolean;
  single_sign_on_service_url: string;
  single_logout_service_url?: string;
  name_id_policy_format?: SAMLNameIdPolicyFormat;
  principal_type?: SAMLPrincipalType;
  principal_attribute?: string;
  signature_algorithm?: SAMLSignatureAlgorithm;
  saml_xml_key_name_tranformer?: SAMLSignatureKeyName;
  backchannel_supported?: boolean;
  post_binding_response?: boolean;
  post_binding_authn_request?: boolean;
  post_binding_logout?: boolean;
  want_authn_requests_signed?: boolean;
  want_assertions_signed?: boolean;
  want_assertions_encrypted?: boolean;
  signing_certificate?: string;
  force_authn?: boolean;
  validate_signature?: boolean;
  allowed_clock_skew?: string;
}
