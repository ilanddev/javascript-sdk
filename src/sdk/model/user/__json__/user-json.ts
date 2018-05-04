import { UserType } from './user-type';

/**
 * API User JSON Representation.
 */

export interface UserJson {
  name: string;
  address: string;
  city: string;
  company: string;
  country: string;
  created_date: number;
  deleted: boolean;
  deleted_date: number | null;
  email: string;
  fullname: string;
  locked: boolean;
  phone: string;
  state: string;
  user_type: UserType;
  zip: string;
  domain: string;
}
