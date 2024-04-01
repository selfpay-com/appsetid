import { WebPlugin } from '@capacitor/core';
export class AppSetIdWeb extends WebPlugin {
    async retrieve() {
        console.log('Trying to retrieve AppSetId on web, result will be empty');
        return { appSetId: '', error: 'native plugin not available on web' };
    }
}
//# sourceMappingURL=web.js.map