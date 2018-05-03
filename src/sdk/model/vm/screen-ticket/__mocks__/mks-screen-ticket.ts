import { AxiosResponse } from 'axios';
import { MksScreenTicketJson } from '../__json__/mks-screen-ticket-json';

export const MockMksScreenTicketJson: MksScreenTicketJson = {
  vmx: 'vmx',
  ticket: 'ticket-data',
  host: 'vcd-console-host',
  port: '967'
};

export const MockVmMksScreenTicketResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockMksScreenTicketJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
