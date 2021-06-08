import { AxiosResponse } from 'axios';
import { DnsZoneCreateRequestJson } from '../__json__/dns-zone-create-request-json';
import { DnsZoneJson } from '../__json__/dns-zone-json';
import { DnsRecordCreateRequestJson } from '../__json__/dns-record-create-request-json';
import { DnsRecordJson } from '../__json__/dns-record-json';
import { DnsRecordUpdateRequestJson } from '../__json__/dns-record-update-request-json';

export class MockOrgResource {

  static async addDnsZone(request: DnsZoneCreateRequestJson): Promise<AxiosResponse> {
    const mockDnsZone: DnsZoneJson = {
      id: 1,
      name: request.name,
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
    };
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: mockDnsZone,
        status: 200,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

  static async addDnsRecord(request: DnsRecordCreateRequestJson): Promise<AxiosResponse> {
    const mockDnsRecord: DnsRecordJson = {
      id: 1,
      zone_id: request.zone_id,
      zone_name: 'zoneName',
      host: request.host,
      description: request.description,
      ttl : request.ttl,
      ordering: 'ordering',
      ip: request.ip_address,
      last_modified: Date.now(),
      value: request.value,
      type: request.type
    };
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: mockDnsRecord,
        status: 200,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

  static async updateDnsRecord(request: DnsRecordUpdateRequestJson): Promise<AxiosResponse> {
    const mockDnsRecord: DnsRecordJson = {
      id: request.id,
      zone_id: request.zone_id,
      zone_name: 'zoneName',
      host: request.host,
      description: request.description,
      ttl : request.ttl,
      ordering: 'ordering',
      ip: request.ip_address,
      last_modified: Date.now(),
      value: request.value,
      type: request.type
    };
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: mockDnsRecord,
        status: 200,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

  static async deleteDnsRecord(): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: undefined,
        status: 204,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

  static async deleteDnsZone(): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: undefined,
        status: 204,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

}
