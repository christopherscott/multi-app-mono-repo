/* eslint no-undef: 0 */
import * as singleSpa from 'single-spa';

console.log('typeof SystemJS', typeof SystemJS);

let alphaPromise;

singleSpa.registerApplication(
    'test',
    () => import(/* webpackChunkName: "test" */ './testapp.js'),
    location => location.pathname.startsWith('/test')
);

if (process.env.NODE_ENV !== 'development') {
    alphaPromise = import(/* webpackChunkName: "alpha", webpackPreload: true */ '@multi-app-mono-repo/alpha/build/static/js/main')
}

singleSpa.registerApplication(
    'alpha',
    () => {
        if (process.env.NODE_ENV === 'development') {
            return SystemJS.import('/local/apps/alpha'); // locally fetched via url
        } else {
            return alphaPromise;
        }
    },
    location => location.pathname.startsWith('/alpha')
);

singleSpa.start();
