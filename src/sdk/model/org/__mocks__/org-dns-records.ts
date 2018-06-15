import { AxiosResponse } from 'axios';
import { IpAddressSetJson } from '../__json__/ip-address-set-json';
import { DnsRecordJson } from '../__json__/dns-record-json';

export const MockIpAddressSetJson: IpAddressSetJson = {
  ips: ['1.1.1.1', '2.2.2.2']
};

export const MockIpAddressSetResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockIpAddressSetJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockOrgDnsRecordsJson: Array<DnsRecordJson> = [{
  id: 1,
  zone_id: 2,
  zone_name: 'zone-name',
  host: 'host',
  description: 'description',
  ttl : 5,
  ordering: 'ordering',
  ip: '1.1.1.1',
  last_modified: 123413284,
  value: '',
  record_type: 'PTR'
}];

export const MockOrgDnsRecordsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      data: MockOrgDnsRecordsJson
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
