import { X509CertificateJson } from './x509-certificate-json';

export interface CertificateJson {
  object_id: string;
  description: string;
  scope: string;
  subject_cn: string;
  issuer_cn: string;
  pem_encoding: string;
  certificate_type: string | null;
  days_left_to_expiry: number;
  x509_certificate: Array<X509CertificateJson>;
  is_temporal: boolean;
}
