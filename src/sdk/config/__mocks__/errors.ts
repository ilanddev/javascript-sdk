import { AxiosResponse } from 'axios';
import { ApiErrorJson } from '../api-error';

export const MockNotFoundError: ApiErrorJson = {
  type: 'NotFoundError',
  message: 'The requested resource was not found.',
  detail_message: 'The detailed response error message'
};

export const MockUnauthorizedApiError: ApiErrorJson = {
  type: 'UnauthorizedError',
  message: 'The requested resource was not found.'
};

export const MockNotFoundResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockNotFoundError,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});
