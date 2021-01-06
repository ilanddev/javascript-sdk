import { ArchivalExternalTargetJson } from '../../backup-policy/__json__/archival-external-target-json';
import { ReplicationTargetSettingsJson } from '../../backup-policy/__json__/replication-target-settings-json';
import { SnapshotTargetType } from './snapshot-target-type';

/**
 * Snapshot Target Settings JSON.
 */
export interface SnapshotTargetSettingsJson {
  archival_target?: ArchivalExternalTargetJson;
  replication_target?: ReplicationTargetSettingsJson;
  type: SnapshotTargetType;
}
