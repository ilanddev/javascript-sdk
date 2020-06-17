/**
 * Interface for O365 Job Session Log Item JSON Properties
 */
export interface O365JobSessionLogItemJson {
  job_session_uuid: string;
  id: string;
  usn: number;
  title: string;
  creation_time: number;
  end_time: number;
}
