import { RemoteBackupClusterStatus } from './remote-backup-cluster-status';

/**
 * Remote vDC Backup Cluster Info JSON.
 */
export interface RemoteVdcBackupClusterInfoJson {
  uid: string;
  name: string;
  status: RemoteBackupClusterStatus;
}
