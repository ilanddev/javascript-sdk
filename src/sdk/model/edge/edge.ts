import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NameIdJson } from '../common/__json__/name-id-json';
import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { NameId } from '../common/name-id';
import {
  EdgeGatewayFirewallObjectTypeJson
} from './edge-gateway-firewall/__json__/edge-gateway-firewall-object-type-json';
import {
  EdgeGatewayFirewallObjectListJson
} from './edge-gateway-firewall/__json__/edge-gateway-firewall-object-list-json';
import {
  EdgeGatewayFirewallObjectPagingParams
} from './edge-gateway-firewall/edge-gateway-firewall-object-paging-params';
import { EdgeGatewayFirewallObjectType } from './edge-gateway-firewall/edge-gateway-firewall-object-type';
import { EdgeGatewayFirewallObjectList } from './edge-gateway-firewall/edge-gateway-firewall-object-list';
import { EdgeGatewayFirewallUpdateRequest } from './edge-gateway-firewall/edge-gateway-firewall-update-request';
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
  EdgeSslVpnClientInstallPackageJson, EdgeSslVpnIpPoolJson, EdgeSslVpnPrivateNetworkJson,
  EdgeSslVpnServiceJson, EdgeSslVpnUserJson
} from './ssl-vpn/__json__/edge-ssl-vpn-json';
import { NATServiceUpdateRequest } from './nat/nat-service-update-request';
import { NatService } from './nat/nat-service';
import { Dhcp } from './dhcp/dhcp';
import { Firewall } from './firewall/firewall';
import { FirewallLog } from './firewall/firewall-log';
import { Http } from '../../service/http/http';
import { Checkpoint } from './checkpoint/checkpoint';
import {
  EdgeSslVpnClientInstallPackageUpdateRequest
} from './ssl-vpn/edge-ssl-vpn-client-install-package-update-request';
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
}

/**
 * Edge status enumeration.
 */
export type EdgeStatus = 'UP' | 'DOWN';
