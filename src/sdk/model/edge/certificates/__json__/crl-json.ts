import { X509CRLJson } from './x509-crl-json';

export interface CRLJson {
  object_id: string;
  description: string;
  scope: string;
  is_temporal: boolean;
  issuer_cn: string;
  pem_encoding: string;
  x509_c_r_l: X509CRLJson;
}
