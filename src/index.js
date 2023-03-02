import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

function Hi() {
    return <p>Hello</p>;
}
render(
    <React.StrictMode>
        <Hi />
    </React.StrictMode>,
    document.getElementById("app")
);
