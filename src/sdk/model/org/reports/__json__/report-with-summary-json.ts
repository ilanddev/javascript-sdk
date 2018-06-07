import { ReportTypeJson } from './report-type-json';
import { ReportFormat } from './report-format';

export interface ReportWithSummaryJson {
  uuid: string;
  entity_uuid: string;
  report_type: ReportTypeJson;
  file_type: ReportFormat;
  created: number;
  summary: string;
  has_summary: boolean;
}
