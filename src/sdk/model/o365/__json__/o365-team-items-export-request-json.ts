/**
 * O365 Team items export request JSON properties
 */
export interface O365TeamItemsExportRequestJson {
  item_ids: Array<string>;
}

/**
 * O365 Teams export items (posts) given range request JSON properties
 */
export interface O365TeamsRangeExportRequestJson {
  from: number;
  to: number;
}
