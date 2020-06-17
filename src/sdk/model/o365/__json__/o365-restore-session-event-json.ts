/**
 * Interface for O365 Restore Session Event JSON properties
 */
export interface O365RestoreSessionEventJson {
  item_size_bytes: number;
  id: string;
  type: O365RestoreSessionEventType;
  status: O365RestoreSessionEventStatus;
  start_time: number;
  end_time: number;
  duration: number;
  title: string;
  order: number;
}

/**
 * Enum for an O365 Restore Session Event Type
 */
export enum O365RestoreSessionEventType {
  NONE = 'None',
  SAVE = 'Save',
  EXPORT = 'Export',
  SEND = 'Send',
  RESTORE = 'Restore',
  VIEW = 'View'
}

/**
 * Enum for an O365 Restore Session Event Status
 */
export enum O365RestoreSessionEventStatus {
  RUNNING = 'Running',
  SUCCESS = 'Success',
  WARNING = 'Warning',
  FAILED = 'Failed'
}
