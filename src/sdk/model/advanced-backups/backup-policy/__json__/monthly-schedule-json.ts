import { Day } from './day';
import { DayCount } from './day-count';

/**
 * Monthly Schedule JSON.
 */
export interface MonthlyScheduleJson {
  day: Day;
  day_count: DayCount;
}
