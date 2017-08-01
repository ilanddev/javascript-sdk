import { EntityJson } from './entity';

/**
 * Interface for VM properties.
 */
export interface VmJson extends EntityJson {
  cores_per_socket: number;
  cpus_number: number;
  created_date: number|null;
  deployed: boolean;
  description: string;
  hardware_version: string;
  inserted_media_name: string;
  location_id: string;
  media_inserted: boolean;
  memory_size: number;
  org_uuid: string;
  os: OperatingSystem;
  status: VmStatus;
  storage_profiles: Array<string>;
  vapp_uuid: string;
  vcenter_href: string;
  vcenter_instance_uuid: string;
  vcenter_moref: string;
  vcenter_name: string;
  vcloud_href: string;
  vdc_uuid: string;
  vim_datastore_ref: string;
  vm_local_id: string;
}

/**
 * Enumeration of possible VM statuses from the API.
 */
export type VmStatus = 'FAILED_CREATION' |
  'INCONSISTENT_STATE' |
  'POWERED_OFF' |
  'POWERED_ON' |
  'SUSPENDED' |
  'UNKNOWN' |
  'UNRECOGNIZED' |
  'UNRESOLVED' |
  'WAITING_FOR_INPUT' |
  'MIXED';

/**
 * Enumeration of possible VM operating system identifiers.
 */
export type OperatingSystem =
    'asianux3_64Guest' |
    'asianux3Guest' |
    'asianux4_64Guest' |
    'asianux4Guest' |
    'asianux5_64Guest' |
    'centos64Guest' |
    'centosGuest' |
    'coreos64Guest' |
    'darwin10_64Guest' |
    'darwin10Guest' |
    'darwin11_64Guest' |
    'darwin11Guest' |
    'darwin12_64Guest' |
    'darwin13_64Guest' |
    'darwin14_64Guest' |
    'darwin64Guest' |
    'darwinGuest' |
    'debian4_64Guest' |
    'debian4Guest' |
    'debian5_64Guest' |
    'debian5Guest' |
    'debian6_64Guest' |
    'debian6Guest' |
    'debian7_64Guest' |
    'debian7Guest' |
    'debian8_64Guest' |
    'debian8Guest' |
    'dosGuest' |
    'eComStation2Guest' |
    'eComStationGuest' |
    'fedora64Guest' |
    'fedoraGuest' |
    'freebsd64Guest' |
    'freebsdGuest' |
    'genericLinuxGuest' |
    'mandrakeGuest' |
    'mandriva64Guest' |
    'mandrivaGuest' |
    'netware4Guest' |
    'netware5Guest' |
    'netware6Guest' |
    'nld9Guest' |
    'oesGuest' |
    'openServer5Guest' |
    'openServer6Guest' |
    'opensuse64Guest' |
    'opensuseGuest' |
    'oracleLinux64Guest' |
    'oracleLinuxGuest' |
    'os2Guest' |
    'other24xLinux64Guest' |
    'other24xLinuxGuest' |
    'other26xLinux64Guest' |
    'other26xLinuxGuest' |
    'other3xLinux64Guest' |
    'other3xLinuxGuest' |
    'otherGuest' |
    'otherGuest64' |
    'otherLinux64Guest' |
    'otherLinuxGuest' |
    'redhatGuest' |
    'rhel2Guest' |
    'rhel3_64Guest' |
    'rhel3Guest' |
    'rhel4_64Guest' |
    'rhel4Guest' |
    'rhel5_64Guest' |
    'rhel5Guest' |
    'rhel6_64Guest' |
    'rhel6Guest' |
    'rhel7_64Guest' |
    'rhel7Guest' |
    'sjdsGuest' |
    'sles10_64Guest' |
    'sles10Guest' |
    'sles11_64Guest' |
    'sles11Guest' |
    'sles12_64Guest' |
    'sles12Guest' |
    'sles64Guest' |
    'slesGuest' |
    'solaris10_64Guest' |
    'solaris10Guest' |
    'solaris11_64Guest' |
    'solaris6Guest' |
    'solaris7Guest' |
    'solaris8Guest' |
    'solaris9Guest' |
    'suse64Guest' |
    'suseGuest' |
    'turboLinux64Guest' |
    'turboLinuxGuest' |
    'ubuntu64Guest' |
    'ubuntuGuest' |
    'unixWare7Guest' |
    'vmkernel5Guest' |
    'vmkernel6Guest' |
    'vmkernelGuest' |
    'win2000AdvServGuest' |
    'win2000ProGuest' |
    'win2000ServGuest' |
    'win31Guest' |
    'win95Guest' |
    'win98Guest' |
    'windows7_64Guest' |
    'windows7Guest' |
    'windows7Server64Guest' |
    'windows8_64Guest' |
    'windows8Guest' |
    'windows8Server64Guest' |
    'windows9_64Guest' |
    'windows9Guest' |
    'windows9Server64Guest' |
    'windowsHyperVGuest' |
    'winLonghorn64Guest' |
    'winLonghornGuest' |
    'winMeGuest' |
    'winNetBusinessGuest' |
    'winNetDatacenter64Guest' |
    'winNetDatacenterGuest' |
    'winNetEnterprise64Guest' |
    'winNetEnterpriseGuest' |
    'winNetStandard64Guest' |
    'winNetStandardGuest' |
    'winNetWebGuest' |
    'winNTGuest' |
    'winVista64Guest' |
    'winVistaGuest' |
    'winXPHomeGuest' |
    'winXPPro64Guest' |
    'winXPProGuest';
