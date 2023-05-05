import React from "react";
import Widget from "./Widget";

export default function TvWidget(props) {
    return (
        <Widget title="Телепрограмма" link="#">
            <button className="buttonTv">Эфир</button>
            <ul>
                {props.tv.map((item) => 
                    <li>
                        <span className="time">{item.time} </span>
                        <span className="programm">{item.programm} </span>
                        <span className="channel">{item.channel} </span>
                    </li>
                )}
            </ul>
        </Widget>
    )
}