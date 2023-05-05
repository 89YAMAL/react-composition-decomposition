import React from "react";
import Date from "./Date";
import FilterNews from "./FilterNews";
import ListNews from "./ListNews";


export default function News(props) {
    return (
        <div className="news">
            <div className="navigate">
                <FilterNews selected={"Сейчас в СМИ"} onSelect={function onSelect() {}} />
                <Date />
            </div>
            <div>
                <ListNews news={props.news} />
            </div>
        </div>
    )
}