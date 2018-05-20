import { Iland } from '../../../iland';
import { IlandDirectGrantAuthProvider } from '../../../auth/index';
import { Media } from '../media';
import { MockMediaJson } from '../__mocks__/media';
import { MediaUpdateRequest } from '../media-update-request';
import { MediaCloneRequest } from '../media-clone-request';
import { MockMetadataJson } from '../../common/metadata/__mocks__/metadata';
import { Metadata } from '../../common/metadata';
import { Http } from '../../../service/http/http';

jest.mock('../../../service/http/http');

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
  expect(media.entityType).toBe('IAAS_MEDIA');
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

test('Properly submits request to delete media [static]', async() => {
  const media = new Media(MockMediaJson);
  return Media.deleteMedia(media.uuid).then(async(task) => {
    expect(Iland.getHttp().delete).lastCalledWith(`/media/${MockMediaJson.uuid}`);
    expect(task.operation).toBe('delete entity');
  });
});

test('Properly submits request to delete media', async() => {
  const media = new Media(MockMediaJson);
  return media.delete().then(async(task) => {
    expect(Iland.getHttp().delete).lastCalledWith(`/media/${MockMediaJson.uuid}`);
    expect(task.operation).toBe('delete entity');
  });
});

test('Can construct MediaUpdateRequest', async() => {

  const data = {
    name: 'name',
    description: 'description',
    storage_profile_uuid: '00'
  };

  // Properties constructor
  let req = new MediaUpdateRequest(data.name, data.description, data.storage_profile_uuid);
  expect(req.name).toEqual(data.name);
  expect(req.description).toEqual(data.description);
  expect(req.storageProfileUuid).toEqual(data.storage_profile_uuid);
  expect(req.toString().length).toBeGreaterThan(0);
  expect(req.json).toBeDefined();

  // Json constructor
  req = new MediaUpdateRequest(data);
  expect(req.name).toEqual(data.name);
  expect(req.description).toEqual(data.description);
  expect(req.storageProfileUuid).toEqual(data.storage_profile_uuid);

  // Copy constructor
  const copy = new MediaUpdateRequest(req);
  expect(copy.name).toEqual(data.name);
  expect(copy.description).toEqual(data.description);
  expect(copy.storageProfileUuid).toEqual(data.storage_profile_uuid);
});

test('Properly submits request to update media [static]', async() => {
  const media = new Media(MockMediaJson);
  const request = new MediaUpdateRequest({
    name: MockMediaJson.name,
    description: MockMediaJson.description,
    storage_profile_uuid: MockMediaJson.storage_profile_uuid
  });
  return Media.updateMedia(media.uuid, request).then(async(task) => {
    expect(Iland.getHttp().put).lastCalledWith(`/media/${MockMediaJson.uuid}`, request.json);
    expect(task.operation).toBe('update media');
  });
});

test('Properly submits request to update media', async() => {
  const media = new Media(MockMediaJson);
  const request = new MediaUpdateRequest({
    name: MockMediaJson.name,
    description: MockMediaJson.description,
    storage_profile_uuid: MockMediaJson.storage_profile_uuid
  });
  return media.update(request).then(async(task) => {
    expect(Iland.getHttp().put).lastCalledWith(`/media/${MockMediaJson.uuid}`, request.json);
    expect(task.operation).toBe('update media');
  });
});

test('Can construct MediaCloneRequest', async() => {

  const data = {
    vdc_uuid: '00',
    storage_profile_uuid: '00',
    catalog_uuid: '00',
    media_name: 'name'
  };

  // Properties constructor
  let req = new MediaCloneRequest(data.vdc_uuid, data.storage_profile_uuid, data.catalog_uuid, data.media_name);
  expect(req.vdcUuid).toEqual(data.vdc_uuid);
  expect(req.storageProfileUuid).toEqual(data.storage_profile_uuid);
  expect(req.catalogUuid).toEqual(data.catalog_uuid);
  expect(req.mediaName).toEqual(data.media_name);
  expect(req.toString().length).toBeGreaterThan(0);
  expect(req.json).toBeDefined();

  // Json constructor
  req = new MediaCloneRequest(data);
  expect(req.vdcUuid).toEqual(data.vdc_uuid);
  expect(req.storageProfileUuid).toEqual(data.storage_profile_uuid);
  expect(req.catalogUuid).toEqual(data.catalog_uuid);
  expect(req.mediaName).toEqual(data.media_name);

  // Copy constructor
  const copy = new MediaCloneRequest(req);
  expect(copy.vdcUuid).toEqual(data.vdc_uuid);
  expect(copy.storageProfileUuid).toEqual(data.storage_profile_uuid);
  expect(copy.catalogUuid).toEqual(data.catalog_uuid);
  expect(copy.mediaName).toEqual(data.media_name);
});

test('Properly submits request to clone media [static]', async() => {
  const media = new Media(MockMediaJson);
  const request = new MediaCloneRequest({
    vdc_uuid: '00',
    storage_profile_uuid: '00',
    catalog_uuid: '00',
    media_name: 'name'
  });

  return Media.cloneMedia(media.uuid, request).then(async(task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/media/${MockMediaJson.uuid}/actions/clone`, request.json);
    expect(task.operation).toBe('clone media');
  });
});

test('Properly submits request to clone media', async() => {
  const media = new Media(MockMediaJson);
  const request = new MediaCloneRequest({
    vdc_uuid: '00',
    storage_profile_uuid: '00',
    catalog_uuid: '00',
    media_name: 'name'
  });

  return media.clone(request).then(async(task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/media/${MockMediaJson.uuid}/actions/clone`, request.json);
    expect(task.operation).toBe('clone media');
  });
});

test('Properly submits request to sync media', async() => {
  const media = new Media(MockMediaJson);
  return media.sync().then(async(task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/media/${MockMediaJson.uuid}/actions/sync`);
    expect(task.operation).toBe('sync catalog item');
  });
});

test('Properly submits request to get media metadata', async() => {
  const media = new Media(MockMediaJson);
  return media.getMetadata().then(async(metadata) => {
    expect(Iland.getHttp().get).lastCalledWith(`/media/${MockMediaJson.uuid}/metadata`);
    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(4);
    expect(metadata[0].key).toBe(MockMetadataJson[0].key);
    expect(metadata[0].access).toBe(MockMetadataJson[0].access);
    expect(metadata[0].type).toBe(MockMetadataJson[0].type);
    expect(metadata[0].value).toBe(MockMetadataJson[0].value);
    expect(metadata[0].json).toEqual(MockMetadataJson[0]);
    expect(metadata[0].toString().length).toBeGreaterThan(0);

    expect(metadata[1].key).toBe(MockMetadataJson[1].key);
    expect(metadata[1].access).toBe(MockMetadataJson[1].access);
    expect(metadata[1].type).toBe(MockMetadataJson[1].type);
    expect(metadata[1].value).toBe(MockMetadataJson[1].value);
    expect(metadata[1].json).toEqual(MockMetadataJson[1]);
    expect(metadata[1].toString().length).toBeGreaterThan(0);

    expect(metadata[2].key).toBe(MockMetadataJson[2].key);
    expect(metadata[2].access).toBe(MockMetadataJson[2].access);
    expect(metadata[2].type).toBe(MockMetadataJson[2].type);
    expect(metadata[2].value).toBe(MockMetadataJson[2].value);
    expect(metadata[2].json).toEqual(MockMetadataJson[2]);
    expect(metadata[2].toString().length).toBeGreaterThan(0);

    expect(metadata[3].key).toBe(MockMetadataJson[3].key);
    expect(metadata[3].access).toBe(MockMetadataJson[3].access);
    expect(metadata[3].type).toBe(MockMetadataJson[3].type);
    expect(metadata[3].value).toBe(MockMetadataJson[3].value);
    expect(metadata[3].json).toEqual(MockMetadataJson[3]);
    expect(metadata[3].toString().length).toBeGreaterThan(0);
  });
});

test('Properly submits request to add/update media metadata', async() => {
  const media = new Media(MockMediaJson);
  const metadataArray = [new Metadata<string>({
    key: 'unit_test',
    value: 'test',
    access: 'READ_WRITE',
    type: 'string'
  } as Metadata<string>)];
  return media.updateMetadata(metadataArray).then(async(task) => {
    expect(Iland.getHttp().put).lastCalledWith(`/media/${MockMediaJson.uuid}/metadata`, metadataArray);
    expect(task.operation).toBe('update metadata');
  });
});

test('Properly submits request to delete media metadata', async() => {
  const media = new Media(MockMediaJson);
  const metadataKey = 'metadata-key';
  return media.deleteMetadata(metadataKey).then(async(task) => {
    expect(Iland.getHttp().delete).lastCalledWith(`/media/${MockMediaJson.uuid}/metadata/${metadataKey}`);
    expect(task.operation).toBe('delete metadata');
  });
});

test('Get media download link', (done) => {
  const media = new Media(MockMediaJson);
  media.getDownloadLink('downloadFileName').subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/medias/' + media.uuid + '/download?accept='
        + encodeURIComponent(Http.versionMime('application/octet-stream'))
        + '&filename=' + encodeURIComponent('downloadFileName')
        + '&oauth_token=fake-auth-token-2');
    done();
  }, (error) => {
    console.log(error);
    done();
  });
});
