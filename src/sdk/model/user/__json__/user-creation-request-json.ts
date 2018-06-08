/**
 * User Creation Request JSON properties.
 */
export interface UserCreationRequestJson {
  password: string;
  // TODO: the domain should be a UserDomainJson type after API changes.
  domain: string;
  fullname: string;
  email: string;
  name: string;
}
