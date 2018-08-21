/* eslint no-undef: 0 */
import * as singleSpa from 'single-spa';

console.log('typeof SystemJS', typeof SystemJS);

const isDevelopment = process.env.NODE_ENV === 'development';

singleSpa.registerApplication(
    'test',
    () => import(/* webpackChunkName: "test" */ './testapp.js'),
    location => location.pathname.startsWith('/test')
);


let alphaLoadingPromise;
// create the promise first, so we have time to preload before hitting the given url
if (process.env.NODE_ENV !== 'development') {
    alphaLoadingPromise = import(/* webpackChunkName: "alpha", webpackPreload: true */ '@multi-app-mono-repo/alpha');
}

singleSpa.registerApplication(
    'alpha',
    () => isDevelopment ? SystemJS.import('/local/apps/alpha') : alphaLoadingPromise,
    location => location.pathname.startsWith('/alpha')
);


singleSpa.start();
