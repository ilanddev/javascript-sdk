import { AxiosResponse } from 'axios';

export const MockNotFoundResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: {
      type: 'NotFoundError',
      message: 'The requested resource was not found.',
      detail_message: '',
      status: 404
    },
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
