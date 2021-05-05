import React from "react";
import "../styles/Title.css"

function TitleDiv() {
    return (
        <div className="jumbotron" className="header">
            <h1>
                Employee Directory
            </h1>
            <h3>Click on carrots to filter by heading or use the searcfh box to narrow your results. </h3>
        </div>
    );
};

export default TitleDiv;