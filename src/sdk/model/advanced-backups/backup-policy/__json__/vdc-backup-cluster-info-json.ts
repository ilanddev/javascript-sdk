import { RemoteVdcBackupClusterInfoJson } from './remote-vdc-backup-cluster-info-json';
import { LocalVdcBackupClusterInfoJson } from './local-vdc-backup-cluster-info-json';

/**
 * vDC Backup Cluster Info JSON.
 */
export interface VdcBackupClusterInfoJson {
  vdc_uuid: string;
  local_cluster: LocalVdcBackupClusterInfoJson;
  remote_clusters: Array<RemoteVdcBackupClusterInfoJson>;
}
