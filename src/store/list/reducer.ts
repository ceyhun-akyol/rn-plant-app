import { ItemType } from 'src/screens/List';
import { SHOW_DETAIL, UPDATE_LIST } from './actions';

export const INITIAL_STATE: { items: ItemType[]; detail: ItemType | null } = {
  items: [],
  detail: null,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case SHOW_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case UPDATE_LIST.PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_LIST.SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case UPDATE_LIST.ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
