export type ReportType = 'CUSTOM' | 'BASIC' | 'DETAILED';

export interface BillingReportRequestJson {
  custom_columns: { [key: string]: string };
  rows: Array<string>;
  date: number;
  email: string;
  filename: string;
  type: ReportType;
}
