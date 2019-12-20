import { PermissionType } from './__json__/permission-type';
import { Permission } from './permission';

/**
 * PermissionsMap
 */
export class PermissionsMap {
  private static instance: PermissionsMap;
  private _permissions: Map<PermissionType, Permission> = new Map<PermissionType, Permission>();

  private constructor() {
    // VCC_BACKUP_TENANT level permissions
    this._permissions.set('VIEW_ILAND_BACKUP_TENANT',
      (new Permission('VIEW_ILAND_BACKUP_TENANT', 'VCC_BACKUP_TENANT', 'READ',
        true, true, null)));
    this._permissions.set('MANAGE_ILAND_BACKUP_TENANT_STORAGE',
      (new Permission('MANAGE_ILAND_BACKUP_TENANT_STORAGE', 'VCC_BACKUP_TENANT', 'WRITE', true,
        false, null)));
    // VCC_BACKUP_LOCATION level permissions
    this._permissions.set('VIEW_ILAND_BACKUP_LOCATION',
      (new Permission('VIEW_ILAND_BACKUP_LOCATION', 'VCC_BACKUP_LOCATION', 'READ', true,
        true, ['VIEW_ILAND_BACKUP_TENANT'])));
    this._permissions.set('VIEW_ILAND_BACKUP_LOCATION_BILLING',
      (new Permission('VIEW_ILAND_BACKUP_LOCATION_BILLING', 'VCC_BACKUP_LOCATION', 'READ', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_BACKUP_DATA_CENTER_STORAGE',
      (new Permission('MANAGE_ILAND_BACKUP_DATA_CENTER_STORAGE', 'VCC_BACKUP_LOCATION', 'WRITE', true,
        false, ['MANAGE_ILAND_BACKUP_TENANT_STORAGE'])));
    // IAAS_VM level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VM',
      (new Permission('VIEW_ILAND_CLOUD_VM', 'IAAS_VM', 'READ', true,
        true, null)));
    this._permissions.set('VIEW_ILAND_CLOUD_VM_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_VM_BILLING', 'IAAS_VM', 'READ', true,
        false, null)));
    this._permissions.set('ACCESS_ILAND_CLOUD_VM_CONSOLE',
      (new Permission('ACCESS_ILAND_CLOUD_VM_CONSOLE', 'IAAS_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VM_POWER_STATE',
      (new Permission('MANAGE_ILAND_CLOUD_VM_POWER_STATE', 'IAAS_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VM_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VM_CONFIGURATION', 'IAAS_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VM_SNAPSHOTS',
      (new Permission('MANAGE_ILAND_CLOUD_VM_SNAPSHOTS', 'IAAS_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('COPY_MOVE_RESTORE_ILAND_CLOUD_VM',
      (new Permission('COPY_MOVE_RESTORE_ILAND_CLOUD_VM', 'IAAS_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VM',
      (new Permission('DELETE_ILAND_CLOUD_VM', 'IAAS_VM', 'WRITE', true,
        false, null)));
    // IAAS_VAPP_NETWORK level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP_NETWORK',
      (new Permission('VIEW_ILAND_CLOUD_VAPP_NETWORK', 'IAAS_VAPP_NETWORK', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_NETWORK_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_NETWORK_CONFIGURATION', 'IAAS_VAPP_NETWORK', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VAPP_NETWORK',
      (new Permission('DELETE_ILAND_CLOUD_VAPP_NETWORK', 'IAAS_VAPP_NETWORK', 'WRITE', true,
        false, null)));
    // IAAS_VAPP level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP',
      (new Permission('VIEW_ILAND_CLOUD_VAPP', 'IAAS_VAPP', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VM', 'VIEW_ILAND_CLOUD_VAPP_NETWORK'])));
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_VAPP_BILLING', 'IAAS_VAPP', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_VM_BILLING'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_POWER_STATE',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_POWER_STATE', 'IAAS_VAPP', 'WRITE', true,
        false, ['MANAGE_ILAND_CLOUD_VM_POWER_STATE'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_CONFIGURATION', 'IAAS_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_SNAPSHOTS',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_SNAPSHOTS', 'IAAS_VAPP', 'WRITE', true,
        false, ['MANAGE_ILAND_CLOUD_VM_SNAPSHOTS'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_LEASES',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_LEASES', 'IAAS_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('COPY_MOVE_DOWNLOAD_ILAND_CLOUD_VAPP',
      (new Permission('COPY_MOVE_DOWNLOAD_ILAND_CLOUD_VAPP', 'IAAS_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VAPP',
      (new Permission('DELETE_ILAND_CLOUD_VAPP', 'IAAS_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VAPP_VMS',
      (new Permission('CREATE_ILAND_CLOUD_VAPP_VMS', 'IAAS_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VAPP_NETWORKS',
      (new Permission('CREATE_ILAND_CLOUD_VAPP_NETWORKS', 'IAAS_VAPP', 'WRITE', true,
        false, null)));
    // IAAS_INTERNAL_NETWORK level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_INTERNAL_NETWORK',
      (new Permission('VIEW_ILAND_CLOUD_INTERNAL_NETWORK', 'IAAS_INTERNAL_NETWORK', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_INTERNAL_NETWORK_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_INTERNAL_NETWORK_CONFIGURATION', 'IAAS_INTERNAL_NETWORK',
        'WRITE', true, false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_INTERNAL_NETWORK',
      (new Permission('DELETE_ILAND_CLOUD_INTERNAL_NETWORK', 'IAAS_INTERNAL_NETWORK', 'WRITE', true,
        false, null)));
    // IAAS_EDGE level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_EDGE',
      (new Permission('VIEW_ILAND_CLOUD_EDGE', 'IAAS_EDGE', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_DHCP_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_DHCP_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_LOAD_BALANCER_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_LOAD_BALANCER_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_STATIC_ROUTING_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_STATIC_ROUTING_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_RATE_LIMIT_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_RATE_LIMIT_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_IPSEC_VPN_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_IPSEC_VPN_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_SSL_VPN_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_SSL_VPN_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_FIREWALL_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_FIREWALL_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_NAT_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_NAT_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_L2_VPN_CONFIGURATION',
        (new Permission('MANAGE_ILAND_CLOUD_EDGE_L2_VPN_CONFIGURATION', 'IAAS_EDGE', 'WRITE', true,
            false, null)));
    // IAAS_VDC level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VDC',
      (new Permission('VIEW_ILAND_CLOUD_VDC', 'IAAS_VDC', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VAPP', 'VIEW_ILAND_CLOUD_EDGE',
          'VIEW_ILAND_CLOUD_INTERNAL_NETWORK'])));
    this._permissions.set('VIEW_ILAND_CLOUD_VDC_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_VDC_BILLING', 'IAAS_VDC', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_VAPP_BILLING'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VDC_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VDC_CONFIGURATION', 'IAAS_VDC', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VDC_VAPPS',
      (new Permission('CREATE_ILAND_CLOUD_VDC_VAPPS', 'IAAS_VDC', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VDC_CATALOG_ITEMS',
      (new Permission('CREATE_ILAND_CLOUD_VDC_CATALOG_ITEMS', 'IAAS_VDC', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VDC_INTERNAL_NETWORKS',
      (new Permission('CREATE_ILAND_CLOUD_VDC_INTERNAL_NETWORKS', 'IAAS_VDC', 'WRITE', true,
        false, null)));
    // IAAS_VAPP_TEMPLATE level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP_TEMPLATE',
      (new Permission('VIEW_ILAND_CLOUD_VAPP_TEMPLATE', 'IAAS_VAPP_TEMPLATE', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_TEMPLATE_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_TEMPLATE_CONFIGURATION', 'IAAS_VAPP_TEMPLATE', 'WRITE', true,
        false, null)));
    this._permissions.set('DOWNLOAD_ILAND_CLOUD_VAPP_TEMPLATE',
      (new Permission('DOWNLOAD_ILAND_CLOUD_VAPP_TEMPLATE', 'IAAS_VAPP_TEMPLATE', 'READ', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VAPP_TEMPLATE',
      (new Permission('DELETE_ILAND_CLOUD_VAPP_TEMPLATE', 'IAAS_VAPP_TEMPLATE', 'WRITE', true,
        false, null)));
    // IAAS_MEDIA level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_MEDIA',
      (new Permission('VIEW_ILAND_CLOUD_MEDIA', 'IAAS_MEDIA', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_MEDIA_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_MEDIA_CONFIGURATION', 'IAAS_MEDIA', 'WRITE', true,
        true, null)));
    this._permissions.set('CLONE_DOWNLOAD_ILAND_CLOUD_MEDIA',
      (new Permission('CLONE_DOWNLOAD_ILAND_CLOUD_MEDIA', 'IAAS_MEDIA', 'READ', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_MEDIA',
      (new Permission('DELETE_ILAND_CLOUD_MEDIA', 'IAAS_MEDIA', 'WRITE', true,
        false, null)));
    // IAAS_CATALOG level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_CATALOG',
      (new Permission('VIEW_ILAND_CLOUD_CATALOG', 'IAAS_CATALOG', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VAPP_TEMPLATE', 'VIEW_ILAND_CLOUD_MEDIA'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_CATALOG_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_CATALOG_CONFIGURATION', 'IAAS_CATALOG', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_CATALOG',
      (new Permission('DELETE_ILAND_CLOUD_CATALOG', 'IAAS_CATALOG', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_CATALOG_VAPP_TEMPLATES',
      (new Permission('CREATE_ILAND_CLOUD_CATALOG_VAPP_TEMPLATES', 'IAAS_CATALOG', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_CATALOG_MEDIA',
      (new Permission('CREATE_ILAND_CLOUD_CATALOG_MEDIA', 'IAAS_CATALOG', 'WRITE', true,
        false, null)));
    // IAAS VCC FAILOVER PLAN permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VCC_FAILOVER_PLAN',
        (new Permission('VIEW_ILAND_CLOUD_VCC_FAILOVER_PLAN', 'IAAS_VCC_FAILOVER_PLAN', 'READ', true,
            true, null)));
    this._permissions.set('TEST_ILAND_CLOUD_VCC_FAILOVER_PLAN',
        (new Permission('TEST_ILAND_CLOUD_VCC_FAILOVER_PLAN', 'IAAS_VCC_FAILOVER_PLAN', 'WRITE', true,
            false, null)));
    this._permissions.set('START_ILAND_CLOUD_VCC_FAILOVER_PLAN',
        (new Permission('START_ILAND_CLOUD_VCC_FAILOVER_PLAN', 'IAAS_VCC_FAILOVER_PLAN', 'WRITE', true,
            false, null)));
    this._permissions.set('UNDO_ILAND_CLOUD_VCC_FAILOVER_PLAN',
        (new Permission('UNDO_ILAND_CLOUD_VCC_FAILOVER_PLAN', 'IAAS_VCC_FAILOVER_PLAN', 'WRITE', true,
            false, null)));
    // IAAS_VPG level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VPG',
      (new Permission('VIEW_ILAND_CLOUD_VPG', 'IAAS_VPG', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VPG_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VPG_CONFIGURATION', 'IAAS_VPG', 'WRITE', true,
        false, null)));
    this._permissions.set('INITIATE_ILAND_CLOUD_VPG_TEST_FAILOVER',
      (new Permission('INITIATE_ILAND_CLOUD_VPG_TEST_FAILOVER', 'IAAS_VPG', 'WRITE', true,
        false, null)));
    this._permissions.set('INITIATE_ILAND_CLOUD_VPG_LIVE_FAILOVER',
      (new Permission('INITIATE_ILAND_CLOUD_VPG_LIVE_FAILOVER', 'IAAS_VPG', 'WRITE', true,
        false, null)));
    // IAAS_ORGANIZATION level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_ORG',
      (new Permission('VIEW_ILAND_CLOUD_ORG', 'IAAS_ORGANIZATION', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VDC', 'VIEW_ILAND_CLOUD_CATALOG',
          'VIEW_ILAND_CLOUD_VPG'])));
    this._permissions.set('VIEW_ILAND_CLOUD_ORG_SECURITY',
      (new Permission('VIEW_ILAND_CLOUD_ORG_SECURITY', 'IAAS_ORGANIZATION', 'READ', true,
        false, null)));
    this._permissions.set('VIEW_ILAND_CLOUD_ORG_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_ORG_BILLING', 'IAAS_ORGANIZATION', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_VDC_BILLING'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_ORG_CONFIGURATION', 'IAAS_ORGANIZATION', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_DNS',
      (new Permission('MANAGE_ILAND_CLOUD_ORG_DNS', 'IAAS_ORGANIZATION', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_ORG_CATALOGS',
      (new Permission('CREATE_ILAND_CLOUD_ORG_CATALOGS', 'IAAS_ORGANIZATION', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_SECURITY',
      (new Permission('MANAGE_ILAND_CLOUD_ORG_SECURITY', 'IAAS_ORGANIZATION', 'WRITE', true,
        false, ['VIEW_ILAND_CLOUD_ORG_SECURITY'])));
    this._permissions.set('VIEW_ILAND_CLOUD_ORG_DR_RUNBOOKS',
        (new Permission('VIEW_ILAND_CLOUD_ORG_DR_RUNBOOKS', 'IAAS_ORGANIZATION', 'READ', true,
            false, ['VIEW_ILAND_CLOUD_VPG'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_DR_RUNBOOKS',
        (new Permission('MANAGE_ILAND_CLOUD_ORG_DR_RUNBOOKS', 'IAAS_ORGANIZATION', 'WRITE', true,
            false, ['VIEW_ILAND_CLOUD_ORG_DR_RUNBOOKS',
              'INITIATE_ILAND_CLOUD_VPG_LIVE_FAILOVER',
              'INITIATE_ILAND_CLOUD_VPG_TEST_FAILOVER',
              'MANAGE_ILAND_CLOUD_VPG_CONFIGURATION'])));
    this._permissions.set('VIEW_ILAND_CLOUD_ORG_VDI',
        (new Permission('VIEW_ILAND_CLOUD_ORG_VDI', 'IAAS_ORGANIZATION', 'READ', true,
            false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_VDI',
        (new Permission('MANAGE_ILAND_CLOUD_ORG_VDI', 'IAAS_ORGANIZATION', 'WRITE', true,
            false, ['VIEW_ILAND_CLOUD_ORG_VDI'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_VDI_DEPLOYMENTS',
        (new Permission('MANAGE_ILAND_CLOUD_ORG_VDI_DEPLOYMENTS', 'IAAS_ORGANIZATION', 'WRITE', true,
            false, ['VIEW_ILAND_CLOUD_ORG_VDI', 'CREATE_ILAND_CLOUD_VDC_VAPPS'])));
    // IAAS_LOCATION level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_LOCATION',
      (new Permission('VIEW_ILAND_CLOUD_LOCATION', 'IAAS_LOCATION', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_ORG'])));
    this._permissions.set('VIEW_ILAND_CLOUD_LOCATION_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_LOCATION_BILLING', 'IAAS_LOCATION', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_ORG_BILLING'])));
    // VCC_BACKUP_PRODUCT level permissions
    this._permissions.set('VIEW_ILAND_BACKUP',
      (new Permission('VIEW_ILAND_BACKUP', 'VCC_BACKUP_PRODUCT', 'READ', true,
        true, ['VIEW_ILAND_BACKUP_LOCATION'])));
    this._permissions.set('VIEW_ILAND_BACKUP_BILLING',
      (new Permission('VIEW_ILAND_BACKUP_BILLING', 'VCC_BACKUP_PRODUCT', 'READ', true,
        false, ['VIEW_ILAND_BACKUP_LOCATION_BILLING'])));
    // IAAS_PRODUCT level permissions
    this._permissions.set('VIEW_ILAND_CLOUD',
      (new Permission('VIEW_ILAND_CLOUD', 'IAAS_PRODUCT', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_LOCATION'])));
    this._permissions.set('VIEW_ILAND_CLOUD_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_BILLING', 'IAAS_PRODUCT', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_LOCATION_BILLING'])));
    // OBJECT_STORAGE_LOCATION level permissions
    this._permissions.set('MANAGE_ILAND_OBJECT_STORAGE_LOCATION',
        (new Permission('MANAGE_ILAND_OBJECT_STORAGE_LOCATION', 'OBJECT_STORAGE_LOCATION', 'WRITE', true,
            false, null)));
    // OBJECT_STORAGE_PRODUCT level permissions
    this._permissions.set('MANAGE_ILAND_OBJECT_STORAGE',
        (new Permission('MANAGE_ILAND_OBJECT_STORAGE', 'OBJECT_STORAGE_PRODUCT', 'WRITE', true,
            false, ['MANAGE_ILAND_OBJECT_STORAGE_LOCATION'])));
    // COMPANY level permissions
    this._permissions.set('VIEW_COMPANY',
      (new Permission('VIEW_COMPANY', 'COMPANY', 'READ', true,
        true, ['VIEW_ILAND_CLOUD', 'VIEW_ILAND_BACKUP'])));
    this._permissions.set('VIEW_COMPANY_SUPPORT_TICKETS',
      (new Permission('VIEW_COMPANY_SUPPORT_TICKETS', 'COMPANY', 'READ', true,
        false, null)));
    this._permissions.set('VIEW_COMPANY_IAM',
      (new Permission('VIEW_COMPANY_IAM', 'COMPANY', 'READ', true,
        false, null)));
    this._permissions.set('MANAGE_COMPANY_IAM',
      (new Permission('MANAGE_COMPANY_IAM', 'COMPANY', 'WRITE', false,
        false, ['VIEW_COMPANY_IAM'])));
    this._permissions.set('MANAGE_COMPANY_SETTINGS',
        (new Permission('MANAGE_COMPANY_SETTINGS', 'COMPANY', 'WRITE', true,
            false, ['VIEW_COMPANY'])));
    this._permissions.set('MANAGE_COMPANY_SUPPORT_TICKETS',
      (new Permission('MANAGE_COMPANY_SUPPORT_TICKETS', 'COMPANY', 'WRITE', true,
        false, ['VIEW_COMPANY_SUPPORT_TICKETS'])));
  }

  /**
   * Get an instance of PermissionMap. Singleton implementation.
   * @returns {PermissionsMap}
   */
  static getInstance() {
    if (!PermissionsMap.instance) {
      PermissionsMap.instance = new PermissionsMap();
    }
    return PermissionsMap.instance;
  }

  /**
   * Get the permissions map.
   * @returns {Map<PermissionType, Permission>}
   */
  get permissions(): Map<PermissionType, Permission> {
    return this._permissions;
  }
}
