import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top py-3 shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <span className="text-warning fw-bolder">.</span> PostsHub
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-md-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active me-4" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-4" to="/posts">
                                Posts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-4" to="/create">
                                Create Post
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-4" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-4" to="/signup">
                                SignUp
                            </Link>
                        </li>
                    </ul>
                    <SearchForm />
                </div>
            </div>
        </nav>
    );
}
