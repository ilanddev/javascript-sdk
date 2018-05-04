import { AxiosResponse } from 'axios';
import { BackupRestorePointJson } from '../__json__/backup-restore-point-json';

export const MockBackupRestorePoint1Json: BackupRestorePointJson = {
  name: 'test disk 1',
  timestamp: (new Date()).getTime(),
  backup_server_name: 'backup server 1'
};

export const MockBackupRestorePoint2Json: BackupRestorePointJson = {
  name: 'test disk 2',
  timestamp: (new Date()).getTime() + 100,
  backup_server_name: 'backup server 2'
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
