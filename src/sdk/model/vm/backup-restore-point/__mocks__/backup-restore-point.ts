import { AxiosResponse } from 'axios';
import { BackupRestorePointJson } from '../__json__/backup-restore-point-json';

export const MockBackupRestorePoint1Json: BackupRestorePointJson = {
  name: 'test disk 1',
  time: (new Date()).getTime(),
  type: 'LOCAL',
  job_name: 'iland-mock-job'
};

export const MockBackupRestorePoint2Json: BackupRestorePointJson = {
  name: 'test disk 2',
  time: (new Date()).getTime() + 100,
  type: 'COPY',
  job_name: 'iland-mock-dist-2'
};

export const MockBackupRestorePointsJson: Array<BackupRestorePointJson> = [MockBackupRestorePoint1Json,
  MockBackupRestorePoint2Json];

export const MockVmBackupRestorePointsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {data: MockBackupRestorePointsJson},
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
