export interface SearchResultJson {
  query: string;
  offset: number;
  limit: number;
  returned_hits: number;
  total_hits: number;
  results: Array<{ [key: string]: string }>;
}
