/**
 * Interface for O365 Group JSON properties
 */
export interface O365GroupJson {
  display_name: string;
  organization_name: string;
  organization_uuid: string;
  type: string;
  native_id: string;
  name: string;
  is_backed_up: boolean;
  is_deleted_from_org: boolean;
}
