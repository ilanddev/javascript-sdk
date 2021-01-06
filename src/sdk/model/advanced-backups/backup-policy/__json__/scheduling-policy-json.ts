import { Periodicity } from './periodicity';
import { ContinuousScheduleJson } from './continuous-schedule-json';
import { DailyScheduleJson } from './daily-schedule-json';
import { MonthlyScheduleJson } from './monthly-schedule-json';

/**
 * Scheduling Policy JSON.
 */
export interface SchedulingPolicyJson {
  continuous_schedule: ContinuousScheduleJson;
  daily_schedule: DailyScheduleJson;
  monthly_schedule: MonthlyScheduleJson;
  periodicity: Periodicity;
}
