import { CombineMethod } from './combine-method-enum';
import { DeviceNodeJson } from './device-node-json';

/**
 * Device tree details JSON.
 */
export interface DeviceTreeDetailsJson {
  device_length: number;
  combine_method: CombineMethod;
  device_nodes: Array<DeviceNodeJson>;
  stripe_size: number;
}
