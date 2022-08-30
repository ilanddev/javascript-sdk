import { DnsRecordType } from './dns-record-type';

/**
 * API DNS Record Create Request JSON format.
 */
export interface DnsRecordCreateRequestJson {
  zone_id: number;
  host: string;
  type: DnsRecordType;
  value: string;
  ip: string;
  ttl: number;
  description: string;
  priority: number;
}
