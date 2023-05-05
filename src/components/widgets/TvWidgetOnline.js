import React from "react";
import Widget from "./Widget";

export default function TvWidget(props) {
    return (
        <Widget title="Эфир" link="#">
            <ul>
                {props.tvOnline.map((item) => 
                    <li>
                        <img className="tvIcon" src={item.icon} />
                        <span className="programm">{item.programm} </span>
                        <span className="channel">{item.channel} </span>
                    </li>
                )}
            </ul>
        </Widget>
    )
}