import { ReportTypeJson } from './report-type-json';
import { ReportFormat } from './report-format';

export interface ReportWithContentJson {
  uuid: string;
  entity_uuid: string;
  report_type: ReportTypeJson;
  file_type: ReportFormat;
  created: number;
  json_content: string;
  has_content: boolean;
}
