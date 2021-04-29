import React from 'react';

const List = ({ resource, isPending }) => {
    const data = resource.read();
    return (
        <div className={isPending ? 'isPending' : ''}>
            {(data || []).map((repo) => (
                <div key={repo.id}>
                    <p>Name: {repo.name}</p>
                    <p>Url: <a href={repo.html_url} rel="noreferrer" target="_blank">{repo.html_url}</a></p>
                </div>
            ))}
        </div>
    );
};

export default List;