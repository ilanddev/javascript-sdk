/**
 * Interface for checkpoint.
 */
export interface CheckpointJson {
  edge_uuid: string;
  uuid: string;
  time: number;
  export: string | null;
}
