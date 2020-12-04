import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NameIdJson } from '../common/__json__/name-id-json';
import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { NameId } from '../common/name-id';
import { CertificateJson } from './certificates/__json__/certificate-json';
import { CRLJson } from './certificates/__json__/crl-json';
import { CSRJson } from './certificates/__json__/csr-json';
import { Certificate } from './certificates/certificate';
import { CertificateCreateRequest } from './certificates/certificate-create-request';
import { CRL } from './certificates/crl';
import { CSR } from './certificates/csr';
import { CSRCreateRequest } from './certificates/csr-create-request';
import { SelfSignCertificateRequest } from './certificates/self-sign-certificate-request';
import { EdgeGatewayDhcpRelayTypeJson } from './edge-gateway-dhcp/__json__/edge-gateway-dhcp-relay-type-json';
import {
  EdgeGatewayDhcpRelayTypeOptionListJson
} from './edge-gateway-dhcp/__json__/edge-gateway-dhcp-relay-type-option-list-json';
import { EdgeGatewayDhcpRelayType } from './edge-gateway-dhcp/edge-gateway-dhcp-relay-type';
import { EdgeGatewayDhcpRelayTypeOptionList } from './edge-gateway-dhcp/edge-gateway-dhcp-relay-type-option-list';
import {
  EdgeGatewayDhcpRelayTypeOptionPagingParams
} from './edge-gateway-dhcp/edge-gateway-dhcp-relay-type-option-paging-params';
import { EdgeGatewayDhcpUpdateRequest } from './edge-gateway-dhcp/edge-gateway-dhcp-update-request';
import { EdgeGatewayFirewallObjectTypeJson }
  from './edge-gateway-firewall/__json__/edge-gateway-firewall-object-type-json';
import { EdgeGatewayFirewallObjectListJson }
  from './edge-gateway-firewall/__json__/edge-gateway-firewall-object-list-json';
import { EdgeGatewayFirewallObjectPagingParams }
  from './edge-gateway-firewall/edge-gateway-firewall-object-paging-params';
import { EdgeGatewayFirewallObjectType } from './edge-gateway-firewall/edge-gateway-firewall-object-type';
import { EdgeGatewayFirewallObjectList } from './edge-gateway-firewall/edge-gateway-firewall-object-list';
import { EdgeGatewayFirewallUpdateRequest } from './edge-gateway-firewall/edge-gateway-firewall-update-request';
import { EdgeGatewayIPsecJson } from './edge-gateway-ipsec/__json__/edge-gateway-ipsec-json';
import { EdgeGatewayIPsec } from './edge-gateway-ipsec/edge-gateway-ipsec';
import { EdgeGatewayIPsecUpdateRequest } from './edge-gateway-ipsec/edge-gateway-ipsec-update-request';
import { EdgeGatewayL2VpnJson } from './edge-gateway-l2vpn/__json__/edge-gateway-l2vpn-json';
import { EdgeGatewayL2Vpn } from './edge-gateway-l2vpn/edge-gateway-l2vpn';
import { EdgeGatewayL2VpnUpdateRequest } from './edge-gateway-l2vpn/edge-gateway-l2vpn-update-request';
import { EdgeGatewayNatJson } from './edge-gateway-nat/__json__/edge-gateway-nat-json';
import { EdgeGatewayNat } from './edge-gateway-nat/edge-gateway-nat';
import { EdgeGatewayNatUpdateRequest } from './edge-gateway-nat/edge-gateway-nat-update-request';
import { EdgeGatewaySSHSettingsJson } from './edge-gateway-settings/__json/edge-gateway-ssh-settings-json';
import { EdgeGatewaySyslogJson } from './edge-gateway-settings/__json/edge-gateway-syslog-json';
import { EdgeGatewaySSHSettings } from './edge-gateway-settings/edge-gateway-ssh-settings';
import { EdgeGatewaySSHSettingsUpdateRequest } from './edge-gateway-settings/edge-gateway-ssh-settings-update-request';
import { EdgeGatewaySyslog } from './edge-gateway-settings/edge-gateway-syslog';
import { EdgeGatewaySyslogUpdateRequest } from './edge-gateway-settings/edge-gateway-syslog-update-request';
import { EdgeGatewaySslVpnJson } from './edge-gateway-ssl-vpn/__json__/edge-gateway-ssl-vpn-json';
import { EdgeGatewaySslVpn } from './edge-gateway-ssl-vpn/edge-gateway-ssl-vpn';
import { EdgeGatewaySslVpnUpdateRequest } from './edge-gateway-ssl-vpn/edge-gateway-ssl-vpn-update-request';
import { EdgeInterface } from './edge-interface/edge-interface';
import { EdgeGatewayFirewallJson } from './edge-gateway-firewall/__json__/edge-gateway-firewall-json';
import { EdgeGatewayFirewall } from './edge-gateway-firewall/edge-gateway-firewall';
import { EdgeIpsecVpnServiceJson } from './ipsec-vpn/__json__/edge-ipsec-vpn-json';
import { EdgeFirewallJson } from './firewall/__json__/edge-firewall-json';
import { EdgeFirewallLogJson } from './firewall/__json__/edge-firewall-log-json';
import { LoadBalancerServiceJson } from './load-balancer/__json__/load-balancer-json';
import { CheckpointJson } from './checkpoint/__json__/checkpoint-json';
import {
  EdgeSslVpnAuthenticationJson,
  EdgeSslVpnClientInstallPackageJson,
  EdgeSslVpnIpPoolJson,
  EdgeSslVpnPrivateNetworkJson,
  EdgeSslVpnServiceJson,
  EdgeSslVpnUserJson
} from './ssl-vpn/__json__/edge-ssl-vpn-json';
import { NATServiceUpdateRequest } from './nat/nat-service-update-request';
import { NatService } from './nat/nat-service';
import { Dhcp } from './dhcp/dhcp';
import { Firewall } from './firewall/firewall';
import { FirewallLog } from './firewall/firewall-log';
import { Http } from '../../service/http/http';
import { Checkpoint } from './checkpoint/checkpoint';
import { EdgeSslVpnClientInstallPackageUpdateRequest }
  from './ssl-vpn/edge-ssl-vpn-client-install-package-update-request';
import { EdgeSslVpnIpPoolUpdateRequest } from './ssl-vpn/edge-ssl-vpn-ip-pool-update-request';
import { EdgeSslVpnPrivateNetworkUpdateRequest } from './ssl-vpn/edge-ssl-vpn-private-network-update-request';
import { EdgeSslVpnServerConfigUpdateRequest } from './ssl-vpn/edge-ssl-vpn-server-config-update-request';
import { EdgeSslVpnServiceUpdateRequest } from './ssl-vpn/edge-ssl-vpn-service-update-request';
import { EdgeSslVpnUserUpdateRequest } from './ssl-vpn/edge-ssl-vpn-user-update-request';
import { EdgeSslVpnService } from './ssl-vpn/edge-ssl-vpn-service';
import { IpsecVpn } from './ipsec-vpn/ipsec-vpn';
import { EdgeSslVpnAuthentication } from './ssl-vpn/edge-ssl-vpn-authentication';
import { EdgeSslVpnAuthenticationUpdateRequest } from './ssl-vpn/edge-ssl-vpn-authentication-update-request';
import { EdgeSslVpnClientInstallPackage } from './ssl-vpn/edge-ssl-vpn-client-install-package';
import { EdgeSslVpnIpPool } from './ssl-vpn/edge-ssl-vpn-ip-pool';
import { EdgeSslVpnPrivateNetwork } from './ssl-vpn/edge-ssl-vpn-private-network';
import { EdgeSslVpnUser } from './ssl-vpn/edge-ssl-vpn-user';
import { StaticRouting } from './static-routing/static-routing';
import { NetworkPerfSampleSerie } from './network-perf-sample/network-perf-sample-serie';
import { NetworkPerfSampleSerieJson } from './network-perf-sample/__json__/network-perf-sample-json';
import { LoadBalancer } from './load-balancer/load-balancer';
import { NatServiceJson } from './nat/__json__/nat-service-json';
import { StaticRoutingServiceJson } from './static-routing/__json__/static-routing-json';
import { PerfGroupType } from './network-perf-sample/__json__/perf-group-type';
import { PerfStatsType } from './network-perf-sample/__json__/perf-stats-type';
import { EdgeJson } from './__json__/edge-json';
import { EdgeFirewallLogType } from './firewall/__json__/edge-firewall-log-type';
import { EdgeBackingConfigurationType } from './__json__/edge-backing-configuration-type';
import { EdgeInterfaceJson } from './edge-interface/__json__/edge-interface-json';
import { EntityType } from '../common/__json__/entity-type';
import { EdgeFirewallUpdateRequest } from './firewall/edge-firewall-update-request';
import { TaskJson } from '../task/__json__/task-json';
import { Task } from '../task/task';
import { EdgeInterfaceUpdateRequest } from './edge-interface/edge-interface-update-request';
import { LoadBalancerServiceUpdateRequest } from './load-balancer/load-balancer-service-update-request';
import { EdgeDhcpJson } from './dhcp/__json__/edge-dhcp-json';
import { DhcpServiceUpdateRequest } from './dhcp/dhcp-service-update-reqeust';
import { EdgeIpSecVpnServiceUpdateRequest } from './ipsec-vpn/edge-ip-sec-vpn-service-update-request';
import { StaticRoutingUpdateRequest } from './static-routing/static-routing-update-request';
import { FirewallConfiguration } from './firewall/firewall-configuration';
import { EdgeFirewallConfigJson } from './firewall/__json__/edge-firewall-config-json';
import { IpsecVpnConfiguration } from './ipsec-vpn/ipsec-vpn-configuration';
import { EdgeIpsecVpnServiceConfigJson } from './ipsec-vpn/__json__/edge-ipsec-vpn-configuration-json';
import { NatServiceConfiguration } from './nat/nat-service-config';
import { NatServiceConfigJson } from './nat/__json__/nat-service-config-json';
import { EdgeGatewayVNIC } from './edge-gateway-vnic/vnic';
import { EdgeGatewayVNICJson } from './edge-gateway-vnic/__json__/vnic-json';
import { FirewallRestorePoint } from './restore-point/firewall-restore-point';
import { FirewallRestorePointJson } from './restore-point/__json__/firewall-restore-point-json';
import { FirewallRestorePointDetails } from './restore-point/firewall-restore-point-details';
import { FirewallRestorePointDetailsJson } from './restore-point/__json__/firewall-restore-point-detail-json';
import { RestoreFirewallRequest } from './restore-point/restore-firewall-request';
import { NATRestorePoint } from './restore-point/nat-restore-point';
import { NATRestorePointJson } from './restore-point/__json__/nat-restore-point-json';
import { NATRestorePointDetails } from './restore-point/nat-restore-point-details';
import { NATRestorePointDetailsJson } from './restore-point/__json__/nat-restore-point-detail-json';
import { RestoreNATRequest } from './restore-point/restore-nat-request';
import { EdgeGatewayDhcp } from './edge-gateway-dhcp/edge-gateway-dhcp';
import { EdgeGatewayDhcpJson } from './edge-gateway-dhcp/__json__/edge-gateway-dhcp-json';
import { EdgeGatewayRouting } from './edge-gateway-routing/edge-gateway-routing';
import { EdgeGatewayRoutingJson } from './edge-gateway-routing/__json__/edge-gateway-routing-json';
import { EdgeGatewayRoutingUpdateRequest } from './edge-gateway-routing/edge-gateway-routing-update-request';
import { RoutingBGPConfig } from './edge-gateway-routing/routing-bgp-config';
import { RoutingBGPConfigJson } from './edge-gateway-routing/__json__/routing-bgp-config-json';
import { RoutingBGPConfigUpdateRequest } from './edge-gateway-routing/routing-bgp-config-update-request';
import { RoutingGlobalConfigJson } from './edge-gateway-routing/__json__/routing-global-config-json';
import { RoutingGlobalConfig } from './edge-gateway-routing/routing-global-config';
import { RoutingGlobalConfigUpdateRequest } from './edge-gateway-routing/routing-global-config-update-request';
import { RoutingOSPFConfig } from './edge-gateway-routing/routing-ospf-config';
import { RoutingOSPFConfigJson } from './edge-gateway-routing/__json__/routing-ospf-config-json';
import { RoutingOSPFConfigUpdateRequest } from './edge-gateway-routing/routing-ospf-config-update-request';
import { RoutingStaticConfig } from './edge-gateway-routing/routing-static-config';
import { RoutingStaticConfigJson } from './edge-gateway-routing/__json__/routing-static-config-json';
import { RoutingStaticConfigUpdateRequest } from './edge-gateway-routing/routing-static-config-update-request';
import { EdgeGatewayL2vpnStatistics } from './edge-gateway-l2vpn/edge-gateway-l2vpn-statistics';
import { EdgeGatewayL2vpnStatisticsJson } from './edge-gateway-l2vpn/__json__/edge-gateway-l2vpn-statistics-json';

/**
 * Edge Gateway.
 */
export class Edge extends Entity {

  constructor(private _json: EdgeJson) {
    super(_json);
  }

  /**
   * Gets an Edge by UUID.
   * @param uuid Edge UUID
   * @returns {Promise<Edge>} promise that resolves with the Edge
   */
  static async getEdge(uuid: string): Promise<Edge> {
    return Iland.getHttp().get(`/edges/${uuid}`).then((response) => {
      const json = response.data as EdgeJson;
      return new Edge(json);
    });
  }

  get entityType(): EntityType {
    return 'IAAS_EDGE';
  }

  /**
   * Gets the status of the Edge gateway.
   * @returns {string} status
   */
  get status(): EdgeStatus {
    return this._json.status === 1 ? 'UP' : 'DOWN';
  }

  /**
   * Gets the UUID of the associated vDC.
   * @returns {string | null} vDC UUID
   */
  get vdcUuid(): string | null {
    return this._json.vdc_uuid;
  }

  /**
   * Gets the UUID of the associated Org.
   * @returns {string | null} org UUID
   */
  get orgUuid(): string | null {
    return this._json.org_uuid;
  }

  /**
   * Gets the Edges network interfaces.
   * @returns {[EdgeInterface]} array of interfaces
   */
  get interfaces(): Array<EdgeInterface> {
    const interfaces = (this._json.interfaces || []) as Array<EdgeInterfaceJson>;
    return interfaces.map((interfaceJson) => new EdgeInterface(interfaceJson));
  }

  /**
   * Indicates whether the edge is in backwards compatibility mode.
   * @returns {boolean} value
   */
  get backwardCompatibilityMode(): boolean {
    return this._json.backward_compatibility_mode;
  }

  /**
   * Gets the type of backing configuration.
   * @returns {EdgeBackingConfigurationType | null} backing configuration type
   */
  get backingConfigurationType(): EdgeBackingConfigurationType | null {
    return this._json.gateway_backing_config;
  }

  /**
   * Indicates whether high availability mode is enabled.
   * @returns {boolean | null} value
   */
  get highAvailabilityEnabled(): boolean | null {
    return this._json.high_availability_enabled;
  }

  /**
   * Indicates whether this edge is the default DNS relay route.
   * @returns {boolean | null} value
   */
  get defaultDnsRelayRoute(): boolean | null {
    return this._json.default_dns_relay_route;
  }

  /**
   * Gets the data center location ID that the edge is associated with.
   * @returns {string | null} location ID
   */
  get locationId(): string | null {
    return this._json.location_id;
  }

  /**
   * Gets the description.
   * @returns {string | null} description
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Gets the vCloud HREF.
   * @returns {string|null} vCloud HREF
   */
  get vcloudHref(): string | null {
    return this._json.vcloud_href;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {EdgeJson} the JSON representation
   */
  get json(): EdgeJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Edge data by retrieving it from the API again.
   * @returns {Promise<Edge>} promise that resolves with this object
   */
  async refresh(): Promise<Edge> {
    return Iland.getHttp().get(`/edges/${this.uuid}`).then((response) => {
      this._json = response.data as EdgeJson;
      return this;
    });
  }

  /**
   * Get the Edge Dhcp pool
   * @returns {Promise<Dhcp>}
   */
  async getDhcp(): Promise<Dhcp> {
    return Iland.getHttp().get(`/edges/${this.uuid}/dhcp`).then((response) => {
      return new Dhcp(response.data as EdgeDhcpJson);
    });
  }

  /**
   * Get the Edge firewall
   * @deprecated This method is deprecated, use getEdgeGatewayFirewall() instead
   * @returns {Promise<Firewall>}
   */
  async getFirewall(): Promise<Firewall> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall`).then((response) => {
      return new Firewall(response.data as EdgeFirewallJson);
    });
  }

  /**
   * Get the Edge Gateway Firewall
   * @returns {Promise<EdgeGatewayFirewall>}
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayFirewall(): Promise<EdgeGatewayFirewall> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall`).then((response) => {
      const json = response.data as EdgeGatewayFirewallJson;
      return new EdgeGatewayFirewall(json);
    });
  }

  /**
   * Gets firewall traffic log analysis in different formats that summarize the count
   * of actions that have occurred against a particular edge firewall.
   * @returns {Promise<Array<FirewallLog>>}
   * @description By default the endpoint uses 'action_source' analysis type if a specific type is not specified.
   * The time range also defaults to the last hour if no start and end epoch milliseconds are specified.
   * If one of the start or end timestamps are specified the hour range immediately after or before,
   * respectively, are defaulted to.
   */
  async getFirewallLogs(type?: EdgeFirewallLogType, start?: number, end?: number): Promise<Array<FirewallLog>> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall-logs`, {
      params: {
        type: type,
        start: start,
        end: end
      }
    }).then((response) => {
      return (response.data as Array<EdgeFirewallLogJson>).map(log => new FirewallLog(log));
    });
  }

  /**
   * Get a list of edge firewall checkpoints that are snapshots of an edge firewall in time.
   * @returns {Promise<Array<Checkpoint>>}
   * @description These checkpoints can be used to restore the edge firewall to a previous state in time.
   */
  async getFirewallCheckpoints(): Promise<Array<Checkpoint>> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall-checkpoints`).then((response) => {
      return (response.data.data as Array<CheckpointJson>).map(checkpoint => new Checkpoint(checkpoint));
    });
  }

  /**
   * Get an edge firewall checkpoint by edge uuid and checkpoint.
   * @param {string} checkpointUuid
   * @returns {Promise<Checkpoint>}
   * @description The actual firewall config of the checkpoint will be included in the return.
   */
  async getFirewallCheckpoint(checkpointUuid: string): Promise<Checkpoint> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall-checkpoints/${checkpointUuid}`).then((response) => {
      return new Checkpoint(response.data as CheckpointJson);
    });
  }

  /**
   * Export an Edge Firewall configuration file that can be imported/applied to other edges.
   * @param {string} filename
   */
  getExportFirewallHref(filename?: string): Observable<string> {
    let href = `${Iland.baseUrl}/edges/${this.uuid}/firewall/export?accept=` +
      encodeURIComponent(Http.versionMime('application/octet-stream'));
    if (filename) {
      href = href + '&filename=' + encodeURIComponent(filename);
    }
    const observable: Observable<string> = Iland.getAuthProvider().getTokenObservable();
    return observable.pipe(map(token => `${href}&oauth_token=${token}`));
  }

  /**
   * Gets IpSec VPN Service details for an edge
   * @returns {Promise<IpsecVpn>}
   */
  async getIpsecVpn(): Promise<IpsecVpn> {
    return Iland.getHttp().get(`/edges/${this.uuid}/ipsec-vpn`).then((response) => {
      return new IpsecVpn(response.data as EdgeIpsecVpnServiceJson);
    });
  }

  /**
   * Get a link to download an Ipsec vpn export.
   * @param {string} filename
   * @returns {Observable<string>}
   */
  getExportIpsecVpnHref(filename?: string): Observable<string> {
    let href = `${Iland.baseUrl}/edges/${this.uuid}/ipsec-vpn/export?accept=` +
      encodeURIComponent(Http.versionMime('application/octet-stream'));
    if (filename) {
      href = href + '&filename=' + encodeURIComponent(filename);
    }
    const observable: Observable<string> = Iland.getAuthProvider().getTokenObservable();
    return observable.pipe(map(token => `${href}&oauth_token=${token}`));
  }

  /**
   * Gets Load Balancer Service details for an edge.
   * @returns {Promise<LoadBalancer>}
   */
  async getLoadBalancer(): Promise<LoadBalancer> {
    return Iland.getHttp().get(`/edges/${this.uuid}/load-balancer`).then((response) => {
      return new LoadBalancer(response.data as LoadBalancerServiceJson);
    });
  }

  /**
   * Gets the NAT service configuration for a VCD edge gateway.
   * @returns {Promise<NatService>}
   */
  async getNat(): Promise<NatService> {
    return Iland.getHttp().get(`/edges/${this.uuid}/nat`).then((response) => {
      return new NatService(response.data as NatServiceJson);
    });
  }

  /**
   * Get a list of edge NAT checkpoints that are snapshots of an edge NAT service in time
   * @returns {Promise<Array<Checkpoint>>}
   * @description These checkpoints can be used to restore the edge NAT service to a previous state in time.
   */
  async getNatCheckpoints(): Promise<Array<Checkpoint>> {
    return Iland.getHttp().get(`/edges/${this.uuid}/nat-checkpoints`).then((response) => {
      return (response.data.data as Array<CheckpointJson>).map(checkpoint => new Checkpoint(checkpoint));
    });
  }

  /**
   * Get a NAT checkpoint by edge uuid and checkpoint.
   * @param {string} checkpointUuid
   * @returns {Promise<Checkpoint>}
   * @description The actual NAT config of the checkpoint will be included in the return.
   */
  async getNatCheckpoint(checkpointUuid: string): Promise<Checkpoint> {
    return Iland.getHttp().get(`/edges/${this.uuid}/nat-checkpoints/${checkpointUuid}`).then((response) => {
      return new Checkpoint(response.data as CheckpointJson);
    });
  }

  /**
   * Export an Edge NAT configuration file that can be imported/applied to other edges.
   * @param {string} filename
   * @returns {Observable<string>}
   */
  getExportNatHref(filename?: string): Observable<string> {
    let href = `${Iland.baseUrl}/edges/${this.uuid}/nat/export?accept=` +
      encodeURIComponent(Http.versionMime('application/octet-stream'));
    if (filename) {
      href = href + '&filename=' + encodeURIComponent(filename);
    }
    const observable: Observable<string> = Iland.getAuthProvider().getTokenObservable();
    return observable.pipe(map(token => `${href}&oauth_token=${token}`));
  }

  /**
   * Gets SSL VPN configuration details for an edge gateway.
   * @returns {Promise<EdgeSslVpnServiceJson>}
   */
  async getSslVpn(): Promise<EdgeSslVpnService> {
    return Iland.getHttp().get(`/edges/${this.uuid}/sslvpn`).then((response) => {
      return new EdgeSslVpnService(response.data as EdgeSslVpnServiceJson);
    });
  }

  /**
   * Gets static routing details for a VCD edge.
   * @returns {Promise<StaticRouting>}
   */
  async getStaticRouting(): Promise<StaticRouting> {
    return Iland.getHttp().get(`/edges/${this.uuid}/static-routing`).then((response) => {
      return new StaticRouting(response.data as StaticRoutingServiceJson);
    });
  }

  /**
   * Gets statistics data for a VCD edge gateway.
   * @param {PerfGroupType} group
   * @param {string} name
   * @param {PerfStatsType} type
   * @param {number} start
   * @param {number} end
   * @returns {Promise<NetworkPerfSampleSerie>}
   */
  async getPerformance(group: PerfGroupType, name: string,
                 type: PerfStatsType, start?: number, end?: number): Promise<NetworkPerfSampleSerie> {
    return Iland.getHttp().get(`/edges/${this.uuid}/performance/${group}:${name}:${type}`, {
      params: {
        start: start,
        end: end
      }
    }).then((response) => {
      return new NetworkPerfSampleSerie(response.data as NetworkPerfSampleSerieJson);
    });
  }

  /**
   *  Update the static routing service.
   * @param {StaticRouting} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateStaticRouting(request: StaticRoutingUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/update-static-routing`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update the DHCP service.
   * @param {DhcpServiceUpdateRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateDHCP(request: DhcpServiceUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/update-dhcp`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Restore firewall from checkpoint.
   * @param {string} checkpointUuid
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreFirewallFromCheckpoint(checkpointUuid: string): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/firewall-checkpoints/${checkpointUuid}/actions/restore`)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Restore NAT service from checkpoint.
   * @param {string} checkpointUuid
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async restoreNATFromCheckpoint(checkpointUuid: string): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/nat-checkpoints/${checkpointUuid}/actions/restore`)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Update the edge firewall.
   * @deprecated This method is deprecated, use updateEdgeGatewayFirewall() instead
   * @param {EdgeFirewallUpdateRequest} firewall
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateFirewall(firewall: EdgeFirewallUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/update-firewall`, firewall.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update the edge gateway firewall.
   * @param {EdgeGatewayFirewallUpdateRequest} firewall update request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayFirewall(firewallUpdateRequest: EdgeGatewayFirewallUpdateRequest):
      Promise<EdgeGatewayFirewall> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/firewall`, firewallUpdateRequest.json)
        .then((response) => {
          const json = response.data as EdgeGatewayFirewallJson;
          return new EdgeGatewayFirewall(json);
        });
  }

  /**
   * Update the edge interface.
   * @param {EdgeInterface} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateInterface(request: EdgeInterfaceUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/update-edge-interface`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Updates the NAT service for a VCD edge gateway.
   * @param {NATServiceUpdateRequest} request NAT service update request
   * @returns {Promise<Task>} promise Promise that resoves with a task
   */
  /* istanbul ignore next: autogenerated */
  async updateNAT(request: NATServiceUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/update-nat`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update the load balancer service.
   * @param {LoadBalancerServiceUpdateRequest} request
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async updateLoadBalancer(request: LoadBalancerServiceUpdateRequest): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/update-load-balancer`, request.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Update the edge ip sec vpn service.
   * @param {EdgeIpSecVpnServiceUpdateRequest}
   * @returns {Promise<EdgeIpsecVpnService>>}
   */
  /* istanbul ignore next: autogenerated */
  async updateIpSecVpn(ipSecVpnService: EdgeIpSecVpnServiceUpdateRequest): Promise<IpsecVpn> {
    return Iland.getHttp().put(`/edges/${this.uuid}/ipsec-vpn`, ipSecVpnService.json).then((response) => {
      const json = response.data as EdgeIpsecVpnServiceJson;
      return new IpsecVpn(json);
    });
  }

  /**
   * Updates authentication configuration of SSL VPN for an edge gateway.
   * @param {EdgeSslVpnAuthenticationUpdateRequest} request
   * @returns {Promise<EdgeSslVpnAuthentication>}
   */
  /* istanbul ignore next: autogenerated */
  async updateSslVpnAuthentication(request: EdgeSslVpnAuthenticationUpdateRequest): Promise<EdgeSslVpnAuthentication> {
    return Iland.getHttp().put(`/edges/${this.uuid}/sslvpn-authentication-servers`, request.json).then((response) => {
      const json = response.data as EdgeSslVpnAuthenticationJson;
      return new EdgeSslVpnAuthentication(json);
    });
  }

  /**
   * Updates client install package configuration of SSL VPN for an edge gateway.
   * @param {Array<EdgeSslVpnClientInstallPackageUpdateRequest>} requests
   * @returns {Promise<Array<EdgeSslVpnClientInstallPackage>>}
   */
  /* istanbul ignore next: autogenerated */
  async updateSslVpnClientInstallPackages(requests: Array<EdgeSslVpnClientInstallPackageUpdateRequest>):
      Promise<Array<EdgeSslVpnClientInstallPackage>> {
    return Iland.getHttp().put(`/edges/${this.uuid}/sslvpn-client-install-packages`,
      requests.map((req) => req.json)).then((response) => {
        const json = response.data.data as Array<EdgeSslVpnClientInstallPackageJson>;
        return json.map((it) => new EdgeSslVpnClientInstallPackage(it));
      });
  }

  /**
   * Updates the SSL VPN IP pools for an edge gateway.
   * @param {Array<EdgeSslVpnIpPoolUpdateRequest>} requests
   * @returns {Promise<Array<EdgeSslVpnIpPool>>}
   */
  /* istanbul ignore next: autogenerated */
  async updateSslVpnIpPools(requests: Array<EdgeSslVpnIpPoolUpdateRequest>): Promise<Array<EdgeSslVpnIpPool>> {
    return Iland.getHttp().put(`/edges/${this.uuid}/sslvpn-ip-pools`, requests.map((req) => req.json))
        .then((response) => {
          const json = response.data.data as Array<EdgeSslVpnIpPoolJson>;
          return json.map((it) => new EdgeSslVpnIpPool(it));
        });
  }

  /**
   * Updates list of private networks that are reachable through an SSL VPN for an edge gateway.
   * @param {Array<EdgeSslVpnPrivateNetworkUpdateRequest>} requests
   * @returns {Promise<Array<EdgeSslVpnPrivateNetwork>>}
   */
  /* istanbul ignore next: autogenerated */
  async updateSslVpnPrivateNetworks(requests: Array<EdgeSslVpnPrivateNetworkUpdateRequest>):
      Promise<Array<EdgeSslVpnPrivateNetwork>> {
    return Iland.getHttp().put(`/edges/${this.uuid}/sslvpn-private-networks`,
        requests.map((req) => req.json)).then((response) => {
          const json = response.data.data as Array<EdgeSslVpnPrivateNetworkJson>;
          return json.map((it) => new EdgeSslVpnPrivateNetwork(it));
        });
  }

  /**
   * Updates SSL VPN configuration for an edge gateway.
   * @param {EdgeSslVpnServerConfigUpdateRequest} request
   * @returns {Promise<any>}
   */
  /* istanbul ignore next: autogenerated */
  async updateSslVpnServerConfig(request: EdgeSslVpnServerConfigUpdateRequest): Promise<any> {
    return Iland.getHttp().put(`/edges/${this.uuid}/sslvpn-config`, request.json);
  }

  /**
   * Updates SSL VPN server settings for an edge gateway.
   * @param {EdgeSslVpnServiceUpdateRequest} serverSettings
   * @returns {Promise<EdgeSslVpnService>}
   */
  /* istanbul ignore next: autogenerated */
  async updateSslVpnServerSettings(serverSettings: EdgeSslVpnServiceUpdateRequest): Promise<EdgeSslVpnService> {
    return Iland.getHttp().put(`/edges/${this.uuid}/sslvpn-server-settings`, serverSettings.json).then((response) => {
      const json = response.data as EdgeSslVpnServiceJson;
      return new EdgeSslVpnService(json);
    });
  }

  /**
   * Updates an edge SSL VPN user.
   * @param {string} userId
   * @param {EdgeSslVpnUserUpdateRequest} request
   * @returns {Promise<EdgeSslVpnUser>}
   */
  /* istanbul ignore next: autogenerated */
  async updateSslVpnUser(userId: string, request: EdgeSslVpnUserUpdateRequest): Promise<EdgeSslVpnUser> {
    return Iland.getHttp().put(`/edges/${this.uuid}/sslvpn-user/${userId}`, request.json).then((response) => {
      const json = response.data as EdgeSslVpnUserJson;
      return new EdgeSslVpnUser(json);
    });
  }

  /**
   * Get the Edge firewall configuration.
   * @returns {Promise<FirewallConfiguration>}
   */
  async getFirewallConfiguration(): Promise<FirewallConfiguration> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall-configuration`).then((response) => {
      return new FirewallConfiguration(response.data as EdgeFirewallConfigJson);
    });
  }

  /**
   * Import an edge firewall from a configuration.
   * @param {FirewallConfiguration} firewall
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async importFirewallConfiguration(firewall: FirewallConfiguration): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/import-firewall-configuration`, firewall.json)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Gets IpSec VPN Service configuration for an edge.
   * @returns {Promise<IpsecVpnConfiguration>}
   */
  async getIpsecVpnConfiguration(): Promise<IpsecVpnConfiguration> {
    return Iland.getHttp().get(`/edges/${this.uuid}/ipsec-vpn-configuration`).then((response) => {
      return new IpsecVpnConfiguration(response.data as EdgeIpsecVpnServiceConfigJson);
    });
  }

  /**
   * Import an Ipsec VPN service configuration.
   * @param {IpsecVpnConfiguration} vpn
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async importIpSecVpnConfiguration(vpn: IpsecVpnConfiguration): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/import-ipsec-vpn-configuration`, vpn.json)
        .then((response) => {
          const json = response.data as TaskJson;
          return new Task(json);
        });
  }

  /**
   * Gets the NAT service configuration for a VCD edge gateway.
   * @returns {Promise<NatServiceConfiguration>}
   */
  async getNatConfiguration(): Promise<NatServiceConfiguration> {
    return Iland.getHttp().get(`/edges/${this.uuid}/nat-configuration`).then((response) => {
      return new NatServiceConfiguration(response.data as NatServiceConfigJson);
    });
  }

  /**
   * Import a NAT service configuration.
   * @param {NatServiceConfiguration} nat
   * @returns {Promise<Task>}
   */
  /* istanbul ignore next: autogenerated */
  async importNATConfiguration(nat: NatServiceConfiguration): Promise<Task> {
    return Iland.getHttp().post(`/edges/${this.uuid}/actions/import-nat-configuration`, nat.json).then((response) => {
      const json = response.data as TaskJson;
      return new Task(json);
    });
  }

  /**
   * Get the list of firewall source types
   * @returns {Promise<Array<EdgeGatewayFirewallObjectType>>}
   */
  /* istanbul ignore next: autogenerated */
  async getFirewallSourceTypes(): Promise<Array<EdgeGatewayFirewallObjectType>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall/sources`).then((response) => {
      const json = response.data.data as Array<EdgeGatewayFirewallObjectTypeJson>;
      return json.map((it) => new EdgeGatewayFirewallObjectType(it));
    });
  }

  /**
   * Get the edge firewall source objects of the specified type.
   * If the specified page number is larger than number of actual pages, the response will return as an empty list.
   * @param {string | EdgeGatewayFirewallObjectType} type Type.
   * Valid types can be retrieved from the getFirewallSourceTypes() endpoint
   * @param {number | EdgeGatewayFirewallObjectPagingParams} pageOrPagingParams The page number or paging params.
   * The index of the first page is 1. (Default: 1)
   * @param {number} pageSize The page size (Optional). (Default 25)
   * @returns {Promise<EdgeGatewayFirewallObjectList>}
   */
  /* istanbul ignore next: autogenerated */
  async getFirewallSourceObjects(type: string | EdgeGatewayFirewallObjectType,
                                 pageOrPagingParams: number | EdgeGatewayFirewallObjectPagingParams,
                                 pageSize?: number): Promise<EdgeGatewayFirewallObjectList> {
    let _type = type;
    let _page = pageOrPagingParams || 1;
    let _pageSize = pageSize || 25;
    if (type instanceof EdgeGatewayFirewallObjectType) {
      _type = type.type;
    }
    if (pageOrPagingParams instanceof EdgeGatewayFirewallObjectPagingParams) {
      _page = pageOrPagingParams.page;
      _pageSize = pageOrPagingParams.pageSize;
    }
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall/sources/${_type}`, {
      params: {
        page: _page,
        pageSize: _pageSize
      }
    }).then((response) => {
      const json = response.data as EdgeGatewayFirewallObjectListJson;
      return new EdgeGatewayFirewallObjectList(json);
    });
  }

  /* istanbul ignore next: autogenerated */
  async getFirewallDestinationTypes(): Promise<Array<EdgeGatewayFirewallObjectType>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall/destinations`).then((response) => {
      const json = response.data.data as Array<EdgeGatewayFirewallObjectType>;
      return json.map((it) => new EdgeGatewayFirewallObjectType(it));
    });
  }

  /**
   * Get the edge firewall destination objects of the specified type.
   * If the specified page number is larger than number of actual pages, the response will return as an empty list.
   * @param {string | EdgeGatewayFirewallObjectType} type Type.
   * Valid types can be retrieved from the getFirewallSourceTypes() endpoint
   * @param {number | EdgeGatewayFirewallObjectPagingParams} pageOrPagingParams The page number or paging params.
   * The index of the first page is 1. (Default: 1)
   * @param {number} pageSize The page size (Optional). (Default 25)
   * @returns {Promise<EdgeGatewayFirewallObjectList>}
   */
  /* istanbul ignore next: autogenerated */
  async getFirewallDestinationObjects(type: string | EdgeGatewayFirewallObjectType,
                                 pageOrPagingParams: number | EdgeGatewayFirewallObjectPagingParams,
                                 pageSize?: number): Promise<EdgeGatewayFirewallObjectList> {
    let _type = type;
    let _page = pageOrPagingParams || 1;
    let _pageSize = pageSize || 25;
    if (type instanceof EdgeGatewayFirewallObjectType) {
      _type = type.type;
    }
    if (pageOrPagingParams instanceof EdgeGatewayFirewallObjectPagingParams) {
      _page = pageOrPagingParams.page;
      _pageSize = pageOrPagingParams.pageSize;
    }
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall/destinations/${_type}`, {
      params: {
        page: _page,
        pageSize: _pageSize
      }
    }).then((response) => {
      const json = response.data as EdgeGatewayFirewallObjectListJson;
      return new EdgeGatewayFirewallObjectList(json);
    });
  }

  /**
   * Retrieves name/ID mappings for all source and destination objects that are assigned to current firewall rules.
   * @returns {Promise<Array<NameId>>}
   */
  /* istanbul ignore next: autogenerated */
  async getFirewallRulesInformation(): Promise<Array<NameId>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall/rule-info`).then((response) => {
      const json = response.data.name_id_relations as Array<NameIdJson>;
      return json.map(it => new NameId(it));
    });
  }

  /**
   * Get the NAT configuration for current edge gateway.
   * @returns {Promise<EdgeGatewayNat>} promise Promise that resolves with the NAT configuration object
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayNAT(): Promise<EdgeGatewayNat> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/nat`).then((response) => {
      const json = response.data as EdgeGatewayNatJson;
      return new EdgeGatewayNat(json);
    });
  }

  /**
   * Update the NAT configuration for current edge gateway.
   * @param {EdgeGatewayNatUpdateRequest} natUpdateRequest The update request
   * @returns {Promise<EdgeGatewayNat>} promise Promise that resolves with the updated NAT configuration object
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayNAT(natUpdateRequest: EdgeGatewayNatUpdateRequest): Promise<EdgeGatewayNat> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/nat`, natUpdateRequest.json).then((response) => {
      const json = response.data as EdgeGatewayNatJson;
      return new EdgeGatewayNat(json);
    });
  }

  /**
   * Retrieve the edge gateway's VNICs.
   * @returns {Promise<Array<EdgeGatewayVNIC>>} promise Promise that resolves with the array of edge VNICs
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayVNICs(): Promise<Array<EdgeGatewayVNIC>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/vnics`).then((response) => {
      const json = response.data.data as Array<EdgeGatewayVNICJson>;
      return json.map(it => new EdgeGatewayVNIC(it));
    });
  }

  /**
   * Get the DHCP configuration for an edge gateway.
   * @returns {Promise<EdgeGatewayDhcp>} promise Promise that resolves with the DHCP configuration object.
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayDhcp(): Promise<EdgeGatewayDhcp> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/dhcp`).then((response) => {
      const json = response.data as EdgeGatewayDhcpJson;
      return new EdgeGatewayDhcp(json);
    });
  }

  /**
   * Update the DHCP configuration for an edge gateway.
   * @param {EdgeGatewayDhcpUpdateRequest} edgeGatewayDhcpUpdateRequest DHCP update request
   * @returns {Promise<EdgeGatewayDhcp>} promise Promise that resolves with the updated DHCP configuration object.
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayDhcp(edgeGatewayDhcpUpdateRequest: EdgeGatewayDhcpUpdateRequest): Promise<EdgeGatewayDhcp> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/dhcp`, edgeGatewayDhcpUpdateRequest.json)
        .then((response) => {
          const json = response.data as EdgeGatewayDhcpJson;
          return new EdgeGatewayDhcp(json);
        });
  }

  /**
   * Get the DHCP relay types for an edge gateway.
   * @returns {Promise<Array<EdgeGatewayDhcpRelayType>>}
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayDhcpRelayTypes(): Promise<Array<EdgeGatewayDhcpRelayType>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/dhcp/relays`).then((response) => {
      const json = response.data.data as Array<EdgeGatewayDhcpRelayTypeJson>;
      return json.map((it) => new EdgeGatewayDhcpRelayType(it));
    });
  }

  /**
   * Get the DHCP relay type options for a edge gateway's relay type.
   * @param {string | EdgeGatewayDhcpRelayType} type Type name or EdgeGatewayDhcpRelayType object retrieved from API.
   * Valid types can be retrieved from the getEdgeGatewayDhcpRelayTypes() endpoint
   * @param {number | EdgeGatewayDhcpRelayTypeOptionPagingParams} pageOrPagingParams The page number or paging params.
   * The index of the first page is 1. (Default: 1)
   * @param {number} pageSize Page size
   * The page size (Optional). (Default 25)
   * @returns {Promise<EdgeGatewayDhcpRelayTypeOptionList>}
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayDhcpRelayOptions(type: string | EdgeGatewayDhcpRelayType,
                pageOrPagingParams?: number | EdgeGatewayDhcpRelayTypeOptionPagingParams,
                pageSize?: number)
      : Promise<EdgeGatewayDhcpRelayTypeOptionList> {
    let _type = type;
    let _page = pageOrPagingParams || 1;
    let _pageSize = pageSize || 25;
    if (type instanceof EdgeGatewayDhcpRelayType) {
      _type = type.type;
    }
    if (pageOrPagingParams instanceof EdgeGatewayDhcpRelayTypeOptionPagingParams) {
      _page = pageOrPagingParams.page;
      _pageSize = pageOrPagingParams.pageSize;
    }
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/dhcp/relays/${_type}`, {
      params: {
        page: _page,
        pageSize: _pageSize
      }
    }).then((response) => {
      const json = response.data as EdgeGatewayDhcpRelayTypeOptionListJson;
      return new EdgeGatewayDhcpRelayTypeOptionList(json);
    });
  }

  /**
   * Retrieve the edge gateway's firewall restore points.
   * @returns {Promise<Array<FirewallRestorePoint>>} promise Promise that resolves with the list of restore points
   */
  /* istanbul ignore next: autogenerated */
  async getFirewallRestorePoints(): Promise<Array<FirewallRestorePoint>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall/restore-points`).then((response) => {
      const json = response.data.data as Array<FirewallRestorePointJson>;
      return json.map(it => new FirewallRestorePoint(it));
    });
  }

  /**
   * Retrieve the details for a particular edge gateway firewall restore point.
   * @returns {Promise<FirewallRestorePointDetails>} promise Promise that resolves with the restore point details
   */
  /* istanbul ignore next: autogenerated */
  async getFirewallRestorePointDetails(restorePointTime: Date): Promise<FirewallRestorePointDetails> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/firewall/restore-points/${restorePointTime.getTime()}`)
        .then((response) => {
          return new FirewallRestorePointDetails(response.data as FirewallRestorePointDetailsJson);
        });
  }

  /**
   * Restores the edge gateway's firewall to a specified restore point time.
   * @param request {RestoreFirewallRequest} the request body
   * @returns {Promise<EdgeGatewayFirewall>} promise Promise that resolves with the updated firewall config
   */
  /* istanbul ignore next: autogenerated */
  async restoreFirewall(request: RestoreFirewallRequest): Promise<EdgeGatewayFirewall> {
    return Iland.getHttp().post(
        `/edge-gateways/${this.uuid}/firewall/actions/restore`, request.json)
        .then((response) => {
          return new EdgeGatewayFirewall(response.data as EdgeGatewayFirewallJson);
        });
  }

  /**
   * Retrieve the edge gateway's NAT restore points.
   * @returns {Promise<Array<NATRestorePoint>>} promise Promise that resolves with the list of restore points
   */
  /* istanbul ignore next: autogenerated */
  async getNATRestorePoints(): Promise<Array<NATRestorePoint>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/nat/restore-points`).then((response) => {
      const json = response.data.data as Array<NATRestorePointJson>;
      return json.map(it => new NATRestorePoint(it));
    });
  }

  /**
   * Retrieve the details for a particular edge gateway NAT restore point.
   * @returns {Promise<NATRestorePointDetails>} promise Promise that resolves with the restore point details
   */
  /* istanbul ignore next: autogenerated */
  async getNATRestorePointDetails(restorePointTime: Date): Promise<NATRestorePointDetails> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/nat/restore-points/${restorePointTime.getTime()}`)
        .then((response) => {
          return new NATRestorePointDetails(response.data as NATRestorePointDetailsJson);
        });
  }

  /**
   * Restores the edge gateway's NAT config to a specified restore point time.
   * @param request {RestoreNATRequest} the request body
   * @returns {Promise<EdgeGatewayNat>} promise Promise that resolves with the updated NAT config
   */
  /* istanbul ignore next: autogenerated */
  async restoreNAT(request: RestoreNATRequest): Promise<EdgeGatewayNat> {
    return Iland.getHttp().post(
        `/edge-gateways/${this.uuid}/nat/actions/restore`, request.json)
        .then((response) => {
          return new EdgeGatewayNat(response.data as EdgeGatewayNatJson);
        });
  }

  /**
   * Get the L2 VPN for an edge gateway.
   * @param {boolean} showSensitiveData Show sensitive data
   * @returns {Promise<EdgeGatewayL2Vpn>} promise Promise that resolves with the Edge L2 VPN Configuration
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayL2VPN(showSensitiveData?: boolean): Promise<EdgeGatewayL2Vpn> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/l2vpn`, {
      params: {
        showSensitiveData: showSensitiveData
      }
    }).then((response) => {
      const json = response.data as EdgeGatewayL2VpnJson;
      return new EdgeGatewayL2Vpn(json);
    });
  }

  /**
   * Update the L2 VPN for an edge gateway.
   * @param {EdgeGatewayL2VpnUpdateRequest} edgeGatewayL2VPNUpdateRequest
   * @returns {Promise<EdgeGatewayL2Vpn>}
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayL2VPN(edgeGatewayL2VPNUpdateRequest: EdgeGatewayL2VpnUpdateRequest):
      Promise<EdgeGatewayL2Vpn> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/l2vpn`, edgeGatewayL2VPNUpdateRequest.json)
        .then((response) => {
          const json = response.data as EdgeGatewayL2VpnJson;
          return new EdgeGatewayL2Vpn(json);
        });
  }

  /**
   * Retrieve the edge gateway's routing.
   * @returns {Promise<EdgeGatewayRouting>}
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayRouting(): Promise<EdgeGatewayRouting> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/routing`).then((response) => {
      const json = response.data as EdgeGatewayRoutingJson;
      return new EdgeGatewayRouting(json);
    });
  }

  /**
   * Update the edge gateway's routing.
   * @param {EdgeGatewayRoutingUpdateRequest} edgeGatewayRoutingUpdateRequest
   * @returns {Promise<EdgeGatewayRouting>}
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayRouting(edgeGatewayRoutingUpdateRequest: EdgeGatewayRoutingUpdateRequest):
      Promise<EdgeGatewayRouting> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/routing`, edgeGatewayRoutingUpdateRequest.json)
        .then((response) => {
          const json = response.data as EdgeGatewayRoutingJson;
          return new EdgeGatewayRouting(json);
        });
  }

  /**
   * Update the edge gateway's routing BGP configuration.
   * @param {RoutingBGPConfigUpdateRequest} edgeGatewayRoutingBGPConfigUpdateRequest
   * @returns {Promise<RoutingBGPConfig>}
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayRoutingBGPConfig(edgeGatewayRoutingBGPConfigUpdateRequest: RoutingBGPConfigUpdateRequest):
      Promise<RoutingBGPConfig> {
    return Iland.getHttp()
        .put(`/edge-gateways/${this.uuid}/routing/bgp-config`, edgeGatewayRoutingBGPConfigUpdateRequest.json)
        .then((response) => {
          const json = response.data as RoutingBGPConfigJson;
          return new RoutingBGPConfig(json);
        });
  }

  /**
   * Update the edge gateway's routing global configuration.
   * @param {RoutingGlobalConfigUpdateRequest} edgeGatewayRoutingGlobalConfigUpdateRequest
   * @returns {Promise<RoutingGlobalConfig>}
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayRoutingGlobalConfig(
      edgeGatewayRoutingGlobalConfigUpdateRequest: RoutingGlobalConfigUpdateRequest): Promise<RoutingGlobalConfig> {
    return Iland.getHttp()
        .put(`/edge-gateways/${this.uuid}/routing/global-config`, edgeGatewayRoutingGlobalConfigUpdateRequest.json)
        .then((response) => {
          const json = response.data as RoutingGlobalConfigJson;
          return new RoutingGlobalConfig(json);
        });
  }

  /**
   * Update the edge gateway's routing OSPF configuration.
   * @param {RoutingOSPFConfigUpdateRequest} edgeGatewayRoutingOSPFConfigUpdateRequest
   * @returns {Promise<RoutingOSPFConfig>}
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayRoutingOSPFConfig(edgeGatewayRoutingOSPFConfigUpdateRequest: RoutingOSPFConfigUpdateRequest):
      Promise<RoutingOSPFConfig> {
    return Iland.getHttp()
        .put(`/edge-gateways/${this.uuid}/routing/ospf-config`, edgeGatewayRoutingOSPFConfigUpdateRequest.json)
        .then((response) => {
          const json = response.data as RoutingOSPFConfigJson;
          return new RoutingOSPFConfig(json);
        });
  }

  /**
   * Update the edge gateway's routing static configuration.
   * @param {RoutingStaticConfigUpdateRequest} edgeGatewayRoutingStaticConfigUpdateRequest
   * @returns {Promise<RoutingStaticConfig>}
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayRoutingStaticConfig(
      edgeGatewayRoutingStaticConfigUpdateRequest: RoutingStaticConfigUpdateRequest): Promise<RoutingStaticConfig> {
    return Iland.getHttp()
        .put(`/edge-gateways/${this.uuid}/routing/static-config`, edgeGatewayRoutingStaticConfigUpdateRequest.json)
        .then((response) => {
          const json = response.data as RoutingStaticConfigJson;
          return new RoutingStaticConfig(json);
        });
  }

  /**
   * Get the list of certificates for an edge gateway.
   * @returns {Promise<Array<Certificate>>}
   */
  /* istanbul ignore next: autogenerated */
  async getCertificates(): Promise<Array<Certificate>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/certificates`).then((response) => {
      const json = response.data.data as Array<CertificateJson>;
      return json.map((it) => new Certificate(it));
    });
  }

  /**
   * Create a certificate for an edge gateway.
   * @param {CertificateCreateRequest} createRequest Certificate create request object.
   * @returns {Promise<Certificate>} promise Resolves with the certificate created.
   */
  /* istanbul ignore next: autogenerated */
  async createCertificate(createRequest: CertificateCreateRequest): Promise<Certificate> {
    return Iland.getHttp().post(`/edge-gateways/${this.uuid}/certificates`, createRequest.json).then((response) => {
      const json = response.data as CertificateJson;
      return new Certificate(json);
    });
  }

  /**
   * Import a certificate or a certificate chain against a certificate signing request.
   * @param {string} csrId Csr ID (e.g. csr-25).
   * @param {CertificateCreateRequest} importRequest Certificate import request.
   * @returns {Promise<Certificate>} promise Resolves with the certificate created.
   */
  /* istanbul ignore next: autogenerated */
  async createSignedCertificate(csrId: string, importRequest: CertificateCreateRequest): Promise<Certificate> {
    return Iland.getHttp().post(
        `/edge-gateways/${this.uuid}/certificate-signing-requests/${csrId}/actions/import-signed-certificate`,
        importRequest.json
    ).then((response) => {
      const json = response.data as CertificateJson;
      return new Certificate(json);
    });
  }

  /**
   * Delete a certificate from an edge gateway.
   * @param {string} certificateId Cetrificate ID
   * @returns {Promise<void>} promise Resolves with void when certificate is deleted.
   */
  /* istanbul ignore next: autogenerated */
  async deleteCertificate(certificateId: string): Promise<void> {
    return Iland.getHttp().delete(`/edge-gateways/${this.uuid}/certificates/${certificateId}`).then(() => undefined);
  }

  /**
   * Get the list of certificate signing requests (CSR) for an edge gateway.
   * @returns {Promise<Array<CSR>>} promise Resolves with the list of CSR.
   */
  /* istanbul ignore next: autogenerated */
  async getCSRs(): Promise<Array<CSR>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/certificate-signing-requests`).then((response) => {
      const json = response.data.data as Array<CSRJson>;
      return json.map((it) => new CSR(it));
    });
  }

  /**
   * Create a certificate signing request (CSR) for an edge gateway.
   * @param {CSRCreateRequest} csrCreateRequest CSR create request.
   * @returns {Promise<CSR>} promise Resolves with the CSR created.
   */
  /* istanbul ignore next: autogenerated */
  async createCSR(csrCreateRequest: CSRCreateRequest): Promise<CSR> {
    return Iland.getHttp().post(
        `/edge-gateways/${this.uuid}/certificate-signing-requests`,
        csrCreateRequest.json
    ).then((response) => {
      const json = response.data as CSRJson;
      return new CSR(json);
    });
  }

  /**
   * Delete a certificate signing request (CSR) from an edge gateway.
   * @param {string} csrId Csr ID (e.g. csr-25).
   * @returns {Promise<void>} promise Resolves with void when CSR is deleted.
   */
  /* istanbul ignore next: autogenerated */
  async deleteCSR(csrId: string): Promise<void> {
    return Iland.getHttp().delete(`/edge-gateways/${this.uuid}/certificate-signing-requests/${csrId}`)
        .then(() => undefined);
  }

  /**
   * Create a self-signed certificate on an edge gateway.
   * @param {string} csrId Csr ID (e.g. csr-25).
   * @param {SelfSignCertificateRequest} selfSignCertificateRequest The self sign certificate request.
   * @returns {Promise<Certificate>} promise Resolves with self sign certificate created.
   */
  /* istanbul ignore next: autogenerated */
  async createSelfSignedCertificate(csrId: string, selfSignCertificateRequest: SelfSignCertificateRequest)
      : Promise<Certificate> {
    return Iland.getHttp().post(
        `/edge-gateways/${this.uuid}/certificate-signing-requests/${csrId}/actions/generate-self-signed-certificate`,
        selfSignCertificateRequest.json
    ).then((response) => {
      const json = response.data as CertificateJson;
      return new Certificate(json);
    });
  }

  /**
   * Get the list of certificate revocation lists (CRLs) for an edge gateway.
   * @returns {Promise<Array<CRL>>} promise Promise that resolves with the list of CRLs.
   */
  /* istanbul ignore next: autogenerated */
  async getCRLs(): Promise<Array<CRL>> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/certificate-revocation-lists`).then((response) => {
      const json = response.data.data as Array<CRLJson>;
      return json.map((it) => new CRL(it));
    });
  }

  /**
   * Create a certificate revocation list (CRL) for an edge gateway.
   * @param {CertificateCreateRequest} crlCreateRequest
   * @returns {Promise<CRL>} Resolves with the CRL created.
   */
  /* istanbul ignore next: autogenerated */
  async createCRL(crlCreateRequest: CertificateCreateRequest): Promise<CRL> {
    return Iland.getHttp().post(
        `/edge-gateways/${this.uuid}/certificate-revocation-lists`,
        crlCreateRequest.json
    ).then((response) => {
      const json = response.data as CRLJson;
      return new CRL(json);
    });
  }

  /**
   * Delete a certificate revocation list (CRL) from an edge gateway.
   * @param {string} crlId The CRL id (e.g. crl-25)
   * @returns {Promise<void>} promise Resolves with void when CRL is deleted.
   */
  /* istanbul ignore next: autogenerated */
  async deleteCRL(crlId: string): Promise<void> {
    return Iland.getHttp().delete(`/edge-gateways/${this.uuid}/certificate-revocation-lists/${crlId}`)
        .then(() => undefined);
  }

  /**
   * Get the IPsec VPN configuration for current Edge.
   * @param {boolean} showSensitiveData Show sensitive data.
   * @returns {Promise<EdgeGatewayIPsec>} promise Promise that resolves with the edge gateway IPsec VPN configuration.
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayIPsec(showSensitiveData?: boolean): Promise<EdgeGatewayIPsec> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/ipsec`, {
      params: {
        showSensitiveData: showSensitiveData
      }
    }).then((response) => {
      const json = response.data as EdgeGatewayIPsecJson;
      return new EdgeGatewayIPsec(json);
    });
  }

  /**
   * Update the IPsec VPN configuration for current Edge.
   * @param {EdgeGatewayIPsecUpdateRequest} edgeGatewayIpsecUpdateRequest
   * @returns {Promise<EdgeGatewayIPsec>} promise Promise that resolves with the updated IPsec VPN configuration.
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewayIPsec(edgeGatewayIpsecUpdateRequest: EdgeGatewayIPsecUpdateRequest):
      Promise<EdgeGatewayIPsec> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/ipsec`, edgeGatewayIpsecUpdateRequest.json)
        .then((response) => {
          const json = response.data as EdgeGatewayIPsecJson;
          return new EdgeGatewayIPsec(json);
        });
  }

  /**
   * Get the Syslog settings for current edge gateway.
   * @returns {Promise<EdgeGatewaySyslog>} promise Promise that resolves with Syslog configuration.
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewaySyslog(): Promise<EdgeGatewaySyslog> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/syslog`).then((response) => {
      const json = response.data as EdgeGatewaySyslogJson;
      return new EdgeGatewaySyslog(json);
    });
  }

  /**
   * Update the Syslog settings for current edge gateway.
   * @param {EdgeGatewaySyslogUpdateRequest} updateRequest Syslog update request
   * @returns {Promise<EdgeGatewaySyslog>} promise Promise that resolves with updated Syslog configuration.
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewaySyslog(updateRequest: EdgeGatewaySyslogUpdateRequest): Promise<EdgeGatewaySyslog> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/syslog`, updateRequest.json).then((response) => {
      const json = response.data as EdgeGatewaySyslogJson;
      return new EdgeGatewaySyslog(json);
    });
  }

  /**
   * Get the SSH Settings for current edge gateway.
   * @returns {Promise<EdgeGatewaySSHSettings>} promise Promise that resolves with SSH Settings.
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewaySSHSettings(): Promise<EdgeGatewaySSHSettings> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/ssh-settings`).then((response) => {
      const json = response.data as EdgeGatewaySSHSettingsJson;
      return new EdgeGatewaySSHSettings(json);
    });
  }

  /**
   * Update the SSH Settings for current edge gateway.
   * @param {EdgeGatewaySSHSettingsUpdateRequest} updateRequest SSH settings update request
   * @returns {Promise<EdgeGatewaySSHSettings>} promise Promise that resolves with updated SSH settings.
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewaySSHSettings(updateRequest: EdgeGatewaySSHSettingsUpdateRequest)
      : Promise<EdgeGatewaySSHSettings> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/ssh-settings`, updateRequest.json).then((response) => {
      const json = response.data as EdgeGatewaySSHSettingsJson;
      return new EdgeGatewaySSHSettings(json);
    });
  }

  /**
   * Get the SSL VPN configuration for current edge gateway.
   * @returns {Promise<EdgeGatewaySslVpn>} promise Promise that resolves with SSL VPN configuration object.
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewaySslVpn(): Promise<EdgeGatewaySslVpn> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/sslvpn`).then((response) => {
      const json = response.data as EdgeGatewaySslVpnJson;
      return new EdgeGatewaySslVpn(json);
    });
  }

  /**
   * Update the SSL VPN configuration for current edge gateway.
   * @param {EdgeGatewaySSLVPNUpdateRequest} edgeGatewaySSLVPNUpdateRequest SSL VPN update request.
   * @returns {Promise<EdgeGatewaySSLVPN>} promise Promise that resolves with the updated SSL VPN configuration object.
   */
  /* istanbul ignore next: autogenerated */
  async updateEdgeGatewaySslVpn(edgeGatewaySslVpnUpdateRequest: EdgeGatewaySslVpnUpdateRequest)
      : Promise<EdgeGatewaySslVpn> {
    return Iland.getHttp().put(`/edge-gateways/${this.uuid}/sslvpn`, edgeGatewaySslVpnUpdateRequest.json)
        .then((response) => {
          const json = response.data as EdgeGatewaySslVpnJson;
          return new EdgeGatewaySslVpn(json);
        });
  }

  /**
   * Get the SSL VPN Statistics for current edge gateway.
   * @returns {Promise<EdgeGatewaySslVpn>} promise Promise that resolves with SSL VPN configuration object.
   */
  /* istanbul ignore next: autogenerated */
  async getEdgeGatewayL2VpnStatistics(): Promise<EdgeGatewayL2vpnStatistics> {
    return Iland.getHttp().get(`/edge-gateways/${this.uuid}/l2vpn-statistics`).then((response) => {
      const json = response.data as EdgeGatewayL2vpnStatisticsJson;
      return new EdgeGatewayL2vpnStatistics(json);
    });
  }
}

/**
 * Edge status enumeration.
 */
export type EdgeStatus = 'UP' | 'DOWN';
