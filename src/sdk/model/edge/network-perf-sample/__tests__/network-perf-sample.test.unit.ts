import { Iland } from '../../../../iland';
import { MockIlandDirectGrantAuthProvider } from '../../../../__mocks__/responses/iland-direct-grant-auth-privider';
import { MockEdgeJson, MockEdgeStats } from '../../../../__mocks__/responses/edge/edge';
import { Edge } from '../../edge';
import { NetworkPerfSampleSerie } from '../network-perf-sample-serie';
import { NetworkPerfSample } from '../network-perf-sample';

jest.mock('../../../../http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly get stats', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getStats('mem', 'test', 'absolute').then(stats => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/stats`, {
      'params': {
        'end': undefined,
        'group': 'mem',
        'name': 'test',
        'start': undefined,
        'type': 'absolute'
      }
    });
    expect(stats).toBeInstanceOf(NetworkPerfSampleSerie);
    expect(stats.group).toEqual(MockEdgeStats.group);
    expect(stats.name).toEqual(MockEdgeStats.name);
    expect(stats.summary).toEqual(MockEdgeStats.summary);
    expect(stats.type).toEqual(MockEdgeStats.type);
    expect(stats.unit).toEqual(MockEdgeStats.unit);
    expect(stats.interval).toEqual(MockEdgeStats.interval);
    expect(stats.json).toEqual(Object.assign({}, MockEdgeStats));
    expect(stats.toString()).toEqual(JSON.stringify(MockEdgeStats, undefined, 2));
    if (MockEdgeStats.samples) {
      expect(stats.samples.length).toEqual(MockEdgeStats.samples.length);
      let sample: NetworkPerfSample;
      let sampleMock;
      for (const sampleIdx in stats.samples) {
        sample = stats.samples[sampleIdx];
        sampleMock = MockEdgeStats.samples[sampleIdx];
        if (sampleMock) {
          expect(sample).toBeInstanceOf(NetworkPerfSample);
          expect(sample.time).not.toBeNull();
          if (sample.time) {
            expect(sample.time.getTime()).toEqual(sampleMock.time);
          }
          expect(sample.value).toEqual(sampleMock.value);
          expect(sample.json).toEqual(Object.assign({}, sampleMock));
          expect(sample.toString()).toEqual(JSON.stringify(sampleMock, undefined, 2));
        }
      }
    }
  });
});
