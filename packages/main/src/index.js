/* eslint no-undef: 0 */
import * as singleSpa from 'single-spa';

console.log('typeof SystemJS', typeof SystemJS);

singleSpa.registerApplication(
    'test',
    () => import(/* webpackChunkName: "test" */ './testapp.js'),
    location => location.pathname.startsWith('/test')
);

singleSpa.registerApplication(
    'alpha',
    () => {
        if (process.env.NODE_ENV === 'development') {
            return SystemJS.import('/local/apps/alpha'); // locally fetched via url
        } else {
            return import(/* webpackPrefetch: true */ '@multi-app-mono-repo/alpha/build/static/js/main') // in prod fetched via file
        }
    },
    location => location.pathname.startsWith('/alpha')
);

singleSpa.start();
