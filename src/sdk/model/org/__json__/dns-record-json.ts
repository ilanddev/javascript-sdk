import { DnsRecordType } from './dns-record-type';

/**
 * API DNS Record JSON representation.
 */
export interface DnsRecordJson {
  id: number;
  zone_id: number;
  zone_name: string;
  host: string;
  description?: string;
  ttl?: number;
  ordering: string;
  ip?: string;
  last_modified?: number;
  value: string;
  type: DnsRecordType;
  priority?: number;
}
