import { PerfSamplesRequestJson } from '../json/perf-samples-request';
import { Iland } from '../../iland';
import { PerfCounterJson, PerfSampleSerieJson } from '../json/perf-samples';

export class EntityWithPerfSamples {
  uuid: string;
  apiPrefix: string;

  async getPerfCounters(): Promise<Array<PerfCounterJson>> {
    return Iland.getHttp().get(`${this.apiPrefix}/${this.uuid}/performance-counters`).then((response) => {
      return response.data as Array<PerfCounterJson>;
    });
  }

  async getPerfSamples(request: PerfSamplesRequestJson): Promise<PerfSampleSerieJson> {
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
      return response.data as PerfSampleSerieJson;
    });
  }
}
