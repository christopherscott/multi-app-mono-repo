let domEl;

export function bootstrap(props) {
    return Promise
        .resolve()
        .then(() => {
            domEl = document.createElement('div');
            domEl.id = 'app1';
            document.body.appendChild(domEl);
        });
}

export function mount(props) {
    return Promise
        .resolve()
        .then(() => {
            domEl.innerHTML = 'App 1 is mounted! <a href="/alpha">alpha</a>, <a href="/beta">beta</a>.'
        });
}

export function unmount(props) {
    return Promise
        .resolve()
        .then(() => {
            domEl.innerHTML = '';
        })
}
