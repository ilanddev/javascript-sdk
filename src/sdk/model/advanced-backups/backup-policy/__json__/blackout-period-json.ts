import { TimeOfDayJson } from '../../backup-group/__json__/time-of-day-json';
import { Day } from './day';

/**
 * Blackout Period JSON.
 */
export interface BlackoutPeriodJson {
  day: Day;
  end_time: TimeOfDayJson;
  start_time: TimeOfDayJson;
}
