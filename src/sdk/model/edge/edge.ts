import { Entity } from '../common/entity';
import { Iland } from '../../iland';
import { EdgeInterface } from './edge-interface/edge-interface';
import { EdgeIpsecVpnServiceJson } from './ipsec-vpn/__json__/edge-ipsec-vpn-json';
import { EdgeFirewallJson, EdgeFirewallLogJson } from './firewall/__json__/edge-firewall-json';
import { LoadBalancerServiceJson } from './load-balancer/__json__/load-balancer-json';
import { CheckpointJson } from './checkpoint/__json__/checkpoint-json';
import { EdgeSslVpnServiceJson } from './ssl-vpn/__json__/edge-ssl-vpn-json';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NatService } from './nat/nat-service';
import { Dhcp } from './dhcp/dhcp';
import { Firewall } from './firewall/firewall';
import { FirewallLog } from './firewall/firewall-log';
import { Http } from '../../service/http/http';
import { Checkpoint } from './checkpoint/checkpoint';
import { SslVpn } from './ssl-vpn/ssl-vpn';
import { IpsecVpn } from './ipsec-vpn/ipsec-vpn';
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
   * @returns {Promise<Firewall>}
   */
  async getFirewall(): Promise<Firewall> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall`).then((response) => {
      return new Firewall(response.data as EdgeFirewallJson);
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
   * The actual firewall config is not returned by this endpoint,
   * to retrieve the actual config the edge/{edgeUuid}/firewall/checkpoint/{checkpointUuid} endpoint must be used..
   */
  async getFirewallCheckpoints(): Promise<Array<Checkpoint>> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall/checkpoints`).then((response) => {
      return (response.data as Array<CheckpointJson>).map(checkpoint => new Checkpoint(checkpoint));
    });
  }

  /**
   * Get an edge firewall checkpoint by edge uuid and checkpoint.
   * @param {string} checkpointUuid
   * @returns {Promise<Checkpoint>}
   * @description The actual firewall config of the checkpoint will be included in the return.
   * Valid checkpoint uuids can be found using the /edge/{edgeUuid}/firewall/checkpoint endpoint.
   */
  async getFirewallCheckpoint(checkpointUuid: string): Promise<Checkpoint> {
    return Iland.getHttp().get(`/edges/${this.uuid}/firewall/checkpoints/${checkpointUuid}`).then((response) => {
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
    return observable.map(token => `${href}&oauth_token=${token}`);
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
    return observable.map(token => `${href}&oauth_token=${token}`);
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
   * The actual NAT config is not returned by this endpoint,
   * to retrieve the actual config the edge/{edgeUuid}/nat/checkpoint/{checkpointUuid} endpoint must be used.
   */
  async getNatCheckpoints(): Promise<Array<Checkpoint>> {
    return Iland.getHttp().get(`/edges/${this.uuid}/nat/checkpoints`).then((response) => {
      return (response.data as Array<CheckpointJson>).map(checkpoint => new Checkpoint(checkpoint));
    });
  }

  /**
   * Get a NAT checkpoint by edge uuid and checkpoint.
   * @param {string} checkpointUuid
   * @returns {Promise<Checkpoint>}
   * @description The actual NAT config of the checkpoint will be included in the return.
   * Valid checkpoint uuids can be found using the /edge/{edgeUuid}/nat/checkpoint endpoint
   */
  async getNatCheckpoint(checkpointUuid: string): Promise<Checkpoint> {
    return Iland.getHttp().get(`/edges/${this.uuid}/nat/checkpoints/${checkpointUuid}`).then((response) => {
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
    return observable.map(token => `${href}&oauth_token=${token}`);
  }

  /**
   * Gets SSL VPN configuration details for an edge gateway.
   * @returns {Promise<EdgeSslVpnServiceJson>}
   */
  async getSslVpn(): Promise<SslVpn> {
    return Iland.getHttp().get(`/edges/${this.uuid}/sslvpn`).then((response) => {
      return new SslVpn(response.data as EdgeSslVpnServiceJson);
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
  async updateStaticRouting(request: StaticRouting): Promise<Task> {
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
}

/**
 * Edge status enumeration.
 */
export type EdgeStatus = 'UP' | 'DOWN';
