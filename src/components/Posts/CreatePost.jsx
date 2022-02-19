import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [isSending, setIsSending] = useState(false);
    const inputRef = useRef(null);
    const history = useHistory();

    // focusing the textbox on component load
    useEffect(() => {
        //console.log(inputRef);
        inputRef.current.focus();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const post = { title, author, content };
        setIsSending(true);
        setTimeout(() => {
            fetch(`${process.env.REACT_APP_POSTS_API}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("failed to create post");
                    }
                    return res.json();
                })
                .then((post) => {
                    if (post) {
                        setIsSending(false);
                        history.push("/posts");
                    }
                });
        }, 2000);
    }
    return (
        <div className="row justify-content-md-center align-content-md-center">
            <h2 className="text-md-center">Create Post</h2>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="titleId" className="form-label">
                            Title
                        </label>
                        <input type="text" className="form-control shadow-none border-transparent" id="titleId" ref={inputRef} placeholder="post title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="authorId" className="form-label">
                            Author
                        </label>
                        <input type="text" className="form-control shadow-none border-transparent" id="authorId" placeholder="author..." value={author} onChange={(e) => setAuthor(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contentId" className="form-label">
                            Content
                        </label>
                        <textarea id="contentId" className="form-control shadow-none border-transparent" cols="30" rows="5" placeholder="post content..." value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                    </div>
                    <div className="mb-3 text-md-center">
                        {!isSending && <button className="btn btn-primary">Save Post</button>}
                        {isSending && (
                            <button className="btn btn-primary" disabled>
                                <span className="spinner-border spinner-border-sm text-white"></span>
                                sending...
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
