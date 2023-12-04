import {
  createAction,
  createAsyncAction,
  createAsyncTypes,
} from '@lib/reduxUtils';

export const SHOW_DETAIL = 'list/showDetail';
export const showDetail = createAction(SHOW_DETAIL);

export const UPDATE_LIST = createAsyncTypes('list/updateList');
export const updateList = createAsyncAction(UPDATE_LIST, {});
