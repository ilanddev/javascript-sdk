import { NetworkPerfSampleJson, NetworkPerfSampleSerieJson } from './__json__/network-perf-sample-json';
import { NetworkPerfSample } from './network-perf-sample';
import { PerfGroupType } from './__json__/perf-group-type';
import { PerfStatsType } from './__json__/perf-stats-type';

/**
 * NetworkPerfSampleSerie class
 */
export class NetworkPerfSampleSerie {

  constructor(private _json: NetworkPerfSampleSerieJson) {
  }

  /**
   * Get summary
   * @returns {string | null}
   */
  get summary(): string | null {
    return this._json.summary;
  }

  /**
   * Get interval
   * @returns {number}
   */
  get interval(): number {
    return this._json.interval;
  }

  /**
   * Get group
   * @returns {PerfGroupType | null}
   */
  get group(): PerfGroupType | null {
    return this._json.group;
  }

  /**
   * Get name
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Get type
   * @returns {PerfStatsType | null}
   */
  get type(): PerfStatsType | null {
    return this._json.type;
  }

  /**
   * Get unit
   * @returns {string | null}
   */
  get unit(): string | null {
    return this._json.unit;
  }

  /**
   * Get a list of network perf samples.
   * @returns {Array<NetworkPerfSample>}
   */
  get samples(): Array<NetworkPerfSample> {
    return (this._json.samples as Array<NetworkPerfSampleJson>).map(sample => new NetworkPerfSample(sample));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {NetworkPerfSampleSerieJson}
   */
  get json(): NetworkPerfSampleSerieJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
