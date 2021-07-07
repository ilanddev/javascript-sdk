/**
 * Interface for O365 Organization creation request JSON.
 */
export interface O365OrgCreateRequestJson {
  name: string;
  account: string;
  password: string;
  use_modern_auth: boolean;
  application_id: string | null;
  application_secret: string | null;
  is_exchange_online: boolean;
  is_share_point_online: boolean;
  create_default_jobs: boolean;
  repository_id: string | null;
}
