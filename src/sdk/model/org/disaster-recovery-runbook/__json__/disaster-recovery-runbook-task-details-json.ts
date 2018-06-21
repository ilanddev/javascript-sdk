import { StatusJson } from './status-json';
import { RecoveryGroupReportDetailsJson } from './recovery-group-report-detail-json';

export interface DisasterRecoveryRunbookReportDetailsJson {
  location_id: string;
  task_uuid: string;
  type: string;
  task_complete: number;
  status: StatusJson;
  data: { [key: string]: RecoveryGroupReportDetailsJson };
  start_time: string;
  end_time: string;
  protected_vm_count: number;
}
