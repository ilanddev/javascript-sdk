import { BasicConfiguration } from '../basic-configuration';

test('Test basic configuration functions.', () => {
  const ILAND_API_URL = process.env.ILAND_API_URL;
  const ILAND_AUTHORIZATION_URL = process.env.ILAND_AUTHORIZATION_URL;
  process.env.ILAND_API_URL = undefined;
  process.env.ILAND_AUTHORIZATION_URL = undefined;
  expect(BasicConfiguration.getApiUrl()).toBe('https://api.ilandcloud.com');
  expect(BasicConfiguration.getAuthorizationUrl()).toBe('https://console.ilandcloud.com');
  process.env.ILAND_API_URL = 'TEST API URL';
  process.env.ILAND_AUTHORIZATION_URL = 'TEST KEYCLOAK URL';
  expect(BasicConfiguration.getApiUrl()).toBe(process.env.ILAND_API_URL);
  expect(BasicConfiguration.getAuthorizationUrl()).toBe(process.env.ILAND_AUTHORIZATION_URL);
  process.env.ILAND_API_URL = ILAND_API_URL;
  process.env.ILAND_AUTHORIZATION_URL = ILAND_AUTHORIZATION_URL;
});
