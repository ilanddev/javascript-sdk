import { EventService } from '../event-service';
import { IlandDirectGrantAuthProvider } from '../../../auth';
import { TestConfiguration } from '../../../../../__tests__/configuration';
import { Iland } from '../../../iland';
import { Event } from '../../../model/event';
import { Subscription } from 'rxjs/Subscription';

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

test('EventService can connect to websocket and receives event', async(done) => {
  EventService.getObservable().subscribe((evt) => {
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
    done();
  });
  // cause an event to be emitted for refresh token
  return Iland.getAuthProvider().getToken().then(() => {
    return (Iland.getAuthProvider() as any)._refreshToken();
  });
});

test('EventService automatically reconnects websocket when closed', async() => {
  const authProvider = Iland.getAuthProvider();
  let subscription: Subscription | undefined;
  const firstPromise = new Promise<Event>((resolve) => {
    subscription = EventService.getObservable().subscribe(resolve);
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
    subscription = EventService.getObservable().subscribe(resolve);
  });
  // close the websocket to force a reconnect
  ((EventService as any)._websocket as WebSocket).close();
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
    subscription = EventService.getObservable().subscribe(resolve);
  });
  // close the websocket to force a reconnect with long poll
  // we want to cover long poll case in test coverage
  const timeout = 5000;
  (EventService as any).LONG_POLL_TIMEOUT = timeout;
  ((EventService as any)._websocket as WebSocket).close();
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
});
