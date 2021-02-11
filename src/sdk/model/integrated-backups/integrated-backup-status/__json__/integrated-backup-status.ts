/**
 * Enumeration of possible backup states associated with Integrated Backups.
 * {IntegratedBackupStatus.PARTIAL_BACKUPS_CONFIGURED} only applies to composite entities (not VMs).
 */
export enum IntegratedBackupStatus {
  FULL_BACKUPS_CONFIGURED = 'FULL_BACKUPS_CONFIGURED',
  PARTIAL_BACKUPS_CONFIGURED = 'PARTIAL_BACKUPS_CONFIGURED',
  BACKUPS_NOT_CONFIGURED = 'BACKUPS_NOT_CONFIGURED'
}
