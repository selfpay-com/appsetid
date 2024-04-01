import { registerPlugin } from '@capacitor/core';
const AppSetId = registerPlugin('AppSetId', {
    web: () => import('./web').then(m => new m.AppSetIdWeb()),
});
export * from './definitions';
export { AppSetId };
//# sourceMappingURL=index.js.map