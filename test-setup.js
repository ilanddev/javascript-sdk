// forces Jest to use nodejs http environment for tests
global.XMLHttpRequest = undefined;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;