import { DirectoryListingEntryJson } from './directory-listing-entry-json';

/**
 * Directory listing JSON.
 */
export interface DirectoryListingJson {
  data: Array<DirectoryListingEntryJson>;
  pagination_cookie: string;
}
