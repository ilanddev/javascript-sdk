/**
 * Interface for Catalog Update Request JSON representation.
 */
export interface CatalogUpdateRequestJson {
  description: string;
  uuid: string;
  name: string;
  deleted: boolean;
  deleted_date: number;
  updated_date: number;
}
