export interface TrustObjectRequestJson {
  pem_encoding: string;
  private_key?: string;
  passphrase?: string;
  description?: string;
}
