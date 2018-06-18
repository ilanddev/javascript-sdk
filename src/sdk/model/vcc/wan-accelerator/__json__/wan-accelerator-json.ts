/**
 * Interface for WanAccelerator JSON properties.
 */
export interface WanAcceleratorJson {
  name: string;
  description: string;
  out_of_date: boolean;
  version: string;
  capacity: number;
  traffic_port: number;
  connection_count: number;
  cache_path: string;
}
