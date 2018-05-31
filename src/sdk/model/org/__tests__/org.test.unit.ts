import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { Org } from '../org';
import { MockOrgVappsJson } from '../__mocks__/org-vapps';
import { MockOrgJson } from '../__mocks__/org';
import { MockOrgVmsJson } from '../__mocks__/org-vms';
import { MockOrgVdcsJson } from '../__mocks__/org-vdcs';
import { MockOrgEdgesJson } from '../__mocks__/edges';
import { MockOrgInternalNetworksJson } from '../__mocks__/internal-networks';
import { MockOrgVappNetworksJson } from '../__mocks__/org-vapp-networks';
import { MockIpAddressSetJson, MockOrgDnsRecordsJson } from '../__mocks__/org-dns-records';
import { DnsRecordCreateRequest } from '../dns-record-create-request';
import { DnsRecordUpdateRequest } from '../dns-record-update-request';
import { MockCheckDnsZoneJson, MockOrgDnsZonesJson } from '../__mocks__/org-dns-zones';
import { DnsZoneCreateRequest } from '../dns-zone-create-request';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get Org', async() => {
  const uuid = 'test-org-uuid';
  return Org.getOrg(uuid).then(function(org) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${uuid}`);
    expect(org.entityType).toBe('IAAS_ORGANIZATION');
  });
});

test('Properly submits request to get Orgs child vDCs', async() => {
  const org = new Org(MockOrgJson);
  return org.getVdcs().then(function(vdcs) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vdcs`);
    expect(vdcs.length).toBe(MockOrgVdcsJson.length);
    let idx = 0;
    for (const vdc of vdcs) {
      expect(vdc.json).toEqual(MockOrgVdcsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child vApps', async() => {
  const org = new Org(MockOrgJson);
  return org.getVapps().then(function(vapps) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vapps`);
    expect(vapps.length).toBe(MockOrgVappsJson.length);
    let idx = 0;
    for (const vapp of vapps) {
      expect(vapp.json).toEqual(MockOrgVappsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child VMs', async() => {
  const org = new Org(MockOrgJson);
  return org.getVms().then(function(vms) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vms`);
    expect(vms.length).toBe(MockOrgVmsJson.length);
    let idx = 0;
    for (const vm of vms) {
      expect(vm.json).toEqual(MockOrgVmsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child edges', async() => {
  const org = new Org(MockOrgJson);
  return org.getEdges().then(function(edges) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/edges`);
    expect(edges.length).toBe(MockOrgEdgesJson.length);
    let idx = 0;
    for (const edge of edges) {
      expect(edge.json).toEqual(MockOrgEdgesJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child internal networks', async() => {
  const org = new Org(MockOrgJson);
  return org.getInternalNetworks().then(function(nets) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vdc-networks`);
    expect(nets.length).toBe(MockOrgInternalNetworksJson.length);
    let idx = 0;
    for (const net of nets) {
      expect(net.json).toEqual(MockOrgInternalNetworksJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get Orgs child vapp networks', async() => {
  const org = new Org(MockOrgJson);
  return org.getVappNetworks().then(function(nets) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/vapp-networks`);
    expect(nets.length).toBe(MockOrgVappNetworksJson.length);
    let idx = 0;
    for (const net of nets) {
      expect(net.json).toEqual(MockOrgVappNetworksJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get orgs dns records', async() => {
  const org = new Org(MockOrgJson);
  return org.getDnsRecords().then(function(records) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/dns-records`);
    expect(records.length).toBe(MockOrgDnsRecordsJson.length);
    let idx = 0;
    for (const record of records) {
      const jsonRecord = MockOrgDnsRecordsJson[idx];
      expect(record.json).toEqual(jsonRecord);
      expect(record.description).toBe(jsonRecord.description);
      expect(record.host).toBe(jsonRecord.host);
      expect(record.ordering).toBe(jsonRecord.ordering);
      expect(record.recordType).toBe(jsonRecord.record_type);
      expect(record.ttl).toBe(jsonRecord.ttl);
      expect(record.zoneId).toBe(jsonRecord.zone_id);
      expect(record.zoneName).toBe(jsonRecord.zone_name);
      expect(record.id).toBe(jsonRecord.id);
      expect(record.ip).toBe(jsonRecord.ip);
      expect(record.value).toBe(jsonRecord.value);
      expect(record.lastModified.getTime()).toBe(jsonRecord.last_modified);
      expect(record.toString()).toBeDefined();
      idx++;
    }
  });
});

test('Properly submits request to add orgs dns record', async() => {
  const org = new Org(MockOrgJson);
  const request = new DnsRecordCreateRequest(4, 'host', 'PTR',
      'value', '1.1.1.1', 0, 'description', 5);
  expect(request.toString()).toBeDefined();
  return org.addDnsRecord(request).then(function(record) {
    expect(Iland.getHttp().post).lastCalledWith(`/orgs/${org.uuid}/dns-records`, request.json);
    expect(record.description).toBe(request.description);
    expect(record.host).toBe(request.host);
    expect(record.recordType).toBe(request.type);
    expect(record.ttl).toBe(request.ttl);
    expect(record.zoneId).toBe(request.zoneId);
    expect(record.ip).toBe(request.ipAddress);
    expect(record.value).toBe(request.value);
    expect(record.toString()).toBeDefined();
  });
});

test('Properly submits request to update org dns record', async() => {
  const org = new Org(MockOrgJson);
  const request = new DnsRecordUpdateRequest(1, 4, 'host', 'PTR',
      'value', '1.1.1.1', 0, 'description', 5);
  expect(request.toString()).toBeDefined();
  return org.updateDnsRecord(request).then(function(record) {
    expect(Iland.getHttp().put).lastCalledWith(`/orgs/${org.uuid}/dns-records`, request.json);
    expect(record.id).toBe(request.id);
    expect(record.description).toBe(request.description);
    expect(record.host).toBe(request.host);
    expect(record.recordType).toBe(request.type);
    expect(record.ttl).toBe(request.ttl);
    expect(record.zoneId).toBe(request.zoneId);
    expect(record.ip).toBe(request.ipAddress);
    expect(record.value).toBe(request.value);
    expect(record.toString()).toBeDefined();
  });
});

test('Properly submits request to delete org dns record', async() => {
  const org = new Org(MockOrgJson);
  const id = 5;
  return org.deleteDnsRecord(id).then(function() {
    expect(Iland.getHttp().delete).lastCalledWith(`/orgs/${org.uuid}/dns-records/${id}`);
  });
});

test('Properly submits request to get org dns zones', async() => {
  const org = new Org(MockOrgJson);
  return org.getDnsZones().then(function(zones) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/dns-zones`);
    expect(zones.length).toBe(MockOrgDnsZonesJson.length);
    let idx = 0;
    for (const zone of zones) {
      const jsonZone = MockOrgDnsZonesJson[idx];
      expect(zone.json).toEqual(jsonZone);
      expect(zone.autoCheck).toBe(jsonZone.auto_check);
      expect(zone.enableDnsSec).toBe(jsonZone.enable_dns_sec);
      expect(zone.id).toBe(jsonZone.id);
      expect(zone.minimum).toBe(jsonZone.minimum);
      expect(zone.expire).toBe(jsonZone.expire);
      expect(zone.name).toBe(jsonZone.name);
      expect(zone.recordDescription).toBe(jsonZone.record_description);
      expect(zone.recordErrors).toBe(jsonZone.record_errors);
      expect(zone.recordHost).toBe(jsonZone.record_host);
      expect(zone.recordId).toBe(jsonZone.record_id);
      expect(zone.recordOrdering).toBe(jsonZone.record_ordering);
      expect(zone.recordType).toBe(jsonZone.record_type);
      expect(zone.recordValue).toBe(jsonZone.record_value);
      expect(zone.userCanCreate).toBe(jsonZone.user_can_create);
      expect(zone.userCanUpdate).toBe(jsonZone.user_can_update);
      expect(zone.userCanDelete).toBe(jsonZone.user_can_delete);
      expect(zone.serial).toBe(jsonZone.serial);
      expect(zone.retry).toBe(jsonZone.retry);
      expect(zone.soa).toBe(jsonZone.soa);
      expect(zone.tags).toBe(jsonZone.tags);
      expect(zone.unpagedRows).toBe(jsonZone.unpaged_rows);
      expect(zone.recordTtl).toBe(jsonZone.record_ttl);
      expect(zone.recordOrdering).toBe(jsonZone.record_ordering);
      expect(zone.recordErrors).toBe(jsonZone.record_errors);
      expect(zone.toString()).toBeDefined();
      idx++;
    }
  });
});

test('Properly submits request to add dns zone', async() => {
  const org = new Org(MockOrgJson);
  const request = new DnsZoneCreateRequest('name');
  expect(request.toString()).toBeDefined();
  return org.addDnsZone(request).then(function(zone) {
    expect(Iland.getHttp().post).lastCalledWith(`/orgs/${org.uuid}/dns-zones`, request.json);
    expect(zone.name).toBe(request.name);
  });
});

test('Properly submits request to delete org dns zone', async() => {
  const org = new Org(MockOrgJson);
  const id = 5;
  return org.deleteDnsZone(id).then(function() {
    expect(Iland.getHttp().delete).lastCalledWith(`/orgs/${org.uuid}/dns-zones/${id}`);
  });
});

test('Properly submits request to check org dns zone', async() => {
  const org = new Org(MockOrgJson);
  const zoneId = 5;
  return org.checkDnsZone(zoneId).then(function(check) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/dns-zones/${zoneId}/is-valid`);
    expect(check).toBeDefined();
    expect(check.json).toEqual(MockCheckDnsZoneJson);
    expect(check.message).toBe(MockCheckDnsZoneJson.message);
    expect(check.valid).toBe(MockCheckDnsZoneJson.valid);
    expect(check.toString()).toBeDefined();
  });
});

test('Properly submits request to get org available IPs for ptr records', async() => {
  const org = new Org(MockOrgJson);
  return org.getAvailableIpsForPtrRecords().then(function(ips) {
    expect(Iland.getHttp().get).lastCalledWith(`/orgs/${org.uuid}/unmapped-dns-ptr-ip-addresses`);
    expect(ips).toBeDefined();
    expect(ips.toString()).toBeDefined();
    expect(ips.json).toEqual(MockIpAddressSetJson);
    let idx = 0;
    for (const ip of ips.ips) {
      expect(ip).toBe(MockIpAddressSetJson.ips[idx]);
      idx++;
    }
  });
});
