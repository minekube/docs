import React from "react";
import {useAsync} from "react-async"

// export class FetchOptions {
//     public username: 'minekube'
//     public repo
//     public toString = (): string => {
//         return `${this.username}/${this.repo}`;
//     }
// }

type FetchProps = {
    username: "minekube",
    repo: string,
    plain: false, // removes leading 'v' character
}

export const LatestTag = function (props: FetchProps): JSX.Element {
    const {data, error} = useAsync({
        promiseFn: latestTag,
        path: `${props.username}/${props.repo}`
    })
    if (error) return (
        <>{error.message}</>
    );
    let tag = `${data}`;
    if (props.plain && tag.startsWith('v')) {
        tag = data.slice(1)
    }
    return (
        <>{tag}</>
    );
}

async function latestTag({path}) {
    // const targetUrl = `https://api.github.com/repos/${username}/${repo}/releases/latest`;
    // const { data, error } = useFetch(targetUrl, {
    //     headers: { accept: "application/vnd.github.v3+json" },
    // })
    // if (error) return error.message
    // if (data) return `Hi, my name is ${data.json()}! ${targetUrl}`
    // return null

    const targetUrl = `https://api.github.com/repos/${path}/releases/latest`;
    const headers = new Headers();
    headers.set("accept", "application/vnd.github.v3+json");
    try {
        const res = await fetch(targetUrl, {headers});
        const release = await res.json();
        if (!release)
            throw new Error(`No valid releases found for ${path}`);
        return release.tag_name || "";
    } catch (err) {
        console.log(err);
        return "";
    }
}