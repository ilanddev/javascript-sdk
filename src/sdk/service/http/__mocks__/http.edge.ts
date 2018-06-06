import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockEdgeSslVpnResponse } from '../../../model/edge/ssl-vpn/__mocks__/edge-ssl-vpn';
import {
  MockEdgeFirewallCheckpointResponse, MockEdgeFirewallCheckpointsResponse, MockEdgeFirewallLogsResponse,
  MockEdgeFirewallResponse
} from '../../../model/edge/firewall/__mocks__/edge-firewall';
import { MockEdgeStaticRoutingServiceResponse } from '../../../model/edge/static-routing/__mocks__/static-routing';
import { MockEdgeIpsecVpnResponse } from '../../../model/edge/ipsec-vpn/__mocks__/edge-ipsec-vpn';
import {
  MockEdgeNatCheckpointResponse,
  MockEdgeNatCheckpointsResponse
} from '../../../model/edge/checkpoint/__mocks__/checkpoint';
import { MockEdgeDhcpResponse } from '../../../model/edge/dhcp/__mocks__/dhcp';
import { MockEdgeLoadbalancerResponse } from '../../../model/edge/load-balancer/__mocks__/edge-load-balancer';
import { MockEdgeResponse } from '../../../model/edge/__mocks__/edge';
import { MockEdgeStatsResponse } from '../../../model/edge/network-perf-sample/__mocks__/network-perf-sample';
import { MockEdgeNatJsonResponse } from '../../../model/edge/nat/__mocks__/edge-nat';

export async function MockEdgeGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/edges\/[^\/]+?$/.test(url):
      // get an edge
      return MockEdgeResponse;
    case /\/edges\/[^\/]+\/dhcp$/.test(url):
      // get an edge DHCP
      return MockEdgeDhcpResponse;
    case /\/edges\/[^\/]+\/firewall$/.test(url):
      // get an edge Firewall
      return MockEdgeFirewallResponse;
    case /\/edges\/[^\/]+\/firewall-logs/.test(url):
      // get an edge Firewall logs
      return MockEdgeFirewallLogsResponse;
    case /\/edges\/[^\/]+\/firewall\/checkpoints$/.test(url):
      // get an edge Firewall checkpoints
      return MockEdgeFirewallCheckpointsResponse;
    case /\/edges\/[^\/]+\/firewall\/checkpoints\/[^\/]+$/.test(url):
      // get an edge Firewall checkpoints
      return MockEdgeFirewallCheckpointResponse;
    case /\/edges\/[^\/]+\/ipsec-vpn$/.test(url):
      // get an edge ipsec-vpn service.
      return MockEdgeIpsecVpnResponse;
    case /\/edges\/[^\/]+\/load-balancer$/.test(url):
      // get an edge load balancer service.
      return MockEdgeLoadbalancerResponse;
    case /\/edges\/[^\/]+\/nat$/.test(url):
      // get an edge nat service.
      return MockEdgeNatJsonResponse;
    case /\/edges\/[^\/]+\/nat\/checkpoints$/.test(url):
      // get an edge nat checkpoints.
      return MockEdgeNatCheckpointsResponse;
    case /\/edges\/[^\/]+\/nat\/checkpoints\/[^\/]+$/.test(url):
      // get an edge nat checkpoint.
      return MockEdgeNatCheckpointResponse;
    case /\/edges\/[^\/]+\/sslvpn$/.test(url):
      // get an edge ssl vpn service.
      return MockEdgeSslVpnResponse;
    case /\/edges\/[^\/]+\/static-routing$/.test(url):
      // get an edge static routing.
      return MockEdgeStaticRoutingServiceResponse;
    case /\/edges\/[^\/]+\/performance\/[^\/]+$/.test(url):
      // get an edge performance.
      return MockEdgeStatsResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockEdgePost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockEdgePut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockEdgeDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}
