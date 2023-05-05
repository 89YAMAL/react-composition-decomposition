import React from "react";

export default function Widget(props) {
    return (
        <div className="widget">
            <h5 className="widgetTitle">
                <a href={props.link}>{props.title}</a>
            </h5>
            {props.children}
        </div>
    )
}