/**
 * O365 OneDrive Restore Option Request JSON properties
 */
export interface O365OneDriveRestoreOptionsRequestJson {
  user: string;
  password: string;
  action: O365OneDriveDocumentAction;
  version: O365OneDriveDocumentVersion;
}

/**
 * O365 OneDrive Document Action enum
 */
export enum O365OneDriveDocumentAction {
  OVERWRITE = 'overwrite',
  KEEP = 'keep'
}

/**
 * O365 OneDrive Document Version enum
 */
export enum O365OneDriveDocumentVersion {
  ALL = 'all',
  LAST = 'last'
}
