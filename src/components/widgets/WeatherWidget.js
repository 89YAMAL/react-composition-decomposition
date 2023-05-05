import React from "react";
import Widget from "./Widget";

export default function WeatherWidget(props) {
    return (
        <Widget title="Погода" link="#">
            <div className="weather">
                <img src={props.icon} />
                <span className="weatherMain">
                    <a href={props.mainLink}>{props.mainTemp}</a>
                </span>
                <div className="weatherSidebar">
                    <a href={props.upLink}>{props.upName}{props.upTemp}</a>
                    <a href={props.downLink}>{props.downName}{props.downTemp}</a>
                </div>
            </div>
        </Widget>
    )
}