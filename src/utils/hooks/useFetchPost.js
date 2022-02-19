import { useState, useEffect } from "react";

const url = process.env.REACT_APP_POSTS_API;

export default function useFetchPost(page) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${url}/posts?_page=${page}&_limit=9`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to load data from resource");
                }
                return res.json();
            })
            .then(
                (posts) => {
                    console.log(posts);
                    setPosts(posts);
                    setIsLoading(false);
                }
            )
            .catch((err) => {
                // console.log("The error is: ", err.message);
                setError(err.message);
                setIsLoading(false);
            });
    }, [page]);

    return [posts, setPosts, isLoading, error];
}
