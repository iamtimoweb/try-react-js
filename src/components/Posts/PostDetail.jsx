import React from "react";

export default function PostDetail({ post, deletePost }) {
    function handleDelete(id) {
        deletePost(id);
    }
    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title text-capitalize fw-bold">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <button className="btn btn-danger btn-sm border-0 shadow-none" onClick={() => handleDelete(post.id)}>
                    <i className="bi bi-trash"></i>
                    Delete
                </button>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
        </div>
    );
}
