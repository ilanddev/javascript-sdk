import { AxiosResponse } from 'axios';
import { BackupRestorePointJson } from '../../../model/json/backup-restore-point';

export const MockBackupRestorPoint1Json: BackupRestorePointJson = {
  name: 'test disk 1',
  timestamp: (new Date()).getTime(),
  backup_server_name: 'backup server 1'
};

export const MockBackupRestorPoint2Json: BackupRestorePointJson = {
  name: 'test disk 2',
  timestamp: (new Date()).getTime() + 100,
  backup_server_name: 'backup server 2'
};

export const MockBackupRestorePointsJson: Array<BackupRestorePointJson> = [MockBackupRestorPoint1Json,
  MockBackupRestorPoint2Json];

export const MockVmBackupRestorePointsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockBackupRestorePointsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
