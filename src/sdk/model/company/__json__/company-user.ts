import { UserType } from '../../user/__json__/user-type';
import { UserDomainJson } from '../../user/__json__/user-domain-json';

export interface CompanyUserJson {
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
  deleted_date: number;
  domain: string | UserDomainJson;
  first_name: string;
  last_name: string;
  role: string;
}
