/**
 * O365 User JSON Properties
 */
export interface O365UserJson {
  display_name: string;
  organization_name: string;
  organization_uuid: string;
  repository_id: string;
  repository_name: string;
  type: string;
  is_backed_up: boolean;
  is_deleted_from_org: boolean;
}
