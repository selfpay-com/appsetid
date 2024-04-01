import { WebPlugin } from '@capacitor/core';

import type { AppSetIdPlugin } from './definitions';

export class AppSetIdWeb extends WebPlugin implements AppSetIdPlugin {
  async retrieve(): Promise<{ appSetId: string, error: string }> {
    console.log('Trying to retrieve AppSetId on web, result will be empty');
    return { appSetId: '', error: 'native plugin not available on web'};
  }
}
