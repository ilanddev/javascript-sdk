import { ReportFormat } from './report-format';
import { ReportTypeJson } from './report-type-json';

export interface ReportHeaderJson {
  uuid: string;
  entity_uuid: string;
  report_type: ReportTypeJson;
  file_type: ReportFormat;
  created: number;
}
