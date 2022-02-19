import { useState } from "react";
import useFetchPost from "../../utils/hooks/useFetchPost";
import PostDetail from "./PostDetail";

export default function Posts() {
    const [page, setPage] = useState(1);
    const [posts, setPosts, isLoading, error] = useFetchPost(page);

    function deletePost(id) {
        fetch(`${process.env.REACT_APP_POSTS_API}/posts/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to delete post from resource");
                }
                return res.json();
            })
            .then(() => {
                const newposts = posts.filter((post) => post.id !== id);
                setPosts(newposts);
            })
            .catch((err) => console.log(err));
    }

    // checking for errors and isLoading state
    if (error) {
        return (
            <div className="d-flex py-5 align-items-center">
                <h4 className="m-auto mw-50 py-5">{error}</h4>
            </div>
        );
    } else if (isLoading) {
        return (
            <div className="d-flex py-5 align-items-center">
                <div className="m-auto mw-50 py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row">
                <header className="py-3 text-md-center">
                    <h3 className="text-uppercase">All Posts</h3>
                </header>
                {posts.map((post) => {
                    return (
                        <div className="col-md-4 mb-4" key={post.id}>
                            <PostDetail post={post} deletePost={deletePost} />
                        </div>
                    );
                })}
                <button className="btn btn-primary shadow-none btn-lg w-25 mx-auto mt-3" onClick={() => setPage(page + 1)}>
                    Load more posts
                </button>
            </div>
        );
    }
}
