import { AxiosResponse } from 'axios';
import { EdgeStaticRoutingServiceJson } from '../__json__/edge-static-routing-service-json';

export const MockEdgeStaticRoutingServiceJson: EdgeStaticRoutingServiceJson = {
  'edge_uuid': 'dev-vcd01.iland.dev:urn:vcloud:gateway:af286787-9cb3-4c9d-b86e-c42dc5dfabc5',
  'enabled': true,
  'routes': [{
    edge_uuid: 'test',
    index: 0,
    name: 'test',
    network: 'network test',
    next_hop_ip: '111.222.333.444',
    interface_type: 'test',
    interface_name: 'test'
  }]
};

export const MockEdgeStaticRoutingServiceResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: MockEdgeStaticRoutingServiceJson,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });
