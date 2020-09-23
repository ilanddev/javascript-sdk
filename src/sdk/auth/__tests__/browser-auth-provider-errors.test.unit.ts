import { IlandBrowserAuthProvider } from '../browser-auth-provider';
import { MockAlwaysRejectingKeycloak } from '../__mocks__/mock-always-rejecting-keycloak';

const mockAlwaysRejectingKeycloak = MockAlwaysRejectingKeycloak;

jest.mock('keycloak-js', () => {
  return () => {
    return new mockAlwaysRejectingKeycloak();
  };
});

test('IlandBrowserAuthProvider handle errors properly', (done) => {
  expect.assertions(3);
  const auth = new IlandBrowserAuthProvider({
    clientId: 'fake',
    url: 'test'
  });
  auth.getTokenObservable().subscribe(() => {
    done();
  }, error => {
    expect(error).toBeDefined();
  });
  // Faking a token update.
  setTimeout(() => {
    auth.getToken().catch((error) => {
      expect(error).toBeDefined();
      auth.logout().catch(e => {
        expect(e).toBeDefined();
        done();
      });
    });
  }, 1000);
});
