/**
 * VM Guest Tools JSON
 */
export interface GuestToolsJson {
  status: ToolsVersionStatus;
  running_status: ToolsRunningStatus;
  version: string;
}

/**
 * Guest Tools Version Status enum
 */
export enum ToolsVersionStatus {
  BLACKLISTED = 'guestToolsBlacklisted',
  CURRENT = 'guestToolsCurrent',
  NEED_UPGRADE = 'guestToolsNeedUpgrade',
  NOT_INSTALLED = 'guestToolsNotInstalled',
  SUPPORTED_NEW = 'guestToolsSupportedNew',
  SUPPORTED_OLD = 'guestToolsSupportedOld',
  TOO_NEW = 'guestToolsTooNew',
  TOO_OLD = 'guestToolsTooOld',
  UNMANAGED = 'guestToolsUnmanaged'
}

/**
 * Guest Tools Running Status enum
 */
export enum ToolsRunningStatus {
  EXECUTING_SCRIPTS = 'guestToolsExecutingScripts',
  NOT_RUNNING = 'guestToolsNotRunning',
  RUNNING = 'guestToolsRunning'
}
