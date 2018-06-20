/**
 * Nat Service Update Request JSON.
 */
export interface NATServiceUpdateRequestJson {
  external_ip: string;
  nat_type: string;
  policy: string;
  enabled: boolean;
}
