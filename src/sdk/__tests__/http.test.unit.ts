import { Http } from '../http';

test('Test version utility function', function() {
  expect(Http.versionMime('application/vnd.ilandcloud.api.v0.7+json')).toBe('application/vnd.ilandcloud.api.v0.7+json');
  expect(Http.versionMime('application/json')).toBe('application/vnd.ilandcloud.api.v0.8+json');
  expect(Http.versionMime('application/json', 0.5)).toBe('application/vnd.ilandcloud.api.v0.5+json');
});
