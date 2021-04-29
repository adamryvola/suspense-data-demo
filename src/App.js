import React from "react";
import {delay} from "./utils";

const RepositoryOverview = React.lazy(() => delay(500).then(() => import('./RepositoryOverview')));

function App() {
    return (
        <main>
            <h1>Netflix repositories</h1>
            <React.Suspense fallback="...LOADING...">
                <RepositoryOverview />
            </React.Suspense>
        </main>
    );
}

export default App;
