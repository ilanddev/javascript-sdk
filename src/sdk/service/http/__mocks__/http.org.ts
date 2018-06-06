import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockOrgVdcsResponse } from '../../../model/org/__mocks__/org-vdcs';
import { MockOrgVmsResponse } from '../../../model/org/__mocks__/org-vms';
import { MockOrgVappsResponse } from '../../../model/org/__mocks__/org-vapps';
import { MockOrgResponse } from '../../../model/org/__mocks__/org';
import { MockOrgInternalNetworksResponse } from '../../../model/org/__mocks__/internal-networks';
import { MockIpAddressSetResponse, MockOrgDnsRecordsResponse } from '../../../model/org/__mocks__/org-dns-records';
import { MockCheckDnsZoneResponse, MockOrgDnsZonesResponse } from '../../../model/org/__mocks__/org-dns-zones';
import { MockOrgEdgesResponse } from '../../../model/org/__mocks__/edges';
import { MockOrgVappNetworksResponse } from '../../../model/org/__mocks__/org-vapp-networks';
import { MockOrgResource } from '../../../model/org/__mocks__/org-resource';
import { DnsRecordCreateRequestJson, DnsRecordUpdateRequestJson, DnsZoneCreateRequestJson } from '../../../model/org';

export async function MockOrgGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/orgs\/[^\/]+?$/.test(url):
      // get a org
      return MockOrgResponse;
    case /\/orgs\/[^\/]+?\/vdcs$/.test(url):
      // get a orgs child vdcs
      return MockOrgVdcsResponse;
    case /\/orgs\/[^\/]+?\/vapps$/.test(url):
      // get a orgs child vapps
      return MockOrgVappsResponse;
    case /\/orgs\/[^\/]+?\/vms$/.test(url):
      // get a orgs child vms
      return MockOrgVmsResponse;
    case /\/orgs\/[^\/]+?\/vdc-networks$/.test(url):
      // get an orgs internal networks
      return MockOrgInternalNetworksResponse;
    case /\/orgs\/[^\/]+?\/vapp-networks$/.test(url):
      // get an orgs vapp networks
      return MockOrgVappNetworksResponse;
    case /\/orgs\/[^\/]+?\/edges$/.test(url):
      // get an orgs edges
      return MockOrgEdgesResponse;
    case /\/orgs\/[^\/]+?\/dns-records$/.test(url):
      // get an orgs dns records
      return MockOrgDnsRecordsResponse;
    case /\/orgs\/[^\/]+?\/dns-zones$/.test(url):
      // get an orgs dns zones
      return MockOrgDnsZonesResponse;
    case /\/orgs\/[^\/]+?\/dns-zones\/[^\/]+?\/is-valid$/.test(url):
      // get an orgs dns zones check
      return MockCheckDnsZoneResponse;
    case /\/orgs\/[^\/]+?\/unmapped-dns-ptr-ip-addresses$/.test(url):
      // get an orgs unmapped ptr ips
      return MockIpAddressSetResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockOrgPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/orgs\/[^\/]+?\/dns-records$/.test(url): {
      // create new org dns record
      const request = data as DnsRecordCreateRequestJson;
      return MockOrgResource.addDnsRecord(request);
    }
    case /\/orgs\/[^\/]+?\/dns-zones$/.test(url): {
      // create new org dns zone
      const request = data as DnsZoneCreateRequestJson;
      return MockOrgResource.addDnsZone(request);
    }
    default:
      return MockNotFoundResponse;
  }
}

export async function MockOrgPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/orgs\/[^\/]+?\/dns-records$/.test(url): {
      // update org dns record
      const request = data as DnsRecordUpdateRequestJson;
      return MockOrgResource.updateDnsRecord(request);
    }
    default:
      return MockNotFoundResponse;
  }
}

export async function MockOrgDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/orgs\/[^\/]+?\/dns-records\/[^\/]+?$/.test(url): {
      // delete dns record
      return MockOrgResource.deleteDnsRecord();
    }
    case /\/orgs\/[^\/]+?\/dns-zones\/[^\/]+?$/.test(url): {
      // delete dns zone
      return MockOrgResource.deleteDnsZone();
    }
    default:
      return MockNotFoundResponse;
  }
}
