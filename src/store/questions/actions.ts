import { createAsyncAction, createAsyncTypes } from '@lib/reduxUtils';

export const GET_QUESTIONS = createAsyncTypes('questions/getQuestions');
export const getQuestions = createAsyncAction(GET_QUESTIONS, {});
