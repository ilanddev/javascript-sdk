/**
 * Enumeration of possible event types.
 */
export type EventType =
    // ORG
    'ORG_CREATE' |
    'ORG_DELETE' |
    'ORG_MODIFY' |
    'ORG_ANTIMALWARE_REPORT_GENERATE' |
    'ORG_BILLING_REPORT_GENERATE' |
    'ORG_CONTINUITY_PROTECTION_REPORT_GENERATE' |
    'ORG_DR_ADMIN_REPORT_GENERATE' |
    'ORG_DPI_EVENT_REPORT_GENERATE' |
    'ORG_ECS_EVENT_HISTORY_REPORT_GENERATE' |
    'ORG_FAILOVER_TEST_REPORT_GENERATE' |
    'ORG_FIREWALL_EVENT_REPORT_GENERATE' |
    'ORG_HIPAA_REPORT_GENERATE' |
    'ORG_INTEGRITY_EVENT_REPORT_GENERATE' |
    'ORG_LOG_INSPECTION_REPORT_GENERATE' |
    'ORG_LOGIN_EVENT_HISTORY_REPORT_GENERATE' |
    'ORG_SUPPORT_REQUEST_REPORT_GENERATE' |
    'ORG_VM_ENCRYPTION_REPORT_GENERATE' |
    'ORG_VULNERABILITY_REPORT_GENERATE' |
    'ORG_WEB_REPUTATION_REPORT_GENERATE' |
    'ORG_DR_RUNBOOK_REPORT_GENERATE' |
    'ORG_VM_INVENTORY_REPORT_GENERATE' |
    'ORG_BILL_CALCULATED' |
    'ORG_DELETE_DNS_ZONE' |
    'ORG_ADD_DNS_ZONE' |
    'ORG_PUSH_DNS_ZONE' |
    'ORG_DELETE_DNS_RECORD' |
    'ORG_UPDATE_DNS_RECORD' |
    'ORG_ADD_DNS_RECORD' |
    'ORG_VULNERABILITY_SCAN_LAUNCH' |
    'ORG_VULNERABILITY_SCAN_PAUSE' |
    'ORG_VULNERABILITY_SCAN_STOP' |
    'ORG_VULNERABILITY_SCAN_RESUME' |
    'ORG_VDI_AUTOMATION_DEPLOY_REQUEST' |
    'ORG_VDI_AUTOMATION_UNDEPLOY_REQUEST' |
    'ORG_VDI_USER_CREATED' |
    'ORG_VDI_USER_UPDATED' |
    'ORG_VDI_USER_DELETED' |
    'ORG_VDI_TEAM_CREATED' |
    'ORG_VDI_TEAM_UPDATED' |
    'ORG_VDI_TEAM_DELETED' |
    'ORG_VDI_AUTOMATION_GROUP_CREATED' |
    'ORG_VDI_AUTOMATION_GROUP_UPDATED' |
    'ORG_VDI_AUTOMATION_GROUP_DELETED' |

    // EDGE
    'EDGE_CREATE' |
    'EDGE_DELETE' |
    'EDGE_MODIFY' |
    'EDGE_UPGRADE' |
    'EDGE_FIREWALL_MODIFIED' |
    'EDGE_DHCP_MODIFIED' |
    'EDGE_ROUTING_MODIFIED' |
    'EDGE_NAT_MODIFIED' |
    'EDGE_IPSEC_VPN_SERVICE_UPDATE' |
    // VM
    'VM_CREATE' |
    'VM_CREATE_REQUEST' |
    'VM_DELETE' |
    'VM_MODIFY' |
    'VM_MODIFY_REQUEST' |
    'VM_DEPLOY' |
    'VM_DEPLOY_REQUEST' |
    'VM_UNDEPLOY_REQUEST' |
    'VM_UNDEPLOY' |
    'VM_CONSOLIDATE' |
    'VM_CONSOLIDATE_REQUEST' |
    'VM_RELOCATE' |
    'VM_RELOCATE_REQUEST' |
    'VM_POWER_STATE_CHANGE' |
    'VM_IP_ADDRESS_CHANGED' |
    'VM_RESTORE_BACKUP_START' |
    'VM_RESTORE_BACKUP_END' |
    'VM_IDENTITY_CHANGED' |
    'VM_BILL_CALCULATED' |
    'VM_FIREWALL_EVENT' |
    'VM_ANTIMALWARE_EVENT' |
    'VM_WEB_REPUTATION_EVENT' |
    'VM_LOG_INSPECTION_EVENT' |
    'VM_DPI_EVENT' |
    'VM_INTEGRITY_EVENT' |
    'VM_UPDATE_VMWARE_TOOLS_UPGRADE_POLICY' |
    'VM_UPDATE_BOOT_OPTIONS' |
    'VM_VMWARE_TOOLS_REINSTALL' |
    'VM_DRS_RULES_UPDATE' |
    'VM_DRS_RULES_ADD' |
    'VM_DRS_RULES_DELETE' |
    'VM_VMWARE_TOOLS_UPGRADE' |
    // VAPP
    'VAPP_CREATE' |
    'VAPP_IMPORT' |
    'VAPP_DELETE' |
    'VAPP_MODIFY' |
    'VAPP_DEPLOY' |
    'VAPP_UNDEPLOY' |
    'VAPP_UPLOAD_TIMEOUT' |
    'VAPP_RUNTIME_LEASE_EXPIRE' |
    'VAPP_IMPORT_REQUEST' |
    'VAPP_MODIFY_REQUEST' |
    'VAPP_CREATE_REQUEST' |
    'VAPP_DELETE_REQUEST' |
    'VAPP_DEPLOY_REQUEST' |
    'VAPP_UNDEPLOY_REQUEST' |
    'VAPP_LEASE_EXPIRATION_CHANGED' |
    'VAPP_BILL_CALCULATED' |
    'VAPP_ENABLE_DOWNLOAD' |
    'VAPP_DOWNLOAD' |
    // VDC
    'VDC_VM_INVENTORY_REPORT_GENERATE' |
    'VDC_CREATE_REQUEST' |
    'VDC_DELETE_REQUEST' |
    'VDC_CREATE' |
    'VDC_DELETE' |
    'VDC_MODIFY' |
    'VDC_FAST_PROVISIONING_MODIFY' |
    'VDC_THIN_PROVISIONING_MODIFY' |
    'VDC_BILL_CALCULATED' |
    'VDC_CONTRACT_CHANGED' |
    // PROVIDER VDC
    'PROVIDER_VDC_CREATE' |
    'PROVIDER_VDC_CREATE_REQUEST' |
    'PROVIDER_VDC_DELETE' |
    'PROVIDER_VDC_DELETE_REQUEST' |
    'PROVIDER_VDC_MODIFY' |
    // VAPP NETWORK
    'VAPP_NETWORK_CREATE' |
    'VAPP_NETWORK_DELETE' |
    'VAPP_NETWORK_MODIFY' |
    'VAPP_NETWORK_DEPLOY' |
    'VAPP_NETWORK_UNDEPLOY' |
    'VAPP_NETWORK_UPGRADE' |
    // ORG VDC NETWORK
    'ORG_VDC_NETWORK_CREATE' |
    'ORG_VDC_NETWORK_DELETE' |
    'ORG_VDC_NETWORK_MODIFY' |
    'ORG_VDC_NETWORK_DEPLOY' |
    'ORG_VDC_NETWORK_UNDEPLOY' |
    'ORG_VDC_NETWORK_UPGRADE' |
    // EXTERNAL NETWORK
    'EXTERNAL_NETWORK_CREATE' |
    'EXTERNAL_NETWORK_DELETE' |
    'EXTERNAL_NETWORK_MODIFY' |
    'EXTERNAL_NETWORK_DEPLOY' |
    'EXTERNAL_NETWORK_UNDEPLOY' |
    'EXTERNAL_NETWORK_UPGRADE' |
    // MEDIA
    'MEDIA_CREATE' |
    'MEDIA_IMPORT' |
    'MEDIA_MODIFY' |
    'MEDIA_DELETE' |
    'MEDIA_CREATE_REQUEST' |
    'MEDIA_IMPORT_REQUEST' |
    'MEDIA_MODIFY_REQUEST' |
    'MEDIA_DELETE_REQUEST' |
    'MEDIA_UPLOAD_TIMEOUT' |
    'MEDIA_QUARANTINE_REJECT' |
    // VAPP TEMPLATE
    'VAPP_TEMPLATE_CREATE' |
    'VAPP_TEMPLATE_IMPORT' |
    'VAPP_TEMPLATE_MODIFY' |
    'VAPP_TEMPLATE_DELETE' |
    'VAPP_TEMPLATE_CREATE_REQUEST' |
    'VAPP_TEMPLATE_IMPORT_REQUEST' |
    'VAPP_TEMPLATE_MODIFY_REQUEST' |
    'VAPP_TEMPLATE_DELETE_REQUEST' |
    'VAPP_TEMPLATE_ENABLE_DOWNLOAD' |
    'VAPP_TEMPLATE_DOWNLOAD' |
    // CATALOG
    'CATALOG_CREATE' |
    'CATALOG_DELETE' |
    'CATALOG_MODIFY' |
    'CATALOG_PUBLISH' |
    // USER
    'VCD_USER_SESSION_LOGIN' |
    'VCD_USER_SESSION_AUTHORIZE' |
    'VCD_USER_IMPORT' |
    'VCD_USER_REMOVE' |
    'VCD_USER_MODIFY' |
    'VCD_USER_LOCKOUT' |
    'VCD_USER_UNLOCK' |
    'VCD_USER_LOCK_EXPIRED' |
    'VCD_USER_CREATE' |
    'VCD_USER_DELETE' |
    'VCD_USER_ENABLE' |
    'VCD_USER_DISABLE' |
    // USER / KEYCLOAK BASED
    'USER_LOGIN' |
    'USER_LOGOUT' |
    'USER_REFRESH_TOKEN' |
    'USER_UPDATE_PASSWORD' |
    'USER_UPDATE_TOTP' |
    'USER_REMOVE_TOTP' |
    'USER_SEND_RESET_PASSWORD' |
    'USER_RESET_PASSWORD' |
    'USER_IMPERSONATE' |
    // TASK
    'TASK_CREATE' |
    'TASK_START' |
    'TASK_ABORT' |
    'TASK_COMPLETE' |
    'TASK_FAIL' |
    // STORAGE PROFILE
    'STORAGE_PROFILE_CREATE' |
    'STORAGE_PROFILE_DELETE' |
    'STORAGE_PROFILE_MODIFY' |
    'STORAGE_PROFILE_ADD' |
    'STORAGE_PROFILE_REMOVE' |
    // SUPPORT TICKET
    'SUPPORT_TICKET_CREATED' |
    'SUPPORT_TICKET_UPDATED' |
    'SUPPORT_TICKET_COMMENT_CREATED' |
    'SUPPORT_TICKET_ATTACHMENT_CREATED' |
    // VPG
    'VPG_LIVE_FAILOVER_START' |
    'VPG_TEST_FAILOVER_START' |
    'VPG_TEST_FAILOVER_STOP' |
    'VPG_LIVE_FAILOVER_ROLLBACK' |
    'VPG_LIVE_FAILOVER_ROLLBACK_FAILED' |
    'VPG_LIVE_FAILOVER_COMMIT_FAILED' |
    'VPG_LIVE_FAILOVER_COMMIT' |
    // DISK
    'DISK_DETACH' |
    'DISK_ATTACH' |
    'DISK_CREATE_REQUEST' |
    'DISK_CREATE' |
    'DISK_DELETE_REQUEST' |
    'DISK_DELETE' |
    'DR_RUNBOOK_CREATE' |
    'DR_RUNBOOK_UPDATE' |
    'DR_RUNBOOK_DELETE' |
    'USER_CREATE' |
    'USER_UPDATE' |
    'USER_DELETE';
