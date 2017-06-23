/**
 * API User Representation.
 */
export interface ApiUser {

  name: string;
  address: string;
  city: string;
  company: string;
  country: string;
  created_date: number;
  crm: string;
  deleted: boolean;
  deleted_date: number | null;
  email: string;
  fullname: string;
  locked: boolean;
  phone: string;
  state: string;
  user_type: string;
  zip: string;

}
