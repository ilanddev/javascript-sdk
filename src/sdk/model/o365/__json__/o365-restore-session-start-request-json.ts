import { O365RestoreSessionType } from './o365-restore-session-json';

/**
 * Interface for O365 Restore Session Start Request
 */
export interface O365RestoreSessionStartRequestJson {
  datetime: number;
  type: O365RestoreSessionType;
  show_all_versions: boolean;
  show_delete: boolean;
}
