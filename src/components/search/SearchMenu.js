import React from "react";

export default function SearchMenu(props) {
    return (
        <ul className="searchMenu">
            {props.searchMenuItems.map((item) => 
            <li><a href={item.link}>{item.name}</a></li>
            )}
            <li><a href='#'>еще</a></li>
        </ul>
    )
}