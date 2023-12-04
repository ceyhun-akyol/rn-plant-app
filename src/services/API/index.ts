import { camelizeKeys } from 'humps';
import Config from 'react-native-config';
import Request from '@lib/request';

type RequestConfig = {
  url: string;
  method: string;
  data?: object;
  headers?: object;
};

type LoginResponse = {
  token: string;
};

const requestInstance = Request.createInstance({
  baseURL: 'https://5fc9346b2af77700165ae514.mockapi.io',
  withCredentials: true,
});

export const request = async (config: RequestConfig) =>
  requestInstance({
    ...config,
  });

const API = {
  getList: async (): Promise<LoginResponse> => {
    const response = await request({
      url: '/products',
      method: 'get',
    });

    return camelizeKeys(response.data) as LoginResponse;
  },
};

export default API;
