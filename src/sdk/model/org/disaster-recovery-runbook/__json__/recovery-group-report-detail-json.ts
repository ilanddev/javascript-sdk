import { VpgFailoverReportDetailsJson } from '../../../vpg/vpg-failover/__json__/vpg-failover-report-detail';
import { VmBootupLogJson } from './vm-bootlog-json';

export interface RecoveryGroupReportDetailsJson {
  recovery_group_uuid: string;
  failover_status: string;
  details: VpgFailoverReportDetailsJson;
  bootup_logs: Array<VmBootupLogJson>;
}
