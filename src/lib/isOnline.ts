/*
 * Code borrowed from https://dev.to/maxmonteil/is-your-app-online-here-s-how-to-reliably-know-in-just-10-lines-of-js-guide-3in7
 */

import axios from 'axios';

const getRandomString = () => Math.random().toString(36).substring(2, 15);

export default async () => {
  // Check if connected to a network
  if (!window.navigator.onLine) return false;

  // Check if able to hit own origin
  const url = new URL(window.location.origin);

  // Random value to prevent cached responses
  url.searchParams.set('rand', getRandomString());

  try {
    const response = await axios({
      method: 'head',
      url: url.toString(),
    });

    return response.status === 200;
  } catch {
    return false;
  }
};
