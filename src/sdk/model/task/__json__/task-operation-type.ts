/**
 * Enumeration of possible task operation values.
 */
export type TaskOperation = 'power on' |
  'power off' |
  'suspend' |
  'shutdown' |
  'reset' |
  'reboot' |
  'update memory size' |
  'reset mac address' |
  'reconfigure vm' |
  'rename vm' |
  'rename vapp' |
  'update cpu count' |
  'update disk size' |
  'add virtual disk' |
  'update vm disks' |
  'delete virtual disk' |
  'install VMWare tools' |
  'update virtual network card' |
  'vapp template enable download from vCloud' |
  'vapp template enable download' |
  'media enable download' |
  'vapp enable download from vCloud' |
  'vapp enable download' |
  'delete virtual network card' |
  'update firewall' |
  'update nat service' |
  'create snapshot' |
  'restore snapshot' |
  'remove snapshot' |
  'delete entity' |
  'update storage lease' |
  'update runtime lease' |
  'add vapp' |
  'add vms' |
  'build vapp' |
  'build VMs' |
  'update description' |
  'update static routing' |
  'update dhcp service' |
  'update load balancer service' |
  'update metadata' |
  'delete metadata' |
  'upgrade virtual hardware' |
  'update startup section' |
  'eject media' |
  'insert media' |
  'relocate vm' |
  'create edge gateway' |
  'delete edge gateway' |
  'update vapp template' |
  'update media' |
  'capture vapp as vapp template' |
  'update ipsec vpn service' |
  'clone vm' |
  'clone vapp' |
  'clone media' |
  'remove network from vapp' |
  'add org vdc network to vapp' |
  'add vapp network to vapp' |
  'update vapp network' |
  'update vapp firewall' |
  'update vapp network dhcp' |
  'update vapp network static routing' |
  'update vapp network nat' |
  'update guest customization section' |
  'update vm capabilities' |
  'update edge interface' |
  'extend vdc resource pool' |
  'create org vdc network' |
  'delete org vdc network' |
  'update org vdc network' |
  // VI Operations
  'vmware tools upgrade' |
  'update vm boot options' |
  'update vm drs rules' |
  'update vm tools upgrade policy' |
  // Veeam Operations
  'restore backup' |
  // Zerto Operations
  'zerto failover test' |
  'zerto failover test initiation' |
  'zerto failover test stop' |
  'zerto failover commit' |
  'zerto failover rollback' |
  'zerto live failover' |
  'zerto live failover initiation' |
  'zerto batch live failover' |
  'zerto batch test failover' |
  'upload vapp template from ovf' |
  'upload media from iso' |
  // Reporting Operations
  'generate hipaa report' |
  'generate vm encryption report' |
  'generate login event history report' |
  'generate support request report' |
  'generate ecs event history report' |
  'generate log inspection report' |
  'generate anti malware report' |
  'generate vulnerability report' |
  'generate firewall event report' |
  'generate integrity event report' |
  'generate dpi event report' |
  'generate web reputation event report' |
  'generate vm inventory report' |
  'generate dr admin report' |
  'generate protection summary report' |
  'generate billing report' |
  'create catalog' |
  'sync catalog item' |
  'managed vapp shutdown' |
  'generate failover test report' |
  'update cloud tenant repository size' |
  'enable nested hypervisor' |
  'disable nested hypervisor' |
  'update product section' |
  'upload ovf to catalog' |
  'create catalog item in vcloud' |
  'receive ovf file upload' |
  'upload ovf files to vcloud' |
  'prepare ovf template in vcloud' |
  'delete catalog' |
  // VAC
  'vac update company name' |
  'vac update backup resource storage quota';
