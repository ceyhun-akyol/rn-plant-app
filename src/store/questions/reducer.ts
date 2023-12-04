/* eslint-disable import/no-unresolved */
import { QuestionType } from 'src/types';
import { GET_QUESTIONS } from './actions';

export const INITIAL_STATE: { items: QuestionType[]; isLoading: boolean } = {
  items: [],
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_QUESTIONS.PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_QUESTIONS.SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case GET_QUESTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
