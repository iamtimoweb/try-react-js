import { useState } from "react";

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }
    return (
        <form className="d-flex">
            <input className="form-control form-control-lg me-2 shadow-none border-secondary" type="search" placeholder="Search Posts" aria-label="Search" onChange={handleSearch} />
            <button className="btn btn-outline-success btn-lg" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    );
}
