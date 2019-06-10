/**
 * Backup restore point JSON representation.
 */
export interface BackupRestorePointJson {
  name: string;
  time: number;
  type: BackupRestorePointType;
  job_name: string;
}

/**
 * Enumeration of possible Backup Restore Point types
 */
export type BackupRestorePointType = 'LOCAL' | 'COPY';
