/**
 * Interface for API entity JSON representation.
 */
export interface EntityJson {
  name: string;
  uuid: string;
  deleted: boolean;
  deleted_date: number;
  updated_date: number;
}
