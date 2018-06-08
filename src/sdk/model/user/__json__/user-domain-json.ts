import { DomainType } from './user-domain-type';

export interface UserDomainJson {
  domain: string;
  domain_name: string;
  domain_id: string;
  domain_type: DomainType;
}
