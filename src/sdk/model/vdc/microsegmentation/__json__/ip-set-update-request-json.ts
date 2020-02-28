/**
 * IP Set Update Request JSON
 */
export interface IpSetUpdateRequestJson {
  object_id: string;
  description: string;
  name: string;
  value: string;
  inheritance_allowed: boolean;
  revision: number;
}
