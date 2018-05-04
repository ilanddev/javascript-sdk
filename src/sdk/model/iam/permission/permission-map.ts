import { PermissionType } from './__json__/permission-type';
import { Permission } from './permission';

/**
 * PermissionsMap
 */
export class PermissionsMap {
  private static instance: PermissionsMap;
  private _permissions: Map<PermissionType, Permission> = new Map<PermissionType, Permission>();

  private constructor() {
    // ILAND_BACKUP_TENANT level permissions
    this._permissions.set('VIEW_ILAND_BACKUP_TENANT',
      (new Permission('VIEW_ILAND_BACKUP_TENANT', 'ILAND_BACKUP_TENANT', 'READ',
        true, true, null)));
    this._permissions.set('MANAGE_ILAND_BACKUP_TENANT_STORAGE',
      (new Permission('MANAGE_ILAND_BACKUP_TENANT_STORAGE', 'ILAND_BACKUP_TENANT', 'WRITE', true,
        false, null)));
    // ILAND_BACKUP_LOCATION level permissions
    this._permissions.set('VIEW_ILAND_BACKUP_LOCATION',
      (new Permission('VIEW_ILAND_BACKUP_LOCATION', 'ILAND_BACKUP_LOCATION', 'READ', true,
        true, ['VIEW_ILAND_BACKUP_TENANT'])));
    this._permissions.set('VIEW_ILAND_BACKUP_LOCATION_BILLING',
      (new Permission('VIEW_ILAND_BACKUP_LOCATION_BILLING', 'ILAND_BACKUP_LOCATION', 'READ', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_BACKUP_DATA_CENTER_STORAGE',
      (new Permission('MANAGE_ILAND_BACKUP_DATA_CENTER_STORAGE', 'ILAND_BACKUP_LOCATION', 'WRITE', true,
        false, ['VIEW_ILAND_BACKUP_TENANT'])));
    // ILAND_CLOUD_VM level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VM',
      (new Permission('VIEW_ILAND_CLOUD_VM', 'ILAND_CLOUD_VM', 'READ', true,
        true, null)));
    this._permissions.set('VIEW_ILAND_CLOUD_VM_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_VM_BILLING', 'ILAND_CLOUD_VM', 'READ', true,
        false, null)));
    this._permissions.set('ACCESS_ILAND_CLOUD_VM_CONSOLE',
      (new Permission('ACCESS_ILAND_CLOUD_VM_CONSOLE', 'ILAND_CLOUD_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VM_POWER_STATE',
      (new Permission('MANAGE_ILAND_CLOUD_VM_POWER_STATE', 'ILAND_CLOUD_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VM_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VM_CONFIGURATION', 'ILAND_CLOUD_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VM_SNAPSHOTS',
      (new Permission('MANAGE_ILAND_CLOUD_VM_SNAPSHOTS', 'ILAND_CLOUD_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('COPY_MOVE_RESTORE_ILAND_CLOUD_VM',
      (new Permission('COPY_MOVE_RESTORE_ILAND_CLOUD_VM', 'ILAND_CLOUD_VM', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VM',
      (new Permission('DELETE_ILAND_CLOUD_VM', 'ILAND_CLOUD_VM', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_VAPP_NETWORK level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP_NETWORK',
      (new Permission('VIEW_ILAND_CLOUD_VAPP_NETWORK', 'ILAND_CLOUD_VAPP_NETWORK', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_NETWORK_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_NETWORK_CONFIGURATION', 'ILAND_CLOUD_VAPP_NETWORK', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VAPP_NETWORK',
      (new Permission('DELETE_ILAND_CLOUD_VAPP_NETWORK', 'ILAND_CLOUD_VAPP_NETWORK', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_VAPP level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP',
      (new Permission('VIEW_ILAND_CLOUD_VAPP', 'ILAND_CLOUD_VAPP', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VM', 'VIEW_ILAND_CLOUD_VAPP_NETWORK'])));
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_VAPP_BILLING', 'ILAND_CLOUD_VAPP', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_VM_BILLING'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_POWER_STATE',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_POWER_STATE', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, ['MANAGE_ILAND_CLOUD_VM_POWER_STATE'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_CONFIGURATION', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_SNAPSHOTS',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_SNAPSHOTS', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, ['MANAGE_ILAND_CLOUD_VM_SNAPSHOTS'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_LEASES',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_LEASES', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('COPY_MOVE_DOWNLOAD_ILAND_CLOUD_VAPP',
      (new Permission('COPY_MOVE_DOWNLOAD_ILAND_CLOUD_VAPP', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VAPP',
      (new Permission('DELETE_ILAND_CLOUD_VAPP', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VAPP_VMS',
      (new Permission('CREATE_ILAND_CLOUD_VAPP_VMS', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VAPP_NETWORKS',
      (new Permission('CREATE_ILAND_CLOUD_VAPP_NETWORKS', 'ILAND_CLOUD_VAPP', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_INTERNAL_NETWORK level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_INTERNAL_NETWORK',
      (new Permission('VIEW_ILAND_CLOUD_INTERNAL_NETWORK', 'ILAND_CLOUD_INTERNAL_NETWORK', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_INTERNAL_NETWORK_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_INTERNAL_NETWORK_CONFIGURATION', 'ILAND_CLOUD_INTERNAL_NETWORK',
        'WRITE', true, false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_INTERNAL_NETWORK',
      (new Permission('DELETE_ILAND_CLOUD_INTERNAL_NETWORK', 'ILAND_CLOUD_INTERNAL_NETWORK', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_EDGE level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_EDGE',
      (new Permission('VIEW_ILAND_CLOUD_EDGE', 'ILAND_CLOUD_EDGE', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_DHCP_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_DHCP_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_LOAD_BALANCER_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_LOAD_BALANCER_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_STATIC_ROUTING_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_STATIC_ROUTING_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_RATE_LIMIT_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_RATE_LIMIT_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_IPSEC_VPN_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_IPSEC_VPN_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_SSL_VPN_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_SSL_VPN_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_FIREWALL_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_FIREWALL_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_EDGE_NAT_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_EDGE_NAT_CONFIGURATION', 'ILAND_CLOUD_EDGE', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_VDC level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VDC',
      (new Permission('VIEW_ILAND_CLOUD_VDC', 'ILAND_CLOUD_VDC', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VAPP', 'VIEW_ILAND_CLOUD_EDGE',
          'VIEW_ILAND_CLOUD_INTERNAL_NETWORK'])));
    this._permissions.set('VIEW_ILAND_CLOUD_VDC_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_VDC_BILLING', 'ILAND_CLOUD_VDC', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_VAPP_BILLING'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_VDC_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VDC_CONFIGURATION', 'ILAND_CLOUD_VDC', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VDC_VAPPS',
      (new Permission('CREATE_ILAND_CLOUD_VDC_VAPPS', 'ILAND_CLOUD_VDC', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VDC_CATALOG_ITEMS',
      (new Permission('CREATE_ILAND_CLOUD_VDC_CATALOG_ITEMS', 'ILAND_CLOUD_VDC', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_VDC_INTERNAL_NETWORKS',
      (new Permission('CREATE_ILAND_CLOUD_VDC_INTERNAL_NETWORKS', 'ILAND_CLOUD_VDC', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_VAPP_TEMPLATE level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VAPP_TEMPLATE',
      (new Permission('VIEW_ILAND_CLOUD_VAPP_TEMPLATE', 'ILAND_CLOUD_VAPP_TEMPLATE', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VAPP_TEMPLATE_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VAPP_TEMPLATE_CONFIGURATION', 'ILAND_CLOUD_VAPP_TEMPLATE', 'WRITE', true,
        false, null)));
    this._permissions.set('DOWNLOAD_ILAND_CLOUD_VAPP_TEMPLATE',
      (new Permission('DOWNLOAD_ILAND_CLOUD_VAPP_TEMPLATE', 'ILAND_CLOUD_VAPP_TEMPLATE', 'READ', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_VAPP_TEMPLATE',
      (new Permission('DELETE_ILAND_CLOUD_VAPP_TEMPLATE', 'ILAND_CLOUD_VAPP_TEMPLATE', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_MEDIA level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_MEDIA',
      (new Permission('VIEW_ILAND_CLOUD_MEDIA', 'ILAND_CLOUD_MEDIA', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_MEDIA_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_MEDIA_CONFIGURATION', 'ILAND_CLOUD_MEDIA', 'WRITE', true,
        true, null)));
    this._permissions.set('CLONE_DOWNLOAD_ILAND_CLOUD_MEDIA',
      (new Permission('CLONE_DOWNLOAD_ILAND_CLOUD_MEDIA', 'ILAND_CLOUD_MEDIA', 'READ', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_MEDIA',
      (new Permission('DELETE_ILAND_CLOUD_MEDIA', 'ILAND_CLOUD_MEDIA', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_CATALOG level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_CATALOG',
      (new Permission('VIEW_ILAND_CLOUD_CATALOG', 'ILAND_CLOUD_CATALOG', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VAPP_TEMPLATE', 'VIEW_ILAND_CLOUD_MEDIA'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_CATALOG_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_CATALOG_CONFIGURATION', 'ILAND_CLOUD_CATALOG', 'WRITE', true,
        false, null)));
    this._permissions.set('DELETE_ILAND_CLOUD_CATALOG',
      (new Permission('DELETE_ILAND_CLOUD_CATALOG', 'ILAND_CLOUD_CATALOG', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_CATALOG_VAPP_TEMPLATES',
      (new Permission('CREATE_ILAND_CLOUD_CATALOG_VAPP_TEMPLATES', 'ILAND_CLOUD_CATALOG', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_CATALOG_MEDIA',
      (new Permission('CREATE_ILAND_CLOUD_CATALOG_MEDIA', 'ILAND_CLOUD_CATALOG', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_VPG level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_VPG',
      (new Permission('VIEW_ILAND_CLOUD_VPG', 'ILAND_CLOUD_VPG', 'READ', true,
        true, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_VPG_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_VPG_CONFIGURATION', 'ILAND_CLOUD_VPG', 'WRITE', true,
        false, null)));
    this._permissions.set('INITIATE_ILAND_CLOUD_VPG_TEST_FAILOVER',
      (new Permission('INITIATE_ILAND_CLOUD_VPG_TEST_FAILOVER', 'ILAND_CLOUD_VPG', 'WRITE', true,
        false, null)));
    this._permissions.set('INITIATE_ILAND_CLOUD_VPG_LIVE_FAILOVER',
      (new Permission('INITIATE_ILAND_CLOUD_VPG_LIVE_FAILOVER', 'ILAND_CLOUD_VPG', 'WRITE', true,
        false, null)));
    // ILAND_CLOUD_ORGANIZATION level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_ORG',
      (new Permission('VIEW_ILAND_CLOUD_ORG', 'ILAND_CLOUD_ORGANIZATION', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_VDC', 'VIEW_ILAND_CLOUD_CATALOG',
          'VIEW_ILAND_CLOUD_VPG'])));
    this._permissions.set('VIEW_ILAND_CLOUD_ORG_SECURITY',
      (new Permission('VIEW_ILAND_CLOUD_ORG_SECURITY', 'ILAND_CLOUD_ORGANIZATION', 'READ', true,
        false, null)));
    this._permissions.set('VIEW_ILAND_CLOUD_ORG_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_ORG_BILLING', 'ILAND_CLOUD_ORGANIZATION', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_VDC_BILLING'])));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_CONFIGURATION',
      (new Permission('MANAGE_ILAND_CLOUD_ORG_CONFIGURATION', 'ILAND_CLOUD_ORGANIZATION', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_DNS',
      (new Permission('MANAGE_ILAND_CLOUD_ORG_DNS', 'ILAND_CLOUD_ORGANIZATION', 'WRITE', true,
        false, null)));
    this._permissions.set('CREATE_ILAND_CLOUD_ORG_CATALOGS',
      (new Permission('CREATE_ILAND_CLOUD_ORG_CATALOGS', 'ILAND_CLOUD_ORGANIZATION', 'WRITE', true,
        false, null)));
    this._permissions.set('MANAGE_ILAND_CLOUD_ORG_SECURITY',
      (new Permission('MANAGE_ILAND_CLOUD_ORG_SECURITY', 'ILAND_CLOUD_ORGANIZATION', 'WRITE', true,
        false, ['VIEW_ILAND_CLOUD_ORG_SECURITY'])));
    // ILAND_CLOUD_LOCATION level permissions
    this._permissions.set('VIEW_ILAND_CLOUD_LOCATION',
      (new Permission('VIEW_ILAND_CLOUD_LOCATION', 'ILAND_CLOUD_LOCATION', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_ORG'])));
    this._permissions.set('VIEW_ILAND_CLOUD_LOCATION_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_LOCATION_BILLING', 'ILAND_CLOUD_LOCATION', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_ORG_BILLING'])));
    // ILAND_BACKUP_PRODUCT level permissions
    this._permissions.set('VIEW_ILAND_BACKUP',
      (new Permission('VIEW_ILAND_BACKUP', 'ILAND_BACKUP_PRODUCT', 'READ', true,
        true, ['VIEW_ILAND_BACKUP_LOCATION'])));
    this._permissions.set('VIEW_ILAND_BACKUP_BILLING',
      (new Permission('VIEW_ILAND_BACKUP_BILLING', 'ILAND_BACKUP_PRODUCT', 'READ', true,
        false, ['VIEW_ILAND_BACKUP_LOCATION_BILLING'])));
    // ILAND_CLOUD_PRODUCT level permissions
    this._permissions.set('VIEW_ILAND_CLOUD',
      (new Permission('VIEW_ILAND_CLOUD', 'ILAND_CLOUD_PRODUCT', 'READ', true,
        true, ['VIEW_ILAND_CLOUD_LOCATION'])));
    this._permissions.set('VIEW_ILAND_CLOUD_BILLING',
      (new Permission('VIEW_ILAND_CLOUD_BILLING', 'ILAND_CLOUD_PRODUCT', 'READ', true,
        false, ['VIEW_ILAND_CLOUD_LOCATION_BILLING'])));
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
