/**
 * O365 SharePoint Folder JSON properties
 */
export interface O365SharePointFolderJson {
  id: string;
  name: string;
  created_by: string;
  creation_time: number;
  modified_by: string;
  modification_time: number;
  type: O365SharePointFolderType;
}

/**
 * Enum for SharePoint Folder type
 */
export enum O365SharePointFolderType {
  LIST_FOLDER = 'listFolder',
  LIBRARY_FOLDER = 'libradyFolder',
  UNKNOWN = 'unknown'
}
