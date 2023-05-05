import React from "react";
import Widget from "./Widget";

export default function PopularWidget(props) {
    return (
        <Widget title="Посещаемое" link="#">
            <ul>
                {props.popular.map((item) => 
                    <li>
                        <a href={item.link}>
                            <span className="popularTheme">{item.theme}</span>
                            <span className="popularText"> - {item.text}</span>
                        </a>
                    </li>
                )}
            </ul>
        </Widget>
    )
}