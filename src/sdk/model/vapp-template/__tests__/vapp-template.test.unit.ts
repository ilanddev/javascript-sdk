import { Iland } from '../../../iland';
import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { VappTemplate } from '../vapp-template';
import { MockVappTemplateJson } from '../__mocks__/vapp-template';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runVappTemplateAssertionsAgainsMock(vappTemplate: VappTemplate) {
  expect(vappTemplate.json).toEqual(MockVappTemplateJson);
  expect(vappTemplate.toString().length).toBeGreaterThan(0);
  expect(vappTemplate.entityType).toBe('IAAS_VAPP_TEMPLATE');
  expect(vappTemplate.deleted).toBe(MockVappTemplateJson.deleted);
  expect(vappTemplate.uuid).toBe(MockVappTemplateJson.uuid);
  expect(vappTemplate.name).toBe(MockVappTemplateJson.name);
  if (vappTemplate.deletedDate === null) {
    expect(vappTemplate.deletedDate).toBeNull();
  } else {
    expect(vappTemplate.deletedDate!.getTime()).toBe(MockVappTemplateJson.deleted_date);
  }
  expect(vappTemplate.updatedDate.getTime()).toBe(MockVappTemplateJson.updated_date);
  expect(vappTemplate.createdDate.getTime()).toBe(MockVappTemplateJson.created_date);
  expect(vappTemplate.status).toBe(MockVappTemplateJson.status);
  expect(vappTemplate.size).toBe(MockVappTemplateJson.size);
  expect(vappTemplate.isPublic).toBe(MockVappTemplateJson.public);
  expect(vappTemplate.locationId).toBe(MockVappTemplateJson.location_id);
  expect(vappTemplate.orgUuid).toBe(MockVappTemplateJson.org_uuid);
  expect(vappTemplate.catalogUuid).toBe(MockVappTemplateJson.catalog_uuid);
  expect(vappTemplate.storageProfileUuid).toBe(MockVappTemplateJson.storage_profile_uuid);
  expect(vappTemplate.vcloudHref).toBe(MockVappTemplateJson.vcloud_href);
  expect(vappTemplate.vdcUuid).toBe(MockVappTemplateJson.vdc_uuid);
  expect(vappTemplate.description).toBe(MockVappTemplateJson.description);
  expect(vappTemplate.isCustomisable).toBe(MockVappTemplateJson.customizable);
  expect(vappTemplate.isCustomizationRequired).toBe(MockVappTemplateJson.customization_required);
  expect(vappTemplate.isGoldMaster).toBe(MockVappTemplateJson.gold_master);
  expect(vappTemplate.isExpired).toBe(MockVappTemplateJson.is_expired);
}

test('Properly submits request to get vapp template', async() => {
  const uuid: string = MockVappTemplateJson.uuid;
  return VappTemplate.getVappTemplate(uuid).then(function(vappTemplate) {
    expect(Iland.getHttp().get).lastCalledWith(`/vapp-templates/${MockVappTemplateJson.uuid}`);
    runVappTemplateAssertionsAgainsMock(vappTemplate);
  });
});

test('Properly submits request to refresh vapp template', async() => {
  const vappTemplate = new VappTemplate(MockVappTemplateJson);
  return vappTemplate.refresh().then(function(vappTemplate) {
    expect(Iland.getHttp().get).lastCalledWith(`/vapp-templates/${MockVappTemplateJson.uuid}`);
    runVappTemplateAssertionsAgainsMock(vappTemplate);
  });
});
