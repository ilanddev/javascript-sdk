/**
 * O365 OneDrive Document JSON properties
 */
export interface O365OneDriveDocumentJson {
  id: string;
  name: string;
  version: string;
  size_bytes: number;
  inherited_permissions: boolean;
  created_by: string;
  creation_time: number;
  modified_by: string;
  modification_time: number;
}
