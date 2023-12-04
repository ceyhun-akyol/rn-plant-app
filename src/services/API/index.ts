/* eslint-disable import/no-unresolved */
import { camelizeKeys } from 'humps';
import Request from '@lib/request';
import { CategoryType, QuestionType } from 'src/types';

type RequestConfig = {
  url: string;
  method: string;
  data?: object;
  headers?: object;
};

const requestInstance = Request.createInstance({
  baseURL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  withCredentials: true,
});

export const request = async (config: RequestConfig) =>
  requestInstance({
    ...config,
  });

const API = {
  getCategory: async (): Promise<CategoryType[]> => {
    const response = await request({
      url: '/getCategories',
      method: 'get',
    });

    return camelizeKeys(response.data.data) as CategoryType[];
  },

  getQuestions: async (): Promise<QuestionType[]> => {
    const response = await request({
      url: '/getQuestions',
      method: 'get',
    });

    return camelizeKeys(response.data) as QuestionType[];
  },
};

export default API;
