export const postService = {
    getPosts,
    log,
}

function getPosts() {
    return fetch('http://localhost:3000/get-posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());
}

function log() {
    console.log('hello');
}
