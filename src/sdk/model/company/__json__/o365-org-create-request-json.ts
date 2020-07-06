/**
 * Interface for O365 Organization creation request JSON.
 */
export interface O365OrgCreateRequestJson {
  name: string;
  account: string;
  password: string;
  is_exchange_online: boolean;
  is_share_point_online: boolean;
}
