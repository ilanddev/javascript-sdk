/**
 * Role Creation Request JSON properties.
 */
import {PerfCounter} from "./perf-samples";

export interface PerfSamplesRequestJson {
    counter: PerfCounter
    start: number;
    end: number;
    interval: number;
    limit: number;
}
