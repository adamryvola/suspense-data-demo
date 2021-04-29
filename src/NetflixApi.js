import {delay} from "./utils";

export const fetchNetflixRepos = (page) =>
    delay(2000).then(() =>
        fetch(`https://api.github.com/orgs/Netflix/repos?page=${page}&per_page=10`)
            .then((res) => res.json())
    );