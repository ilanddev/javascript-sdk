import { Iland } from '../../iland';
import { IlandDirectGrantAuthProvider } from '../../auth/';
import { Catalog } from '../catalog';
import { MockCatalogJson } from '../../__mocks__/responses/catalog/catalog';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runCatalogAssertionsAgainsMock(catalog: Catalog) {
  expect(catalog.json).toEqual(MockCatalogJson);
  expect(catalog.toString().length).toBeGreaterThan(0);
  expect(catalog.entityType).toBe('CATALOG');
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
    runCatalogAssertionsAgainsMock(catalog);
  });
});

test('Properly submits request to refresh catalog', async() => {
  const catalog = new Catalog(MockCatalogJson);
  return catalog.refresh().then(function(catalog) {
    expect(Iland.getHttp().get).lastCalledWith(`/catalogs/${MockCatalogJson.uuid}`);
    runCatalogAssertionsAgainsMock(catalog);
  });
});
