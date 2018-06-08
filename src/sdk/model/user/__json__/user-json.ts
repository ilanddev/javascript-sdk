import { UserType } from './user-type';
import { UserDomainJson } from './user-domain-json';

/**
 * API User JSON Representation.
 */
export interface UserJson {
  user_type: UserType;
  locked: boolean;
  email: string;
  phone: string;
  company: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  name: string;
  fullname: string;
  deleted: boolean;
  created_date: number;
  deleted_date: number | null;
  domain: string | UserDomainJson;
  first_name?: string;
  last_name?: string;
}
