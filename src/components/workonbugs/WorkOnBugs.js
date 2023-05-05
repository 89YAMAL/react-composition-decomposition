import React from "react";

export default function WorkOnBugs(props) {
    return (
        <div className="workOnBugs">
            <a href={props.link}>
                <img className="workOnBugs_Image" src={props.image} />
            </a>
            <h5>
                <a href={props.link}>{props.title}</a>
            </h5>
            <p>{props.text}</p>
        </div>
    )
}