// eslint-disable-next-line import/no-unresolved
import { CategoryType } from 'src/types';
import { GET_CATEGORY } from './actions';

export const INITIAL_STATE: { items: CategoryType[]; isLoading: boolean } = {
  items: [],
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CATEGORY.PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATEGORY.SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case GET_CATEGORY.ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
