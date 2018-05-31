export interface ComplianceReportJson {
  uuid: string;
  entity_uuid: string;
  report_type: string;
  file_type: string;
  created: number;
  content: string;
  has_content: boolean;
  summary: string;
  has_summary: boolean;
}
