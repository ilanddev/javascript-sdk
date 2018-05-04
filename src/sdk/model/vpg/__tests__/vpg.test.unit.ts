import { Iland } from '../../../iland';
import { Vpg } from '../vpg';
import { MockVpgJson } from '../__mocks__/vpg';
import { VpgFailoverCreateRequest } from '../vpg-failover/vpg-failover-create-request';
import { VpgFailoverTestAlertRequest } from '../vpg-failover/vpg-failover-test-alert-request';
import { Http } from '../../../service/http/http';
import { MockIlandDirectGrantAuthProvider } from '../../../auth/__mocks__/iland-direct-grant-auth-privider';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

const vpg = new Vpg(MockVpgJson);

test('Add a Vpg Failover Test Alert', async() => {
  const alertRequest = new VpgFailoverTestAlertRequest('fake@email.com', 1);
  expect(alertRequest.toString().length).toBeGreaterThan(0);
  return vpg.addVpgFailoverTestAlert(alertRequest).then((alert) => {
    const rawData = alert.json;
    expect(alert.toString().length).toBeGreaterThan(0);
    expect(alert.vpgUuid).toBeDefined();
    expect(alert.vpgUuid).toBe(rawData.vpg_uuid);
    expect(alert.username).toBeDefined();
    expect(alert.username).toBe(rawData.username);
    expect(alert.email).toBeDefined();
    expect(alert.email).toBe(rawData.email);
    expect(alert.weeksBeforeAlert).toBeDefined();
    expect(alert.weeksBeforeAlert).toBe(rawData.weeks_before_alert);
  });
});

test('Can get Vpg Failover Test Alert', async() => {
  return vpg.getVpgFailoverTestAlert().then((failoverTestAlert) => {
    expect(Iland.getHttp().get).lastCalledWith(`/vpgs/${vpg.uuid}/failover-test-alerts`);
    const rawData = failoverTestAlert.json;
    expect(failoverTestAlert.toString().length).toBeGreaterThan(0);
    expect(failoverTestAlert.vpgUuid).toBeDefined();
    expect(failoverTestAlert.vpgUuid).toBe(rawData.vpg_uuid);
    expect(failoverTestAlert.username).toBeDefined();
    expect(failoverTestAlert.username).toBe(rawData.username);
    expect(failoverTestAlert.email).toBeDefined();
    expect(failoverTestAlert.email).toBe(rawData.email);
    expect(failoverTestAlert.weeksBeforeAlert).toBeDefined();
    expect(failoverTestAlert.weeksBeforeAlert).toBe(rawData.weeks_before_alert);
  });
});

test('Remove Vpg failover test alert', async() => {
  return vpg.removeVpgFailoverTestAlert().then(function() {
    expect(Iland.getHttp().delete).lastCalledWith(`/vpgs/${vpg.uuid}/failover-test-alerts`, {});
  });
});

test('Test a failover for Vpg', async() => {
  const mockCheckpoint = {
    checkpoint_id: 'mock-checkpoint-id'
  };
  return vpg.failoverTest(mockCheckpoint.checkpoint_id).then((task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/vpgs/${vpg.uuid}/failover-test`, mockCheckpoint);
    expect(task.operation).toBe('zerto failover test initiation');
  });
});

test('Stop vpg failover', async() => {
  return vpg.failoverTestStop(true, 'mock-summary').then((task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/vpgs/${vpg.uuid}/failover-test-stop`, {
      failover_test_success: true,
      failover_test_summary: 'mock-summary'
    });
    expect(task.operation).toBe('zerto failover test stop');
  });
});

test('Initiate a live failover on Vpg', async() => {
  const failoverReq = new VpgFailoverCreateRequest('mock-checkpoint-id', 'COMMIT', 'NONE', 0, 1);
  expect(failoverReq.toString().length).toBeGreaterThan(0);
  return vpg.failover(failoverReq).then((task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/vpgs/${vpg.uuid}/failover`, failoverReq.json);
    expect(task.operation).toBe('zerto live failover initiation');
  });
});

test('Commits changes after a live failover for Vpg', async() => {
  return vpg.commitFailover().then((task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/vpgs/${vpg.uuid}/failover-commit`);
    expect(task.operation).toBe('zerto failover commit');
  });
});

test('Rollback changes after a live failover for Vpg', async() => {
  return vpg.rollbackFailover().then((task) => {
    expect(Iland.getHttp().post).lastCalledWith(`/vpgs/${vpg.uuid}/failover-rollback`);
    expect(task.operation).toBe('zerto failover rollback');
  });
});

test('Get a failover report details for a failover task', async() => {
  const mockTaskUuid = 'mock-task-uuid';
  return vpg.getFailoverReportDetails(mockTaskUuid).then((report) => {
    expect(Iland.getHttp().get).lastCalledWith(`/vpgs/${vpg.uuid}/failover-report/${mockTaskUuid}`);
    const rawData = report.json;
    expect(report.toString().length).toBeGreaterThan(0);
    expect(report.locationId).toBe(rawData.location_id);
    expect(report.taskUuid).toBe(rawData.task_uuid);
    expect(report.status).toBe(rawData.status);
    expect(report.taskCompleteTimestamp).toBe(rawData.task_complete_timestamp);
    const reportData = report.data;
    const reportDataJson = reportData.json;
    expect(reportData.toString().length).toBeGreaterThan(0);
    expect(reportData.vpgName).toBe(reportDataJson.vpg_name);
    expect(reportData.reportGenerationDate).toBe(reportDataJson.report_generation_date);
    expect(reportData.operationName).toBe(reportDataJson.operation_name);
    expect(reportData.pointInTime).toBe(reportDataJson.point_in_time);
    expect(reportData.startTime).toBe(reportDataJson.start_time);
    expect(reportData.endTime).toBe(reportDataJson.end_time);
    expect(reportData.rto).toBe(reportDataJson.rto);
    expect(reportData.operationResult).toBe(reportDataJson.operation_result);
    expect(reportData.userNotes).toBe(reportDataJson.user_notes);
    expect(reportData.protectedSite).toBe(reportDataJson.protected_site);
    expect(reportData.recoverySite).toBe(reportDataJson.recovery_site);
    expect(reportData.defaultRecoveryHost).toBe(reportDataJson.default_recovery_host);
    expect(reportData.defaultRecoveryDatastore).toBe(reportDataJson.default_recovery_datastore);
    expect(reportData.defaulFailoverMoveNetwork).toBe(reportDataJson.default_failover_move_network);
    expect(reportData.recoveryOrg).toBe(reportDataJson.recovery_organization);
    expect(reportData.guestCustomization).toBe(reportDataJson.guest_customization);
    expect(reportData.defaultTestRecoveryNetwork).toBe(reportDataJson.default_test_recovery_network);
    expect(reportData.defaultRecoveryFolder).toBe(reportDataJson.default_recovery_folder);
    expect(reportData.postRecoveryScript).toBe(reportDataJson.post_recovery_script);
    expect(reportData.bootOrderSettingsMessage).toBe(reportDataJson.boot_order_settings_message);
    expect(reportData.recoveryVdc).toBe(reportDataJson.recovery_vdc);
    const networkMapping = reportData.networkMappings[0];
    const networkMappingJson = networkMapping.json;
    const bootOrderSettings = reportData.bootOrderSettings[0];
    const bootOrderSettingsJson = bootOrderSettings.json;
    const vmRecoverySettings = reportData.vmRecoverySettings[0];
    const vmRecoverySettingsJson = vmRecoverySettings.json;
    const detailedRecoveryList = reportData.detailedRecoveryStepList[0];
    const detailedRecoveryListJson = detailedRecoveryList.json;
    expect(networkMapping.sourceNetwork).toBe(networkMappingJson.source_network);
    expect(networkMapping.failoverMoveTargetNetwork).toBe(networkMappingJson.failover_move_target_network);
    expect(networkMapping.failoverTestTargetNetwork).toBe(networkMappingJson.failover_test_target_network);
    expect(networkMapping.reverseConfigFailoverTestNetwork)
      .toBe(networkMappingJson.reverse_configuration_failover_test_network);
    expect(networkMapping.toString().length).toBeGreaterThan(0);
    expect(bootOrderSettings.name).toBe(bootOrderSettingsJson.name);
    expect(bootOrderSettings.vmsInGroup).toBe(bootOrderSettingsJson.vms_in_group);
    expect(bootOrderSettings.startupDelay).toBe(bootOrderSettingsJson.startup_delay);
    expect(bootOrderSettings.toString().length).toBeGreaterThan(0);
    expect(vmRecoverySettings.name).toBe(vmRecoverySettingsJson.name);
    expect(vmRecoverySettings.recoveryHost).toBe(vmRecoverySettingsJson.recovery_host);
    expect(vmRecoverySettings.recoveryNetworks).toBe(vmRecoverySettingsJson.recovery_networks);
    expect(vmRecoverySettings.recoveryDatastores).toBe(vmRecoverySettingsJson.recovery_datastores);
    expect(vmRecoverySettings.recoveryFolder).toBe(vmRecoverySettingsJson.recovery_folder);
    expect(vmRecoverySettings.toString().length).toBeGreaterThan(0);
    expect(detailedRecoveryList.number).toBe(detailedRecoveryListJson.number);
    expect(detailedRecoveryList.description).toBe(detailedRecoveryListJson.description);
    expect(detailedRecoveryList.result).toBe(detailedRecoveryListJson.result);
    expect(detailedRecoveryList.startTime).toBe(detailedRecoveryListJson.start_time);
    expect(detailedRecoveryList.endTime).toBe(detailedRecoveryListJson.end_time);
    expect(detailedRecoveryList.executionTime).toBe(detailedRecoveryListJson.execution_time);
    expect(detailedRecoveryList.toString().length).toBeGreaterThan(0);
  });
});

test('Get download report href from Vpg failover report', (done) => {
  const mockTaskUuid = 'mock-task-uuid';
  expect.assertions(1);
  vpg.getFailoverReport(mockTaskUuid, 'downloadFileName').subscribe(url => {
    expect(url).toEqual(Iland.baseUrl + '/vpgs/' + vpg.uuid + '/failover-report/'
      + mockTaskUuid + '/download?accept='
      + encodeURIComponent(Http.versionMime('application/octet-stream'))
      + '&filename=' + encodeURIComponent('downloadFileName')
      + '&oauth_token=fake-auth-token-2');
    done();
  }, (error) => {
    console.log(error);
    done();
  });
});
