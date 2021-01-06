import { SnapshotAttemptJson } from './snapshot-attempt-json';

/**
 * File snapshot info JSON.
 */
export interface FileSnapshotInfoJson {
  modified_time?: number;
  size_bytes: number;
  has_local_copy: boolean;
  has_remote_copy: boolean;
  has_archival_copy: boolean;
  snapshot: SnapshotAttemptJson;
}
