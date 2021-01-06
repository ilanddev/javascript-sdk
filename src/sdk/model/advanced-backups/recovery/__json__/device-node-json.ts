import { DeviceTreeDetailsJson } from './device-tree-details-json';
import { FilePartitionBlockJson } from './file-partition-block-json';

/**
 * Device node JSON.
 */
export interface DeviceNodeJson {
  intermediate_node: DeviceTreeDetailsJson;
  leaf_node: FilePartitionBlockJson;
}
