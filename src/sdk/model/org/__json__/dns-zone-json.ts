import { DNSRecordType } from './dns-zone-type';

/**
 * API DNS Zone JSON representation.
 */
export interface DnsZoneJson {
  id: number;
  name: string;
  resource_id: number;
  serial: number;
  refresh: number;
  retry: number;
  expire: number;
  minimum: number;
  soa: string;
  tags: string;
  ttl: string;
  enable_dns_sec: boolean;
  auto_check: boolean;
  record_id: number;
  record_host: string;
  record_type: DNSRecordType;
  record_value: string;
  record_description: string;
  record_ttl: string;
  record_ordering: number;
  record_errors: string;
  user_can_create: boolean;
  user_can_delete: boolean;
  user_can_update: boolean;
  unpaged_rows: number;
}
