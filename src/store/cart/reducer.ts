// eslint-disable-next-line import/no-unresolved
import { CartItemType } from 'src/screens/Cart';
import { UPDATE_CART } from './actions';

export const INITIAL_STATE: { items: CartItemType[] } = {
  items: [],
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case UPDATE_CART:
      if (payload.count === 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== payload.id),
        };
      }
      if (state.items.findIndex((item) => item.id === payload.id) === -1) {
        return {
          ...state,
          items: [{ ...payload, count: 1 }, ...state.items],
        };
      }
      // eslint-disable-next-line no-case-declarations
      const newItems = state.items.map((item) => {
        if (item.id === payload.id) {
          return { ...{ ...item, count: payload.count } };
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};
