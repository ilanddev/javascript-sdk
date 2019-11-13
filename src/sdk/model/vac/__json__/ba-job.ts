export interface BaJobJson {
  id: string;
  name: string;
  status: string;
  type: string;
  last_run: number;
  end_time: number;
  duration: number;
  duration_units: string;
  procession_rate: number;
  processing_rate_units: string;
  avg_duration: number;
  avg_duration_units: string;
  transferred_data: number;
  transferred_data_units: string;
  bottleneck: string;
  server_name: string;
  is_enabled: boolean;
  protected_vms: number;
  scheduling_type: string;
  company_id: number;
  location_id: number;
}
