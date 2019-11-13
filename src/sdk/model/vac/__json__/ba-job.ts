export interface BaJobJson {
  id: string;
  name: string;
  status: string;
  type: string;
  last_run: number;
  end_time: number;
  duration: number;
  procession_rate: number;
  avg_duration: number;
  transferred_data: number;
  bottleneck: string;
  server_name: string;
  is_enabled: boolean;
  protected_vms: number;
  scheduling_type: string;
  company_id: number;
  location_id: number;
}
