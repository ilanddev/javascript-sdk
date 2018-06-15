import { AxiosResponse } from 'axios';
import { BootOptionsJson } from '../__json__/boot-options-json';

export const MockBootOptionsJson: BootOptionsJson = {
  boot_delay: 0,
  is_enter_bios: false
};

export const MockVmGetBootOptionsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockBootOptionsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
