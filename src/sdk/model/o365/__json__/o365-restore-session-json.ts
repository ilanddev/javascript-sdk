import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for O365 Restore Session JSON properties
 */
export interface O365RestoreSessionJson extends EntityJson {
  location_id: string;
  o365_organization_uuid: string;
  type: O365RestoreSessionType;
  result: O365RestoreSessionResult;
  state: O365RestoreSessionState;
  creation_time: number;
  end_time: number;
  initiated_by: string;
  details: string;
  ancestors: any;
}

/**
 * Enum for O365 Restore Session Type
 */
export enum O365RestoreSessionType {
  VEX = 'Vex',
  VESP = 'Vesp',
  VEOD = 'Veod'
}

/**
 * Enum for O365 Restore Session State
 */
export enum O365RestoreSessionState {
  STARTING = 'Starting',
  WORKING = 'Working',
  STOPPING = 'Stopping',
  STOPPED = 'Stopped'
}

/**
 * Enum for O365 Restore Session Result
 */
export enum O365RestoreSessionResult {
  SUCCESS = 'Success',
  WARNING = 'Warning',
  FAILED = 'Failed'
}
