import { DnsRecordType } from './dns-record-type';

/**
 * API DNS Record Update Request JSON format.
 */
export interface DnsRecordUpdateRequestJson {
  id: number;
  zone_id: number;
  host: string;
  type: DnsRecordType;
  value: string;
  ip: string;
  ttl: number;
  description: string;
  priority: number;
}
