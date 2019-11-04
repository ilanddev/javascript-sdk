export enum LogLevel {
  EMERGENCY = 'EMERGENCY',
  ALERT = 'ALERT',
  CRITICAL = 'CRITICAL',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  NOTICE = 'NOTICE',
  INFO = 'INFO',
  DEBUG = 'DEBUG'
}

export type LogLevelType = keyof typeof LogLevel;
