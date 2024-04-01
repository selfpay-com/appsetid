var capacitorAppSetId = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
