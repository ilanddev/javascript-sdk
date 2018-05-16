import { Iland } from '../../../iland';
import { PerfCounter } from './perf-counter';
import { PerfSamplesSeries } from './perf-samples-series';
import { PerfSamplesSeriesJson } from './__json__/perf-samples';
import { PerfSamplesRequest } from './perf-samples-request';

export class EntityWithPerfSamples {
  uuid: string;
  apiPrefix: string;

  async getPerfCounters(): Promise<Array<PerfCounter>> {
    return Iland.getHttp().get(`${this.apiPrefix}/${this.uuid}/performance-counters`).then((response) => {
      let data = response.data;
      if (data.data) { data = data.data; }
      return data as Array<PerfCounter>;
    });
  }

  async getPerfSamples(request: PerfSamplesRequest): Promise<PerfSamplesSeries> {
    return Iland.getHttp().get(
      `${this.apiPrefix}/${this.uuid}/performance/` +
      `${request.counter.group}::${request.counter.name}::${request.counter.type}`,
      {
        params: {
          start: request.start,
          end: request.end,
          limit: request.limit,
          interval: request.interval
        }
      }
    ).then((response) => {
      return new PerfSamplesSeries(response.data as PerfSamplesSeriesJson);
    });
  }
}
