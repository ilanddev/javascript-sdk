import { AxiosResponse } from 'axios';
import { CheckDnsZoneJson } from '../__json__/check-dns-zone-json';
import { OrgDnsZoneJson } from '../__json__/org-dns-zone-json';

export const MockOrgDnsZonesJson: Array<OrgDnsZoneJson> = [{
  org_uuid: 'string',
  zone_id: 1,
  deleted: false,
  zone_name: 'string'
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
