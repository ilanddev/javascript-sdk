import { VpgFailoverCreateRequestJson } from './__json__/vpg-failover-create-request';
import { CommitPolicy } from './__json__/vpg-failover-commit-policy-type';
import { ShutdownPolicy } from './__json__/vpg-failover-shutdown-policy-type';

/**
 * Vpg Failover Create Request
 */
export class VpgFailoverCreateRequest {

  private checkpointId: string;
  private commitPolicy: CommitPolicy;
  private shutdownPolicy: ShutdownPolicy;
  private timeToWaitBeforeShutdownInSec: number;
  private commitValue: number;

  /**
   * Creates a new Vpg Failover Create Request.
   * @param {string} checkpointId
   * @param {CommitPolicy} commitPolicy
   * @param {ShutdownPolicy} shutdownPolicy
   * @param {number} timeToWaitBeforeShutdownInSec
   * @param {number} commitValue
   */
  constructor(checkpointId: string, commitPolicy: CommitPolicy, shutdownPolicy: ShutdownPolicy,
              timeToWaitBeforeShutdownInSec: number, commitValue: number) {
    this.checkpointId = checkpointId;
    this.commitPolicy = commitPolicy;
    this.commitValue = commitValue;
    this.shutdownPolicy = shutdownPolicy;
    this.timeToWaitBeforeShutdownInSec = timeToWaitBeforeShutdownInSec;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VpgFailoverCreateRequestJson} the JSON representation
   */
  get json(): VpgFailoverCreateRequestJson {
    return {
      checkpoint_identifier: this.checkpointId,
      commit_policy: this.commitPolicy,
      shutdown_policy: this.shutdownPolicy,
      time_to_wait_before_shutdown_in_sec: this.timeToWaitBeforeShutdownInSec,
      commit_value: this.commitValue
    };
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this.json, undefined, 2);
  }
}
