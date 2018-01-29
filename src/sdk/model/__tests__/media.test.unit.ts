import { Iland } from '../../iland';
import { IlandDirectGrantAuthProvider } from '../../auth/';
import { Media } from '../media';
import { MockMediaJson } from '../../__mocks__/responses/media/media';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runMediaAssertionsAgainsMock(media: Media) {
  expect(media.json).toEqual(MockMediaJson);
  expect(media.toString().length).toBeGreaterThan(0);
  expect(media.entityType).toBe('MEDIA');
  expect(media.deleted).toBe(MockMediaJson.deleted);
  expect(media.uuid).toBe(MockMediaJson.uuid);
  expect(media.name).toBe(MockMediaJson.name);
  if (media.deletedDate === null) {
    expect(media.deletedDate).toBeNull();
  } else {
    expect(media.deletedDate!.getTime()).toBe(MockMediaJson.deleted_date);
  }
  expect(media.updatedDate.getTime()).toBe(MockMediaJson.updated_date);
  expect(media.status).toBe(MockMediaJson.status);
  expect(media.size).toBe(MockMediaJson.size);
  expect(media.isPublic).toBe(MockMediaJson.public);
  expect(media.locationId).toBe(MockMediaJson.location_id);
  expect(media.orgUuid).toBe(MockMediaJson.org_uuid);
  expect(media.catalogUuid).toBe(MockMediaJson.catalog_uuid);
  expect(media.storageProfileUuid).toBe(MockMediaJson.storage_profile_uuid);
  expect(media.vcloudHref).toBe(MockMediaJson.vcloud_href);
  expect(media.vdcUuid).toBe(MockMediaJson.vdc_uuid);
  expect(media.description).toBe(MockMediaJson.description);
  expect(media.createdDate.getTime()).toBe(MockMediaJson.created_date);
}

test('Properly submits request to get media', async() => {
  const uuid: string = MockMediaJson.uuid;
  return Media.getMedia(uuid).then(function(media) {
    expect(Iland.getHttp().get).lastCalledWith(`/media/${MockMediaJson.uuid}`);
    runMediaAssertionsAgainsMock(media);
  });
});

test('Properly submits request to refresh media', async() => {
  const media = new Media(MockMediaJson);
  return media.refresh().then(function(media) {
    expect(Iland.getHttp().get).lastCalledWith(`/media/${MockMediaJson.uuid}`);
    runMediaAssertionsAgainsMock(media);
  });
});
