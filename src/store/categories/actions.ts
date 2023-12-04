import { createAsyncAction, createAsyncTypes } from '@lib/reduxUtils';

export const GET_CATEGORY = createAsyncTypes('category/getCategory');
export const getCategory = createAsyncAction(GET_CATEGORY, {});
