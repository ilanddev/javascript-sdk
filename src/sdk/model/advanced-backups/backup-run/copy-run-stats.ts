import { CopyRunStatsJson } from './__json__/copy-run-stats-json';

/**
 * Copy Run Stats.
 */
/* istanbul ignore next: autogenerated */
export class CopyRunStats {

  constructor(private _json: CopyRunStatsJson) {
  }

  /**
   * Get end time.
   * @returns {number | null}
   */
  get endTime(): number | null {
    return this._json.end_time ?? null;
  }

  /**
   * Get is incremental.
   * @returns {boolean | null}
   */
  get isIncremental(): boolean | null {
    return this._json.is_incremental ?? null;
  }

  /**
   * Get logical bytes transferred.
   * @returns {number}
   */
  get logicalBytesTransferred(): number {
    return this._json.logical_bytes_transferred;
  }

  /**
   * Get logical size bytes.
   * @returns {number}
   */
  get logicalSizeBytes(): number {
    return this._json.logical_size_bytes;
  }

  /**
   * Get logical transfer rate bps.
   * @returns {number}
   */
  get logicalTransferRateBps(): number {
    return this._json.logical_transfer_rate_bps;
  }

  /**
   * Get physical bytes transferred.
   * @returns {number}
   */
  get physicalBytesTransferred(): number {
    return this._json.physical_bytes_transferred;
  }

  /**
   * Get start time.
   * @returns {number | null}
   */
  get startTime(): number | null {
    return this._json.start_time ?? null;
  }

  /**
   * Get the json representation of this class.
   * @returns {CopyRunStatsJson}
   */
  get json(): CopyRunStatsJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
