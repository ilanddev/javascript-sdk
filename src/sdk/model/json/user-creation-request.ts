import { UserJson } from './user';

/**
 * User Creation Request JSON properties.
 */
export interface UserCreationRequestJson extends UserJson {
  password: string;
}