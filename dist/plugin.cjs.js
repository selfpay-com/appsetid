'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppSetId = core.registerPlugin('AppSetId', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppSetIdWeb()),
});

class AppSetIdWeb extends core.WebPlugin {
    async retrieve() {
        console.log('Trying to retrieve AppSetId on web, result will be empty');
        return { appSetId: '', error: 'native plugin not available on web' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppSetIdWeb: AppSetIdWeb
});

exports.AppSetId = AppSetId;
//# sourceMappingURL=plugin.cjs.js.map
