import { Iland } from '../../../iland';
import { IlandDirectGrantAuthProvider } from '../../../auth/index';
import { Catalog } from '../catalog';
import {
  CatalogItemDownloadTemplateMock,
  MockAnotherCatalogJson,
  MockCatalogJson
} from '../__mocks__/catalog';
import { MockMediaJson } from '../../media/__mocks__/media';
import { MockVappTemplateJson } from '../../vapp-template/__mocks__/vapp-template';
import {
  MockBooleanMetadataJson,
  MockDatetimeMetadataJson,
  MockNumberMetadataJson,
  MockStringMetadataJson
} from '../../common/metadata/__mocks__/metadata';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runCatalogAssertionsAgainstMock(catalog: Catalog) {
  expect(catalog.json).toEqual(MockCatalogJson);
  expect(catalog.toString().length).toBeGreaterThan(0);
  expect(catalog.entityType).toBe('IAAS_CATALOG');
  expect(catalog.deleted).toBe(MockCatalogJson.deleted);
  expect(catalog.uuid).toBe(MockCatalogJson.uuid);
  expect(catalog.name).toBe(MockCatalogJson.name);
  if (catalog.deletedDate === null) {
    expect(catalog.deletedDate).toBeNull();
  } else {
    expect(catalog.deletedDate!.getTime()).toBe(MockCatalogJson.deleted_date);
  }
  expect(catalog.updatedDate.getTime()).toBe(MockCatalogJson.updated_date);
  expect(catalog.createdDate.getTime()).toBe(MockCatalogJson.created_date);
  expect(catalog.locationId).toBe(MockCatalogJson.location_id);
  expect(catalog.isShared).toBe(MockCatalogJson.shared);
  expect(catalog.isPublic).toBe(MockCatalogJson.public);
  expect(catalog.version).toBe(MockCatalogJson.version);
  expect(catalog.orgUuid).toBe(MockCatalogJson.org_uuid);
  expect(catalog.description).toBe(MockCatalogJson.description);
  expect(catalog.vcloudHref).toBe(MockCatalogJson.vcloud_href);
}

test('Properly submits request to get catalog', async() => {
  const uuid: string = MockCatalogJson.uuid;
  return Catalog.getCatalog(uuid).then(function(catalog) {
    expect(Iland.getHttp().get).lastCalledWith(`/catalogs/${MockCatalogJson.uuid}`);
    runCatalogAssertionsAgainstMock(catalog);
  });
});

test('Properly submits request to refresh catalog', async() => {
  const catalog = new Catalog(MockCatalogJson);
  return catalog.refresh().then(function(catalog) {
    expect(Iland.getHttp().get).lastCalledWith(`/catalogs/${MockCatalogJson.uuid}`);
    runCatalogAssertionsAgainstMock(catalog);
  });
});

test('Properly get item downloads', async() => {
  const catalog = new Catalog(MockCatalogJson);
  return catalog.getItemDownloads().then(itemDownloads => {
    expect(itemDownloads.length).toEqual(1);
    expect(itemDownloads[0]).toEqual(CatalogItemDownloadTemplateMock);
  });
});

test('Properly get catalog media', async() => {
  const catalog = new Catalog(MockCatalogJson);
  return catalog.getMedia().then(medias => {
    expect(medias.length).toEqual(1);
    expect(medias[0].json).toEqual(Object.assign({}, MockMediaJson));
  });
});

test('Properly get catalog vapp templates', async() => {
  const catalog = new Catalog(MockCatalogJson);
  return catalog.getVappTemplates().then(templates => {
    expect(templates.length).toEqual(1);
    expect(templates[0].json).toEqual(Object.assign({}, MockVappTemplateJson));
  });
});

test('Properly get catalog metadata', async() => {
  const catalog = new Catalog(MockCatalogJson);
  return catalog.getMetadata().then(metadata => {
    expect(metadata.length).toEqual(4);
    expect(metadata[0].json).toEqual(Object.assign({}, MockStringMetadataJson));
    expect(metadata[1].json).toEqual(Object.assign({}, MockNumberMetadataJson));
    expect(metadata[2].json).toEqual(Object.assign({}, MockBooleanMetadataJson));
    expect(metadata[3].json).toEqual(Object.assign({}, MockDatetimeMetadataJson));
  });
});

test('Properly throw error if metadata type is not assignable', async() => {
  const catalog = new Catalog(MockAnotherCatalogJson);
  return catalog.getMetadata().catch(error => {
    expect(error).toEqual(new Error(`Metadata with type fake is unknown.`));
  });
});
