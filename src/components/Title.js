import React from "react";
import "../styles/Title.css"

function TitleDiv() {
    return (
        <div className="jumbotron" className="header">
            <h1>
                Employee Directory
            </h1>
            <h3>Click on Email to sort by order or use the Search Box to narrow your results. </h3>
        </div>
    );
};

export default TitleDiv;