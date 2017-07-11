/**
 * Interface for API entity JSON representation.
 */
export interface EntityJson {
  name: string;
  uuid: string;
  deleted: boolean;
  deleted_date: number | null;
  updated_date: number;
}
