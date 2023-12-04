import { createAction } from '@lib/reduxUtils';

export const SHOWN_INTRO = 'settings/shownIntro';
export const shownIntro = createAction(SHOWN_INTRO);

export const SHOWN_PREMIUM = 'settings/shownPremium';
export const shownPremium = createAction(SHOWN_PREMIUM);
