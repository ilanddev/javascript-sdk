export interface X509CertificateJson {
  subject_cn: string;
  issuer_cn: string;
  version: number;
  serial_number: string;
  signature_algo_name: string;
  signature: string;
  not_before: number;
  not_after: number;
  issuer: string;
  subject: string;
  public_key_algo: string;
  public_key_length: number;
  rsa_public_key_modulus: string;
  rsa_public_key_exponent: number;
  sha1_hash: string;
  md5_hash: string;
  is_ca: boolean;
  is_valid: boolean;
}
