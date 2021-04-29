const cache = new Map();

export function initResource(apiCall, page) {
    let data;
    let status = 'pending';

    if (cache.get(page)) {
        return cache.get(page);
    }

    const promise = apiCall(page)
        .then((response) => {
            data = response;
            status = 'done';
        });

    function read() {
        if (status === 'pending') {
            throw promise;
        } else {
            return data;
        }
    }

    cache.set(page, { read, page });

    return { read, page };
}







































// const cache = new Map();
//
// export function initResource(apiCall, page) {
//
//     let data;
//     let status = 'pending';
//
//     if (cache.get(page)) {
//         return cache.get(page);
//     }
//
//     const promise = apiCall(page).then((result) => {
//         data = result;
//         status = 'done';
//     });
//
//     function reader() {
//         if (status === 'pending') {
//             throw promise;
//         } else {
//             return data;
//         }
//     }
//
//     cache.set(page, { read: reader, page });
//
//     return { read: reader, page };
// }