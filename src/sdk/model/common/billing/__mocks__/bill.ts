import { AxiosResponse } from 'axios';
import { BillJson } from '../__json__/bill-json';
import { BillingSummaryJson } from '../__json__/billing-summary-json';

export const MockVmBillJson: BillJson = {
  bandwidth: {
    total: { cost: 0, usage: 0 },
    reserved: { cost: 0, usage: 0 },
    burst: { cost: 0, usage: 0 }
  },
  cpu: {
    total: { cost: 1.09693, usage: 23.339 },
    reserved: { cost: 0, usage: 0 },
    burst: { cost: 1.09693, usage: 23.339 }
  },
  memory: {
    total: { cost: 30.48384, usage: 1186.60348 },
    reserved: { cost: 0, usage: 0 },
    burst: { cost: 30.48384, usage: 1186.60348 }
  },
  disk: {
    total: {
      total: { cost: 30.48384, usage: 1186.60348 },
      reserved: { cost: 0, usage: 0 },
      burst: { cost: 30.48384, usage: 1186.60348 }
    },
    hdd: {
      total: { cost: 1.09693, usage: 23.339 },
      reserved: { cost: 0, usage: 0 },
      burst: { cost: 1.09693, usage: 23.339 }
    },
    ssd: {
      total: { cost: 1.09693, usage: 23.339 },
      reserved: { cost: 0, usage: 0 },
      burst: { cost: 1.09693, usage: 23.339 }
    },
    archive: {
      total: { cost: 1.09693, usage: 23.339 },
      reserved: { cost: 0, usage: 0 },
      burst: { cost: 1.09693, usage: 23.339 }
    }
  },
  total_cost: 40.2768,
  total_cost_estimate: 40.2768,
  year: 2018,
  month: 6,
  entity_uuid: 'dal02.ilandcloud.com:urn:vcloud:vapp:6cb9af7b-0d46-4919-b061-fb242c2ccf12',
  entity_name: 'DAL Windows',
  entity_type: 'IAAS_VAPP',
  test_drive: false,
  currency_code: 'USD',
  line_items: []
};

export const MockVmBillingSummaryJson: BillingSummaryJson = {
  current_hour: MockVmBillJson,
  current_month: MockVmBillJson,
  previous_hour: MockVmBillJson,
  previous_month: MockVmBillJson,
  test_drive: false
};

export const MockVmBillResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmBillJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVmCurrentBillingSummaryResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: MockVmBillingSummaryJson,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });
