import { registerPlugin } from '@capacitor/core';

import type { AppSetIdPlugin } from './definitions';

const AppSetId = registerPlugin<AppSetIdPlugin>('AppSetId', {
  web: () => import('./web').then(m => new m.AppSetIdWeb()),
});

export * from './definitions';
export { AppSetId };
