import { AxiosResponse } from 'axios';
import { DnsZoneJson } from '../__json__/dns-zone-json';
import { CheckDnsZoneJson } from '../__json__/check-dns-zone-json';

export const MockOrgDnsZonesJson: Array<DnsZoneJson> = [{
  id: 1,
  name: 'string',
  resource_id: 1,
  serial: 1,
  refresh: 1,
  retry: 1,
  expire: 1,
  minimum: 1,
  soa: 'string',
  tags: 'string',
  ttl: 'string',
  enable_dns_sec: false,
  auto_check: false,
  record_id: 1,
  record_host: 'string',
  record_type: 'PTR',
  record_value: 'string',
  record_description: 'string',
  record_ttl: 'string',
  record_ordering: 1,
  record_errors: 'string',
  user_can_create: false,
  user_can_delete: false,
  user_can_update: false,
  unpaged_rows: 1
}];

export const MockOrgDnsZonesResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockOrgDnsZonesJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockCheckDnsZoneJson: CheckDnsZoneJson = {
  valid: true,
  message: 'all good'
};

export const MockCheckDnsZoneResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockCheckDnsZoneJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
