import { LogLevelType } from '../../../common/__json__/log-level-type';

/**
 * Logging JSON
 */
export interface LoggingJson {
  enable: boolean;
  log_level: LogLevelType;
}
