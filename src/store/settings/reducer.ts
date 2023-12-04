import { SHOWN_INTRO, SHOWN_PREMIUM } from './actions';

export const INITIAL_STATE: { introPageShown: boolean; premiumShown: boolean } =
  {
    introPageShown: false,
    premiumShown: false,
  };

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case SHOWN_INTRO:
      return {
        ...state,
        introPageShown: true,
      };

    case SHOWN_PREMIUM:
      return {
        ...state,
        premiumShown: true,
      };
    default:
      return state;
  }
};
