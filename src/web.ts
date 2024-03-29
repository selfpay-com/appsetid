import { WebPlugin } from '@capacitor/core';

import type { AppSetIdPlugin } from './definitions';

export class AppSetIdWeb extends WebPlugin implements AppSetIdPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
