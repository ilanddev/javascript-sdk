import { X509CertificateJson } from './x509-certificate-json';

export interface CertificateJson {
  object_id: string;
  description: string;
  is_temporal: boolean;
  pem_encoding: string;
  x509_certificate: Array<X509CertificateJson>;
}
