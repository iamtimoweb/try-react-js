import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Partials/Navbar";
import Posts from "./components/Posts/Posts";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import CreatePost from "./components/Posts/CreatePost";

function App(props) {
    return (
        <Router>
            <Navbar />
            <main className='container' role="main">
                <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
                <Route path="/create" component={CreatePost} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </main>
        </Router>
    );
}

export default App;
