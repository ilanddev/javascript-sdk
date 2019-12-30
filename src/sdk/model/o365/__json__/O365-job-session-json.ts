import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for O365 Job Session JSON properties
 */
export interface O365JobSessionJson extends EntityJson {
  location_id: string;
  o365_organization_uuid: string;
  o365_job_uuid: string;
  creation_time: number;
  end_time: number;
  progress: number;
  status: O365JobSessionStatus;
  statistics: O365JobSessionStats;
}

/**
 * Enum for O365 Job Session Status
 */
export enum O365JobSessionStatus {
  FAILED = 'Failed',
  RUNNING = 'Running',
  STOPPED = 'Stopped',
  SUCCESS = 'Success',
  WARNING = 'Warning'
}

/**
 * Interface for O365 Job Sessions Statistics
 */
export interface O365JobSessionStats {
  processing_rate_bytes_p_s: number;
  processing_rate_items_p_s: number;
  read_rate_bytes_p_s: number;
  write_rate_bytes_p_s: number;
  transferred_data_bytes: number;
  processed_objects: number;
  bottleneck: string;
}
