import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/bootstrap-icons.css";
import "./assets/css/fonts.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./assets/bootstrap/js/bootstrap.bundle.min";

ReactDOM.render(
    <React.StrictMode>
        <App title="Learn React" />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
