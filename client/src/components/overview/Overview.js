import React, { useEffect, useState, useRef } from "react";
import './Overview.css';

const Overview = (props) => {
    return (
        <div className="overview-container">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p><a className="ytalink-overview" href={props.link} target="_blank">{props.linktotext}</a></p>
        </div>
    )
}

export default Overview