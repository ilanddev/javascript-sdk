import { Http } from '../http';

jest.mock('../http');

test('Test version utility function', function() {
  expect(Http.versionMime('application/vnd.ilandcloud.api.v0.7+json')).toBe('application/vnd.ilandcloud.api.v0.7+json');
  expect(Http.versionMime('application/json')).toBe('application/vnd.ilandcloud.api.v1.0+json');
  expect(Http.versionMime('application/json', 0.5)).toBe('application/vnd.ilandcloud.api.v0.5+json');
  expect(Http.versionMime('application/octet-stream')).toBe('application/vnd.ilandcloud.api.v1.0+octet-stream');
  expect(Http.versionMime('image/jpeg')).toBe('image/vnd.ilandcloud.api.v1.0+jpeg');
});
