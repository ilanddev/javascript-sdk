import { AbstractNetworkJson } from './abstract-network';

/**
 * Interface for Internal Network JSON properties.
 */
export interface InternalNetworkJson extends AbstractNetworkJson {
  edge_uuid: string | null;
  shared: boolean;
}
