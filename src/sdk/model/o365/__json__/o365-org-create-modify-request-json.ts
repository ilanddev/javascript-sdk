/**
 * Interface for O365 Organization create / modify request JSON.
 */
export interface O365OrgCreateModifyRequestJson {
  name: string | null;
  account: string | null;
  password: string | null;
  use_modern_auth: boolean;
  application_id: string | null;
  application_secret: string | null;
  use_application_only_auth: boolean;
  user_code: string | null;
  new_application_name: string | null;
  is_exchange_online: boolean;
  is_teams_online: boolean;
  is_share_point_online: boolean;
  create_default_jobs: boolean;
}
