import { PerfSamplesRequestJson } from '../_json_/perf-samples-request';
import { PerfSamplesRequest } from '../perf-samples-request';
import { PerfCounter } from '../perf-counter';

test('Can create a perf sample request', () => {
  const request = new PerfSamplesRequest({
    counter: {group: 'cpu', name: 'usage', type: 'average'},
    start: 1,
    end: 2,
    interval: 3,
    limit: 4
  } as PerfSamplesRequestJson);

  // Copy constructor
  const copy = new PerfSamplesRequest(request);
  expect(copy).toBeDefined();
  expect(copy instanceof PerfSamplesRequest).toBeTruthy();
});

test('Can read perf sample request properties', () => {
  const json = {
    counter: {group: 'cpu', name: 'usage', type: 'average'},
    start: 1,
    end: 2,
    interval: 3,
    limit: 4
  } as PerfSamplesRequestJson;
  const request = new PerfSamplesRequest(json);

  expect(request.counter).toBeDefined();
  expect(request.counter instanceof PerfCounter).toBeTruthy();
  expect(request.counter.name).toBe(json.counter.name);
  expect(request.counter.group).toBe(json.counter.group);
  expect(request.counter.type).toBe(json.counter.type);
  expect(request.start).toBe(json.start);
  expect(request.end).toBe(json.end);
  expect(request.interval).toBe(json.interval);
  expect(request.limit).toBe(json.limit);
  expect(request.startDate instanceof Date).toBeTruthy();
  expect(request.startDate).toBeDefined();
  expect(request.endDate instanceof Date).toBeTruthy();
  expect(request.endDate).toBeDefined();
  expect(request.json).toBeDefined();
  expect(request.toString().length).toBeGreaterThan(0);
});
