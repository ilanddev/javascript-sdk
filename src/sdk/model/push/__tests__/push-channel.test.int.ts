import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { Subscription } from 'rxjs/Subscription';
import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Event } from '../../event/event';
import { PushChannel } from '../push-channel';

let auth: IlandDirectGrantAuthProvider;

beforeAll(async() => {
  auth = new IlandDirectGrantAuthProvider({
    username: TestConfiguration.getUsername(),
    password: TestConfiguration.getPassword(),
    clientSecret: TestConfiguration.getClientSecret(),
    clientId: TestConfiguration.getClientId()
  });
  Iland.init(auth);
});

test('PushChannel can connect to websocket and receives event', async(done) => {
  const channel = PushChannel.open();
  channel.getObservable().subscribe((evt) => {
    if (evt instanceof Event) {
      expect(evt).toBeDefined();
      expect(evt.uuid).toBeDefined();
      expect(evt.details).toBeDefined();
      expect(evt.entityName).toBeDefined();
      expect(evt.entityType).toBeDefined();
      expect(evt.entityUuid).toBeDefined();
      expect(evt.type).toBeDefined();
      expect(evt.initiatedByUsername).toBeDefined();
      expect(evt.initiatedByFullName).toBeDefined();
      expect(evt.timestamp).toBeDefined();
      expect(evt.ownerId).toBeDefined();
      expect(evt.ownerType).toBeDefined();
      if (evt.ownerType === 'USER') {
        expect(evt.taskUuid).toBeNull();
      }
      expect(evt.json).toBeDefined();
      expect(evt.toString()).toBeDefined();
      channel.close();
      done();
    }
  });
  // cause an event to be emitted for refresh token
  return Iland.getAuthProvider().getToken().then(() => {
    return (Iland.getAuthProvider() as any)._refreshToken();
  });
});

test('PushChannel automatically reconnects websocket when closed', async() => {
  const authProvider = Iland.getAuthProvider();
  let subscription: Subscription | undefined;
  const channel = PushChannel.open();
  const firstPromise = new Promise<Event>((resolve) => {
    subscription = channel.getObservable().subscribe(it => {
      if (it instanceof Event) {
        resolve(it);
      }
    });
  });
  // cause an event to be emitted for refresh token
  setTimeout(async() => {
    return authProvider.getToken().then(() => {
      return (authProvider as any)._refreshToken();
    });
  }, 100);
  let evt = await firstPromise;
  expect(evt).toBeDefined();
  expect(evt.uuid).toBeDefined();
  expect(evt.details).toBeDefined();
  expect(evt.entityName).toBeDefined();
  expect(evt.entityType).toBeDefined();
  expect(evt.entityUuid).toBeDefined();
  expect(evt.type).toBeDefined();
  expect(evt.initiatedByUsername).toBeDefined();
  expect(evt.initiatedByFullName).toBeDefined();
  expect(evt.timestamp).toBeDefined();
  expect(evt.ownerId).toBeDefined();
  expect(evt.ownerType).toBeDefined();
  if (evt.ownerType === 'USER') {
    expect(evt.taskUuid).toBeNull();
  }
  if (subscription) {
    subscription.unsubscribe();
  }
  const secondPromise = new Promise<Event>((resolve) => {
    subscription = channel.getObservable().subscribe(it => {
      if (it instanceof Event) {
        resolve(it);
      }
    });
  });
  // close the websocket to force a reconnect
  ((channel as any)._websocket as WebSocket).close();
  // cause an event to be emitted for refresh token
  setTimeout(async() => {
    return authProvider.getToken().then(() => {
      return (authProvider as any)._refreshToken();
    });
  }, 100);
  evt = await secondPromise;
  expect(evt).toBeDefined();
  expect(evt.uuid).toBeDefined();
  expect(evt.details).toBeDefined();
  expect(evt.entityName).toBeDefined();
  expect(evt.entityType).toBeDefined();
  expect(evt.entityUuid).toBeDefined();
  expect(evt.type).toBeDefined();
  expect(evt.initiatedByUsername).toBeDefined();
  expect(evt.initiatedByFullName).toBeDefined();
  expect(evt.timestamp).toBeDefined();
  expect(evt.ownerId).toBeDefined();
  expect(evt.ownerType).toBeDefined();
  if (evt.ownerType === 'USER') {
    expect(evt.taskUuid).toBeNull();
  }
  if (subscription) {
    subscription.unsubscribe();
  }
  const thirdPromise = new Promise<Event>((resolve) => {
    subscription = channel.getObservable().subscribe(it => {
      if (it instanceof Event) {
        resolve(it);
      }
    });
  });
  // close the websocket to force a reconnect with long poll
  // we want to cover long poll case in test coverage
  const timeout = 5000;
  (PushChannel as any).LONG_POLL_TIMEOUT = timeout;
  ((channel as any)._websocket as WebSocket).close();
  // cause an event to be emitted for refresh token
  setTimeout(async() => {
    return authProvider.getToken().then(() => {
      return (authProvider as any)._refreshToken();
    });
  }, timeout + 5000);
  evt = await thirdPromise;
  expect(evt).toBeDefined();
  expect(evt.uuid).toBeDefined();
  expect(evt.details).toBeDefined();
  expect(evt.entityName).toBeDefined();
  expect(evt.entityType).toBeDefined();
  expect(evt.entityUuid).toBeDefined();
  expect(evt.type).toBeDefined();
  expect(evt.initiatedByUsername).toBeDefined();
  expect(evt.initiatedByFullName).toBeDefined();
  expect(evt.timestamp).toBeDefined();
  expect(evt.ownerId).toBeDefined();
  expect(evt.ownerType).toBeDefined();
  if (evt.ownerType === 'USER') {
    expect(evt.taskUuid).toBeNull();
  }
  if (subscription) {
    subscription.unsubscribe();
  }
  channel.close();
});
