import { registerPlugin } from '@capacitor/core';

import type { OpenGmapsPlugin } from './definitions';

const OpenGmaps = registerPlugin<OpenGmapsPlugin>('OpenGmaps', {
  web: () => import('./web').then(m => new m.OpenGmapsWeb()),
});

export * from './definitions';
export { OpenGmaps };
