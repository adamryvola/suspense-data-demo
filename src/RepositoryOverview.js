import React, { useState, useTransition, useCallback } from 'react';
import { fetchNetflixRepos } from "./NetflixApi";
import List from './List';
import { initResource } from "./Resource";

const initialResource = initResource(fetchNetflixRepos, 1);

const RepositoryOverview = () => {
    const [resource, setResource] = useState(initialResource);
    const [page, setPage] = useState(initialResource.page);
    const [startTransition, isPending] = useTransition({ timeoutMs: 4000 });

    const fetchRepos = useCallback((newPage) => {
        setPage(newPage);
        startTransition(() => {
            setResource(initResource(fetchNetflixRepos, newPage));
        });
    }, []);

    return (
        <div>
            <h4>Page: {page}</h4>
            <button onClick={() => fetchRepos(resource.page - 1)}>
                Prev
            </button>
            <button onClick={() => fetchRepos(resource.page + 1)}>
                Next
            </button>
            <List
                resource={resource}
                isPending={isPending}
            />
        </div>
    );
};

export default RepositoryOverview;