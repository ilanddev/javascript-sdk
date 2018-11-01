export interface SearchResultJson {
  query: string;
  page_offset: number;
  page_size: number;
  returned_hits: number;
  total_hits: number;
  results: Array<{ [key: string]: string }>;
}
